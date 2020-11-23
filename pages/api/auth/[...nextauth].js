import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import bcrypt from 'bcrypt'
import { fauna, q } from '../../../src/faunadb'

const options = {
  pages: {
    signIn: '/login',
    signOut: '/register',
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      authorize: async (credentials) => {
        let user = await fauna.query(
          q.Get(
            q.Match(
              q.Index('users_by_email'),
              credentials.email
            )
          )
        )
        
        if (await bcrypt.compare(credentials.password, user.data.password)) {
          return user
        }
        return null
      },
    }),
  ],

  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      if (!user) {
        return token;
      }
      const { password, __v, ...tokenUser } = user;
      return Promise.resolve(tokenUser);
    },
    session: async (session, user, sessionToken) => {
      session.user = user;
      return Promise.resolve(session);
    },
  }
};

export default (req, res) => NextAuth(req, res, options);
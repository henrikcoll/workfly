import Head from 'next/head'
import Link from 'next/link'
import { csrfToken } from 'next-auth/client'

export default function Login({ csrfToken }) {
  return (
    <div className="">
      <Head>
        <title>Task Manager - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="max-w-md w-full space-y-8">
          <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-gray-700" method="post" action="/api/auth/callback/credentials">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300" for="email">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-700 dark:text-gray-300" id="email" name="email" type="emails" placeholder="Email" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300" for="password">
                  Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-700 dark:text-gray-300" id="password" name="password" type="password" placeholder="**" />
              </div>
              <div className="flex items-center justify-between">
                <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Sign in"></input>
                <Link href="/register">
                  <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 dark:hover:text-blue-600" href="#">
                    Register
                  </a>
                </Link>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2020 Workfly. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context),
  }
}
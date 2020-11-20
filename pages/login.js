import { csrfToken } from 'next-auth/client';
import Head from 'next/head';

export default function Login({ csrfToken }) {
  return (
    <div className="">
      <Head>
        <title>Task Manager - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div class="max-w-md w-full space-y-8">
          <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-gray-700" method="post" action="/api/auth/callback/credentials">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                  Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-700" id="email" name="email" type="emails" placeholder="Email" />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-700" id="password" name="password" type="password" placeholder="**" />
              </div>
              <div class="flex items-center justify-between">
                <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Sign in"></input>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
              &copy;2020 Workfly. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context),
  };
};
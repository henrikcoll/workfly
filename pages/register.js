import Head from 'next/head'
import Link from 'next/Link'
import { useRef } from 'react'

export default function Register() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()

  const doRegister = async () => {
    const method = 'POST'

    const headers = {
      'Content-Type': 'application/json; charset=UTF-8'
    }

    const body = JSON.stringify({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value
    })

    const response = await fetch('/api/auth/register', { method, headers, body })
    console.log(response.json())
  }

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
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300" for="name">
                  Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-700 dark:text-gray-300" id="name" name="name" type="name" placeholder="Name" ref={nameRef} />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300" for="email">
                  Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-700 dark:text-gray-300" id="email" name="email" type="email" placeholder="Email" ref={emailRef} />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300" for="password">
                  Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-700 dark:text-gray-300" id="password" name="password" type="password" placeholder="**" ref={passRef} />
              </div>
              <div class="flex items-center justify-between">
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={doRegister}>Sign up</button>
                <Link href="/login">
                  <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 dark:hover:text-blue-600" href="#">
                    Login
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
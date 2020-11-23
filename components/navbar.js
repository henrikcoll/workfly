import Link from 'next/link'

export default function Navbar({ session }) {
    return (
        <>
            {(session && session.user) && (
                <div class="mx-auto px-5 bg-gray-100 dark:bg-gray-700">
                    <nav class="flex justify-between">
                        <ul class="flex flex-row">
                            <li class="p-5 hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-100">
                                <Link href="{(session && session.user)?'/home':'/'}">
                                    <a>WorkFly</a>
                                </Link>
                            </li>
                            <li class="p-5 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-100">
                                <Link href="/home"><a>Home</a></Link>
                            </li>
                            <li class="p-5 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-100">
                                <Link href="/tasks"><a>Tasks</a></Link>
                            </li>
                        </ul>
                        <ul class="flex flex-row">
                        </ul>
                    </nav>
                </div>
            )}
            {!(session && session.user) && (
                <div class="mx-auto px-5 bg-gray-100 dark:bg-gray-700">
                    <nav class="flex justify-between">
                        <div class="p-5 hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-100">
                            <Link href="{(session && session.user)?'/home':'/'}">
                                <a>WorkFly</a>
                            </Link>
                        </div>
                        <ul class="flex flex-row">
                            <Link href="/login">
                                <li class="p-5 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-100">
                                    <a>Login</a>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    )
}
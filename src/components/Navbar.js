import Link from "next/link";

export default function Navbar() {
    return (
        <header className='flex flex-col text-white bg-gray-500'>
            <nav className='container flex w-full gap-5 px-5 py-10 mx-auto'>
                <a
                    href='/'
                >
                    Home
                </a>
                <Link
                    href="/blog/create"
                >
                    Add New Blog
                </Link>
                <Link
                    href="/blog"
                >
                    All Blog
                </Link>
            </nav>
        </header>
    )
}
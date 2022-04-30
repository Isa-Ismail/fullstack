import Head from "next/head"
import Link from 'next/link'

const Layout = ({ children, title, description }) => {
    return(
        <div className="">
            <Head>
                <title>{title? `${title}`:`custom title`}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            
            {/* this is the appbar */}
            <nav className="flex space-x-10 px-16 py-4">
                <Link href="/">
                    <button>
                        <h1>logo</h1>
                    </button>
                </Link>
                <div className="flex-grow"></div>
                <Link href="/">
                    <button>
                        <h2>logo</h2>
                    </button>
                </Link>
                <Link href="/signup">
                    <button>
                        <h2>Sign Up</h2>
                    </button>
                </Link>
                <Link href="/signin">
                    <button>
                        <h2>Sign in</h2>
                    </button>
                </Link>
            </nav>
            {/* this is the appbar */}

            {/* this is the container */}
            <div>
                {children}
            </div>
            {/* this is the container */}

            {/* this is the footer */}
            <footer className="flex justify-center items-center">
                <p>Isa Ismail {new Date().getFullYear().toString()}</p>
            </footer>
            {/* this is the footer */}
        </div>
    )
}

export default Layout
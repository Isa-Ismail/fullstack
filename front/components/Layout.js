import Head from "next/head"

const Layout = ({ children, title, description }) => {
    return(
        <div className="">
            <Head>
                <title>{title? `${title}`:`custom title`}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            
            {/* this is the appbar */}
            <nav className="flex space-x-10 px-16 py-4">
                <div>
                    <h1>logo</h1>
                </div>
                <div className="flex-grow"></div>
                <div>
                    <h2>link</h2>
                </div>
                <div>
                    <h2>link</h2>
                </div>
                <div>
                    <h2>link</h2>
                </div>
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
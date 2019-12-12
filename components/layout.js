import Head from 'next/head';
import NavBar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Next JS Sampla App</title>
            <link
                rel="stylesheet"
                href="https://bootswatch.com/4/darkly/bootstrap.min.css"
            />
        </Head>
        <NavBar />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;
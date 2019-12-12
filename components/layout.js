import Head from 'next/head';
import NavBar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Next JS Sampla App</title>
        </Head>
        <NavBar />
        {props.children}
    </div>
);

export default Layout;
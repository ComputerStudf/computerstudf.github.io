import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
import "../styles/app.scss";

library.add(fab);

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="description" content="Computer Studf" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

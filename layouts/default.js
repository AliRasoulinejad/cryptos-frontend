import React from "react";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Nav from "../components/nav/nav";
import {Footer} from "../components/footer/footer";
// bootstrap css
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

export function DefaultLayout({children}) {
    return (
        <>
            <Head>
                <title>Cryptos</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
            </Head>

            <main>
                <noscript>
                    <iframe src={"https://www.googletagmanager.com/ns.html?id={{ GOOGLE_TAG_MANAGER_KEY }}"}
                            height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe>
                </noscript>

                <div className="page-style">
                    <Nav />
                    <div className="content-style" style={{height: "auto !important"}}>
                        <div className="container" style={{height: "auto !important"}}>
                            {children}
                        </div>
                    </div>
                    <Footer/>
                </div>

                <script src="/assets/js/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
                        integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
                        crossOrigin="anonymous"></script>
                <script src="/assets/js/bootstrap.min.js"></script>
                <script src="/assets/js/ie10-viewport-bug-workaround.js"></script>
                <script src="/assets/js/mediumish.js"></script>
            </main>
        </>
    )
}

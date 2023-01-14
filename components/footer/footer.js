import React, {useEffect, useState} from "react";
import Image from 'next/image';
import Link from "next/link";

// bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";

export function Footer() {
    return (
        <div className="container">
            <div className="footer">
                <div className="icon-footer d-flex justify-content-around">
                    <div>
                        <div className="d-flex align-items-center">
                            <Image src="/assets/img/favicon.ico" alt="logo" width="48" height="48"/>
                            <h3 className="name-brand">CRYPTOS</h3>
                        </div>

                        <div className="pull-left">
                            <Image src="/assets/img/icons-email.png" width="50" height="50" alt="icon-email" />
                            <Link href="mailto:info@cryptos.blue">info@cryptos.blue</Link>
                        </div>
                    </div>

                    <div className="title-section">
                        <h4 className="title-footer">Links</h4>
                        <hr/>
                        {topCategories.map(category => (
                            <li className="nav-item">{category.title}
                                {/*<Link className="nav-link" href={category.slug}>{category.title}</Link>*/}
                            </li>
                        ))}
                    </div>

                    <div className="category-footer">
                        <p className="pull-right">
                            <Link href="/about">About Cryptos</Link>
                        </p>
                    </div>

                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
    console.log(params)
    if (query.text) {
        return { redirect: { destination: '/post', permanent: false, },}
    }

    const response = await axios.get('http://localhost:8080/api/v1/categories/top?count=6');
    const topCategories = await response.data;
    if (!data) {
        return {notFound: true,}
    }

    return { props: { topCategories } }
}
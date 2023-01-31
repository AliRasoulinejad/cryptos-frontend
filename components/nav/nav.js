import React, {useEffect, useState} from "react";
import Link from "next/link";
import Logo from "../logo/logo";
import axios from "axios";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";

export default function Nav() {
    const [topCategories, setTopCategories] = useState([])
    const fetchTopCategories = async () => {
        const response = await axios.get("https://api.cryptos.blue/api/v1/categories/top?count=3")
        const data = await response.data
        setTopCategories(data)
    }

    useEffect(() => {
        fetchTopCategories().then();
    }, []);

    return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
                <button className="icons-login-logout-responsive">
                    <Link href="/accounts/login" className="btn btn-info">Sign In / Sign Up</Link>
                </button>

                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="container">
                    <Logo />
                    <div className="collapse navbar-collapse" id={"navbarsExampleDefault"}>
                        <ul className="navbar-nav ml-auto">
                            {topCategories.map(category => (
                                <li className="nav-item" id={`category-${category.slug}`}>
                                    <Link className="nav-link" href={`${category.slug}`}>{category.title}</Link>
                                </li>
                            ))}
                        </ul>

                        <div className="icons-login-logout">
                            <Link href="accounts/logout" className="btn btn-danger">Sign Out</Link>
                        </div>
                    </div>
                </div>
            </nav>
    )
}
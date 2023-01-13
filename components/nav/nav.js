import React, {useEffect, useState} from "react";
import Link from "next/link";
import Logo from "../logo/logo";
import axios from "axios";

export default function Nav() {
    const [topCategories, setTopCategories] = useState([])
    const fetchTopCategories = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/categories/top?count=3")
        const data = await response.data
        setTopCategories(data)
        console.log(data)
    }

    useEffect(() => {
        fetchTopCategories().then();
    }, []);

    return (
        <div>
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
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            {topCategories.map(category => (
                                <li className="nav-item">
                                    <Link className="nav-link" href="/categories/{category.slug}">{category.title}</Link>
                                </li>
                            ))}
                        </ul>

                        <div className="icons-login-logout">
                            <Link href="accounts/logout" className="btn btn-danger">Sign Out</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
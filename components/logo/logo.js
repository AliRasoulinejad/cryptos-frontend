import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link className="navbar-brand" href="/">
            <Image src="/assets/img/logo.png" width={30} height={30} alt="logo" />
        </Link>
)}

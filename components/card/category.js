import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../logo/logo";

export function CategoryCard(category) {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
            <div className="card">
                <Link href={category.url}>
                    <Image className="img-fluid" src={category.image} alt={category.title}/>
                </Link>
                <div className="card-block">
                    <h2 className="card-title">
                        <Link href={category.url}>{category.title}</Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}
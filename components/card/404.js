import React from "react";
import Image from "next/image";
import Link from "next/link";

export function FourOhFourCategoryCard({category}) {
    return (
        <div className="card">
            <Link href={`${category.slug}`}>
                <Image className="img-fluid" src={`https://cryptos.blue/media/${category.image}`} alt={`${category.title}`} width={100} height={100} />
            </Link>
            <div className="card-block">
                <h2 className="card-title">
                    <Link href={`${category.slug}`}>{`${category.title}`}</Link>
                </h2>
            </div>
        </div>
    )
}
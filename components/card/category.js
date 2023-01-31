import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../logo/logo";

export function IndexCategoryCard({category}) {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
            <div className="card">
                <Link href={`${category.slug}`}>
                    <Image className="img-fluid" src={`https://cryptos.blue/media/${category.image}`} alt={category.title} width="158" height="158"/>
                </Link>
                <div className="card-block">
                    <h2 className="card-title">
                        <Link href={`${category.slug}`}>{category.title}</Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export function CategoryListCard(category) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 category-card">
            <div className="content">
                <Link href={`${category.slug}`}>
                    <Image className="img-fluid img-fluid-custom thumbnail" src={category.image.url} />
                </Link>
                <h2 className="card-title card-title-custom"><a
                    href={category.url}>{category.title}</a></h2>
                <div className="clear"></div>
            </div>
        </div>
    )
}
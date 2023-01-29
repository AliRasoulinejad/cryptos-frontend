import axios from "axios";
import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {CategoryPostsCard, RecommendedPostCard} from "../components/card/post";
import {Comment} from "../components/card/comment";
import Pagination from "../components/pagination/pagination";


export default function Category({category, posts}) {
    return (
        <>
            <div style={{direction: "rtl"}}>
                {category.description}
            </div>

            {/*Begin Category Posts*/}
            <div className="graybg authorpage">
                <div className="container">
                    <div className="listrecent listrelated">
                        <div className="row">
                            {posts.map(post => (
                                <CategoryPostsCard post={post}/>
                            ))}
                        </div>
                    </div>
                    <Pagination pageNumber={1} />
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const {categorySlug} = context.params

    const categoryResponse = await axios.get(`https://api.cryptos.blue/api/v1/categories/${categorySlug}`)
    const category = await categoryResponse.data

    const postsResponse = await axios.get(`https://api.cryptos.blue/api/v1/blogs/?categorySlug=${categorySlug}`)
    const posts = await postsResponse.data

    if (categoryResponse.status !== 200) {
        return {notFound: true,}
    }

    return { props: { category: category, posts: posts } }
}
import axios from "axios";
import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {CategoryPostsCard, RecommendedPostCard} from "../../components/card/post";
import {Comment} from "../../components/card/comment";
import Pagination from "../../components/pagination/pagination";


export default function Post() {
    const [category, setCategory] = useState(null)
    const [posts, setPosts] = useState([])
    const fetchCategory = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/categories/{slug}`)
        const data = await response.data
        setCategory(data)
    }

    const fetchPosts = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/blogs/?categorySlug={slug}`)
        const data = await response.data
        setPosts(data)
    }

    useEffect(() => {
        fetchCategory().then();
        fetchPosts().then();
    }, []);

    return (
        <>
            <div style={{direction: "rtl"}}>
                {category.description | safe}
            </div>

            // Begin Category Posts
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
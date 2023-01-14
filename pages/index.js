import {DefaultLayout} from "../layouts/default";
import {useEffect, useState} from "react";
import {IndexPostCard} from "../components/card/post";
import Link from "next/link";
import {IndexCategoryCard} from "../components/card/category";
import axios from "axios";

export default function Home() {
    const [featuredPosts, setFeaturedPosts] = useState([])
    const [recentPosts, setRecentPosts] = useState([])
    const [topCategories, setTopCategories] = useState([])
    const fetchFeaturedPosts = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/blogs/popular?count=6")
        const data = await response.data
        setFeaturedPosts(data)
    }
    const fetchRecentPosts = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/blogs/recent?count=6")
        const data = await response.data
        setRecentPosts(data)
    }
    const fetchTopCategories = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/categories/top?count=6")
        const data = await response.data
        setTopCategories(data)
    }

    useEffect(() => {
        fetchFeaturedPosts().then();
        fetchRecentPosts().then();
        fetchTopCategories().then();
    }, []);

    
  return (
    <>
      <DefaultLayout>
        {/*Begin Featured*/}
        <section className="featured-posts">
          <div className="section-title">
            <h2><span>Popular Posts</span></h2>
          </div>

          <div className="listrecent">
            <div className="row">
                {featuredPosts.map(post => (
                    <IndexPostCard post={post}/>
                ))}
            </div>
          </div>
        </section>
        {/*End Featured*/}

        {/*Begin List Posts*/}
        <section className="recent-posts">
          <div className="section-title">
            <h2><span>Last Posts</span></h2>
          </div>
          <div className="listrecent">
            <div className="row">
                <div className="row">
                    {recentPosts.map(post => (
                        <IndexPostCard post={post}/>
                    ))}
                </div>
            </div>
          </div>
          <Link className="mt-5 d-block" href="/posts">All Posts `&gt;&gt;`</Link>
        </section>
        {/*End List Posts*/}

        {/*Begin List Categories*/}
        <section className="recent-posts">
          <div className="section-title">
            <h2><span>categories</span></h2>
          </div>
          <div className=" listrecent">
            <div className="row some-category-list">
                {topCategories.map(category => (
                    <IndexCategoryCard category={category}/>
                ))}
            </div>
          </div>
            <Link className="mt-3 d-block" href="/categories">All Categories `&gt;&gt;`</Link>
        </section>
        {/*End List Categories*/}
      </DefaultLayout>
    </>
  )
}

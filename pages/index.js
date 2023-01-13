import { Inter } from '@next/font/google'
import {DefaultLayout} from "../layouts/default";
import {useEffect, useState} from "react";
import {PostCard} from "../components/card/post";
import Link from "next/link";
import {CategoryCard} from "../components/card/category";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [featuredPosts, setFeaturedPosts] = useState([])
    const [recentPosts, setRecentPosts] = useState([])
    const [topCategories, setTopCategories] = useState([])
    const fetchFeaturedPosts = async () => {
        const response = await axios.get("localhost:8080/api/v1/FeaturedPosts")
        const data = await response.json()
        setFeaturedPosts(data)
    }
    const fetchRecentPosts = async () => {
        const response = await axios.get("localhost:8080/api/v1/RecentPosts")
        const data = await response.json()
        setRecentPosts(data)
    }
    const fetchTopCategories = async () => {
        const response = await axios.get("localhost:8080/api/v1/TopCategories")
        const data = await response.json()
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
        // Begin Featured
        <section class="featured-posts">
          <div class="section-title">
            <h2><span>Popular Posts</span></h2>
          </div>

          <div class="listrecent">
            <div class="row">
                {featuredPosts.map(post => (
                    <PostCard blog={post}/>
                ))}
            </div>
          </div>
        </section>
        // End Featured

        // Begin List Posts
        <section class="recent-posts">
          <div class="section-title">
            <h2><span>Last Posts</span></h2>
          </div>
          <div class="listrecent">
            <div class="row">
                <div className="row">
                    {recentPosts.map(post => (
                        <PostCard blog={post}/>
                    ))}
                </div>
            </div>
          </div>
          <Link class="mt-5 d-block" href="/posts">All Posts `&gt;&gt;`</Link>
        </section>
        // End List Posts

        // Begin List Categories
        <section class="recent-posts">
          <div class="section-title">
            <h2><span>categories</span></h2>
          </div>
          <div class=" listrecent">
            <div class="row some-category-list">
                {topCategories.map(category => (
                    <CategoryCard category={category}/>
                ))}
            </div>
          </div>
            <Link class="mt-3 d-block" href="/categories">All Categories `&gt;&gt;`</Link>
        </section>
        // End List Categories
      </DefaultLayout>
    </>
  )
}

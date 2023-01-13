import {DefaultLayout} from "../layouts/default";
import {FourOhFourCategoryCard} from "../components/card/404";
import Link from "next/link";
import {useEffect, useState} from "react";


export default function FourOhFour() {
  const [topCategories, setTopCategories] = useState([])
  const fetchTopCategories = async () => {
    const response = await axios.get("localhost:8080/api/v1/categories/top?count=8")
    const data = await response.json()
    setTopCategories(data)
  }

  useEffect(() => {
    fetchTopCategories().then();
  }, []);

  return (
    <>
      <DefaultLayout>
        <h3 style={{textAlign: "center"}}>Page not found</h3>

        // List Categories
        <section className="recent-posts">
          <div className="section-title">
            <h2><span>Categories</span></h2>
          </div>
          <div className="card-category-columns listrecent">
            {topCategories.map(category => (
                <FourOhFourCategoryCard category={category} />
            ))}
          </div>
          <p>
            <Link href="/categories">All Categories `&gt;&gt;`</Link>
          </p>
        </section>
      </DefaultLayout>
    </>
  )
}

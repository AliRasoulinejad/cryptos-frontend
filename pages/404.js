import {DefaultLayout} from "../layouts/default";
import {FourOhFourCategoryCard} from "../components/card/404";
import Link from "next/link";
import {useEffect, useState} from "react";


export default function FourOhFour() {
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

export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
  console.log(params)
  if (query.text) {
    return { redirect: { destination: '/post', permanent: false, },}
  }

  const data = await fetch('http://localhost:8080/api/v1/categories/top?count=8');
  const topCategories = await data.json();
  if (!data) {
    return {notFound: true,}
  }

  return { props: { topCategories } }
}

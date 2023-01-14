import {DefaultLayout} from "../layouts/default";
import Link from "next/link";

// bootstrap css
import 'bootstrap/dist/css/bootstrap.css'

export default function About() {
  return (
    <>
      <DefaultLayout>
        <section className="featured-posts">
          <div className="section-title" style={{alignContent: "center"}}>
            <h2><span>About us</span></h2>
          </div>
          <div className="listfeaturedtag" style={{fontSize: "x-large", textAlign: "justify"}}>
            <p>cryptos.blue is built upon a smart search engine. It is monitoring the data across the web and collect
              meaningful public social media threads about cryptocurrencies. It is supporting different <Link
                  href="https://cryptos.blue/categories">currencies</Link> at the moment. </p>
            <p>The link to original content is provided at the bottom of each post, and the Author data is crawled
              automatically from social media.</p>
            <p> The titles of the posts are created by a deep learning model and
              the whole process is fully automatic at the moment.</p>
            <p>If you have any questions, contact us within <Link href="https://twitter.com/cryptosblue">cryptosblue</Link>.</p>
            <p>cryptos.blue is collecting public social media posts, but if you don't want to publish your contents by
              us, please contact us via <Link href="mailto:info@cryptos.blue">info@cryptos.blue</Link>.</p>
          </div>
        </section>
      </DefaultLayout>
    </>
  )
}

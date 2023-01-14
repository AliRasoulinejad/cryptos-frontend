import {DefaultLayout} from "../../layouts/default";
import Pagination from "../../components/pagination/pagination";
import axios from "axios";
import {useEffect, useState} from "react";
import {PostsListCard} from "../../components/card/post";
import {useRouter} from "next/router";


export default function Posts() {
    const router = useRouter()
    const qq = router.query
    console.log("qqqqqqqqqqqqqqqq")
    console.log(qq)

    const [allPosts, setPosts] = useState([])
    const fetchPosts = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/blogs?page={page}`)
        const data = await response.data
        setPosts(data)
    }
    useEffect(() => {
        fetchPosts().then();
    }, []);

    return (
      <>
          <DefaultLayout>
              <div className="graybg authorpage">
                  <div className="container">
                      <div className="listrecent listrelated">
                          <div className="row">
                              {allPosts.map(post => (
                                  <PostsListCard post={post} />
                              ))}
                          </div>
                      </div>
                      <Pagination pageNumber={1} />
                  </div>
              </div>
          </DefaultLayout>
      </>
  )
}

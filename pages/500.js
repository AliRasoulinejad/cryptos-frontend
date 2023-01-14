import {DefaultLayout} from "../layouts/default";
import {FourOhFourCategoryCard} from "../components/card/404";
import Link from "next/link";
import {useEffect, useState} from "react";


export default function FourOhFour() {
  const [topCategories, setTopCategories] = useState([])
  const fetchTopCategories = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/categories/top?count=8")
    const data = await response.json()
    setTopCategories(data)
  }

  useEffect(() => {
    fetchTopCategories().then();
  }, []);

  return (
    <>
      <DefaultLayout>
        <h3 style={{textAlign: "center"}}>Oh, we have a problem</h3>
        <h4 style={{textAlign: "center"}}>we are looking for and fixing it</h4>
      </DefaultLayout>
    </>
  )
}

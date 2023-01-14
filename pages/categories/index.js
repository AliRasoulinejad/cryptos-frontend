import {CategoryListCard} from "../../components/card/category";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Categories() {
    const [categories, setCategories] = useState([])
    const fetchCategories = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/categories/`)
        const data = await response.data
        setCategories(data)
    }

    useEffect(() => {
        fetchCategories().then();
    }, []);

    return (
        <>
            <section className="featured-posts">
                <div className="section-title">
                    <h2><span>Categories</span></h2>
                </div>
                <div className="listfeaturedtag">
                <div className="row">
                    {categories.map(category => (
                        <CategoryListCard category={category} />
                    ))}
                </div>
            </div>
            </section>
        </>
  )
}

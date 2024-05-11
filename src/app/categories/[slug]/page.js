import Categories from "@/components/Blog/Categories";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";

const CategoryPage = ({params}) => {
    const allCategories = ["all"];
    const blog = allBlogs.filter((blog) => {
        return blog.tags.some((tag) => {
            const slugified = slug(tag);
            if (!allCategories.includes(slugified)){
                allCategories.push(slugified);
            }
            if (params.slug === "all"){
                return true;
            }
            return slugified === params.slug
        })
    })
    console.log("!@#", allCategories)
    return (
        <article>
            <div>
                <h1>
                    #{params.slug}
                </h1>
                <span>Discover more categories and expand your knowledge!</span>
            </div>
            <Categories categories={allCategories} currentSlug={params.slug}/>
        </article>
    )
}

export default CategoryPage;
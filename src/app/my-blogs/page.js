import FeaturePosts from "@/components/Blogs/FeaturePosts";
import HomeCoverSection from "@/components/Blogs/HomeCoverSection";
import MyPosts from "@/components/Blogs/RecentPosts";
import { allBlogs } from "contentlayer/generated";

const BlogPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      {/* <HomeCoverSection blogs={allBlogs} /> */}
      {/* <FeaturePosts blogs={allBlogs} /> */}
      <MyPosts blogs={allBlogs} />
    </div>
  )
}
export default BlogPage;
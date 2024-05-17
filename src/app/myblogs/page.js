import FeaturePosts from "@/components/Blogs/FeaturePosts";
import HomeCoverSection from "@/components/Blogs/HomeCoverSection";
import RecentPosts from "@/components/Blogs/RecentPosts";
import {allBlogs} from "contentlayer/generated";

const BlogPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HomeCoverSection blogs={allBlogs}/>
      <FeaturePosts blogs={allBlogs}/>
      <RecentPosts blogs={allBlogs}/>
    </div>
  )
}
export default BlogPage;
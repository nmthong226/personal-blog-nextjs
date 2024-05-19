import FeaturePosts from "@/components/Blogs/FeaturePosts";
import HomeCoverSection from "@/components/Blogs/HomeCoverSection";
import RecentPosts from "@/components/Blogs/RecentPosts";
import Transition from "@/components/Elements/Transition";
import { allBlogs } from "contentlayer/generated";

const BlogPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Transition />
      <HomeCoverSection blogs={allBlogs} />
      <FeaturePosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </div>
  )
}
export default BlogPage;
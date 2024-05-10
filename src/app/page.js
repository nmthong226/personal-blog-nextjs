import FeaturePosts from "@/components/Home/FeaturePosts";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import RecentPosts from "@/components/Home/RecentPosts";
import {allBlogs} from "contentlayer/generated";
export default function Home() {
  //console.log(allBlogs);
  return (
    <main className="flex flex-col justify-center items-center">
      <HomeCoverSection blogs={allBlogs}/>
      <FeaturePosts blogs={allBlogs}/>
      <RecentPosts blogs={allBlogs}/>
    </main>
  )
}
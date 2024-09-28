import { sortBlogs } from '@/utils'
import React from 'react'
import Blog from '../Blog/BlogLayoutThree';

const MyPosts = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    return (
        <section className='w-full mt-4 sm:mt-6 md:mt-8 md:px-8 sxl:px-10 flex flex-col items-center justify-center'>
            <div className='flex w-full justify-between'>
                <h2 className='w-fit inline-block font-bold capitalize text-2xl md:text-4xl dark:text-light'>
                    📝 Blogs:
                </h2>
                {/* <Link href="/categories/all" className='inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg'>View all</Link> */}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-8 mt-8'>
                {
                    sortedBlogs.slice(4, 10).map((blog, index) => {
                        return <article key={index} className='col-span-1 row-span-1 relative'><Blog blog={blog} /></article>
                    })
                }
            </div>
        </section>
    )
}

export default MyPosts
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = ({ blog }) => {
    return (
        <div className='group flex flex-col items-center text-dark dark:text-light border-2 rounded-2xl bg-white shadow-lg'>
            <Link href={blog.url} className='h-full rounded-t-2xl overflow-hidden'>
                <Image src={blog.image.filePath.replace("../public", "")}
                    placeholder='blur'
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    className='aspect-[4/3] w-full h-full object-center object-cover rounded-t-2xl group-hover:scale-105 transition-all
                    ease duration-300'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                />
            </Link>
            <div className='flex flex-col w-full mt-1 p-4'>
                <span className='uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm'>{blog.tags[0]}</span>
                <Link href={blog.url} className='inline-block my-1'>
                    <h2 className='font-semibold capitalize text-sm sm:text-base line-clamp-2'>
                        <span className='bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px]
                                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                            {blog.title}
                        </span>
                    </h2>
                </Link>
                <span className='capitalize text-dark/50 dark:text-light/50 font-semibold text-sm sm:text-base '>
                    {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </span>
            </div>
        </div>
    )
}

export default Blog
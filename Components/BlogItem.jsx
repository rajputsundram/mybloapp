'use client'
import React from 'react'
import Image from "next/image"
import Link  from 'next/link'
import { assets, blog_data } from '@/Assets/assets'
const BlogItem = ({category,title,description,image,id}) => {
  return (
    <div className='max-w-[330px]  sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Link className=""   href={`/blogs/${id}`}>
        <Image src={image} alt='' layout='fixed' width={400} height={400} className='bord'/>
        </Link>
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm '>{category}</p>
        <div className="p-5">
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700 '
            
            dangerouslySetInnerHTML={{__html:description.slice(0,120)}}>
              
            </p>
            <div className='inline-flex items-center py-2 font-semibold text-center'>
            <Link className=""   href={`/blogs/${id}`}>
                Read more <Image src={assets.arrow} alt=''  width={12} className='ml-2'/>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default BlogItem

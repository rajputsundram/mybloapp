import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const BlogTableItem = ({authorImg,title,author,date, deleteBlog,mongoId}) => {
  const timestamp = Number(date);  // Ensure it's treated as a number
  const BlogDate = new Date(timestamp); 
  const displayDate = isNaN(BlogDate) ? 'Invalid Date' : BlogDate.toLocaleString();
  console.log("Received date:", date);


  return (
    <tr className='bg-white border-b '>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
<Image src={authorImg?authorImg:assets.profile_icon} width={40} height={40} alt=''/>
<p>{author?author:"No author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"no title"}
        </td>
        <td className='px-6 py-4'>

        {displayDate}
        </td>
        <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer' >
            {"X"}
        </td>

    </tr>
  )
}

export default BlogTableItem
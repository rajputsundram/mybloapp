import { ConnectDB } from "@/lib/config/db";
import {writeFile}  from 'fs/promises'
import BlogModel from "../../../lib/models/BlogModel";
import { title } from "process";
import fs from 'fs';
const { NextResponse } = require("next/server");
const LoadDB=async()=>{
    await ConnectDB()
}
LoadDB();

 
// API  Endpoint get all blogs
export async function GET(request){

const blogId=request.nextUrl.searchParams.get("id");
if(blogId){
    const blog=await BlogModel.findById(blogId);
    return NextResponse.json(blog)
}
else {
    const blogs=await BlogModel.find({});
    return NextResponse.json({blogs})
}


}


export async function POST(request) {
    const formData=await request.formData();
    const timestamp=Date.now();
    const image=formData.get('image');
    const imageByteData=await image.arrayBuffer();
    const buffer=Buffer.from(imageByteData);
    const path=`./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl=`/${timestamp}_${image.name}`;
    
    // console.log(imgUrl)
    const blogData={
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
         author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImg:`${formData.get('authorImg')}`,
        createdAt: new Date(),
       
    }

    await BlogModel.create(blogData);
    console.log("Blog saved")
    return NextResponse.json({success:true,msg:"Blog Added"})

   


}


// Creating  Api End point to delete Blog

export async function DELETE(request) {
    const id=await request.nextUrl.searchParams.get('id');
    console.log(id)
    const blog=await BlogModel.findById(id);
     fs.unlink(`./public${blog.image}`,(err)=>{
        if (err) {
            console.error('Error deleting file:', err);
        }
    })

        await BlogModel.findByIdAndDelete(id);
        return NextResponse.json({msg:"Blog Deleted"})
  

    
}


// export async function DELETE(request) {
//     try {
//         const id = request.nextUrl.searchParams.get('id');
//         if (!id) {
//             return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
//         }

//         const blog = await BlogModel.findById(id);
//         if (!blog) {
//             return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
//         }

//         if (blog.image) {
//             try {
//                 await fs.unlink(`./public${blog.image}`);
//             } catch (err) {
//                 console.error('Error deleting image file:', err);
//             }
//         }

//         await BlogModel.findByIdAndDelete(id);
//         return NextResponse.json({ msg: 'Blog Deleted' });
//     } catch (err) {
//         console.error('Error handling DELETE request:', err);
//         return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//     }
// }
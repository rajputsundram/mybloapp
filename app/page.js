'use client'
import Footer from "@/Components/Footer";
import BlogList from "@/Components/BlogList";
import Header from "@/Components/Header";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
 <>
 <ToastContainer theme="dark"/>
 <Header/>
 <BlogList/>
 <Footer/>
 
 </>
  );
}

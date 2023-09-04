"use client"
import styles from './page.module.css'
import Navbar from "./components/Navbar"
import AllBlogs from "./components/all_blogs"
import WriteBlogs from "./components/WriteBlog"
import { UseMyContext } from './context/MyContext';

export default function Home() {
  const { state } = UseMyContext();
  const {  all_blogs,write_blogs} =state
  return (

    <div className={`${styles.container} flex_center_col`}>
      <Navbar></Navbar>
      {all_blogs? <AllBlogs></AllBlogs>: null}
      {write_blogs? <WriteBlogs></WriteBlogs>: null}
      
      

      
    </div>
  )
}

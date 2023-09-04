"use client"
import styles from './page.module.css'
import Navbar from "./components/Navbar"
import AllBlogs from "./components/all_blogs"
import WriteBlogs from "./components/WriteBlog"
import { UseMyContext } from './context/MyContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.config'

export default function Home() {
  const { state } = UseMyContext();
  const {  all_blogs,write_blogs} =state
  const [user, loading, error] = useAuthState(auth);
  console.log(user,loading ,error)
  console.log( state.displayArray,state.toDisplayBlog);
  return (

    <div className={`${styles.container} flex_center_col`}>
      <Navbar></Navbar>
      {all_blogs? <AllBlogs></AllBlogs>: null}
      {write_blogs? <WriteBlogs></WriteBlogs>: null}
      
      

      
    </div>
  )
}

"use client"
import Link from 'next/link'
import styles from "../styles/signup.module.css"
import Button from '../components/Button'
import { UseMyContext } from '../context/MyContext'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const {getValueSignIn,SignIn}= UseMyContext();
  const router = useRouter()

  // const SignInRoute=async()=>{
  
  //   try {
  //     // await AuthComponent();
  //     router.push('/');
  //   } catch (error) {
  //     console.error(error);
  //     // Handle the error appropriately
  //   }
   
  // }
    return (
        <>
<div className={`${styles.container} flex_center_col`}>
        <div className={`${styles.pageHeading}`}>
          Lively Voices
        </div>
        <div className={`${styles.signupDiv} flex_around`}>
          <div className={`${styles.signupHeading}`}>SignIn</div>
          <div className={`${styles.form} flex_center_col`}>
         

            <div className={`${styles.email_Div} flex_center_col`}>
              <label className={`${styles.email_label}`} htmlFor=""> Enter your email</label>
              <input onChange={(e)=>getValueSignIn(e)} name='email'  type="text" className={`${styles.email_input}`} />
            </div>

            <div className={`${styles.password_Div} flex_center_col`}>
              <label className={`${styles.password_label}`} htmlFor=""> Enter your password</label>
              <input onChange={(e)=>getValueSignIn(e)} name='password'  type="text" className={`${styles.password_input}`} />
            </div>
          </div>

          <div className={`${styles.buttons} flex_center_col`}>
          <button onClick={SignIn} >Sign In</button>

            <p>Don't have an account? <Link href="signup"> Sign Up</Link></p>


          </div>
        </div>
      </div>


        </>
        )}

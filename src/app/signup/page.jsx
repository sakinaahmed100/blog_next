"use client"
import Link from 'next/link'
import styles from "../styles/signup.module.css"
import Button from '../components/Button'
import { UseMyContext } from '../context/MyContext'
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const { getValue, SignUp } = UseMyContext();
  const router = useRouter()


  return (
    <>

      <div className={`${styles.container} flex_center_col`}>
          <div className={`${styles.pageHeading} flex_center`}>
            Lively Voices
          </div>

        <div>
          <div className={`${styles.signupDiv} flex_center_col`}>
          <div className={`${styles.signupHeading}`}>SignUp</div>
            <div className={`${styles.form} flex_center_col`}>
              <div className={`${styles.full_name_Div} flex_center_col`}>
                <label className={`${styles.full_name_label}`} htmlFor=""> Enter your full name</label>
                <input onChange={(e) => getValue(e)} name='full_name' type="text" className={`${styles.full_name_input}`} />
              </div>

              <div className={`${styles.phone_Div} flex_center_col`}>
                <label className={`${styles.phone_label}`} htmlFor="">Enter your phone number </label>
                <input onChange={(e) => getValue(e)} name='phone' type="text" className={`${styles.phone_input}`} />
              </div>

              <div className={`${styles.email_Div} flex_center_col`}>
                <label className={`${styles.email_label}`} htmlFor=""> Enter your email</label>
                <input onChange={(e) => getValue(e)} name='email' type="text" className={`${styles.email_input}`} />
              </div>

              <div className={`${styles.password_Div} flex_center_col`}>
                <label className={`${styles.password_label}`} htmlFor=""> Enter your password</label>
                <input onChange={(e) => getValue(e)} name='password' type="text" className={`${styles.password_input}`} />
              </div>
            </div>
            <div className={`${styles.buttons} flex_center_col`}>
              <button className={`${styles.signUpBtn}`} onClick={SignUp} >Sign Up</button>
              <p>Already have an account? <Link href="signin"> Sign In</Link></p>


            </div>
          </div>
        
        </div>
      </div>
    </>
  )
}

import Button from "./Button"
import styles from "../styles/Navbar.module.css"
import { UseMyContext } from "../context/MyContext"

export default function Navbar() {
  const { Logout, All_Blogs, Write_Blogs, state } = UseMyContext();
  const { signin } = state
  return (
    <>
      <div className={`flex_center ${styles.navbar}`}>
        <div className={styles.headigDiv}>LivelyVoices</div>
        <div>
          <div className={` flex_center ${styles.btnDiv}`}>
            <span className={`${styles.logOut}`} onClick={All_Blogs}>All Blogs</span>
            <span className={`${styles.logOut}`} onClick={Write_Blogs}>Write Blog</span>
            {signin ?
              <span className={`${styles.logOut}`} onClick={Logout}>Log Out</span>
              :
              <Button link="signup" textBtn="SignUp"></Button>
            }
            {signin ?
              <Button link="profile" textBtn="Profile"></Button>
              : null}

          </div>

        </div>
      </div>

    </>
  )
}

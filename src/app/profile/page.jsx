"use client"
import { UseMyContext } from '../context/MyContext';
import styles from "../styles/profile.module.css"
import Button from "../components/Button"

export default function WriteBlogs() {
    const { state,Logout, getValue } = UseMyContext();
    const { displayArray, blog } = state
    console.log(state.snapshot.email);
    const profileInfo= state.snapshot
    return (
        <>
            <div className={`${styles.container} flex_center`}>
                <div className={`${styles.profile} flex_center_col`}>
                    <h1>Profile</h1>
                    <form action="">
                        <div className={`${styles.form} flex_center_col`}>

                            <div className={`${styles.inputDiv} flex_center_col`}>
                            <label htmlFor="">Name:</label>
                            <input value={profileInfo?.full_name} type="text" />
                            </div>

                            <div className={`${styles.inputDiv} flex_center_col`}>
                            <label htmlFor="">Phone:</label>
                            <input value={profileInfo?.phone} type="text" />
                            </div>

                            <div className={`${styles.inputDiv} flex_center_col`}>
                            <label  aria-readonly  htmlFor="">Email:</label>
                            <input className={styles.disable} value={profileInfo?.email}  type="text" />
                            </div>
                        </div>
                    </form>
<div className={`${styles.btnDiv} flex_center`}>
    <Button link='/' textBtn="Read Blogs"></Button>
    <button className={`${styles.logOut}`} onClick={Logout}>Log Out</button>

</div>

                </div>
            </div>
        </>
    )
}

"use client"
import { UseMyContext } from '../context/MyContext';
import styles from "../styles/profile.module.css"
import Button from "../components/Button"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.config';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WriteBlogs() {
    const router = useRouter()
    const { state, Logout, getValue } = UseMyContext();
    const { displayArray, blog } = state
    // console.log(state,"hi");
    const profileInfo = state.snapshot
    const [user, loading, error] = useAuthState(auth);
    console.log(user, loading, error)
    useEffect(() => {
        if (user == null && loading == false) {
            router.push("/")
        }
    }, [loading])
    return (
        <>
            <div className={`${styles.container} flex_center`}>
                <div className={`${styles.profile} flex_center_col`}>
                    <h1>Profile</h1>
                    <form action="">
                        <div className={`${styles.form} flex_center_col`}>

                            <div className={`${styles.inputDiv} flex_center_col`}>
                                <label htmlFor="">Name:</label>
                                <input placeholder={profileInfo?.full_name} type="text" />
                            </div>

                            <div className={`${styles.inputDiv} flex_center_col`}>
                                <label htmlFor="">Phone:</label>
                                <input placeholder={profileInfo?.phone} type="text" />
                            </div>

                            <div className={`${styles.inputDiv} flex_center_col`}>
                                <label aria-readonly htmlFor="">Email:</label>
                                <input className={styles.disable} placeholder={profileInfo?.email} type="text" />
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

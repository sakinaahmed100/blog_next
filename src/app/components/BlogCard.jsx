import Image from 'next/image';
import { UseMyContext } from '../context/MyContext'
import styles from "../styles/blogcard.module.css"

export default function BlogCard({ name, date, blogText,time }) {
    const { getValue, SignUp } = UseMyContext();
    return (<>

        <div className={`${styles.blogDiv}`}>
            <div className={`${styles.userDetails} flex_center`}>
                <Image className={`${styles.userImage}`} alt="profile pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" height={30} width={30}></Image>

                <div>
                    <div className={`${styles.userName}`}>{name}</div>
                   <div className={` flex_center`}>
                   <div className={`${styles.date}`}>{date}</div>.
                   <div className={`${styles.time}`}>{time}</div>
                    </div>
                </div>
            </div>
            <div className={`${styles.blogText}`}>
                {blogText}
            </div>
        </div>


    </>
    )
}
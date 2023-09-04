import { UseMyContext } from '../context/MyContext';
import BlogCard from "../components/BlogCard"
import styles from "../styles/all_blogs.module.css"

export default function AllBlogs() {
    const { state } = UseMyContext();
    const { displayArray} = state
    return (<>
    <div className={`${styles.heading} flex_center_col`}>All Blogs</div>
    <div className={`${styles.blogContainer} flex_center_col`}>
        {displayArray?.map((e, i) => {
          return (
            <div key={i}>
              <BlogCard name={e.data.name} date={e.data.date} time={e.data.time} blogText={e.data.content}></BlogCard>
            </div>
          )
        })}
      </div>
      </>
    )
}
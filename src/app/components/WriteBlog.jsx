import { UseMyContext } from '../context/MyContext';
import styles from "../styles/write_blog.module.css"

export default function WriteBlogs() {
    const { state, PostBlog, getValue } = UseMyContext();
    const { displayArray, blog, word_limit,signin } = state
    return(
        <>
        <div className={`${styles.blogInputDiv} flex_center_col`}>
        <div className={`${styles.blogInputDiv2} flex_center_col`}>
          <textarea className={`${styles.blogInput}`} onChange={(e) => getValue(e)} type="text" name='blog' value={state.blog} />
          <div className={`${styles.word_count}`}>{blog.length}/1500</div>
        </div>
        {word_limit ? (<div className={`${styles.less_words}`}>The blog should be atleast 150 words long</div>) : (<div></div>)}
        {signin ? (<div></div>) : (<div className={`${styles.less_words}`}>You need to be signed in to post your blog</div>)}
        <button className={`${styles.blogBtn}`} onClick={PostBlog}>Post</button>
      </div>
        </>
    )
}

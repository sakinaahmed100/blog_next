import Link from 'next/link'
import styles from "../styles/button.module.css"

export default function Button({link,textBtn}) {
    return (
  <>
  <Link href={link}><button className={styles.btn}>{textBtn}</button></Link>
  
  </>
    )
  }
  
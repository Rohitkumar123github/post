import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
    <div>@2023 Rohit all rights reserved</div>
    <div className={styles.social}>
      <Image src="/1.png" alt='Rohit FaceBook Account' height={"15"} width={"15"} className={styles.icon}/>
      <Image src="/2.png" alt='Rohit instagram account' height={"15"} width={"15"} className={styles.icon}/>
      <Image src="/3.png" alt='Rohit twitter account' height={"15"} width={"15"} className={styles.icon}/>
      <Image src="/4.png" alt='Rohit youtube account' height={"15"} width={"15"} className={styles.icon}/>
    </div>
    </div>
  )
}

export default Footer

// in nextjs we have <Image/> tag but we have to provide it width and height 
// <Image /> tag takes cares of lazy loading 
// we have to provide height and width to the <Image /> tag but we can also use 
// <div>
// <Image fill={true}/>
// </div>
// it will fill the nearest parent


//NextJs doesnot allow us to use external source in images 
//if we want to provide external source we have to add it to next.config.js first
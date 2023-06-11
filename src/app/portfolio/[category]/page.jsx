import React from 'react'
import styles from './page.module.css'
import Button from '../../../components/Button/Button'
import Image from 'next/image'
const Category = ({params}) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test1a</h1>
          <p>Desc</p>
          <Button url="#" text="See More"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          src="https://plus.unsplash.com/premium_photo-1679619557768-03c2ce276555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          fill={true}
          alt=""
          className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test2</h1>
          <p>Desc</p>
          <Button url="#" text="See More"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          src="https://plus.unsplash.com/premium_photo-1679619557768-03c2ce276555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          fill={true}
          alt=""
          className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Desc</p>
          <Button url="#" text="See More"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          src="https://plus.unsplash.com/premium_photo-1679619557768-03c2ce276555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          fill={true}
          alt=""
          className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Desc</p>
          <Button url="#" text="See More"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          src="https://plus.unsplash.com/premium_photo-1679619557768-03c2ce276555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          fill={true}
          alt=""
          className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default Category
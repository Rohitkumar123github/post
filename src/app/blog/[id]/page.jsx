import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    // next: { revalidate: 10}, for fetching new dat aevery 10sec
    cache: "no-store",  //for fetching new data on every request 
  })

  if(!res.ok){
    return notFound()

  }
  return res.json()
}
const BlogPost  = async({ params }) => {
  const data = await getData(params.id)
  console.log("data",data)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur obcaecati, consectetur neque totam libero debitis magni dolor eligendi quas, nemo cupiditate error non quia sunt voluptatum ad aspernatur natus ullam?
            Sapiente fuga voluptas iusto molestiae unde ipsum vitae maiores doloribus. Dicta magnam quisquam ipsa recusandae quam ea reprehenderit, tenetur cum earum dolorum. Est dolorum quae sint dignissimos porro eaque perspiciatis!
            Cum magni ipsum veritatis porro eveniet, sequi temporibus itaque harum, hic voluptatum cupiditate natus! Sint nemo ullam doloremque maiores numquam blanditiis ipsum laboriosam officia iusto quis quasi incidunt, harum minus?
            Pariatur praesentium aspernatur laborum, sapiente quidem doloribus odio provident mollitia, eveniet reiciendis ea eius. In, odio consequuntur odit et quia sed deleniti consectetur molestiae eligendi fuga aperiam non dolores ab?
            Voluptatibus error officiis eligendi optio, maxime saepe nemo totam facere quod, ab ex facilis debitis provident itaque veniam soluta placeat impedit maiores commodi asperiores a? Soluta velit sint suscipit beatae.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Potaatoo</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1548372157-5287da32e872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=''
            fill={true}
            className={styles.image}
          />    
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          paragaraph
        </p>
      </div>
    </div>
  )
}

export default BlogPost
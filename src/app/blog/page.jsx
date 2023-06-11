// import React from "react";
// import styles from "./page.module.css";
// import Link from "next/link";
// import Image from "next/image";

// // async function getData() {
// //   const res = await fetch("http://localhost:3000/api/posts", {
// //     cache: "no-store",
// //   });

// //   if (!res.ok) {
// //     throw new Error("Failed to fetch data");
// //   }

// //   return res.json();
// // }

// const Blog = async () => {
//   // const data = await getData();
//   return (
//     <div className={styles.mainContainer}>
//       {data.map((item) => (
//         <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
//           <div className={styles.imageContainer}>
//             <Image
//               src={item.img}
//               alt=""
//               width={400}
//               height={250}
//               className={styles.image}
//             />
//           </div>
//           <div className={styles.content}>
//             <h1 className={styles.title}>{item.title}</h1>
//             <p className={styles.desc}>{item.desc}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Blog;
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
    // next: { revalidate: 10}, for fetching new dat aevery 10sec
    cache: "no-store",  //for fetching new data on every request 
  })

  if(!res.ok){
    throw new Error("Failed to fetch data")

  }
  return res.json()
}

const Blog = async () => {

  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((item)=>(
        <Link href="/blog/testId" className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              alt=""
              width={400}
              height={250}
              className=
              {styles.image}

              />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
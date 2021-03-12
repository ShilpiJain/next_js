import React from 'react'
import Link from 'next/link'

// const posts = [
//     {
//         id: 0,
//         title: "Zero"
//     },
//     {
//         id: 1,
//         title: "One"
//     },
//     {
//         id: 2,
//         title: "Two"
//     },
//     {
//         id: 3,
//         title: "Three"
//     },
// ];

const Posts = ({posts}) => {
    // console.log(`posts,,,${JSON.stringify(posts)}`)
    return (
        <ul>
            {
                 posts.map((post, key) => {
                    return( 
                        <li key={key}>
                            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}><a>{post.id}</a></Link>
                            <p>{post.title}</p>
                        </li>
                    );
                })
            }
        </ul>
    )
}

// export async function getStaticProps(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await res.json();

//     return {
//         props : {
//             posts
//         },
//     };
// }
export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return {
        props : {
            posts,
        },
    };
}
export default Posts;

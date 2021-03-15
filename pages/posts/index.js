import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

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
const HeaderLoader = dynamic(
    () => import('../components/header'),{
    loading: () => <p>Loader</p>,
    ssr: false }
)

const Posts = ({posts}) => {
    
    // console.log(`posts,,,${JSON.stringify(posts)}`)
    return (
        <>
            <HeaderLoader/>
            <ul>
                {
                    posts.map((post, key) => {
                        return( 
                            <li key={key}>
                                <Link href={`/posts/[id]`} as={`/posts/${post.id}`} replace><a>{post.id}</a></Link>
                                {process.env.NEXT_PUBLIC_BASE_API_URL}
                                <p>{post.title}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </>
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}${process.env.POSTS_URL}`);
    const posts = await res.json();

    return {
        props : {
            posts,
        },
    };
}
export default Posts;

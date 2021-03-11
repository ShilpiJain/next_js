import React from 'react'
import Link from 'next/link'

const posts = [
    {
        id: 0,
        title: "Zero"
    },
    {
        id: 1,
        title: "One"
    },
    {
        id: 2,
        title: "Two"
    },
    {
        id: 3,
        title: "Three"
    },
];

const Posts = () => {
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


export default Posts;

import React from 'react'
import PropTypes from 'prop-types'

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

// function getPostDataById(id) {
//     for (let i = 0; i < posts.length; i++) {
//       if (posts[i].id === parseInt(id)) {
//         return posts[i];
//       }
//     }
// }

export default function Post({ postData }) {
    // const postData = getPostDataById(id);
    console.log(`posts,,,${JSON.stringify(postData)}`)
    return (
      <div>
        <h2>{postData.title}</h2>
        <p>{postData.body}</p>
      </div>
    );
}

// Post.getInitialProps = async ({ query }) => {
//     const { id } = query;
  
//     return { id };
// };

export async function getServerSideProps({query}){
    const { id } = query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const postData = await res.json();

    return {
        props : {
            postData
        },
    };
}
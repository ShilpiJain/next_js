import React from 'react'
import PropTypes from 'prop-types'

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

// function getPostDataById (id) {
//     postData.filter(({id}) => {
//         debugger;
//         return(id != id)
//     });
// }
function getPostDataById(id) {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === parseInt(id)) {
        return posts[i];
      }
    }
}

// export default function Post  ({id}) {
//     debugger;
//     const postData = getPostDataById(id);
//     console.log(postData)
//     return (
//         <div>
//             {postData.id}
//             {postData.title}
//         </div>
//     )
// }
export default function Post({ id }) {
    const postData = getPostDataById(id);
  
    return (
      <div>
        <h2>{postData.title}</h2>
        <p>{postData.body}</p>
      </div>
    );
}
// Post.getInitialProps = async ({query}) => {
//     debugger;
//     const {id} = query;
//     console.log(id)
//     return {id};
// }
Post.getInitialProps = async ({ query }) => {
    const { id } = query;
  
    return { id };
};

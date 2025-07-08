"use client";

/* 
################## Make the card border Dynamic with JS
const cardHeight = 200;
const top = 80;
const mid = 40;
const bottom = cardHeight - top - mid;

const gradient = `linear-gradient(to bottom, 
  #FF3C3C 0px, 
  #FF3C3C ${top}px, 
  #00FF00 ${top}px, 
  #00FF00 ${top + mid}px, 
  #FF3C3C ${top + mid}px, 
  #FF3C3C 100%)`;

*/
import React from 'react';
import Button from "@/components/ui/Button";

// interface IPost {
//     posts : { // IPost has a posts field, which is a single post object.
                /* posts is a single post object (not an array).
                Accessing example: data.posts.title */
//         userId : number;
//         id : number;
//         title : string;
//         body : string;
//     }
// }


/* 
// Example data structure for above posts
    const data: IPost[] = [
  {
    posts: {
      userId: 1,
      id: 1,
      title: "Post One",
      body: "This is the first post body."
    }
  },
  {
    posts: {
      userId: 2,
      id: 2,
      title: "Post Two",
      body: "This is the second post body."
    }
  },
  {
    posts: {
      userId: 3,
      id: 3,
      title: "Post Three",
      body: "This is the third post body."
    }
  }
];

*/

interface ISinglePost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IPost {
    posts: ISinglePost[]; // IPost has a posts field, which is an array of post objects.
    /* posts is an array of post objects.
    Accessing example: data.posts[0].title */
}



const ClientPosts = ({posts} : /* IClientPostsProps */IPost) => {

    console.log(posts);

    const data = "Tahmid hasan"
    const handleSeeMore = () => {
        console.log("See more clicked");
        // Implement your logic to fetch more posts or navigate to another page
    };

    return (
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        //         {posts.map((post: { id: number, title: string, body: string }) => (
        //             <div key={post?.id} className="relative .h-[200px] rounded-xl overflow-hidden">
        //                 <div className="absolute inset-0 z-0" style={{
        //                     background: `linear-gradient(to bottom, #FF3C3C 0px, #FF3C3C 80px, #00FF00 80px, #00FF00 120px, #FF3C3C 120px, #FF3C3C 100%)`,
        //                     padding: '100px',
        //                     borderRadius: '12px',
        //                 }} />

        //                 <div className="relative z-10 h-full bg-white rounded-xl p-4">
        //                     <p className="text-black">Card Content</p>
        //                     <h2 className="text-lg font-bold">{post.title}</h2>
        //                     <p className="text-gray-700">{post.body}</p>
        //                 </div>
        //             </div>
        //         ))}
        // </div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {posts.map((post: { id: number, title: string, body: string }) => (
    <div key={post?.id} className="rounded-xl overflow-hidden">
      <div
        className=".bg-white rounded-xl"
        style={{
          background: `linear-gradient(to bottom, 
            #FF3C3C 0px, 
            #FF3C3C 80px, 
            rgba(94, 86, 91, 0.6) 80px, 
            rgba(94, 86, 91, 0.6) 120px, 
            #FF3C3C 120px, 
            #FF3C3C 100%)`,
          padding: '1px', // Thick border here
          borderRadius: '1px',
        }}
      >
        <div className="bg-white rounded-xl p-4 h-[200px]">
          <p className="text-black">Card Content</p>
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      </div>
    </div>
  ))}
  <Button label={"See more"} onClick={() => handleSeeMore()} variant="secondary" type={"submit"} disable={true} />
</div>
);
};

export default ClientPosts;

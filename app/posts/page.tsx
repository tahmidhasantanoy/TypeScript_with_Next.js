// Make this compo as SSR & separate CSR code || TODO : Do this after lunch

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

import ClientPosts from "./ClientPosts";

const Posts = async() => {
    const responseFromServer = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const allPosts = await responseFromServer.json();

    return (
        <ClientPosts posts ={allPosts}/>
);
};

export default Posts;
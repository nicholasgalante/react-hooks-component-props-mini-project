import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const postsArr = posts.map(post=>{
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })
    return(
        <main>
            {postsArr}
        </main>
    )
}

export default ArticleList
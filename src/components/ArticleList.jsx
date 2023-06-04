import React from 'react'
import Article from './Article'
function ArticleList({posts}) {
   
const Post = posts.map(post => <Article preview={post.preview} date={post.date} key={post.id} title={post.title} minutes={post.minutes}/>)
  return (
    <main>
        {Post}
    </main>
  )
}

export default ArticleList
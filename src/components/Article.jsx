import React from 'react'

function Article({title,date="January 1, 1970",preview,minutes}) {
    

  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{minutes} minutes to read</p>
    </article>
  )
}

export default Article
import React from 'react'

const getData = async() => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`) 
  // console.log(response);
  if (!response.ok) {
    throw new Error('Something went wrong')
  }
  return response.json()
}

const blogPage = async() => {
  const pages = await getData()
  console.log(pages);
  

  return (
    <div>blogPage</div>
  )
}

export default blogPage
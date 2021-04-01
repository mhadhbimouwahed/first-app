import React from 'react'
import ReactDom from 'react-dom'
 
const Book1={
  author: "mouwahed mhadhbi",
  bookName:"birdman or the unexpected virtue of ignorance"

}
const Book2 = {
  author: "yahya mhadhbi",
  bookName:"whiplash"
}
function Greeting() {
  return (
    <div>
      <Book author={Book1.author} bookName={Book1.bookName} />
      <Book author={Book2.author} bookName={Book2.bookName} />
    </div>
  )
}

function Book(props) {
  return (
    <div>
      <h2>{props.author}</h2>
      <h2>{ props.bookName }</h2>
    </div>
  )
}

ReactDom.render(<Greeting />,document.getElementById('root'))
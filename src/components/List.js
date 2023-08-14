import React from 'react'
import Card from './Card'

const List = ({tickets,users}) => {
  // console.log(users[0].name)
  return (
    <>
        {
            tickets.map(i => <Card name={i.title}/>)
        }
        { 
            users.map(i =><Card name={i.name}/>)
        }
    </>
  )
}

export default List
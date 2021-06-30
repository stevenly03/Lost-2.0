import React from 'react'
import GroupCards from '../components/GroupCards'
export default function GroupContainer() {
  
  const displayGroupCards = () => {
    return <GroupCards />
  }
  
  return (
    <div className="group-container">
      {displayGroupCards ()}
    </div>
  )
}

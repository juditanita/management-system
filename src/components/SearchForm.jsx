import React from 'react'

const SearchForm = ({active, formOpen}) => {
    //create a form that goes to be bigger when the click event happens otherwise its only an icon
  return (
    <div className={` whatever ${active? "make it large":undefined}`}>
         <form>
    <span>need an icon to be shown</span>
    <input type="text" name="" id=""  placeholder='Search events'/>
    <button onClick={formOpen}>
        <span>close button iconn</span>
    </button>
   </form>
    </div>
  
  )
}

export default SearchForm
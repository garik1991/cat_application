import React, {useRef, useState} from 'react'
import "./Sidebar.css"
import {NavLink}    from 'react-router-dom'
import useClickOutside from "../../hooks/useClickOutside";



const Sidebar = ({categories}) => {
  const [show, setShow] = useState(false)
    const categoryRef = useRef()
    const showHideButtonRef = useRef()

  const toggleShowHide = () => {
      categoryRef.current.classList.toggle("show")
    setShow(show => !show)
  }

  useClickOutside(showHideButtonRef, categoryRef, setShow)

  return (
    <div className="sidebar-container">
        <div className="show-hide-categories-btn-container">
            <button ref={showHideButtonRef} onClick={toggleShowHide}>{show ? "-" : "+"}</button>
        </div>
      <ul ref={categoryRef} className="sidebar-container-categories">
        {categories.map(category => {
          return (
            <li key={JSON.stringify(category)}>
              <NavLink to={`/${category.id}`}>{category.name}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar


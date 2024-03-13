import { useEffect, useState } from 'react'
import './header.css'

function Header() {
  const [show, setshow] = useState(false)
  console.log(show);

  const [theme, settheme] = useState(
    localStorage.getItem("currentMode")?? "dark"
  )
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
    else {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }

  }, [theme])
  return (
    <header className='  flex'>

      <button className='menu  icon-menu flex' onClick={() => { setshow(true) }} />
      <div />
      <nav >
        <ul className='  flex'>
          <li><a href="">About</a></li>
          <li><a href="">Experiences</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Feedback</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button className='mode flex' 
       onClick={()=>{
        // send value to local storage
           localStorage.setItem("currentMode",theme === "dark" ? "light" :"dark")
        //get value from local storge
           settheme(localStorage.getItem("currentMode"))
      } }>
         {theme === "dark" ?
         (<span className='icon-moon-o'></span>):
         (<span className='icon-sun '></span>)
         
         }
        
      </button>

      {/* pop up */}

      {show && <div className=" fixed ">
        <ul className="model">
          <li>
            <button onClick={() => { setshow(false) }} className='icon-close' />
          </li>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Uses</a></li>
        </ul>
      </div>}
    </header>


  )
}

export default Header
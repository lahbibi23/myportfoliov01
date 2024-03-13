import React, { useState } from 'react'
import { project } from './projects';
import "./main.css"
function Main() {

  const [arr, setArr] = useState(project)
  console.log(arr);

  const [currentActive, setcurrentActive] = useState("all")

  console.log(currentActive, arr);

  const handlClick = (buttonCategory) => {
    setcurrentActive(buttonCategory)
    const newArr = project.filter((item) => {
      const tab = item.category.find((el) => {
        return el === buttonCategory

      })
      return tab === buttonCategory
    })

    setArr(newArr)
  }

  return (
    <main className=' flex'>
      <div className='left-section  flex'>
        <button onClick={() => {
          setcurrentActive("all")
          setArr(project)
        }}
          className={(currentActive === "all") ? "active" : null}>all project</button>
        <button onClick={() => handlClick("html & css")} className={(currentActive === "html & css") ? "active" : null}>html & css</button>
        <button onClick={() => handlClick("react")} className={(currentActive === "react") ? "active" : null}>react</button>
        <button onClick={() => handlClick("javascript")} className={(currentActive === "javascript") ? "active" : null}>javascript</button>
        <button onClick={() => handlClick("node js")} className={(currentActive === "node js") ? "active" : null}>node js</button>
      </div>

      <div className='right-section flex'>
        {arr.map((el) => {
          return (
            <article key={el.titleProject} className='card border'>
              <img src={el.projectImage} width='266px' alt="" />
              <div className='box ' style={{ width: "266px" }}>
                <h1 className='title '>{el.titleProject}</h1>
                <p className='sub-title '>{el.projectDescription}</p>
                <div className='icons flex'>
                  <div className='flex' style={{ gap: "1.1rem" }}>
                    <div className='icon-link'></div>
                    <div className='icon-github'></div>
                  </div>
                  <a href="http://" className='link flex'>
                    more
                    <span className='icon-arrow-right' style={{ alignSelf: 'end' }}></span>
                  </a>
                </div>
              </div>
            </article>






          )

        })}

      </div>
    </main>
  )
}

export default Main
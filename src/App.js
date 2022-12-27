import React from 'react'
import Navbar from './components/Navbar'
import First from './components/FirstComponents'
import Second from './components/SecondComponent'
import data from './data.js'

export default function App(){
  const dataEle = data.map(item=>{
    return (
          <Second 
                key={item.id}
                {...item}
            />
    )
  })
  return(
    <div>
      <Navbar />
      <First />
      <section className="cards-list">
                {dataEle}
            </section>
    </div>
  )
}
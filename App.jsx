import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

const App = () => {

  // to get back the theme value from browser after refreshing it: 
  const current_theme = localStorage.getItem('current_theme');
 

  const [theme, setTheme] = useState(current_theme?current_theme:'light');

  // when toggle item is clicked --> the theme is changed and so that change is to be stored in a state variable

  useEffect(()=>{
    localStorage.setItem('current_theme',theme)
  },[theme])


  return (
    <div className={`container ${theme}`} >
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App

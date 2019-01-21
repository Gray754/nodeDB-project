import React from 'react'
import sunSVG from '../../sun.svg'
import './AppLogo.css'

const AppLogo =  () =>{

    return(
        <div>
            <img src={sunSVG} alt='App Logo of Sun'  className="logo"/>
        </div>
    )
}

export default AppLogo
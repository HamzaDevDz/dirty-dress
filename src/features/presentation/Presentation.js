import React from "react"
import './Presenttion.css'

export const Presentation = () => {
    console.log('re-render Presentation')
    return(
        <div className={'presentation'}>
            <div className={'presentation__img'}>
                <img src={'hot1.png'} alt={''}/>
            </div>
            <div className={'presentation__data'}>
                <h1>Dirty Dress</h1>
                <h2>Weiring as a Godess, and why not, be the dominatrice of the world.</h2>
                <button className={'presentation__data__btn'}>Check Out</button>
            </div>
        </div>
    )
}
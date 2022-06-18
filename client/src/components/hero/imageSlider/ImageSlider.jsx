import React, { useState, useEffect } from 'react'
import { imagePaths } from "../imagePaths"

import "./Imgstyles.css"

function ImageSlider() {
    const [currentImg, setCurrentImg] = useState(0)
    let slideInterval;

    
    const nextImage = () => {
        setCurrentImg(currentImg === imagePaths.length - 1 ? 0 : currentImg + 1)
    }
    
    const autoNext = () => {
        slideInterval = setInterval(nextImage, 3000)
    }
    
    useEffect(()=> {
        autoNext()

        return ()=> clearInterval(slideInterval)
    }, [currentImg])

    return (
        <>
            {
                imagePaths.map((item, i) => {
                    return (
                        <>
                        <div className={i === currentImg ? "slide current" : "slide"} key={i}>
                        {
                            i === currentImg && (
                                <img className='image' src={item.image} alt="slide image" />
                            )
                        }
                            
                        </div>       
                        </>
                    )
                })
            }

        </>
    )
}

export default ImageSlider
import React, { useState, useEffect } from 'react'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'

import "./heroTextStyles.css"

function HeroText() {
    const [currentWord, setCurrentWord] = useState(0)

    const words = ["days", "life", "health"]
    let wordInterval;

    const nextWord = () => {
        setCurrentWord(currentWord === words.length - 1 ? 0 : currentWord + 1)
    }

    const autoNext = () => {
        wordInterval = setInterval(nextWord, 3000)
    }

    useEffect(() => {
        autoNext()

        return () => clearInterval(wordInterval)
    }, [currentWord])

    return (
        <>
            <div className="hero-text-conatainer">
                <div className="hero-text-content">

                    {
                        words.map((word, i) => {
                            return (
                                i === currentWord && (
                                    <h1> Better <span className='word'> {word} </span> </h1>
                                )
                            )
                        })
                    }
                    <p className='hero-text-para'>
                        Medic Care is a Bootstrap 5 Template provided by TemplateMo website.
                        Credits go to FreePik and RawPixel for images used in this template.
                    </p>

                    <div className="info-container">

                        <button>Learn More</button>

                        <div className="phone-info">
                            <PhoneIphoneIcon /> <span className='phone-number'>010-020-0340</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroText
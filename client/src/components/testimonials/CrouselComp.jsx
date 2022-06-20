import React, { useState, useEffect } from 'react'
import "./testimonials.css"

const slides = [
    { img: "https://cdn.pixabay.com/photo/2020/10/19/13/27/british-shorthair-5667824__340.jpg", title: "best health care", desc: "lorem ipsum*3", name: "John Doe" },
    { img: "https://cdn.pixabay.com/photo/2017/08/23/00/37/cat-baby-2671159__340.jpg", title: "best something", desc: "lorem ipsum*3", name: "Alice Doe" },
    { img: "https://cdn.pixabay.com/photo/2019/08/08/20/04/bird-4393745__340.jpg", title: "best at anything", desc: "lorem ipsum*3", name: "Melissa Doe" },
    { img: "https://cdn.pixabay.com/photo/2017/06/21/15/57/ruben-2427641__340.jpg", title: "best at everything", desc: "lorem ipsum*3", name: "Adam Doe" },
]

function CrouselComp() {
    const [currentSlide, setCurrentSlide] = useState(0)
    let slideInterval

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
    }

    const autoNext = () => {
        slideInterval = setInterval(nextSlide, 3000)
    }

    useEffect(() => {
        autoNext()

        return () => clearInterval(slideInterval)
    }, [currentSlide])


    return (
        <div>
            {
                slides.map((slide, i) => {
                    return (
                        <>
                            <div className={i === currentSlide ? "slide current" : "slide"} key={i}>
                                {
                                    i === currentSlide && (
                                        <img className='image' src={slide.img} alt="slide image" />
                                    )
                                }

                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default CrouselComp
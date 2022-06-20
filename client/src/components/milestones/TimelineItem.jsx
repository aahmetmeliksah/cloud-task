import React from 'react'

import "./timelineStyles.css"

function TimelineItem({ data }) {
  return (
    <>
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className='tag' style={{ background: data.category.color }}>
                {
                    data.category.tag
                }
            </span>
            <time className='date'> { data.date } </time>
            <p> { data.text } </p>

            <span className='circle'></span>
        </div>
    </div>
    </>
  )
}

export default TimelineItem
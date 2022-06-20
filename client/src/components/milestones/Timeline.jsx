import React from 'react'
import { timelineData } from "./timelineData"
import TimelineItem from "./TimelineItem"

function Timeline() {
    return (
        <div id='timeline'>
        <h2>Milestones</h2>
            {
                timelineData.length > 0 && (
                    <div className="timeline-container">
                        {
                            timelineData.map((data, i) => (
                                <TimelineItem data={data} key={i} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Timeline
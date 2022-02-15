import React from 'react'

export default function BulletPoint({ heading, bullets }) {
    return (
        <div>
            <h2>{heading}</h2>
            <div>
                <ul>
                    {
                        bullets.map((bullet) => {
                            return <li>{bullet}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

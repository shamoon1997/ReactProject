import React from 'react'
import '../style/EditBullet.css'
function InsideBullet(props) {
    return (
        <div>
            {props.objects.map((object) => {
                return (
                    <div>
                        <div>
                            <h4>Bullet #{object?.currentCount}</h4>
                        </div>
                        <div className="text-with-button">
                            <div className="inputTags">
                                <input type="text" defaultValue={object?.currentText} onChange={(event) => {
                                   props.setThebullet(event);
                                }}></input>
                            </div>
                            <div className="inputTags">
                                <button onClick={
                                    () => {
                                        props.removeElement(object.currentCount)
                                    }
                                }>Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            {/* <div>
                <h4>Bullet #1</h4>
            </div>
            <div className="text-with-button">
                <div className="inputTags">
                    <input type="text"></input>
                </div>
                <div className="inputTags">
                    <button>Remove</button>
                </div>
            </div> */}
        </div>
    )
}

export default InsideBullet

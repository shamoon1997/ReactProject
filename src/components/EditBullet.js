import React from 'react'
import '../style/EditBullet.css'
import InsideBullet from './InsideBullet.js';
import { useState } from 'react';
function EditBullet(props) {
    let [currentCount, setcurrentCount] = useState(0);
    let [objects, setobjects] = useState([]);
    const [bulletText, setbulletText] = useState();
    function setThebullet(event) {
        setbulletText(event.target.value);
    }
    function removeElement(currentCount1) {
        let objects1 = objects.filter((obj) => obj.currentCount !== currentCount1)
        setobjects([...objects1])
        props.removeBullet(currentCount1);
    }
    return (
        <div className="main">
            <div className="heading">
                <h2>Edit Component</h2>
            </div>
            <div>
                <h3>Headline</h3>
            </div>
            <div className="inputTags">
                <input type="text" placeholder="How it works" onChange={(event) => {
                    props.setheading(event.target.value);
                }}></input>
            </div>
            <InsideBullet objects={objects} removeElement={removeElement} setThebullet={setThebullet} />
            <div className="inputTags">
                <button onClick={(event) => {
                    setcurrentCount(currentCount + 1);
                    setobjects([...objects, {
                        currentCount: currentCount,
                        currentText: '',
                    }]);
                    props.fixBullet(bulletText);
                    setbulletText(null);
                }}>Add bullet</button>

            </div>

        </div >
    )
}

export default EditBullet

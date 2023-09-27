import React, { useState } from 'react'

function FuncState() {
    const [course, setCourse] = useState("React");

    const [myObj, setObj] = useState({
        name: "Tirth",
        age: 18,
        image: true
    });
    return (
        <>
            <div className='container'>
                <button onClick={() => setCourse("FullStack")}>Click Me</button>
                <div className='fs-3'>My Course is {course}</div>

                <br />
            </div>
        </>
    )
}

export default FuncState    
import axios from 'axios'
import React, { useState } from 'react'

function Axios() {
    const res = async () => {
        const obj = await axios.get("https://jsonplaceholder.typicode.com/users");
    }

    return (
        <>
            <div>{res.obj}</div>
        </>
    )
}

export default Axios
import React from 'react'
import ScienceFetch from './ScienceFetch'
import { Button } from '@mui/material'

function Page1() {
    return (
        <div>
            <div className='header' style={{ backgroundColor: "blue" }}>
                <h2 style={{ margin: "10px" }}>Home</h2>
                <h2 style={{ margin: "10px" }}>Genre</h2>
                <h2 style={{ margin: "10px" }}>Leader  Board</h2>
                <h2 style={{ margin: "10px" }}>Daily Quiz</h2>
                <h2 style={{ margin: "10px" }}>Logout</h2>
            </div>
            <div className='logo'>
                <p style={{ display: "flex", margin: "5px" }}>
                    <img src="https://th.bing.com/th/id/OIP.i03XUUp0w-35GR-pMaFQCgHaFb?rs=1&pid=ImgDetMain" alt="" style={{ height: "30px", width: "30px", padding: "1px" }} />
                    <h5 style={{ margin: "5px" }}>Fantasy </h5>
                </p>

                <p style={{ display: "flex", margin: "5px" }}>
                    <img src="https://static.vecteezy.com/system/resources/previews/007/688/945/original/adventure-logo-free-vector.jpg" alt="" style={{ height: "30px", width: "30px", padding: "1px" }} />
                    <h5 style={{ margin: "5px" }}>adventure</h5>
                </p>

                <p style={{ display: "flex", margin: "5px" }}>
                    <img src="https://th.bing.com/th/id/OIP.p9FhFZwqc6DClAGrVw4XMQHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" style={{ height: "30px", width: "30px", padding: "1px" }} />
                    <h5 style={{ margin: "5px" }}>Mystery </h5>
                </p>
                <p style={{ display: "flex", margin: "5px" }}>
                    <img src="https://th.bing.com/th/id/OIP.skKgSCom-Qq-XAKkfHAqSAHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" style={{ height: "30px", width: "30px", padding: "1px" }} />
                    <h5 style={{ margin: "5px" }}>Science </h5>
                </p>
                <p style={{ display: "flex", margin: "5px" }}>
                    <img src="https://th.bing.com/th/id/OIP.SBdR1RY-OyC7UY7xwyahyAHaHc?w=166&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" style={{ height: "30px", width: "30px", padding: "1px" }} />
                    <h5 style={{ margin: "5px" }}>History </h5>
                </p>
                <p style={{ display: "flex", margin: "5px" }}>
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/10/04/badminton-156463_640.png" alt="" style={{ height: "30px", width: "30px", padding: "1px" }} />
                    <h5 style={{ margin: "5px" }}>Sports </h5>
                </p>
            </div>

            <div>
                <div style={{ display: "flex", gap: "45%" }}>
                    <p className='ptag'>
                        <h1>Science Fiction Stories</h1></p>
                    <p className='btnp'>
                        <Button variant="contained" color="success">Clear All</Button>
                        <Button variant="contained" color="success">Completed</Button>
                        <Button variant="contained" color="success">In Progress</Button>
                        <Button variant="contained" color="success">New</Button>
                    </p>

                </div>




                <ScienceFetch />


            </div>

        </div>
    )
}

export default Page1
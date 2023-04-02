import { NavLink } from 'react-router-dom'
import React from 'react'
// import "./postform.css"
// import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
function Postform() {
    //   const navigate=useNavigate()
    const confirmation = () => {
        alert("Submitted Successfully");
    }
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescreption] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    useEffect(() => {
        console.log(url)
        if (url) {
            fetch("https://serverme-rsmp.onrender.com/addpost", {
                method: "Post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    location,
                    description,
                    image: url
                })
            })
                .then(res =>
                    res.json())
                .then(res =>
                    console.log(res)

                )
                .catch(err => {
                    console.log(err)
                })
        }
    }, [url])

    const postimage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Rootfor")
        data.append("cloude_name", "dp6gqhir8")
        fetch("https://api.cloudinary.com/v1_1/dp6gqhir8/image/upload", {
            method: "Post",
            body: data
        })
            .then(res =>
                res.json()
            )
            .then((result) => {
                // console.log(res)
                setUrl(result.url)
            })
    }
    const styles = {
        border: "1px solid green",
        width: "400px",
        margin: "15%",
        padding: "20px"
    }
    const style1 = {
        width: "98%",
        marginBottom: "10px",
        color: "magenta"
    }
    return (
        <>
            <div style={styles}>
                <div >
                    <input style={style1} type="file" onChange={(e) => {
                        setImage(e.target.files[0])
                    }} />
                </div>
                <div>
                    <input style={style1} placeholder='Author' type="text" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div >
                    <input style={style1} placeholder='location' type="text" onChange={(e) => {
                        setLocation(e.target.value)
                    }} />
                </div>
                <div >
                    <input style={style1} placeholder='Description' type="text" onChange={(e) => {
                        setDescreption(e.target.value)
                    }} />
                </div>
                <div className='postbtn'>

                    <button onClick={() => {
                        postimage()
                        confirmation()
                    }}> Submit </button>

                </div>
            </div>
            <NavLink to="/allpost">View All posts</NavLink>
        </>
    )

}
export default Postform

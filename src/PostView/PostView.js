import React,{useEffect,useState} from 'react'


const PostView = () => {
const [data,setData] = useState([]);
const style1 = {
  border: "1px solid black",
  width:"90%",
  margin:"5%px",
}
const style2 = {
  border:"1px solid black",
  height:"50px"
}


useEffect(() =>{
  fetch("https://serverme-rsmp.onrender.com/allpost").then((res) =>res.json()).then((result) => setData(result))
})

  return (
     data.map ( item =>{
      return(
      <div style={style1}>
        <div style = {style2}>
        <h3 style = {{"margin":"2px"}}>{item.name}</h3> 
      {item.location}
        </div>
        <div><img src={item.image} alt="" height="33%" width="100%" />

        </div>
      <h4>{item.description}</h4>
      
     
       </div>)
     })
    
  )
    }

export default PostView

import React from 'react'
const userData=[{
    name:"james",
    city:"Coimbatore",
    description:"DevOps Engineer",
    skills:["A","B","c","d","e","f"],
    online:false,
    profile:"Arun_photo_2023_1.jpg",
},
{
    name:"james",
    city:"Coimbatore",
    description:"DevOps Engineer",
    skills:["A","B","c","d","e","f"],
    online:false,
    profile:"Arun_photo_2023_1.jpg",
},
{
    name:"james",
    city:"Coimbatore",
    description:"DevOps Engineer",
    skills:["A","B","c","d","e","f"],
    online:true,
    profile:"Arun_photo_2023_1.jpg",
}
]


function User(props){
    return(
        <div className='card-container'>
            <span className={props.online?"pro online":"pro offline"}>
                {props.online?"ONLINE":"OFFLINE"}
            </span>
            <img src={props.profile} alt="user" className='img' />
            <h3> {props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className='buttons'>
                <button className='primary'>Message</button>
                <button className='primary outline'>Following</button>
            </div>
            <div className='skills'>
                <h6>SKILLS</h6>
                <ul>
                {props.skills.map((skills,index)=>(
                    <li key={index}>{skills}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}
const Usercard = () => {
  return (
    <>
    {userData.map((user,index)=>(
    <User key={index}
    name={user.name}
    city={user.city}
    description={user.description}
    online={user.online}
    profile={user.profile}
    skills={user.skills}
     />
   ) )}
    </>
//   <User name="ARUN KUMAR" 
//   city="Palldam"
//    description="Full Stack Developer"
//    skills={["HTML","CSS","JAVA","SPRING BOOT","REACT JS","NODE JS"]}
//    online={true} profile="Arun_photo_2023_1.jpg" />
  )
}

export default Usercard

import { useState } from 'react'
import './App.css'

const shelterSpots = [{title:"Fema Disaster Recovery Center", address:"6457 Windmere Rd BROOKSVILLE, FL 34602"}, 
    {title: "Fema Mobile Disaster Recovery Center", address: "8012 Library Rd HUDSON, FL 34667"},
    {title: "Fema Mobile Disaster Rocovery Center", address:"923 6th St W PALMETTO, FL 34221" },
    {title: "FEMA Disaster Recovery Center (DRC)", address: "1111 18th Ave S SAINT PETERSBURG, FL 33705"},
    {title: "FEMA Disaster Recovery Center (DRC)", address:"2923 Ashton Rd SARASOTA, FL 34231"}
]
export default function Shelter(){
    const [shelter, setNewShelter] = useState(0)
    return <>

<div className = "image-container">
        <h1 id = "heading">Shelter Spots</h1>
        <img id = "imageWeather" src = "hurricane.jpg" alt = "Hurricane"></img>
    </div>
    <div className = "shelterSpots">

    <div className = "each-shelter">
        <div className = "text">
            <h2>{shelterSpots[shelter].title}</h2>
            <h3>{shelterSpots[shelter].address}</h3>
        </div>
        
            

        {shelter == 0 && <div id = "map-style"><iframe id = "actual-map" src="https://maps.google.com/maps?width=900&amp;height=700&amp;hl=en&amp;q=6457%20Windmere%20Rd%20BROOKSVILLE,%20FL%2034602+(Fema%20Disaster%20Recovery%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>}
        {shelter == 1 && <div id = "map-style"><iframe id = "actual-map" src="https://maps.google.com/maps?width=900&amp;height=700&amp;hl=en&amp;q=8012%20Library%20Rd%20HUDSON,%20FL%2034667+(Fema%20Disaster%20Recovery%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>}
        {shelter == 2 && <div id = "map-style"><iframe id = "actual-map" src="https://maps.google.com/maps?width=900&amp;height=700&amp;hl=en&amp;q=923%206th%20St%20W%20PALMETTO,%20FL%2034221+(Fema%20Disaster%20Recovery%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>}
        {shelter == 3 && <div id = "map-style"><iframe id = "actual-map" src="https://maps.google.com/maps?width=900&amp;height=700&amp;hl=en&amp;q=1111%2018th%20Ave%20S%20SAINT%20PETERSBURG,%20FL%2033705+(Fema%20Disaster%20Recovery%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>}
        {shelter == 4 && <div id = "map-style"><iframe id = "actual-map" src="https://maps.google.com/maps?width=900&amp;height=700&amp;hl=en&amp;q=2923%20Ashton%20Rd%20SARASOTA,%20FL%2034231+(Fema%20Disaster%20Recovery%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>}
    
    </div>

    
    
    </div>
    <div className = "buttons">
    <button disabled = {shelter==0? true:false } id = "prev" onClick={()=>{
        setNewShelter(shelter-1)}
        }>Prev</button>
    <button disabled = {shelter==shelterSpots.length-1? true:false } id = "next" onClick={()=>{
        setNewShelter(shelter+1)}
        }>Next</button>

    </div>
    
    
    </>
    
}
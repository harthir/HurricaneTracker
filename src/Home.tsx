import { useState } from 'react'
import './App.css'

const tips = [
    {image: 'supplies.jpg.webp', description: 'Prepare supplies: Gather a 3-day supply of food and water for evacuation, and a 2-week supply for staying at home. Also include a first aid kit, medications, and important documents'},
    {image: 'boardHouses.jpg.webp', description: 'Secure your home: Close and brace all exterior doors, and close interior doors.'},
    {image: 'indoor.jpg.webp', description: 'Stay indoors during the hurricane, even if there is a lull in the storm.'}
]

function Tips({image, description}: {image:string,description:string}){
    return<>

    <div className = "newTips">
        <img id = "tips-image" src = {image} alt = "Not Working" height= "200px"></img>
        <p> {description}</p>

    </div>
    
    
    </>
}

export default function Home(){
    const [indexTips, setIndexTips] = useState(0)
    return <>
    
    
    
    <div className = "image-container">
        <h1 id = "heading">Hurricane Ready</h1>
        <img id = "image" src = "hurricane.jpg" alt = "Hurricane"></img>
    </div>
    <div className = "description">
        <p> Hurricane Ready is an app designed to notify users about incoming hurricanes and provide timely alerts through email with recommendations for finding shelters and effectively managing emergencies.</p>
        <br></br>
        <div className = "tipsTricks">
            <h2 id = "tips">Hurricane Tips and Tricks</h2>
            
            <div className = "tricks">
                <button disabled = {indexTips == 0? true: false} id = "prev" onClick={()=> setIndexTips(indexTips-1)}>Prev</button>
                <button  disabled = {indexTips == tips.length-1? true: false} id = "next" onClick={()=> setIndexTips(indexTips+1)}>Next</button>
                <br></br>
                <br></br>
                
                <Tips image={tips[indexTips].image} description={tips[indexTips].description} />

            </div>
       
          
        </div>
    </div>
    
    
    </>
}
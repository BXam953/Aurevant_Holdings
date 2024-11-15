import Image from "next/image"
import papa_pic from '../media/papa_pic.jpeg'
import AboutWidget from "./aboutWidget"

export default function About(){
    return(
        <div className="h-[100%] w-[100%] flex flex-col gap-5">

            <h1 className=" text-3xl lg:text-4xl font-light text-white">About</h1>
            <div className="flex flex-col lg:flex-row justify-between gap-10 h-[100%]">
                
            
            <Image className="h-full w-auto rounded-lg" alt="image" src={papa_pic} />

                <div className=" md:flex md:flex-col justify-between w-full lg:h-full h-full gap-10">
                    <div className=" md:text-xl">
                    Aurevant was founded by Adil Paracha, a seasoned leader with over two decades of international experience across Europe, Africa, and the Middle East. Adil has a proven track record of driving transformative growth for global consumer brands, including Reckitt, Kimberly-Clark, Beiersdorf, and Galderma, with a specific focus on high-potential markets like Saudi Arabia and the UAE. Having held senior leadership positions, such as General Manager of Saudi Arabia and Regional Head across multiple regions, Adil brings deep expertise in navigating complex business landscapes. 
                    <br />
                    <br />
                    As our CEO, Adil channels this vast experience to help SMEs expand their footprint and achieve success in the competitive Middle Eastern markets. Aurevant provides a full range of services, including strategic business planning and execution, executive advisory and coaching, market entry and route-to-market strategies, transformation and restructuring support, and integrated brand development services. 
                    <br />
                    <br />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-2 max-w-full">
                        <AboutWidget 
                        num="24+"
                        body="years of experience" 
                        />
                        <AboutWidget 
                        num="4"
                        body="Continents" 
                        />
                        <AboutWidget 
                        num="24"
                        body="years of experience" 
                        />
                        <AboutWidget 
                        num="24"
                        body="years of experience" 
                        />
                        
                        
                    </div>
                    </div>
                </div>
            </div>
        
    )
}
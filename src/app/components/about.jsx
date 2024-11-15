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
                    With over two decades of expertise spanning Europe, Africa, and the Middle East, Aurevant has driven transformative growth for companies, with a strategic focus on high-potential Middle Eastern markets like Saudi Arabia and the UAE. Our founder and CEO brings extensive leadership experience from top global consumer brands, having held senior roles across Europe and MEA, including as General Manager and Regional Head.
                    . 
                    <br />
                    <br />
                    Our CEO leverages this deep international background to empower SMEs in expanding their market reach and thriving in competitive Middle Eastern landscapes. Aurevant’s offerings include strategic business planning and commercial execution, executive advisory and coaching, route-to-market strategies, transformation and restructuring support, and integrated brand development services.
                    . 
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
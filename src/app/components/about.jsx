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
                    Aurevant was founded by Adil Paracha, a seasoned leader with over 20 years of experience driving growth for global brands like Reckitt and Kimberly-Clark in markets across Europe, Africa, and the Middle East, including Saudi Arabia and the UAE. Having held senior roles such as General Manager and Regional Head, Adil brings deep expertise in navigating complex business environments.
                    <br />
                    <br />
                    As CEO, Adil leverages his experience to help SMEs thrive in the Middle East. Aurevant offers services including strategic planning, market entry strategies, business transformation, and brand development to drive success in competitive markets.
                    <br />
                    <br />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-2 max-w-full">
                        <AboutWidget 
                        num="24+"
                        body="years of experience" 
                        />
                        <AboutWidget 
                        num="30"
                        body="Markets" 
                        />
                        <AboutWidget 
                        num="300"
                        body="in Business Managed" 
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
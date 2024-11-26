import Image from "next/image"
import papa_pic from '../media/papa_pic.jpeg'
import AboutWidget from "./aboutWidget"

export default function About(){
    return(
        <div className="h-[100%] w-[100%] flex flex-col gap-10">

            <h1 className=" text-3xl lg:text-4xl font-light text-white">About</h1>
            
            
            <Image className="h-full w-auto rounded-lg" alt="image" src={papa_pic} />

            <div className=" md:text-xl w-auto">
                    Aurevant was founded by Adil Paracha, a seasoned  leader with over 20 years of experience driving growth for global consumer companies like Reckitt, Kimberly-Clark Corporation, Beiersdorf A.G. and Galderma S.A across Europe, Africa, and the Middle East. Having held senior roles such as General Manager Saudi Arabia, Managing Director Middle East West Asia and Regional President META, Adil brings deep expertise in navigating complex business environments.
                    <br />
                    <br />
                    As CEO, Adil leverages his experience to help SMEs thrive in the Middle East. Aurevant offers services including strategic planning, market entry strategies, business transformation, and brand development to drive success in competitive markets.
                    <br />
                    <br />
            </div>
            

            <div className="grid grid-cols-2 grid-rows-2 gap-10 max-w-full">
                        <AboutWidget 
                        num="24+"
                        body="years of experience" 
                        />
                        <AboutWidget 
                        num="30+"
                        body="Markets" 
                        />
                        <AboutWidget 
                        num="$300m"
                        body="in Business Managed" 
                        />
                        <AboutWidget 
                        num="15+"
                        body="Top Global Brands" 
                        />
                        
                        
            </div>
                
            </div>
        
    )
}
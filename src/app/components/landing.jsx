import Image from "next/image"
import LandingPic from '../media/Puzzle.png'

export default function Landing(){
    return(
        <div className=" flex flex-col py-5 h-[100% md:flex-row md:justify-between md:items-center md:align-middle">
            <div className="flex flex-col">
                <h1 className=" text-3xl lg:text-4xl font-light text-[#DCB64B]">Aurevant Holdings</h1>
                <h2 className=" text-5xl w-[5rem] lg:w-[50vw]  lg:text-6xl font-bold">Creating Exceptional Customer Value</h2>
                <br />
                <a className="p-2 bg-[#DCB64B] max-w-[10rem] rounded-md text-center text-black font-bold" href="">Get in Touch</a>
            </div>
            <div>
                <Image alt="image" src={LandingPic} width={500} className="my-auto w-[500px] lg:w-[1000px]"/>
            </div>
        </div>
    )
}
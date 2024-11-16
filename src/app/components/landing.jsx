import Image from "next/image"
import LandingPic from '../media/Puzzle.png'

export default function Landing(){
    return(
        // <div className="relative flex flex-col py-5 h-[100%] md:justify-center md:items-center md:align-middle">
<div className="flex h-[100%] w-[100%] justify-center align-middle m-auto items-center relative">
    {/* Text Container */}
    <div className="flex flex-col text-center items-center z-10">
        <h1 className="text-3xl lg:text-4xl font-light text-[#DCB64B]">Aurevant Holdings</h1>
        <h2 className="text-5xl lg:text-7xl font-bold w-[80%] lg:w-[50vw]">Creating Exceptional Customer Value</h2>
        <br />
        <a
            className="flex justify-center items-center aspect-[3] p-6 bg-[#DCB64B] max-w-[10rem] rounded-md text-center text-black font-bold"
            href="#"
        >
            Get in Touch
        </a>
    </div>
    {/* Background Image */}
    {/* <Image
        alt="Landing"
        src={LandingPic}
        width={500}
        className="absolute inset-0 m-auto opacity-30 w-[300px] lg:w-[600px]"
    /> */}
</div>

    )
}
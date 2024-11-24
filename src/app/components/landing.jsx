import Image from "next/image"
import LandingPic from '../media/Puzzle.png'

export default function Landing() {
    return (
        <div className="flex h-[100%] w-[100%] justify-center m-auto items-center align-middle text-center relative">
            {/* Text Container */}
            <div className="flex flex-col justify-center text-center items-center align-middle px-4 sm:px-8">
                
                <h2 className=" text-5xl">
                    Creating Exceptional Customer Value
                </h2>
                <br />
                <a
                    className="flex justify-center items-center aspect-[3] p-4 sm:p-6 bg-[#DCB64B] max-w-[10rem] sm:max-w-[12rem] rounded-md text-center text-black font-bold"
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
                className="absolute inset-0 m-auto opacity-30 w-[250px] sm:w-[350px] lg:w-[500px]"
            /> */}
        </div>
    );
}

    
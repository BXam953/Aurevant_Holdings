import Image from "next/image"
import LandingPic from '../media/Puzzle.png'

export default function Landing() {
    return (
        <div className="flex h-[100%] w-[100%] justify-center m-auto items-center align-middle text-center relative">
            {/* Text Container */}
            <div className="flex flex-col justify-center text-center items-center align-middle z-10 px-4 sm:px-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#DCB64B]">
                    Aurevant Holdings
                </h1>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold sm:w-[80%] ">
                {/* <h2 className="md:text-6xl text-4xl  font-bold"> */}
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

    
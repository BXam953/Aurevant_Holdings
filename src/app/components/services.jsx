import { FaRegLightbulb, FaChartLine, FaBullhorn } from 'react-icons/fa';
import { HiOutlinePresentationChartBar } from "react-icons/hi2";
import { MdPersonPin } from "react-icons/md";


import ServicesWidget from "./servicesWidg"

export default function Services({chilren}){
    return(
        <div className="h-full w-full flex flex-col justify-between">
            <h1 className=" text-3xl lg:text-4xl font-light text-white">Services</h1>

            <div className=" grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-5">
                <div className=" aspect-[3/2] w-full rounded-md h-full bg-transparent border-[#DCB64B] border-2 p-5 text-lg">
                    Aurevant offers a comprehensive 
                    suite of services designed to meet 
                    the diverse needs of our clients, 
                    including:
                </div>
                <ServicesWidget 
                icon={FaRegLightbulb}
                title="Strategic Planning"
                body="Comprehensive business planning 
                    and execution strategies for 
                    sustainable growth and success."
                />
               <ServicesWidget 
                icon={MdPersonPin}
                title="Executive Coaching"
                body="Personalized advisory services 
                        and coaching to enhance
                        leadership and organizational 
                        effectiveness."
                />
                <ServicesWidget 
                icon={FaChartLine}
                title="Market Strategy"
                body="Tailored go-to-market strategies 
                        focused on opportunities in Saudi-
                        Arabia and the UAE."
                />
                <ServicesWidget 
                icon={HiOutlinePresentationChartBar}
                title="Business Strategy"
                body="Support for restructuring initiatives 
                        to drive efficiency and improve 
                        operational performance."
                />
                <ServicesWidget 
                icon={FaBullhorn}
                title="Brand Development"
                body="End-to-end branding services, 
                        from design to development, for 
                        a cohesive brand identity."
                />
                
            </div>
        </div>
    )
}
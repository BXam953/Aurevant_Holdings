import { FaRegLightbulb, FaChartLine, FaBullhorn } from 'react-icons/fa';
import { HiOutlinePresentationChartBar } from "react-icons/hi2";
import { MdPersonPin } from "react-icons/md";


import ServicesWidget from "./servicesWidg"

export default function Services({chilren}){
    return(
        <div className="h-full w-full flex flex-col justify-center gap-5">
            <h1 className=" text-3xl lg:text-3xl font-light text-white">Aurevant offers a comprehensive 
                    suite of services designed to meet 
                    the diverse needs of our clients, 
                    including:</h1>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* <div className=" aspect-[3/2] w-full rounded-md h-full bg-transparent border-[#DCB64B] border-2 p-5 text-lg text-yellow-500">
                    Aurevant offers a comprehensive 
                    suite of services designed to meet 
                    the diverse needs of our clients, 
                    including:
                </div> */}
                {/* <div className=" aspect-[3/2] w-full rounded-md h-full bg-transparent text-lg text-yellow-500 flex flex-col gap-5">
                <h1 className=" text-3xl lg:text-4x font-bold text-yellow-500">Services</h1>
                <div className=" aspect-[3/2] w-full rounded-md h-full bg-transparent text-lg text-white">
                    Aurevant offers a comprehensive 
                    suite of services designed to meet 
                    the diverse needs of our clients, 
                    including:
                </div> 
                </div> */}

                {/* <ServicesWidget 

                title="Services"
                body="Aurevant offers a comprehensive 
                    suite of services designed to meet 
                    the diverse needs of our clients, 
                    including:"
                /> */}
                
                <ServicesWidget 
                icon={FaRegLightbulb}
                title="Strategic Business Planning"
                body="Comprehensive business planning 
                    and execution strategies for 
                    sustainable growth and success."
                />
                <ServicesWidget 
                icon={FaRegLightbulb}
                title="Interim Management"
                body="Choose from a range of contract options from 3 months to permanent engagement tailored to your business needs"
                />
                
               
                <ServicesWidget 
                icon={FaChartLine}
                title="Commercial Execution and Route to Market Planning"
                body="Tailored go-to-market strategies 
                        focused on opportunities in Saudi-
                        Arabia and the UAE."
                />
                <ServicesWidget 
                icon={MdPersonPin}
                title="Executive Mentoring"
                body="Personalized advisory services 
                        and coaching to enhance
                        leadership and organizational 
                        effectiveness."
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
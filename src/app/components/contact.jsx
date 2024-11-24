"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        body: ""
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Email sent successfully!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    subject: "",
                    body: ""
                });
            } else {
                setStatus("Failed to send email.");
            }
        } catch (error) {
            setStatus("Error occurred while sending email.");
        }
    };

    return (
        <div className="h-full w-full flex flex-col justify-between gap-10">
            <h1 className="text-3xl lg:text-4xl font-light text-white">Contact</h1>
            <div className="h-full md:flex gap-10 md:justify-start top-0">
                <div className="flex flex-col gap-10 justify-start">
                    <p className="text-lg">
                        Ready to take the next step? Let’s connect and explore how we can help you achieve your goals.
                    </p>
                    <a className="p-3 bg-yellow-500 aspect-[12/2] w-[200px] flex justify-center align-middle text-black font-bold rounded-lg" href="https://calendly.com/admin-aurevantholdings/30min" target="_blank">
                        Schedule Your Call!
                    </a>
                    <p className="text-lg">Or, Send us an Email:</p>
                </div>
                <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-between">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-black text-black"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-black"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-black"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-4">
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-black"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-4 flex-grow">
                        <textarea
                            id="body"
                            name="body"
                            placeholder="Type your message here..."
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-black h-full"
                            value={formData.body}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Send
                        </button>
                    </div>
                </form>
                {status && <p className="mt-4">{status}</p>}
            </div>
        </div>
    );
}

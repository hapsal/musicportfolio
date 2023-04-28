import React from "react";


const Contact = () => {
    return (
        <main className="flex justify-center min-h-screen">
            <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                        <span className="text-gray-700">Name</span>
                        <span className="text-gray-500 text-xs"> (Required)</span>
                        <input type="text" className="mt-1 block w-full" placeholder="Name" required/>
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Subject</span>
                        <span className="text-gray-500 text-xs"> (Required)</span>
                        <input type="text" className="mt-1 block w-full" placeholder="Subject" required/>
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Email address</span>
                        <span className="text-gray-500 text-xs"> (Required)</span>
                        <input type="email" className="mt-1 block w-full" placeholder="john@example.com" required/>
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Message</span>
                        <span className="text-gray-500 text-xs"> (Required)</span>
                        <textarea className="mt-1 block w-full" rows="3" placeholder="Enter your message" required></textarea>
                    </label>
                    <label className="block">
                        <button className="mt-1 block rounded-md drop-shadow-md bg-amber-600 text-black-900 text-lg-thin max-w-full px-4 py-2">Send</button>
                    </label>
                </div>
            </div>
        </main>
    )
}

export default Contact
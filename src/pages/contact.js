import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion"


const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [success, setSuccess] = useState()

    const onSubmit = (data) => {{
        console.log(data)
        reset()
        setSuccess(true)
    }}

    return (
        <main className="flex justify-center min-h-screen">
            <div className="mt-8 max-w-md">
                    <form method="post" autoComplete="off" onSubmit={e => e.preventDefault()}> 
                        <div className="grid grid-cols-1 gap-6">
                            <label className="block">
                                <span className="text-gray-700">Name</span>
                                <span className="text-gray-500 text-xs"> (Required)</span>
                                <input type="text" className="mt-1 block w-full" placeholder="Name" id="name" 
                                required 
                                {...register("name", {required: true, maxLength: 40})}
                                />
                                <AnimatePresence mode="wait" initial={false}>
                                    {errors.name && 
                                    <motion.p role="alert" className="flex items-center gap-1 px-2 mt-1 font-semibold text-red-500 bg-red-100 rounded-md"
                                    initial={{opacity: 0, y: 10}} 
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: 10}}
                                    transition={{ duration: 0.2, type: "spring", stiffness: 120  }}
                                    >
                                    Name is required
                                    </motion.p>}
                                </AnimatePresence>
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Subject</span>
                                <span className="text-gray-500 text-xs"> (Required)</span>
                                <input type="text" className="mt-1 block w-full" placeholder="Subject" id="subject" 
                                required 
                                {...register("subject", {required: true, maxLength: 40})}
                                />
                                <AnimatePresence mode="wait" initial={false}>
                                    {errors.subject && 
                                    <motion.p role="alert" className="flex items-center gap-1 px-2 mt-1 font-semibold text-red-500 bg-red-100 rounded-md"
                                    initial={{opacity: 0, y: 10}} 
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: 10}}
                                    transition={{ duration: 0.2, type: "spring", stiffness: 120  }}
                                    >
                                    Subject is required
                                    </motion.p>}
                                </AnimatePresence>
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Email address</span>
                                <span className="text-gray-500 text-xs"> (Required)</span>
                                <input type="email" className="mt-1 block w-full" placeholder="john@example.com" id="email" 
                                required
                                {...register("email", {required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                                />
                                <AnimatePresence mode="wait" initial={false}>
                                    {errors.email && 
                                    <motion.p role="alert" className="flex items-center gap-1 px-2 mt-1 font-semibold text-red-500 bg-red-100 rounded-md"
                                    initial={{opacity: 0, y: 10}} 
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: 10}}
                                    transition={{ duration: 0.2, type: "spring", stiffness: 120  }}
                                    >
                                    Email is required
                                    </motion.p>}
                                </AnimatePresence>
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Message</span>
                                <span className="text-gray-500 text-xs"> (Required)</span>
                                <textarea className="mt-1 block w-full" rows="3" placeholder="Enter your message" id="message" 
                                required
                                {...register("message", {required: true, maxLength: 1000})}
                                ></textarea>
                                <AnimatePresence mode="wait" initial={false}>
                                    {errors.message && 
                                    <motion.p role="alert" className="flex items-center gap-1 px-2 mt-1 font-semibold text-red-500 bg-red-100 rounded-md"
                                    initial={{opacity: 0, y: 10}} 
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: 10}}
                                    transition={{ duration: 0.2, type: "spring", stiffness: 120  }}
                                    >
                                    Message is required
                                    </motion.p>}
                                </AnimatePresence>
                            </label>
                            <div>
                                {success && (
                                    <p className="flex items-center font-semibold text-green-500">Form has been submitted successfully</p>
                                )}
                            </div>
                            <label className="block">
                                <button onClick={handleSubmit(onSubmit)} className="mt-1 block rounded-md drop-shadow-md bg-amber-600 text-black-900 text-lg-thin max-w-full px-4 py-2">Send</button>
                            </label>
                        </div>
                    </form>
            </div>
        </main>
    )
}

export default Contact
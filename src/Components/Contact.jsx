import React, { useState } from 'react';
import emailjs from "emailjs-com";
import toast from "react-hot-toast"

const Contact = () => {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target,
            import.meta.env.VITE_PUBLIC_KEY).then((result) => {
                toast.success("Message sent!")
                setInputData({ name: "", email: "", phone: "", message: "" })
            })
            .catch(() => toast.error("Oops! Something Went Wrong. Please try again"))
    }
    return (
        <div id='contact' className='md:bg-contact bg-contact w-[300%] bg-cover bg-center bg-no-repeat max-w-[1343px] h-[605px]'>
            <div className='text-white backdrop-filter  pt-[135px]'>
                <div className='md:mx-[450px] mx-[290px] rounded-xl backdrop-filter backdrop-blur'>
                    <h1 className='text-center font-serif text-[50px] '>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='font-serif'>
                            <input
                                type="text"
                                name="name"
                                required
                                value={inputData.name}
                                onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                                placeholder="Your Full Name"
                                className="input input-ghost
                                 border w-full max-w-xs mx-[65px] mt-3 "

                            />
                            <input
                                type="text"
                                name="email"
                                required
                                value={inputData.email}
                                onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                                placeholder="Your Email"
                                className="input input-ghost border w-full max-w-xs mx-[65px] mt-3 "
                            />
                            <input
                                type="text"
                                name="phone"
                                required
                                value={inputData.phone}
                                onChange={(e) => setInputData({ ...inputData, phone: e.target.value })}
                                placeholder="Your Phone Number"
                                className="input input-ghost border w-full max-w-xs mx-[65px] mt-3"
                            />
                            <textarea
                                message="message"
                                name="message"
                                required
                                value={inputData.message}
                                onChange={(e) => setInputData({ ...inputData, message: e.target.value })}
                                className="textarea textarea-ghost border w-[320px] mx-[65px] mt-3"
                                placeholder="Write Your Message..."></textarea>

                        </div>
                        <div>
                            <button className="btn btn-active btn-ghost mx-[65px] mt-3">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

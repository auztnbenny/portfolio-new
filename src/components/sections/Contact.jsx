import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { CustomButton } from "../buttons/CustomButton";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaMedium } from "react-icons/fa6";
import { sendEmail } from "../../services/email";
import { useState, useEffect } from "react";
import SectionHeader from "../ui/SectionHeader";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Toast from "../ui/Toast";

const Contact = () => {
    const [alert, setAlert] = useState('');
    const control = useAnimation();
    const [ref, inView] = useInView();
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.8 }
        },
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const handleSendMessage = async (event) => {
        event.preventDefault();

        if (!formData.email || !formData.subject || !formData.message) {
            setAlert('Please fill in all fields.');
            setTimeout(() => {
                setAlert('');
            }, 3000);
            return;
        }

        const response = await sendEmail(formData);

        setAlert(response);
        setFormData({ email: '', subject: '', message: '' });

        setTimeout(() => {
            setAlert('');
        }, 3000);
    }

    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8 pb-28" id="contact">
            <SectionHeader title={"Contact."} subtitle={"Connect with Me"} />
            

            <div className="flex items-stretch justify-center" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={control}
                    className="grid md:grid-cols-2 px-5 md:px-0">
                    <div className="pr-6">
                        <p className="mt-3 mb-12 text-base text-secondary-text text-center md:text-left">
                            I'd be happy to connect! Feel free to reach out for project inquiries, collaboration opportunities, or any other questions you may have.
                        </p>

                        <ul className="mb-6 md:mb-0">
                            {contactData.map((item, idx) =>
                                <Link to={item.path} key={idx}>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-primary-text">
                                            {item.icon}
                                        </div>

                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-primary-text">
                                                {item.title}
                                            </h3>
                                            <p className="text-secondary-text">
                                                {item.info}
                                            </p>
                                        </div>
                                    </li>
                                </Link>
                            )}
                        </ul>
                        <div className="flex items-center">
                            <Toast message={alert} />
                        </div>
                    </div>

                    <form className="space-y-8" noValidate>
                        {/* Input Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-base font-medium text-secondary-text">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="shadow-sm bg-third border border-third text-primary-text text-base rounded-lg focus:ring-primary-500 block w-full p-2.5 placeholder-secondary-text focus:outline-none focus:right-2 focus:border-secondary" placeholder="email here"
                                required
                                value={formData.email}
                                onChange={handleChange} />
                        </div>

                        {/* Subject Input */}
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-base font-medium text-secondary-text"
                            >
                                Subject
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="block p-3 w-full text-base text-primary-text bg-third rounded-lg border border-third shadow-sm placeholder-secondary-text focus:outline-none focus:right-2 focus:border-secondary"
                                placeholder="subject here"
                                required
                                value={formData.subject}
                                onChange={handleChange} />
                        </div>

                        {/* Message Input */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-base font-medium text-secondary-text"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                className="block p-2.5 w-full text-base text-primary-text bg-third rounded-lg shadow-sm border border-third placeholder-secondary-text focus:outline-none focus:right-2 focus:border-secondary"
                                placeholder="your message..."
                                value={formData.message}
                                onChange={handleChange}
                                required >
                            </textarea>
                        </div>

                        <CustomButton
                            label={'Send message'}
                            onClick={handleSendMessage}
                        />
                    </form>
                </motion.div>
            </div>
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-primary-text mb-4">Find Me Here</h3>
                <div className="w-full h-96">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.9547402534536!2d75.28321807482979!3d12.31883328793982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba461e7ebae811d%3A0xd9b2b6d37708c4ed!2sVALIPLACKAL%20HOME!5e0!3m2!1sen!2sin!4v1727860285275!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    )
}

const contactData = [
    {
        title: "Email",
        icon: <MdEmail size={24} />,
        info: "austinbenny10@gmail.com",
        path: "mailto:austinbenny10@gmail.com"
    },
    {
        title: "LinkedIn",
        icon: <FaLinkedin size={24} />,
        info: "@austinbenny",
        path: "https://www.linkedin.com/in/austinbenny/"
    },
    {
        title: "GitHub",
        icon: <FaGithub size={24} />,
        info: "@austinbenny",
        path: "https://github.com/auztnbenny"
    },
];

export default Contact
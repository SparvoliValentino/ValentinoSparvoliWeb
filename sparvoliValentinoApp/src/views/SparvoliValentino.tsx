
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FotoPerfil from "../assets/FotoPerfil_Valentino_Sparvoli.jpeg"
import InDev from "../assets/InDev.png"
// import swaggerLogo from "../assets/swaggerLogo.png"

import CybergamesApp from "../assets/cybergamesApp.png"
import AppleHeavenApp from "../assets/AppleHeaven.png"
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import MondBanner from "../assets/MondBanner.png"
// import CardProject from "../Components/CardProject";
import file from "../../public/CV.pdf"
import { useState } from "react";

const SparvoliValentino = () => {

    type OptionType = "History" | "Soft Skills" | "Hobbies";

    const [selectedOption, setSelectedOption] = useState<OptionType>("History");
    const handleFileDownload = () => {
        const fileUrl = file; // Ruta del archivo en la carpeta public
        const fileName = "Sparvoli_Valentino_CV.pdf"; // Nombre del archivo descargado

        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const studies = [
        {
            year: '2022',
            title: 'Game developer and programmer',
            description: 'Career completed at UAI. Creation and programming of video games.',
            link: "https://registrograduados.siu.edu.ar/consulta.php?ah=st6532db7841e442.29748021&ai=registro_dngu%7C%7C92000001&tcm=popup&cGFyYW1ldHJv=eyJpZF90cmFtaX"
        },
        {
            year: '2023',
            title: 'Basic course in HTML, CSS, and JS.',
            description: 'Course from the institution Aprender a Programar where a basic web application was created using these technologies.',
            link: "https://drive.google.com/file/d/1231lnzbn3HcYy795d9_iPthtmzS7z1my/view"

        },
        {
            year: '2024',
            title: 'Fullstack Web Dev',
            description: 'Henry Bootcamp, where I graduated with a Fullstack Web Developer degree, specializing in Frontend using Next.js, Tailwind, and TypeScript.',
            link: "https://view.pok.tech/c/557989a3-fc29-4930-91dc-818814002da0"
        },
    ];

    const content = {
        History: "I am a young enthusiast of technology and programming. At the age of 18, I began studying video game programming, a field in which I graduated, and later I developed an interest in and directed my focus toward web programming. I am a passionate individual who has dedicated effort and enthusiasm to the world of programming since the very beginning. From a young age, I knew this was where I wanted to be.",
        "Soft Skills": "I consider myself a person who is constantly learning, always seeking teamwork and promoting communication as a fundamental pillar of any group. I am highly self-taught, although I greatly enjoy learning in collaboration with others.",
        Hobbies: "In my free time, I enjoy playing video games, a passion I've had since I was a child. I also like certain sports, such as basketball, both watching and playing it.",
    };

    return (
        <div className=" w-full bg-gradient-to-br from-black via-gray-800 to-blue-600">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center">
                {/* Informacion basica e imagen */}
                <div className="w-full flex justify-start items-center h-[350px]">
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={FotoPerfil} alt="ProfilePicture" className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-full" />
                    </div>
                    <div className="w-1/2 flex flex-col justify-start items-center mr-5">
                        <h2 className="text-white font-bold text-[15px] md:text-[30px] w-full">Hi! Im Sparvoli Valentino</h2>
                        <p className="text-white mt-4 text-[10px] md:text-[20px]">I am a <strong>Full Stack Developer in training</strong>, specializing in <strong>Front-End</strong> development. Passionate about technology, web design, and creating interfaces that connect people with innovative solutions.</p>
                        <ul className="w-full flex justify-evenly items-center mt-7 ">
                            <a href="https://github.com/SparvoliValentino"><FontAwesomeIcon icon={faGithub} className="text-gray-400 text-[30px] hover:text-[40px] hover:text-white" /></a>
                            <a href="https://www.linkedin.com/in/valentino-sparvoli-088846219/"><FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-white text-[30px] hover:text-[40px]" /></a>
                            <div className="flex justify-end items-end gap-1 cursor-pointer ">
                                <FontAwesomeIcon icon={faFile} className="text-gray-400 hover:text-white hover:text-[40px] text-[30px]" onClick={handleFileDownload} />
                                <p className="text-gray-400 font-bold">CV</p>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* Proyectos */}






                <div className="flex flex-col justify-evenly items-center gap-10" id="projects">
                    <div className="w-4/5 md:w-full flex items-center my-4 md:my-8">
                        <div className="flex-grow border-[1px] md:border-2 border-white rounded-l-full"></div>
                        <span className="px-4 text-white text-[35px] md:text-[50px] font-bold">Projects</span>
                        <div className="flex-grow border-[1px] md:border-2 border-white rounded-r-full"></div>
                    </div>
                    <div className="flex flex-wrap gap-10 justify-center items-center">
                        <div className="w-[300px] md:w-[400px] md:max-h-[390px] md:min-h-[390px] group bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500">
                            <div className="overflow-hidden">
                                <a href="https://pf-ecommerce2024.vercel.app/">
                                    <img
                                        src={CybergamesApp}
                                        alt="Cybergames"
                                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                </a>
                            </div>

                            <div className="p-4">
                                <h3 className="text-white text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-300">Cybergames</h3>
                                <p className="text-gray-400 text-sm mb-2">Video game e-commerce developed for Henry's final project.</p>

                                <ul className="flex flex-wrap gap-2 text-xs text-gray-300 mb-3">
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">React</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Tailwind</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Typescript</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Next.JS</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Nest.JS</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Auth0</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Cloudinary</li>
                                </ul>

                                <div className="flex gap-4 text-sm text-blue-400">
                                    <a href="https://github.com/Alejandro-MCejas/PF-Ecommerce" target="_blank" className="hover:underline">GitHub</a>
                                    <a href="https://pf-ecommerce2024.vercel.app/" target="_blank" className="hover:underline">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] md:w-[400px] max-h-[390px] min-h-[390px] group bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500">
                            <div className="overflow-hidden">
                                <a href="https://pf-ecommerce2024.vercel.app/">
                                    <img
                                        src={MondBanner}
                                        alt="Cybergames"
                                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                </a>
                            </div>

                            <div className="p-4">
                                <h3 className="text-white text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-300">MOND</h3>
                                <p className="text-gray-400 text-sm mb-2">E-commerce for clothing and accessories.</p>

                                <ul className="flex flex-wrap gap-2 text-xs text-gray-300 mb-3">
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">React</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Tailwind</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Typescript</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Next.JS</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Google Api</li>
                                </ul>

                                <div className="flex gap-4 text-sm text-blue-400">
                                    <a href="https://github.com/SparvoliValentino/ImportedSN" target="_blank" className="hover:underline">GitHub</a>
                                    <a href="https://mondsn.vercel.app/" target="_blank" className="hover:underline">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] md:w-[400px]  max-h-[390px] min-h-[390px] group bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500">
                            <div className="overflow-hidden">
                                <a href="https://ecommerce-apple-heaven-26yb.vercel.app/">
                                    <img
                                        src={AppleHeavenApp}
                                        alt="Cybergames"
                                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                </a>
                            </div>

                            <div className="p-4">
                                <h3 className="text-white text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-300">Apple Heaven</h3>
                                <p className="text-gray-400 text-sm mb-2">E-commerce for technologie.</p>

                                <ul className="flex flex-wrap gap-2 text-xs text-gray-300 mb-3">
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">React</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Tailwind</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Typescript</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Next.JS</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Express</li>
                                </ul>

                                <div className="flex gap-4 text-sm text-blue-400">
                                    <a href="https://github.com/SparvoliValentino/ecommerce-appleHeaven" target="_blank" className="hover:underline">GitHub</a>
                                    <a href="https://ecommerce-apple-heaven-26yb.vercel.app/" target="_blank" className="hover:underline">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] md:w-[400px]  max-h-[390px] min-h-[390px] group bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500">
                            <div className="overflow-hidden">
                                <a href="https://ecommerce-apple-heaven-26yb.vercel.app/">
                                    <img
                                        src={InDev}
                                        alt="Cybergames"
                                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                </a>
                            </div>

                            <div className="p-4">
                                <h3 className="text-white text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-300">Consultorio Sparvoli</h3>
                                <p className="text-gray-400 text-sm mb-2">In development...</p>

                                <ul className="flex flex-wrap gap-2 text-xs text-gray-300 mb-3">
                                    {/* <li className="bg-gray-700 px-2 py-0.5 rounded">React</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Tailwind</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Typescript</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Next.JS</li>
                                    <li className="bg-gray-700 px-2 py-0.5 rounded">Express</li> */}
                                </ul>

                                <div className="flex gap-4 text-sm text-blue-400">
                                    <a href="" target="_blank" className="hover:underline">GitHub</a>
                                    <a href="" target="_blank" className="hover:underline">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 min-h-[820px]" id="studies">
                    {/* <h2 className='text-white text-[50px] font-bold'>My studies</h2> */}
                    <div className="w-4/5 md:w-full flex items-center my-8">
                        <div className="flex-grow border-[1px] md:border-2 border-white rounded-l-full"></div>
                        <span className="px-4 text-white text-[35px] md:text-[50px] font-bold">Studies</span>
                        <div className="flex-grow border-[1px] md:border-2 border-white rounded-r-full"></div>
                    </div>
                    <div className="flex flex-col items-center py-8 relative max-h-[550px] ">
                        {/* Center line behind the cards */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500 z-0"></div>
                        {studies.map((study, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-2 mb-6 relative ${index % 2 === 0 ? 'flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Year Circle */}
                                <div className="bg-blue-500 text-white w-9 h-9 p-10 rounded-full flex items-center justify-center text-lg font-bold shadow-lg z-10">
                                    {study.year}
                                </div>
                                {/* Card Content */}
                                <div
                                    className={`bg-white shadow-lg rounded-lg p-6 w-2/3 z-10 ${index % 2 === 0 ? 'ml-8' : 'mr-8'
                                        }`}
                                >
                                    <h3 className="text-xl font-semibold">{study.title}</h3>
                                    <p className="text-gray-600 mt-2">{study.description}</p>
                                    <a href={study.link} className="text-blue-500">View the certificate</a>
                                    {/* <p className="text-blue-500">{study.link}</p> */}
                                </div>
                            </div>
                        ))}
                        {/* "NOW" Circle at the bottom */}
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                                NOW
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center mt-64 md:mt-0">
                    {/* <h2 className='text-white text-[50px] font-bold'>Technologies</h2> */}
                    <div className="w-4/5 md:w-full flex items-center my-8">
                        <div className="flex-grow border-[1px] md:border-2 border-white rounded-l-full"></div>
                        <span className="px-4 text-white text-[35px] md:text-[50px] font-bold">Technologies</span>
                        <div className="flex-grow border-[1px] md:border-2 border-white rounded-r-full"></div>
                    </div>
                    <div className="w-full p-4 flex justify-center flex-wrap gap-3">
                        <ul className="flex justify-center items-center flex-wrap gap-2 text-xs text-gray-300 mb-3">
                            <li className="bg-gray-700 p-4 rounded font-poppins text-[30px] font-bold hover:border-2 hover:border-blue-600">React</li>
                            <li className="bg-gray-700 p-4 rounded font-poppins text-[30px] font-bold hover:border-2 hover:border-blue-600">Next.js</li>
                            <li className="bg-gray-700 p-4 rounded font-poppins text-[30px] font-bold hover:border-2 hover:border-blue-600">Nest.js</li>
                            <li className="bg-gray-700 p-4 rounded font-poppins text-[30px] font-bold hover:border-2 hover:border-blue-600">Tailwind</li>
                            <li className="bg-gray-700 p-4 rounded font-poppins text-[30px] font-bold hover:border-2 hover:border-blue-600">CSS</li>
                            <li className="bg-gray-700 p-4 rounded font-poppins text-[30px] font-bold hover:border-2 hover:border-blue-600">Typescript</li>
                            <li className="bg-gray-700 p-4 rounded font-poppins text-[30px] font-bold hover:border-2 hover:border-blue-600">Javascript</li>
                            <li className="bg-gray-700 p-4 rounded font-poppins text-[30px] font-bold hover:border-2 hover:border-blue-600">MongoDB</li>
                            <li className="bg-gray-700 p-4 rounded font-poppins text-[30px] font-bold hover:border-2 hover:border-blue-600">Express</li>
                            <li className="bg-gray-700 p-4 rounded font-poppins text-[30px] font-bold hover:border-2 hover:border-blue-600">HTML</li>
                            <li className="bg-gray-700 p-4 rounded font-poppins text-[30px] font-bold hover:border-2 hover:border-blue-600">MPCheckout</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center min-h-[400px] my-6" id="aboutme">
                    <div className="w-4/5 md:w-full flex items-center my-8">
                        <div className="flex-grow border-[1px] md:border-2 border-white rounded-l-full"></div>
                        <span className="px-4 text-white text-[35px] md:text-[50px] font-bold">About me</span>
                        <div className="flex-grow border-[1px] md:border-2 border-white rounded-r-full"></div>
                    </div>
                    <div className="w-3/4 max-w-[700px] md:w-full flex md:flex-row flex-col mt-8">
                        {/* Menú izquierdo */}
                        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-7">
                            {Object.keys(content).map((option) => (
                                <button
                                    key={option}
                                    className={`py-4 px-4 text-center text-white text-[10px] md:text-[20px] font-bold border-2 border-gray-200 rounded-md hover:bg-gray-700 ${selectedOption === option ? "" : ""
                                        }`}
                                    onClick={() => setSelectedOption(option as OptionType)} // Asegura el tipo aquí
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        {/* Contenido dinámico */}
                        <div className="w-full md:w-3/4 flex flex-col p-6 text-white">
                            <h2 className="text-center text-xl md:text-2xl font-bold mb-4">{selectedOption}</h2>
                            <p className="md:text-lg text-justify">{content[selectedOption]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SparvoliValentino;
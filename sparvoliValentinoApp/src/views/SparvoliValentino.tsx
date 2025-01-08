
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FotoPerfil from "../assets/FotoPerfil_Valentino_Sparvoli.jpeg"
// import CybergamesLogo from "../assets/emoji-removebg-preview.png"
import nextJsLogo from "../assets/next.jsLogo.png"
import nestJsLogo from "../assets/nestjsLogo.png"
import mpLogo from "../assets/mpLogo.png"
import cloudinaryLogo from "../assets/cloduinaryLogo.png"
import swaggerLogo from "../assets/swaggerLogo.png"
import auth0Logo from "../assets/auth0Logo.png"
import CybergamesApp from "../assets/cybergamesApp.png"
import AppleHeavenApp from "../assets/AppleHeaven.png"
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFigma, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import mongoDB from '../assets/mongoDB.png'
import reactLogo from '../assets/react.svg'
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
        <div className=" w-full flex flex-col justify-center items-center">
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
            <div className="flex flex-col justify-evenly items-center gap-10">
                <div className="w-4/5 md:w-full flex items-center my-4 md:my-8">
                    <div className="flex-grow border-[1px] md:border-2 border-white rounded-l-full"></div>
                    <span className="px-4 text-white text-[35px] md:text-[50px] font-bold">Projects</span>
                    <div className="flex-grow border-[1px] md:border-2 border-white rounded-r-full"></div>
                </div>
                <div className="p-2 md:p-0">
                    <div className="w-full min-h-[200px] rounded-lg flex flex-col md:flex-row border-[1px] md:border-2 border-blue-500 md:shadow-md md:shadow-blue-300">
                        <div className="w-full md:w-2/3 min-h-[200px] p-3 flex flex-col justify-evenly relative">
                            <div className="absolute -top-5 md:-top-6  bg-gray-900 px-2 z-10">
                                <h2 className="font-bold text-violet-500 text-[25px] md:text-[30px] tracking-widest">CyberGamer</h2>
                            </div>
                            <p className="font-regular text-white text-[15px] text-justify mt-2">Cybergames is an app developed for Henry's final project in Fullstack Web Developer. The app consists of a video game e-commerce where the user can buy products and subscribe to a service using real money. See the
                                <a href="https://github.com/Alejandro-MCejas/PF-Ecommerce" className="text-blue-500"> repository</a>
                            </p>
                            <div className="flex gap-2 mt-2">
                                <p className="font-thin text-white text-[15px]">Development time:</p>
                                <p className="font-thin text-white text-[15px]">4 weeks</p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <p className="font-thin text-white">Tecnologies used:</p>
                                <div className="max-w-full flex-wrap flex gap-4 p-2">
                                    <img src={nextJsLogo} alt="Next.js" className="w-[40px] h-[40px] " />
                                    <img src={nestJsLogo} alt="Nest.js" className="w-[60px] h-[40px]" />
                                    <img src={mpLogo} alt="Mercado pago checkout pro" className="w-[40px] h-[40px]" />
                                    <img src={cloudinaryLogo} alt="Cloudinary" className="w-[60px] h-[40px]" />
                                    <FontAwesomeIcon icon={faFigma} className="text-[40px]" />
                                    <img src={swaggerLogo} alt="Swagger" className="w-[40px] h-[40px]" />
                                    <img src={auth0Logo} alt="Auth0" className="w-[40px] h-[40px]" />
                                </div>
                            </div>
                        </div>
                        <div className="w-3/4 mx-auto md:w-1/3 min-h-[200px] p-4 md:p-2">
                            <a href="https://pf-ecommerce2024.vercel.app/"><img src={CybergamesApp} alt="" className="w-full h-full rounded-md" /></a>
                        </div>

                    </div>
                </div>
                <div className="p-2 md:p-0">
                    <div className="w-full min-h-[200px] rounded-lg flex flex-col md:flex-row border-[1px] md:border-2 border-blue-500 md:shadow-md md:shadow-blue-300">
                        <div className="w-full md:w-2/3  min-h-[200px] p-3 flex flex-col justify-evenly relative">
                            <div className="absolute -top-6 bg-gray-900 px-2 z-10">
                                <h2 className="font-bold text-violet-500 text-[25px] md:text-[30px] tracking-widest">Apple Heaven</h2>
                            </div>
                            <p className="font-regular text-white text-[15px] text-justify mt-2">Apple Heaven is an e-commerce project developed for the fourth module of Henry. It showcases a fictional commerce test where we can buy Apple products by creating an account, placing orders, and interacting with the entire site. See the
                                <a href="https://github.com/SparvoliValentino/ecommerce-appleHeaven" className="text-blue-500"> repository</a>
                            </p>
                            <div className="flex gap-2 mt-2">
                                <p className="font-thin text-white text-[15px]">Development time:</p>
                                <p className="font-thin text-white text-[15px]">4 weeks</p>
                            </div>
                            <div className="flex gap-4 flex-col  md:flex-row">
                                <p className="font-thin text-white">Tecnologies used:</p>
                                <div className="flex gap-4 p-2 flex-wrap">
                                    <img src={nextJsLogo} alt="Next.js" className="w-[40px] h-[40px] " />
                                    <FontAwesomeIcon icon={faFigma} className="text-[40px]" />
                                </div>
                            </div>
                        </div>
                        <div className="w-3/4 mx-auto md:w-1/3 min-h-[200px] p-2 ">
                            <a href="https://ecommerce-apple-heaven-26yb.vercel.app/"><img src={AppleHeavenApp} alt="" className="w-full h-full rounded-md" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 min-h-[820px]">
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

            <div className="w-full flex flex-col justify-center items-center">
                {/* <h2 className='text-white text-[50px] font-bold'>Technologies</h2> */}
                <div className="w-full flex items-center my-8">
                    <div className="flex-grow border-2 border-white rounded-l-full"></div>
                    <span className="px-4 text-white text-[50px] font-bold">Technologies</span>
                    <div className="flex-grow border-2 border-white rounded-r-full"></div>
                </div>
                <div className="w-full p-4 flex justify-center flex-wrap gap-3">
                    <div className="w-[200px] h-[170px] bg-gray-500 hover:bg-blue-600 flex-col rounded-xl shadow-md transform transition duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
                        <img src={nextJsLogo} alt="" className="w-[100px] h-[100px]" />
                        <h2 className="text-white font-semibold text-[25px]">Next.JS</h2>
                    </div>
                    <div className="w-[200px] h-[170px] bg-gray-500 hover:bg-blue-600 flex-col rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
                        <img src={nestJsLogo} alt="" className="w-[100px] h-[100px]" />
                        <h2 className="text-white font-semibold text-[25px]">Nest.JS</h2>
                    </div>
                    <div className="w-[200px] h-[170px] bg-gray-500 hover:bg-blue-600 flex-col rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
                        <FontAwesomeIcon icon={faFigma} className="text-[100px]" />
                        <h2 className="text-white font-semibold text-[25px]">Figma</h2>
                    </div>
                    <div className="w-[200px] h-[170px] bg-gray-500 hover:bg-blue-600 flex-col rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
                        <img src={cloudinaryLogo} alt="" className="w-[100px] h-[100px]" />
                        <h2 className="text-white font-semibold text-[25px]">Cloudinary</h2>
                    </div>
                    <div className="w-[200px] h-[170px] bg-gray-500 hover:bg-blue-600 flex-col rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
                        <img src={mongoDB} alt="" className="w-[100px] h-[100px]" />
                        <h2 className="text-white font-semibold text-[25px]">Mongo DB</h2>
                    </div>
                    <div className="w-[200px] h-[170px] bg-gray-500 hover:bg-blue-600 flex-col rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
                        <img src={mpLogo} alt="" className="w-[100px] h-[100px]" />
                        <h2 className="text-white font-semibold text-[25px]">Mercado Pago</h2>
                    </div>
                    <div className="w-[200px] h-[170px] bg-gray-500 hover:bg-blue-600 flex-col rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
                        <img src={auth0Logo} alt="" className="w-[100px] h-[100px]" />
                        <h2 className="text-white font-semibold text-[25px]">Auth0</h2>
                    </div>
                    <div className="w-[200px] h-[170px] bg-gray-500 hover:bg-blue-600 flex-col rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 flex items-center justify-center">
                        <img src={reactLogo} alt="" className="w-[100px] h-[100px]" />
                        <h2 className="text-white font-semibold text-[25px]">Auth0</h2>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center min-h-[400px]">
                {/* <h2 className="text-white text-[50px] font-bold">About me</h2> */}
                <div className="w-full flex items-center my-8">
                    <div className="flex-grow border-2 border-white rounded-l-full"></div>
                    <span className="px-4 text-white text-[50px] font-bold">About me</span>
                    <div className="flex-grow border-2 border-white rounded-r-full"></div>
                </div>
                <div className="w-full bg-gray-900 flex mt-8">
                    {/* Menú izquierdo */}
                    <div className="w-1/4 flex flex-col gap-7">
                        {Object.keys(content).map((option) => (
                            <button
                                key={option}
                                className={`py-4 px-4 text-center text-white font-bold border-2 border-gray-200 rounded-md hover:bg-gray-700 ${selectedOption === option ? "" : ""
                                    }`}
                                onClick={() => setSelectedOption(option as OptionType)} // Asegura el tipo aquí
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {/* Contenido dinámico */}
                    <div className="w-3/4 flex flex-col p-6 text-white">
                        <h2 className="text-2xl font-bold mb-4">{selectedOption}</h2>
                        <p className="text-lg text-justify">{content[selectedOption]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SparvoliValentino;
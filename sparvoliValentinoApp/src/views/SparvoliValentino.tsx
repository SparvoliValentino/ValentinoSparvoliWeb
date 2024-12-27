
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
// import CardProject from "../Components/CardProject";
import file from "../../public/CV.pdf"
const SparvoliValentino = () => {
    
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


    return (
        <div className=" w-full flex flex-col justify-center items-center">
            {/* Informacion basica e imagen */}
            <div className="w-full flex justify-start items-center h-[350px]">
                <div className="w-1/2 flex justify-center items-center">
                    <img src={FotoPerfil} alt="ProfilePicture" className="w-[200px] h-[200px] rounded-full" />
                </div>
                <div className="w-1/2 flex flex-col justify-start items-center">
                    <h2 className="text-white font-bold text-[30px] w-full">Hi! Im Sparvoli Valentino</h2>
                    <p className="text-white mt-4">I am a <strong>Full Stack Developer in training</strong>, specializing in <strong>Front-End</strong> development. Passionate about technology, web design, and creating interfaces that connect people with innovative solutions.</p>
                    <ul className="w-full flex justify-evenly items-center mt-4">
                        <a href="https://github.com/SparvoliValentino"><FontAwesomeIcon icon={faGithub} className="text-white text-[30px]" /></a>
                        <a href="https://www.linkedin.com/in/valentino-sparvoli-088846219/"><FontAwesomeIcon icon={faLinkedin} className="text-white text-[30px]" /></a>
                        <FontAwesomeIcon icon={faFile} className="text-white text-[30px]" onClick={handleFileDownload}/>
                    </ul>
                </div>
            </div>
            {/* Proyectos */}
            <div className="flex flex-col justify-evenly items-center gap-5">
                <div className="w-full min-h-[200px] rounded-lg flex border-2 border-blue-500">
                    <div className="w-2/3  min-h-[200px] p-3 flex flex-col justify-evenly">
                        <h2 className="font-bold text-violet-500 text-[30px]">CyberGamer</h2>
                        <p className="font-regular text-white text-[15px]">Cybergames is an app developed for Henry's final project in Fullstack Web Developer. The app consists of a video game e-commerce where the user can buy products and subscribe to a service using real money. See the 
                            <a href="https://github.com/Alejandro-MCejas/PF-Ecommerce" className="text-blue-500"> repository</a>
                        </p>
                        <div className="flex gap-2 mt-2">
                            <p className="font-thin text-white text-[15px]">Development time:</p>
                            <p className="font-thin text-white text-[15px]">4 weeks</p>
                        </div>
                        <div className="flex gap-4">
                            <p className="font-thin text-white">Tecnologies used:</p>
                            <div className="flex gap-4 p-2">
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
                    <div className="w-1/3 min-h-[200px] p-2 ">
                        <a href="https://pf-ecommerce2024.vercel.app/"><img src={CybergamesApp} alt="" className="w-full h-full rounded-md" /></a>
                    </div>

                </div>

                <div className="w-full min-h-[200px] rounded-lg flex border-2 border-blue-500">
                    <div className="w-2/3  min-h-[200px] p-3 flex flex-col justify-evenly">
                        <h2 className="font-bold text-violet-500 text-[30px]">Apple Heaven</h2>
                        <p className="font-regular text-white text-[15px]">Apple Heaven is an e-commerce project developed for the fourth module of Henry. It showcases a fictional commerce test where we can buy Apple products by creating an account, placing orders, and interacting with the entire site. See the 
                            <a href="https://github.com/SparvoliValentino/ecommerce-appleHeaven" className="text-blue-500"> repository</a>
                        </p>
                        <div className="flex gap-2 mt-2">
                            <p className="font-thin text-white text-[15px]">Development time:</p>
                            <p className="font-thin text-white text-[15px]">4 weeks</p>
                        </div>
                        <div className="flex gap-4">
                            <p className="font-thin text-white">Tecnologies used:</p>
                            <div className="flex gap-4 p-2">
                                <img src={nextJsLogo} alt="Next.js" className="w-[40px] h-[40px] " />
                                <FontAwesomeIcon icon={faFigma} className="text-[40px]" />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 min-h-[200px] p-2 ">
                        <a href="https://ecommerce-apple-heaven-26yb.vercel.app/"><img src={AppleHeavenApp} alt="" className="w-full h-full rounded-md" /></a>
                    </div>
                </div>
            </div>

            <div >

            </div>
        </div>
    )
}

export default SparvoliValentino;
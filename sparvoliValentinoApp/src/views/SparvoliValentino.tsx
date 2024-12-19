
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
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFigma, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import CardProject from "../Components/CardProject";

const SparvoliValentino = () => {
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
                        <FontAwesomeIcon icon={faGithub} className="text-white text-[30px]" />
                        <FontAwesomeIcon icon={faLinkedin} className="text-white text-[30px]" />
                        <FontAwesomeIcon icon={faFile} className="text-white text-[30px]" />
                    </ul>
                </div>
            </div>
            {/* Proyectos */}
            <div className="w-full min-h-[200px] rounded-lg flex border-2 border-blue-500">
                <div className="w-2/3  min-h-[200px] p-3 flex flex-col">
                    <h2 className="font-bold text-violet-500 text-[30px]">CyberGamer</h2>
                    <p className="font-regular text-white text-[15px]">Cybergames is an app developed for Henry's final project in Fullstack Web Developer. The app consists of a video game e-commerce where the user can buy products and subscribe to a service using real money.</p>
                    <div className="flex gap-2 mt-2">
                        <p className="font-thin text-white text-[10px]">Development time:</p>
                        <p className="font-thin text-white text-[10px]">4 weeks</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-white">Tecnologies used:</p>
                        <img src={nextJsLogo} alt="Next.js" className="w-[40px] h-[40px] "/>
                        <img src={nestJsLogo} alt="Nest.js" className="w-[60px] h-[40px]"/>
                        <img src={mpLogo} alt="Mercado pago checkout pro" className="w-[40px] h-[40px]"/>
                        <img src={cloudinaryLogo} alt="Cloudinary" className="w-[60px] h-[40px]"/>
                        <FontAwesomeIcon icon={faFigma} className="text-[40px]"/>
                        <img src={swaggerLogo} alt="Swagger" className="w-[40px] h-[40px]"/>
                        <img src={auth0Logo} alt="Auth0" className="w-[40px] h-[40px]"/>
                    </div>
                </div>
                <div className="w-1/3 min-h-[200px] p-2 ">
                    <img src={CybergamesApp} alt="" className="w-full h-full rounded-md"/>
                </div>

            </div>
        </div>
    )
}

export default SparvoliValentino;
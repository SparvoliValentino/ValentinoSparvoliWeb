
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FotoPerfil from "../assets/FotoPerfil_Valentino_Sparvoli.jpeg"
import CybergamesLogo from "../assets/emoji-removebg-preview.png"
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
            <div className="w-full bg-red-50  min-h-[200px] rounded-lg">
                <div className="relative w-[200px] h-[250px] rounded-lg">
                    {/* Contenedor con el borde */}
                    <div className="border-2 border-blue-700 w-full h-full rounded-lg"></div>

                    {/* Imagen que sobresale */}
                    <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
                        <img
                            src={CybergamesLogo}
                            alt="Logo"
                            className="w-[120px] h-[120px] object-cover"
                        />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default SparvoliValentino;
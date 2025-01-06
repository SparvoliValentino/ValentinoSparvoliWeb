import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const Footer = () => {
    const showPhoneInfo = () => {
        Swal.fire({
            title: "Contact by phone?",
            text: "Please, call me at +54 3364273461",
          });
    };

    const showEmailInfo = ()=>{
        Swal.fire({
            title: "Contact by email?",
            text: "Please, send me an email at sparvolivalentino@gmail.com",
          });
    }

    return (
        <div className="w-full p-5 max-w-[1200px] mx-auto">
            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024 Page made by Valentino Sparvoli
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-7">
                        <li>
                            <a href="https://github.com/SparvoliValentino">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="text-black text-[30px]"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/valentino-sparvoli-088846219/">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="text-black text-[30px]"
                                />
                            </a>
                        </li>
                        <li>
                            <button onClick={showPhoneInfo}>
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="text-black text-[30px]"
                                />
                            </button>
                        </li>
                        <li>
                            <button onClick={showEmailInfo}>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-black text-[30px]"
                                />
                            </button>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

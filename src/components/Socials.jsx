import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";


const Socials = () => {
    return (
        <div>
            <ul class="flex justify-center mt-5 space-x-5">
                <li>
                    <a href="https://www.instagram.com/codingwithalexx" className="text-white" target="_blank">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/alexcostigan" className="text-white" target="_blank">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/alex-costigan/" className="text-white" target="_blank">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="mailto:alexcostigan118@hotmail.com" className="text-white" target="_blank">
                        <TfiEmail />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socials

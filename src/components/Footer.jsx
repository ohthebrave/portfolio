import { BsGithub } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return ( 
        <div>
            <div className="border-bottom text-white pt-3 fs-2">
                <p className="text-center">Available for full-time/contract design opportunities.</p>
            </div>
            <div className="container row">
                <p>Copyright © 2023 George Nyanjui</p>
                <div>
                    <BsGithub />
                    <RiTwitterXLine />
                    <FaLinkedin />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
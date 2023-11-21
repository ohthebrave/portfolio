import { BsGithub } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div>
            <div className="border-bottom text-white pt-3 fs-2">
                <p className="text-center">Available for full-time/contract design opportunities.</p>
            </div>
            <div className="container row my-3 text-white">
                <p className="col-md text-center">Copyright © 2023 George Nyanjui</p>
                <div className="col-md d-flex justify-content-center">
                    <Link className="text-decoration-none text-light" href="https://twitter.com/ohthebrave28"><RiTwitterXLine className="mx-2"/></Link>
                    <Link className="text-decoration-none text-light" href="https://www.linkedin.com/in/george-nyanjui-6021a119b/"><FaLinkedin className="mx-2"/></Link>       
                    <Link className="text-decoration-none text-light" href="https://github.com/ohthebrave"><BsGithub className="mx-2"/></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
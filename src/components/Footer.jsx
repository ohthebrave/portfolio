import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div>
            <div className="border-bottom text-white pt-3 fs-2">
                <p className="text-center">Available for full-time/contract design opportunities.</p>
            </div>
            <div className="container row">
                <div className="col-md-6">
                    <ul className=" grid gap-3">                   
                            <li><Link className="text-white " to="/">Home</Link></li>
                            <li><Link className="text-white " to="/about">About</Link></li>
                            <li><Link className="text-white " to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="row">
                        <li><a href="https://www.linkedin.com/in/george-nyanjui-6021a119b/">LinkedIn</a></li>
                        <li><a href="https://github.com/ohthebrave">GitHub</a></li>
                        <li><a href="https://twitter.com/home">X (formerly Twitter)</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
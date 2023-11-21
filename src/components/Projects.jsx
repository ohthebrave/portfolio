import macbk from '../assets/macbk.jpeg';
import graffiti from '../assets/graffiti.png';
import rainbow from '../assets/rainbow.png';


const Projects = () => {
    return ( 
        <div>
            <div>
                <h1 className='text-primary-emphasis p-lg-5 text-center'>MY RECENT PROJECTS</h1>
            </div>
            <div className='container row project'>
                <div className="card col-md-3" >
                    <img src={macbk} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Netfluxx Movie Website</h5>
                        <p className="card-text">A livestreaming movie application that has a variety of movie genres to choose from.</p>
                        <a href="https://github.com/ohthebrave/Netfluxx-Clone.git" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>

                <div className="card col-md-3">
                    <img src={graffiti} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">CSS Graffiti</h5>
                        <p className="card-text">Imagine that you are walking down the street, and you notice that there's a mural that has been painted 
                        over with various graffiti tags. In reality, cleaning this up could be a challenging feat; however, in CSS, you have the power to 
                        manipulate the DOM with just a line or two of code and to restore the mural to its original look!</p>
                        <a href="https://github.com/ohthebrave/phase-0-css-graffiti-lab" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>

                <div className="card col-md-3">
                    <img src={rainbow} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">My Little rainbow</h5>
                        <p className="card-text">Making a rainbow with HTML div elements using HTML elements, CSS styling, and CSS selectors.</p>
                        <a href="https://github.com/ohthebrave/phase-0-css-rainbow-lab" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>
                <div className="card col-md-3">
                    <img src={rainbow} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">My Little rainbow</h5>
                        <p className="card-text">Making a rainbow with HTML div elements using HTML elements, CSS styling, and CSS selectors.</p>
                        <a href="https://github.com/ohthebrave/phase-0-css-rainbow-lab" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>
                <div className="card col-md-3">
                    <img src={rainbow} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">My Little rainbow</h5>
                        <p className="card-text">Making a rainbow with HTML div elements using HTML elements, CSS styling, and CSS selectors.</p>
                        <a href="https://github.com/ohthebrave/phase-0-css-rainbow-lab" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>
                <div className="card col-md-3">
                    <img src={rainbow} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">My Little rainbow</h5>
                        <p className="card-text">Making a rainbow with HTML div elements using HTML elements, CSS styling, and CSS selectors.</p>
                        <a href="https://github.com/ohthebrave/phase-0-css-rainbow-lab" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>
                <div className="card col-md-3">
                    <img src={rainbow} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">My Little rainbow</h5>
                        <p className="card-text">Making a rainbow with HTML div elements using HTML elements, CSS styling, and CSS selectors.</p>
                        <a href="https://github.com/ohthebrave/phase-0-css-rainbow-lab" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>
                <div className="card col-md-3">
                    <img src={rainbow} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">My Little rainbow</h5>
                        <p className="card-text">Making a rainbow with HTML div elements using HTML elements, CSS styling, and CSS selectors.</p>
                        <a href="https://github.com/ohthebrave/phase-0-css-rainbow-lab" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>
                <div className="card col-md-3">
                    <img src={rainbow} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">My Little rainbow</h5>
                        <p className="card-text">Making a rainbow with HTML div elements using HTML elements, CSS styling, and CSS selectors.</p>
                        <a href="https://github.com/ohthebrave/phase-0-css-rainbow-lab" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;
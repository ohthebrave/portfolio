import crop from '../assets/crop.png';
import rainbow from '../assets/rainbow.png';
import crop2 from '../assets/crop2.png';
import github from '../assets/github.png';
import todo from '../assets/todo.png';


const Projects = () => {
    return ( 
        <div className='project-content'>
            <div>
                <h1 className='text-primary-emphasis p-lg-5 text-center'>MY RECENT PROJECTS</h1>
            </div>
            <div className='container row project'>
                <div className="card col-md-6" >
                    <img src={crop} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-success font-monospace">Netfluxx Movie Website</h5>
                        <p className="card-text fw-lighter text-white">A livestreaming movie application that has a variety of movie genres to choose from.</p>
                        <a href="https://gbox-movie.netlify.app/" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>

                <div className="card col-md-6">
                    <img src={crop2} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-success font-monospace">Weather-App</h5>
                        <p className="card-text fw-lighter text-white">A simple weather application that is user-friendly and users can be able to search current weather data .</p>
                        <a href="https://ohthebrave.github.io/weather-app/" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>

                <div className="card col-md-6">
                    <img src={github} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-success font-monospace">GitHub Search</h5>
                        <p className="card-text fw-lighter text-white">You can search for users matching a certain name. For example, if we wanted to find all users named 'Octocat'.</p>
                        <a href="https://ohthebrave.github.io/phase-1-github-search-app/" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>
                <div className="card col-md-6">
                    <img src={rainbow} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-success font-monospace">My Little rainbow</h5>
                        <p className="card-text fw-lighter text-white">Making a rainbow with HTML div elements using HTML elements, CSS styling, and CSS selectors.</p>
                        <a href="https://github.com/ohthebrave/phase-0-css-rainbow-lab" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>
                <div className="card col-md-6">
                    <img src={todo} className="card-img-top img-fluid pt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-success font-monospace">My Todo List</h5>
                        <p className="card-text fw-lighter text-white">A simple to-do list application that uses JavaScript to manipulate the DOM..</p>
                        <a href="https://ohthebrave.github.io/phase-1-tasklister-mini-project/" className="btn btn-outline-secondary">View Project</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;
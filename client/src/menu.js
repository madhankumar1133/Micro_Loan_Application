import 'bootstrap/dist/css/bootstrap.min.css';
import './signin.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export function Menu(){
    return(
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-nav">
                        <a className="navbar-brand text-light" href="#"><h1> Credit loans</h1></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>
                        </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active text-light">
                                <a className="nav-link text-light" href="./loan">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active text-light">
                                <a className="nav-link text-light" href="./solutions">Solutions <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-light" href="./conditions">condiions</a>
                            </li>
                            <li className="nav-item  text-light">
                                <a className="nav-link  text-light" href="./aboutloan">about loan</a>
                                
        
                                
                            </li>
                            <li className="nav-item text-light">
                                <a className="nav-link  text-light" href="./contact">contacct us</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>  
                </nav>
           
            </>
        );  
}
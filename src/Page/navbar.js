import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">EMedicine</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Switch>
                                    <Route path='/user' component={Users} />
                                </Switch> */}
                                <Link to="/users" className="nav-link " aria-current="page" >Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/medicines" className="nav-link" aria-current="page" >Medicines</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" aria-current="page" >Login</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
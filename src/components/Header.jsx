import React from "react";

function Header(props){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="/">{props.appname}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="d-flex">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">FAQs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Contact Us</a>
                    </li>
                </ul>
                </div>
                </div>
            </div>
        </nav>
    );

}
export default Header;
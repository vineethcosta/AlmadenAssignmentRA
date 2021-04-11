import React, { useContext } from 'react'
import { UserContext } from '../App'
const Footer = () => {
    const { state, dispatch } = useContext(UserContext);
    return (state &&
        <div className="App">
            <footer className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <span className="copyright">Powered by <a href="https://reactjs.org/">ReactJs</a> </span>

                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline quicklinks">
                                <li className="list-inline-item">
                                    <a href="#something">Privacy Policy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">Terms of Use</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer
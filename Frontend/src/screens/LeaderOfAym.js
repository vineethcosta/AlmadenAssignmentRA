import React, { useState } from 'react';
import '../App.css';
import JisungKang from '../assets/img/JisungKang.jpg'
import AndrewKang from '../assets/img/AndrewKang.jpg'
import JenniferLee from '../assets/img/JenniferLee.jpg'
import MinjiKim from '../assets/img/MinjiKim.jpg'
import JuhoJeon from '../assets/img/JuhoJeon.jpg'
import LukNam from '../assets/img/Luknam.jpg'
function LeaderOfAym() {
    return (
        <div>
            <section className="bg-light page-section" id="team">
                <div className="container">
                <h3 className="service-heading">LEADERS</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="team-member">
                                <img src={AndrewKang} alt="" />
                                <h4>Andrew Kang</h4>
                                <p className="text-muted">President</p>
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
                        </div>
                        <div className="col-sm-6">
                            <div className="team-member">
                                <img src={JisungKang} alt="" />
                                <h4>Jisung Kang</h4>
                                <p className="text-muted">Vice President</p>
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
                        </div>
                        <div className="col-sm-6">
                            <div className="team-member">
                                <img className="mx-auto" src={JenniferLee} alt="" />
                                <h4>Jennifer Lee </h4>
                                <p className="text-muted">Secretary</p>
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
                        </div>
                        <div className="col-sm-6">
                            <div className="team-member">
                                <img className="mx-auto" src={MinjiKim} alt="" />
                                <h4>Minji Kim</h4>
                                <p className="text-muted">Concert Master</p>
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
                        </div>
                        <div className="col-sm-6">
                            <div className="team-member">
                                <img className="mx-auto" src={LukNam} alt="" />
                                <h4>Luke Nam </h4>
                                <p className="text-muted">Vice president</p>
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
                        </div>
                        <div className="col-sm-6">
                            <div className="team-member">
                                <img className="mx-auto" src={JuhoJeon} alt="" />
                                <h4>Juho Jeon</h4>
                                <p className="text-muted">Historian</p>
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
                        </div>
                    </div>

                </div>
            </section>


            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <a href="#something">
                                <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#something">
                                <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#something">
                                <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#something">
                                <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default LeaderOfAym;

import React from 'react'
import Concerts from "../assets/img/concerts.png"
import six from '../assets/img/2016.jpg'
import seven from '../assets/img/2017.jpg'
import eight from '../assets/img/2018.jpg'
import nine from '../assets/img/2019.jpg'

const Events = () => {
  return (
    <div className="container">
      <section className="page-section" id="about">
        <div className="container">
          <div className="col-lg-12 text-center">
            <div className="row">
              <img src={Concerts} style={{ width: "100%" }} />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline" style={{ textAlign: 'center' }}>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4><br />TIMELINE</h4>
                  </div>
                </li>
                <li>
                  <div><iframe width="956" height="537" src="https://www.youtube.com/embed/eRXU1n_S7RI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <br/>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2020 Fall - 1</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Virtual Benefit Concert</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div><iframe width="956" height="537" src="https://www.youtube.com/embed/_Yzhougjyfw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <br/>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2020 Fall - 2</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Virtual Benefit Concert</p>
                    </div>
                  </div>
                </li>
                <li >
                  <div >
                    <iframe width="956" height="537" src="https://www.youtube.com/embed/EIsfmtmYD0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <br/>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Summer 2020</h4>
                      <h4 className="subheading"> </h4>        <h4 className="subheading"> </h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Fundraising total: $1500</p>
                      <p className="text-muted">Beneficiary: Equal Rights Initiative</p>
                    </div>
                  </div>
                </li>

                <li className="timeline-inverted">
                  <div >
                    <img className="img-fluid" src={nine} alt="" />
                  </div>
                  <br/>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>September 2019</h4>
                      <h4 className="subheading"> Benefit Concert</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Fundraising total: $3000 Beneficiary: Lucile Packard Children’s Hospital</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div    >
                    <img className="img-fluid" src={eight} alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>September 2018</h4>
                      <h4 className="subheading"> Benefit Concert</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Fundraising total: $3000 Beneficiary: Guiding Light Project (www.guidinglightproject.com)</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div >
                    <img className="img-fluid" src={seven} alt="" />
                  </div>
                  <br/>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>September 2017</h4>

                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">2017 Benefit Concert</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <img className="img-fluid" src={six} alt="" />
                  </div>
                  <br/>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>October 2016</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">2016 Benefit Concert</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events

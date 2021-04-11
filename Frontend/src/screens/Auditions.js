import React, { useState } from 'react';
import '../App.css';
import auditions from '../assets/img/auditions.jpg'
function Auditions() {

  return (
    <div className="App" >
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="service-heading">AUDITIONS</h3>

            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="team-member">


                <ul style={{ textAlign: 'left' }}>
                  <p className="text-muted" >Auditions occur throughout the year for strings, winds and piano. Please use the contact form to schedule an audition.  </p>
                  <p className="text-muted" >Requirements for all instruments: </p>

                  <li>
                    <p className="text-muted">One solo repertoire (for example, first movement of a major concerto)</p>
                  </li>
                  <li>
                    <p className="text-muted">Sight reading</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-lg-3 text-center">
              <img style={{ width: 800, height: 500 }} src={auditions} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Auditions;

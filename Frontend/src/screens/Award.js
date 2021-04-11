import React, { useState } from 'react';
import '../App.css';

function Award() {
  return (
    <div className="App" >
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="service-heading">2020 AWARD RECEPIENTS</h3>

            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="team-member">


                <ul style={{ textAlign: 'left' }}>
                  <p className="text-muted" > Anna Bae : Gold </p>
                  <p className="text-muted" > Patrick Kwon : Gold</p>
                  <p className="text-muted" > Jooyoung Kim : Gold </p>
                  <p className="text-muted" > Se Yeon Lee : Bronze </p>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Award;

import React from 'react'
import check from '../assets/img/check.png'
import paypal from '../assets/img/paypal.png'
import zelle from '../assets/img/zelle.png'
import donate from '../assets/img/donate.PNG'
import one from '../assets/img/1.jpg'
import two from '../assets/img/2.jpg'
import three from '../assets/img/3.jpg'
import four from '../assets/img/4.jpg'
const Donate = () => {
  return (
    <div className="container">
      <section className="page-section" id="about">
        <div className="container">

          <div className="row">
            <div className="col-lg-3 text-center">
              <img className="img-fluid" src={one} alt="" />
            </div>
            <div className="col-lg-3 text-center">
              <img  className="img-fluid" src={two} alt="" />
            </div>
            <div className="col-lg-3 text-center">
              <img  className="img-fluid" src={three} alt="" />
            </div>
            <div className="col-lg-3 text-center">
              <img  className="img-fluid" src={four} alt="" />
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">DONATIONS</h2>
              <h3 className="section-subheading text-muted">There are three ways of donations:  (1) PayPal, (2) Zelle, or (3) Check.</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div >
                    <img className="img-fluid" src={paypal} alt="" />
                  </div>
                  <br/>
                
                  <div className="timeline-panel">
                    <div className="timeline-heading">

                      <h2 className="subheading" style={{ textAlign: 'center' }} >Using Paypal.</h2>
                    </div>
                    <div className="timeline-body">
                      <a href="https://www.paypal.com/us/home"><h6 className="text-muted">  <img className="img-fluid" style={{ width: 320, height: 55 }} src={donate} alt="" /></h6></a>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div >

                  </div>
                  <div className="timeline-panel">
                    <img className="img-fluid" src={zelle} alt="" />
                    <br/>
                    <div className="timeline-heading">

                      <h2 className="subheading">Using Zelle to send.</h2>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Zelle email address: almadenyouth@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div >
                    <img className="img-fluid" src={check} alt="" />
                  </div>
                  <br/>
                  <div className="timeline-panel">
                    <div className="timeline-heading">

                      <h2 className="subheading">Send your check to the following address.</h2>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Checkable name: AYM Mail Address: 1166 Quail Creek Circle, San Jose CA 95120.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4><br/>Donate</h4>
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
export default Donate
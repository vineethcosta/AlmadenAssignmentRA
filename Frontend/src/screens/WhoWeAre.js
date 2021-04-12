import React from 'react'
import aboutus from '../assets/img/aboutus.jfif'
const WhoWeAre = () => {
  return (
    <div className="App" >
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col">
            <h3 className="service-heading">ABOUT US</h3>
              <img  className="img-fluid" src={aboutus} alt="" />
              <h3 className="service-heading">About the Almaden Youth Musicians</h3>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <div className="team-member">
                <p className="text-muted"> Almaden Youth Musicians (AYM) was founded by young musicians in the South San Jose area with the objective of helping the community through classical music at 2013. In keeping with the philosophy of "Share the love through the music", our group performs chamber music along with duets, trio, and quartets to elders of local senior centers or local nursing centers. AYM holds five concerts at senior centers and one benefit concert per year. All proceeds accumulated from the performances are donated to non-profit organization in honor of helping needed families. AYM meets twice per month for rehearsals with the joy of making music and having an enjoyable time.</p>
                <p>AYM is a non profit organization 501 (c) 3 that certifies the Presidential Volunteer Service Award.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre
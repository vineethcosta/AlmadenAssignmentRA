import React from 'react'

const MonthlyNewsLetter = () => {
  return (
    <div className="App" >
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="service-heading">General Outline of the Year</h3>
              <h4 className="service-heading" style={{ float: 'left' }}>December</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="team-member">
                <h9 className="service-heading" style={{ float: 'left' }}>Lessons:</h9>
                <br />
                <br />
                <br />
                <ul style={{ textAlign: 'left' }}>
                  <li>
                    <p className="text-muted">No group plan; individual lessons only</p>
                  </li>
                  <li>
                    <p className="text-muted">Spaces are first come first serve</p>
                  </li>
                  <li>
                    <p className="text-muted">Lessons start from December 28 to April 30</p>
                  </li>
                  <li>
                    <p className="text-muted">Starts with teaching elementary schoolers</p>
                  </li>
                  <li>
                    <p className="text-muted">Best mentors in AYM will be given an award and scholarship ($100); Award name is “Mentor of the Year.” This will be given at the end of all the mentoring.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="team-member">
                <h9 className="service-heading" style={{ float: 'left' }}>Performances:</h9>
                <br />
                <br />
                <br />
                <ul style={{ textAlign: 'left' }}>
                  <li>
                    <p className="text-muted">After April 30, we will make a virtual concert</p>
                  </li>
                  <li>
                    <p className="text-muted">Possible solo performances if things get worse</p>
                  </li>
                  <li>
                    <p className="text-muted">Possible group performances as well though</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="team-member">
                <h9 className="service-heading" style={{ float: 'left' }}>Miscellaneous:</h9>
                <br />
                <br />
                <br />
                <ul style={{ textAlign: 'left' }}>
                  <li>
                    <p className="text-muted">Find people to take classes for photoshop/video editing; these people will receive volunteer hours</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MonthlyNewsLetter
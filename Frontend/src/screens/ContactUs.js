import React from 'react'

const ContactUs = () => {
  return (
    <div className="container">
      <section className="page-section" id="about">
        <div className="container" style={{ justifyContent: 'center' }}>
          <div className="row">
            <div className="col-lg-12 text-center" >
              <h2 className="font-weight-normal " style={{ fontFamily: "serif" }}>Contact Us</h2>
              <h7 className="font-weight text-uppercase" style={{ fontFamily: 'serif' }}> PLEASE COMPLETE THE FORM BELOW</h7>
            </div>
          </div>
          <br />
          <br />
          <div className="row" style={{ justifyContent: 'center' }}>
            <form id="contactForm" name="sentMessage">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label style={{ width: "100%", }}>Student First Name (Korean,English) *<input className="form-control" id="name" type="text" required="required" data-validation-required-message="Student name (Korean,English) *" /></label>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label style={{ width: "100%" }}>Last Name * <input className="form-control" id="name" type="text" required="required" data-validation-required-message="Student name (Korean,English) *" /></label>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label style={{ width: "100%" }}>Student Email Address * <input className="form-control" id="name" type="text" required="required" data-validation-required-message="Student name (Korean,English) *" /></label>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group" >
                    <label style={{ width: "100%" }}>Instrument * <input className="form-control" id="name" type="text" required="required" data-validation-required-message="Student name (Korean,English) *" /></label>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <label style={{ width: "100%" }}>Mom's name and telephone and email address <textarea className="form-control" id="name" type="text" required="required" data-validation-required-message="Student name (Korean,English) *" /></label>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <label style={{ width: "100%" }}>Student's school and grade<textarea className="form-control" id="name" type="text" required="required" data-validation-required-message="Student name (Korean,English) *" /></label>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <label style={{ width: "100%" }}>Private teacher's name and email address  <textarea className="form-control" id="name" type="textfield" required="required" data-validation-required-message="Student name (Korean,English) *" /></label>
                    <p className="help-block text-danger"></p>
                  </div>

                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary bg-dark btn-xl text-uppercase" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ContactUs
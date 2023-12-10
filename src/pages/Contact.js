import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Contact() {
  return (
    <div>
      <Navbar />

      <section className="section pb-5">
        <div className="container">
          <div className="row mb-5 align-items-end">
            <div className="col-md-6" data-aos="fade-up">
              <h2>Contact</h2>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam necessitatibus incidunt ut officiis explicabo
                inventore.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
              <form
                action="https://formspree.io/f/xjvqnawo"
                method="post"
                className="php-email-form"
              >
                <div className="row gy-3">
                  <div className="col-md-6 form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required=""
                    />
                  </div>
                  {/* <div className="col-md-12 form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required=""
                    />
                  </div> */}
                  <div className="col-md-12 form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      cols={30}
                      rows={10}
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-12 my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="col-md-6 mt-0 form-group">
                    <input
                      type="submit"
                      className="readmore d-block w-100"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4 ml-auto order-2" data-aos="fade-up">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong className="d-block mb-1">Address</strong>
                  <span>Pasir, 78919, Mempawah Hilir, Kalimantan Barat.</span>
                </li>
                <li className="mb-3">
                  <strong className="d-block mb-1">Phone</strong>
                  <span>+62 895 7017 91492</span>
                </li>
                <li className="mb-3">
                  <strong className="d-block mb-1">Email</strong>
                  <span>muhammadalireza127@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;

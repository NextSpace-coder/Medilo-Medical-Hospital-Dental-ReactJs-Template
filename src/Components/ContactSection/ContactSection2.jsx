import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const ContactSection2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <section className="cs_card cs_style_3 cs_gray_bg position-relative">
        <div className="cs_height_110 cs_height_lg_70"></div>
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-6">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_accent_color">
                <span className="cs_shape_left"></span>CONTACT US
              </p>
              <h2 className="cs_section_title">Make An Appointment <br/>Apply For Treatments</h2>
            </div>
            <div className="cs_height_25 cs_height_lg_25"></div>
            <form className="cs_contact_form row cs_gap_y_30 home_form_area">
              <div className="col-md-6">
                <input type="text" name="name" className="cs_form_field" placeholder="Your name" />
              </div>
              <div className="col-md-6">
                <input type="email" name="email" className="cs_form_field" placeholder="Your email" />
              </div>
              <div className="col-md-6">
                <input type="text" name="subject" className="cs_form_field" placeholder="Your Subject" />
              </div>
              <div className="col-md-6">
                <input type="text" name="phone" className="cs_form_field" placeholder="Your phone" />
              </div>
              <div className="col-lg-12">
                <textarea rows="5" name="message" className="cs_form_field" placeholder="Your comments"></textarea>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="cs_btn cs_style_1 cs_color_1">Send Request</button>
              </div>
            </form>
            </div>
            <div className="col-lg-6">
              <div className="cs_solution_thumbnail cs_bg_filed" data-background="https://images.unsplash.com/photo-1666886573230-2b730505f298?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI1MDB8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NTU1ODQzODh8MA&ixlib=rb-4.1.0&q=85" >
              </div>
            </div>
          </div>
        </div>
        <div className="cs_solution_shape position-absolute">
          <img src="https://images.unsplash.com/photo-1617286809909-8c2daf5f8eb7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjI1MDB8MHwxfHNlYXJjaHwxMHx8aG9zcGl0YWwlMjBtZWRpY2FsJTIwZXF1aXBtZW50JTIwc3RldGhvc2NvcGV8ZW58MHx8fHwxNzU1NTg0Mzg5fDA&ixlib=rb-4.1.0&q=85" alt="Shape" />
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default ContactSection2;
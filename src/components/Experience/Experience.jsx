import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";


const Experience = ({ data }) => {
  const { ourtext, text, experience, resumeCv } = data;
  return (
    <section id="services"  className="section experience-section ">
      <div className="container">
      <SectionHeading title="Zolara CRM – Complete Control & Efficiency" subTitle="Our Project" />
      <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{ourtext}</p>
      <video autoPlay muted loop className=" img-fluid w-75 mb-5">
        <source src="public/images/crm.mp4" type="video/mp4" />
          </video>

        <div className="row gy-5">
          <div className="col-lg-5">
            <div className="section-heading">

              <SectionHeading title="Our Services" subTitle="Services" />
              <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{text}</p>
              <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <a href={resumeCv} className="px-btn dark" download>
                  Download my resume <Icon icon="bi-download" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <ul className="resume-box">
              {experience.map((element, index) => (
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                  <div className="r-meta">
                    <span>-{element.start} - {element.end}</span>
                    <label>-{element.subtitle}</label>
                  </div>
                  <h5>{element.title}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Experience.propTypes = {
  data: PropTypes.object
}

export default Experience;

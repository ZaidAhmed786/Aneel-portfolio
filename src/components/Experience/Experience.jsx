import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";


const Experience = ({ data }) => {
  const { ourtext, text, experience, resumeCv } = data;
  return (
    <section id="services"  className="section experience-section ">
      <div className="container">
      <SectionHeading title="Zolara CRM – Complete Control & Efficiency" subTitle={<span style={{ fontWeight: "bold", fontSize: "24px" }}>Our Project </span>} />
      <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{ourtext}</p>
        <div className="w-75 py-5 text-center mx-auto">
          <img src="./images/img/LOGO-2-removebg-preview.png" alt="" className="img-brand" />
        </div>
        <div className="w-100 px-btn py-5 ">
         <video src="./images/img/crm.mp4" controls autoPlay loop muted className="w-100 h-auto"></video>
         </div>

        <div className="row gy-5 pt-5">
          <div className="col-lg-5">
            <div className="section-heading">

              <SectionHeading title="Our Services" subTitle="Services" />
              <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{text}</p>
              <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <a href={resumeCv} className="px-btn dark" download>
                 Visit My Profile<Icon icon="bi-download" />
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

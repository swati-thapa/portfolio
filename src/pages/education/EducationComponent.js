import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
// import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import { experience } from "../../portfolio";
import { getImageUrl } from "../../utils/imageLoader";
// import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    const experienceHeaderImage = getImageUrl(experience["header_image_path"]);
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          {/* Temporary merge: render Experience on the Education page for now. */}
          <div className="basic-experience">
            <Fade bottom duration={2000} distance="40px">
              <div className="experience-heading-div">
                <div className="experience-heading-img-div">
                  {experienceHeaderImage ? (
                    <img src={experienceHeaderImage} alt="Experience" />
                  ) : null}
                </div>
                <div className="experience-heading-text-div">
                  <h1
                    className="experience-heading-text"
                    style={{ color: theme.text }}
                  >
                    {experience.title}
                  </h1>
                  <h3
                    className="experience-heading-sub-text"
                    style={{ color: theme.text }}
                  >
                    {experience.subtitle}
                  </h3>
                  <p
                    className="experience-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {experience.description}
                  </p>
                </div>
              </div>
            </Fade>
            <ExperienceAccordion sections={experience.sections} theme={theme} />
          </div>
          {/* Move the education intro below Experience and above Degrees Received. */}
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assets/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  My academic journey built a strong foundation in Data Science,
                  machine learning, and research, while also shaping the way I
                  approach problem solving in real-world systems.
                </p>
                {/* <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifcations
                </h3> */}
                {/* <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification
                </h3> */}
                {/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {/* {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null} */}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;

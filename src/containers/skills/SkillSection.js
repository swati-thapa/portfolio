import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.imagePath) {
    return (
      <img
        alt={props.altText || "Skill illustration"}
        src={require(`../../assets/images/${props.imagePath}`)}
      />
    );
  }
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          const hasSkillImage = skill.imagePath || skill.fileName;
          return (
            <React.Fragment key={i}>
              <div className="skills-main-div">
                {hasSkillImage ? (
                  <Fade left duration={2000}>
                    <div className="skills-image-div">
                      {/* <img
                        alt="Ashutosh is Analysing Data"
                        src={require(`../../assets/images/${skill.imagePath}`)}
                      ></img> */}
                      <GetSkillSvg
                        altText={skill.title}
                        fileName={skill.fileName}
                        imagePath={skill.imagePath}
                        theme={theme}
                      />
                    </div>
                  </Fade>
                ) : null}

                <div className="skills-text-div">
                  <Fade right duration={1000}>
                    <h1
                      className="skills-heading"
                      style={{ color: theme.text }}
                    >
                      {skill.title}
                    </h1>
                  </Fade>
                  <Fade right duration={1500}>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </Fade>
                  <Fade right duration={2000}>
                    <div>
                      {skill.skills.map((skillSentence, i) => {
                        return (
                          <p
                            key={i}
                            className="subTitle skills-text"
                            style={{ color: theme.secondaryText }}
                          >
                            {skillSentence}
                          </p>
                        );
                      })}
                    </div>
                  </Fade>
                </div>
              </div>
              {skill.techStack && skill.techStack.length > 0 ? (
                <div className="skills-tech-stack-full-width">
                  <Fade right duration={1750}>
                    <div className="skills-tech-stack-section">
                      <h2
                        className="skills-tech-stack-title"
                        style={{ color: theme.text }}
                      >
                        {skill.techStackTitle || "My Tech Stack"}
                      </h2>
                      <SoftwareSkill logos={skill.techStack} />
                    </div>
                  </Fade>
                </div>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;

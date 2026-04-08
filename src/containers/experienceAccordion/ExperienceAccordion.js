import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const workSection = this.props.sections.find((section) => section.work);
    const otherSections = this.props.sections.filter(
      (section) => !section.work
    );

    const panelHeaderStyle = {
      backgroundColor: `${theme.body}`,
      border: `1px solid`,
      borderRadius: `5px`,
      borderColor: `${theme.headerColor}`,
      marginBottom: `3px`,
      fontFamily: "Google Sans Regular",
      color: `${theme.text}`,
    };

    return (
      <div className="experience-accord">
        {workSection ? (
          <div className="experience-open-section">
            <div
              className="experience-open-content"
              style={{ backgroundColor: theme.body }}
            >
              {workSection.experiences.map((experience, index) => {
                return (
                  <ExperienceCard
                    index={index}
                    totalCards={workSection.experiences.length}
                    experience={experience}
                    theme={theme}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
        {otherSections.length > 0 ? (
          <Accordion>
            {otherSections.map((section) => {
              return (
                <Panel
                  className="accord-panel"
                  title={section["title"]}
                  key={section["title"]}
                  overrides={{
                    Header: {
                      style: () => ({
                        ...panelHeaderStyle,
                        ":hover": {
                          color: `${theme.secondaryText}`,
                        },
                      }),
                    },
                    Content: {
                      style: () => ({
                        backgroundColor: `${theme.body}`,
                      }),
                    },
                  }}
                >
                  {section["experiences"].map((experience, index) => {
                    return (
                      <ExperienceCard
                        index={index}
                        totalCards={section["experiences"].length}
                        experience={experience}
                        theme={theme}
                      />
                    );
                  })}
                </Panel>
              );
            })}
          </Accordion>
        ) : null}
      </div>
    );
  }
}

export default ExperienceAccordion;

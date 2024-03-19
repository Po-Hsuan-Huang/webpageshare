import React, {useContext} from "react";
import "./Highlight.scss";
import {illustration, projectHighlight} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Highlight() {
  const {isDark} = useContext(StyleContext);
  if (!projectHighlight.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="highlight">
      <div className="highlight-main-div">
        <Fade left duration={1000}>
          <div className="highlight-image-div">
            {/* {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )} */
            
            <img
            alt="Man Working"
            src={require("../../assets/images/tool_overview.png")}
            ></img>  
            
            
            }
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="highlight-text-div">
            <h1
              className={isDark ? "dark-mode highlight-heading" : "highlight-heading"}
            >
              {projectHighlight.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle highlight-text-subtitle"
                  : "subTitle highlight-text-subtitle"
              }
            >
              {projectHighlight.subTitle}
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

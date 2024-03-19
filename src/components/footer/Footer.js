import React, {useContext, useEffect} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {

  useEffect(() => {
    // Start eye tracking
    GazeCloudAPI.StartEyeTracking();

    // Define your results data callback
    GazeCloudAPI.OnResult = function (GazeData) {
      console.log('GazeData:', GazeData);
      // Process GazeData here
    };

    // Optional callbacks
    GazeCloudAPI.OnCalibrationComplete = function () {
      console.log('Gaze calibration complete');
    };

    GazeCloudAPI.OnCamDenied = function () {
      console.log('Camera access denied');
    };

    GazeCloudAPI.OnError = function (msg) {
      console.log('Error:', msg);
    };

    // Enable click recalibration
    GazeCloudAPI.UseClickRecalibration = true;

    // Clean up function to stop eye tracking when the component unmounts
    return () => {
      GazeCloudAPI.StopEyeTracking();
    };
  }, []);

  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );


}

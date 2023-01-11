import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Skills.module.css";

const Skills: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGoBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.skills}>
      <img className={styles.skillsChild} alt="" src="../ellipse-2.svg" />
      <img className={styles.skillsItem} alt="" src="../ellipse-3.svg" />
      <img className={styles.skillsInner} alt="" src="../ellipse-1.svg" />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-4.svg" />
      <div className={styles.working1Wrapper}>
        <img className={styles.working1Icon} alt="" src="../working-1@2x.png" />
      </div>
      <div className={styles.mySkills}>My Skills</div>
      <div className={styles.mysqlParent}>
        <div className={styles.mysql}>MySQL</div>
        <div className={styles.mysql}>Python</div>
      </div>
      <div className={styles.html1Parent}>
        <img className={styles.html1Icon} alt="" src="../html-1@2x.png" />
        <img className={styles.html1Icon} alt="" src="../css3-1@2x.png" />
        <img className={styles.html1Icon} alt="" src="../javascript-1@2x.png" />
        <img className={styles.html1Icon} alt="" src="../atom-1-1@2x.png" />
        <img className={styles.html1Icon} alt="" src="../swift-1@2x.png" />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.htmlParent}>
          <div className={styles.mysql}>HTML</div>
          <div className={styles.mysql}>CSS</div>
          <div className={styles.mysql}>JavaScript</div>
          <div className={styles.mysql}>React</div>
          <div className={styles.mysql}>Swift</div>
        </div>
      </div>
      <div className={styles.mysql1Parent}>
        <img className={styles.html1Icon} alt="" src="../mysql-1@2x.png" />
        <img className={styles.html1Icon} alt="" src="../python-1@2x.png" />
      </div>
      <img className={styles.emojiIcon} alt="" src="../emoji12.svg" />
      <div className={styles.iDevelopHighlyContainer}>
        <p
          className={styles.iDevelopHighly}
        >{`I Develop highly interactive Front end / User Interfaces for your `}</p>
        <p className={styles.webAndMobile}>web and mobile applications</p>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="../vector4.svg" />
        <div className={styles.iDevelopSockets}>
          I Develop Sockets for Web Applications
        </div>
      </div>
      <img className={styles.emojiIcon1} alt="" src="../emoji13.svg" />
      <div className={styles.iAlsoPerformContainer}>
        <p
          className={styles.iDevelopHighly}
        >{`I also perform real-time data analysis using software tools `}</p>
        <p className={styles.webAndMobile}>
          and programming languages such as Python.
        </p>
      </div>
      <div className={styles.crazyFrontendDeveloperContainer}>
        <p className={styles.iDevelopHighly}>CRAZY FRONTEND DEVELOPER</p>
        <p className={styles.webAndMobile}>
          WHO WANTS TO EXPLORE EVERY TECH STACK
        </p>
      </div>
      <img className={styles.vectorIcon1} alt="" src="../vector5.svg" />
      <button className={styles.goBack} onClick={onGoBackClick}>
        Go Back
      </button>
    </div>
  );
};

export default Skills;

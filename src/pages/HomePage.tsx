import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSkillsClick = useCallback(() => {
    navigate("/skills");
  }, [navigate]);

  const onProjectsClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onCertificationsClick = useCallback(() => {
    navigate("/certifications");
  }, [navigate]);

  const onContactMeClick = useCallback(() => {
    navigate("/contactme");
  }, [navigate]);

  const onGitBlogClick = useCallback(() => {
    navigate("/github-page");
  }, [navigate]);

  const onFrameLinkClick = useCallback(() => {
    window.location.href = "mailto:ar0829@srmist.edu.in?subject=Hello there!";
  }, []);

  return (
    <div className={styles.homepage}>
      <div className={styles.skillsParent}>
        <button className={styles.skills} onClick={onSkillsClick}>
          Skills
        </button>
        <button className={styles.projects} onClick={onProjectsClick}>
          Projects
        </button>
        <button
          className={styles.certifications}
          onClick={onCertificationsClick}
        >
          Certifications
        </button>
        <button className={styles.contactMe} onClick={onContactMeClick}>
          Contact Me
        </button>
        <button className={styles.gitBlog} onClick={onGitBlogClick}>
          Git Blog
        </button>
      </div>
      <img className={styles.homepageChild} alt="" src="../ellipse-21.svg" />
      <div className={styles.homepageInner}>
        <div className={styles.hiAllParent}>
          <div className={styles.hiAll}>{`Hi all `}</div>
          <img className={styles.emojiIcon} alt="" src="../emoji14.svg" />
          <div className={styles.hiAll}> I’m Aakash Raj</div>
        </div>
      </div>
      <div className={styles.aPassionateFrontendUiuxWrapper}>
        <div className={styles.hiAll}>
          <p
            className={styles.aPassionateFrontend}
          >{`A passionate Frontend & UI/UX Developer 👾 having an `}</p>
          <p className={styles.aPassionateFrontend}>
            experience of building Web and Mobile applications with
          </p>
          <p className={styles.aPassionateFrontend}>
            JavaScript / Reactjs / Nodejs / React and some other cool
          </p>
          <p className={styles.librariesAndFrameworks}>
            libraries and frameworks
          </p>
        </div>
      </div>
      <img className={styles.homepageItem} alt="" src="../ellipse-31.svg" />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-11.svg" />
      <img
        className={styles.undrawProgrammingReKg9v1Icon}
        alt=""
        src="../undraw-programming-re-kg9v-1@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.github21Parent}>
          <a
            className={styles.github21}
            href="https://github.com/easyans"
            target="_blank"
          />
          <a
            className={styles.linkedin1}
            href="https://www.linkedin.com/in/aakash-raj-670334217/"
            target="_blank"
          />
          <a
            className={styles.facebook1}
            href="https://www.facebook.com/profile.php?id=100013923346822"
            target="_blank"
          />
          <a
            className={styles.stackOverflow1}
            href="https://stackoverflow.com/users/20176528/aakash-raj-ra2011031010128"
            target="_blank"
          />
          <a
            className={styles.pp840x830Pad1000x1000f8f8f}
            href="https://leetcode.com/ar0829/"
            target="_blank"
          />
          <div className={styles.gmail1} />
        </div>
        <div className={styles.frameGroup}>
          <a
            className={styles.contactWrapper}
            href="mailto:ar0829@srmist.edu.in?subject=Hello there!"
            onClick={onFrameLinkClick}
          >
            <div className={styles.hiAll}>{`Contact `}</div>
          </a>
          <a
            className={styles.portfolioWrapper}
            href="https://akr-next-portfolio.vercel.app/#home"
            target="_blank"
          >
            <div className={styles.hiAll}>Portfolio</div>
          </a>
        </div>
      </div>
      <div className={styles.aakashRaj}>{`< Aakash Raj />`}</div>
    </div>
  );
};

export default HomePage;

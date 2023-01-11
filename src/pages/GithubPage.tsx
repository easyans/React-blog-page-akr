import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GithubPage.module.css";

const GithubPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGoBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.githubPage}>
      <div className={styles.githubPageChild} />
      <div className={styles.logo}>
        <img
          className={styles.terminalSolid1Icon}
          alt=""
          src="../terminalsolid-1.svg"
        />
        <div className={styles.githubBlog}>{`< GITHUB BLOG />`}</div>
      </div>
      <div className={styles.profile}>
        <b className={styles.name}>Aakash raj</b>
        <div className={styles.bio}>
          Hi there, I'm a front end developer and a student who loves codes and
          pixels
        </div>
        <img
          className={styles.profileChild}
          alt=""
          src="../rectangle-254@2x.png"
        />
        <img className={styles.github21Icon} alt="" src="../github2-1@2x.png" />
        <div className={styles.easyans}>easyans</div>
        <img
          className={styles.profileItem}
          alt=""
          src="../rectangle-2@2x.png"
        />
        <div className={styles.pullShark}>Pull Shark</div>
        <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
        <div className={styles.quickdraw}>Quickdraw</div>
      </div>
      <img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
      <div
        className={styles.visitMyGithub}
      >{`< Visit My GitHub Page for More.../>`}</div>
      <div className={styles.githubPageItem} />
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <button className={styles.goBack} onClick={onGoBackClick}>
        Go Back
      </button>
    </div>
  );
};

export default GithubPage;

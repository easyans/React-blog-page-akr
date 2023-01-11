import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactMe.module.css";

const ContactMe: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGoBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.contactme}>
      <div className={styles.contactMeWrapper}>
        <div className={styles.contactMe}>{`< Contact Me />`}</div>
      </div>
      <div className={styles.reachOutToContainer}>
        <p className={styles.reachOutToMe}>
          <span>Reach Out to me!</span>
        </p>
        <p className={styles.discussAProjectOrJustWant}>
          <span>
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </span>
        </p>
      </div>
      <div className={styles.studentAtSrm}>
        "20 | Student at SRM University | Web Developer | Data Analysis "
      </div>
      <div className={styles.visakhapatnamIndia}>Visakhapatnam , India</div>
      <div className={styles.openForOpportunities}>
        Open for opportunities: Yes
      </div>
      <div className={styles.easyansWrapper}>
        <div className={styles.easyans}>⭐ @easyans</div>
      </div>
      <img className={styles.contactmeChild} alt="" src="../ellipse-5.svg" />
      <img className={styles.oamn63341Icon} alt="" src="../oamn6334-1@2x.png" />
      <img className={styles.mapPinIcon} alt="" src="../mappin.svg" />
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <button className={styles.goBack} onClick={onGoBackClick}>
        Go Back
      </button>
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
      <div className={styles.madeWithLove}>
        Made with love by Aakash raj @easyans
      </div>
    </div>
  );
};

export default ContactMe;

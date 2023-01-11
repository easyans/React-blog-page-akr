import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Certifications.module.css";

const Certifications: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGoBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.certifications}>
      <div className={styles.certificationsWrapper}>
        <div className={styles.certifications1}>{`< Certifications />`}</div>
      </div>
      <div className={styles.certificationsChild} />
      <div className={styles.certificationsItem} />
      <div className={styles.awsCloudTechnical}>
        AWS Cloud Technical Essentials
      </div>
      <div className={styles.certificationsInner} />
      <div className={styles.webDevelopmentBootcamp}>
        2022 Web Development Bootcamp
      </div>
      <a
        className={styles.moreCertificationsWrapper}
        href="https://www.linkedin.com/in/aakash-raj-670334217/"
        target="_blank"
      >
        <div className={styles.moreCertifications}>More Certifications</div>
      </a>
      <img className={styles.ibm21Icon} alt="" src="../ibm2-1@2x.png" />
      <div className={styles.ibmBlockchainEssentials}>
        IBM Blockchain Essentials
      </div>
      <div className={styles.completedCertificationFromContainer}>
        <p className={styles.completedCertification}>Completed Certification</p>
        <p className={styles.fromIbmFor}>from IBM for Blockchain Essentials</p>
      </div>
      <div className={styles.courseraCertifiesSuccessfulContainer}>
        <p
          className={styles.completedCertification}
        >{`Coursera certifies successful `}</p>
        <p className={styles.fromIbmFor}>completion of AWS course</p>
      </div>
      <div className={styles.courseCompletionCertificateContainer}>
        <p className={styles.completedCertification}>
          Course Completion Certificate
        </p>
        <p className={styles.fromIbmFor}>from Udemy for Web Development</p>
      </div>
      <a
        className={styles.viewCertificateWrapper}
        href="https://courses.yl-ptech.skillsnetwork.site/certificates/9bd64d208ee346d891b2badf9788aa99"
      >
        <div className={styles.moreCertifications}>View Certificate</div>
      </a>
      <a
        className={styles.viewCertificateContainer}
        href="https://www.coursera.org/account/accomplishments/verify/PRXQLH29S3DL"
        target="_blank"
      >
        <div className={styles.moreCertifications}>View Certificate</div>
      </a>
      <a
        className={styles.viewCertificateFrame}
        href="https://www.linkedin.com/in/aakash-raj-670334217/"
        target="_blank"
      >
        <div className={styles.moreCertifications}>View Certificate</div>
      </a>
      <img className={styles.awsss1Icon} alt="" src="../awsss-1@2x.png" />
      <img className={styles.udemy1Icon} alt="" src="../udemy-1@2x.png" />
      <div className={styles.wrapper}>
        <div className={styles.div} />
      </div>
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <button className={styles.goBack} onClick={onGoBackClick}>
        Go Back
      </button>
    </div>
  );
};

export default Certifications;

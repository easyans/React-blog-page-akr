import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";

const Projects: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    window.open("https://github.com/easyans/youtube-clone");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://github.com/easyans/akr-next-portfolio");
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open(
      "https://github.com/easyans/Data_analysis_with_Python_COVID_19-Cases"
    );
  }, []);

  const onFrameButton3Click = useCallback(() => {
    window.open("https://github.com/easyans/openai_ai_chatitup");
  }, []);

  const onFrameButton4Click = useCallback(() => {
    window.open("https://github.com/easyans/cn-mini-project");
  }, []);

  const onFrameButton5Click = useCallback(() => {
    window.open("https://github.com/easyans/Todo-list-ISM-Project");
  }, []);

  const onFrameButton6Click = useCallback(() => {
    window.open("https://github.com/easyans?tab=repositories");
  }, []);

  const onGoBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.projects}>
      <div className={styles.openSourceProjectsWrapper}>
        <div
          className={styles.openSourceProjects}
        >{`< Open Source Projects />`}</div>
      </div>
      <div className={styles.projectsChild} />
      <button className={styles.viewCodeWrapper} onClick={onFrameButtonClick}>
        <div className={styles.viewCode}>View Code</div>
      </button>
      <div className={styles.emojiParent}>
        <img className={styles.emojiIcon} alt="" src="../emoji.svg" />
        <div className={styles.aYoutubeCloneContainer}>
          <p className={styles.aYoutubeClone}>
            🚀 A YouTube Clone website created
          </p>
          <p
            className={styles.aYoutubeClone}
          >{`using React Js and Rapid API. This `}</p>
          <p className={styles.providesTheServices}>
            Provides the services same like YouTube...
          </p>
        </div>
      </div>
      <div className={styles.emojiGroup}>
        <img className={styles.emojiIcon1} alt="" src="../emoji1.svg" />
        <div className={styles.youtubeClone}>YouTube-Clone</div>
      </div>
      <div className={styles.projectsItem} />
      <button
        className={styles.viewCodeContainer}
        onClick={onFrameButton1Click}
      >
        <div className={styles.viewCode}>View Code</div>
      </button>
      <div className={styles.emojiContainer}>
        <img className={styles.emojiIcon} alt="" src="../emoji2.svg" />
        <div className={styles.aYoutubeCloneContainer}>
          <p className={styles.aYoutubeClone}>
            🚀 Web Developer Portfolio Template
          </p>
          <p
            className={styles.aYoutubeClone}
          >{` that helps you to showcase my work `}</p>
          <p className={styles.providesTheServices}>
            and skills as a Web developer....
          </p>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <img className={styles.emojiIcon1} alt="" src="../emoji3.svg" />
        <div className={styles.youtubeClone}>Developer Portfolio</div>
      </div>
      <div className={styles.projectsInner} />
      <button className={styles.viewCodeFrame} onClick={onFrameButton2Click}>
        <div className={styles.viewCode}>View Code</div>
      </button>
      <div className={styles.emojiParent1}>
        <img className={styles.emojiIcon} alt="" src="../emoji4.svg" />
        <div className={styles.aYoutubeCloneContainer}>
          <p className={styles.aYoutubeClone}>
            <span className={styles.span}>{`🚀 `}</span>
            <span>{`AI have taken a small dataset of `}</span>
          </p>
          <p className={styles.aYoutubeClone}>
            <span>{`COVID-19 {The data used here is till 29-April-`}</span>
          </p>
          <p className={styles.providesTheServices}>
            <span>{`2020 and has records as on 29-April-2020}...`}</span>
          </p>
        </div>
      </div>
      <div className={styles.emojiParent2}>
        <img className={styles.emojiIcon1} alt="" src="../emoji1.svg" />
        <div className={styles.youtubeClone}>Data Analysis</div>
      </div>
      <div className={styles.rectangleDiv} />
      <button className={styles.frameButton} onClick={onFrameButton3Click}>
        <div className={styles.viewCode}>View Code</div>
      </button>
      <div className={styles.emojiParent3}>
        <img className={styles.emojiIcon6} alt="" src="../emoji6.svg" />
        <div className={styles.chatGptIs}>
          Chat GPT is essentially a variant of Open AI’s popular GPT-3.5
          software that’s been designed to carry....
        </div>
      </div>
      <div className={styles.emojiParent4}>
        <img className={styles.emojiIcon1} alt="" src="../emoji3.svg" />
        <div className={styles.youtubeClone}>Open AI Chat GPT</div>
      </div>
      <div className={styles.projectsChild1} />
      <button className={styles.viewCodeWrapper1} onClick={onFrameButton4Click}>
        <div className={styles.viewCode}>View Code</div>
      </button>
      <div className={styles.emojiParent5}>
        <img className={styles.emojiIcon} alt="" src="../emoji8.svg" />
        <div className={styles.aYoutubeCloneContainer}>
          <p className={styles.aYoutubeClone}>
            <span className={styles.span}>{`🚀 `}</span>
            <span>This is a simple game of tic-tac-toe</span>
          </p>
          <p className={styles.aYoutubeClone}>
            <span>developed in Python. It allows two players to</span>
          </p>
          <p className={styles.providesTheServices}>
            <span>play with one another. Using Sockets the....</span>
          </p>
        </div>
      </div>
      <div className={styles.emojiParent6}>
        <img className={styles.emojiIcon1} alt="" src="../emoji1.svg" />
        <div className={styles.youtubeClone}>Tic-Tac-Toe Game</div>
      </div>
      <div className={styles.projectsChild2} />
      <button className={styles.viewCodeWrapper2} onClick={onFrameButton5Click}>
        <div className={styles.viewCode}>View Code</div>
      </button>
      <div className={styles.emojiParent7}>
        <img className={styles.emojiIcon6} alt="" src="../emoji6.svg" />
        <div className={styles.chatGptIs}>
          Responsive To-Do list is a list of tasks you need to complete or
          things that you want to do...
        </div>
      </div>
      <div className={styles.emojiParent8}>
        <img className={styles.emojiIcon1} alt="" src="../emoji3.svg" />
        <div className={styles.youtubeClone}>Responsive todo list</div>
      </div>
      <button
        className={styles.moreProjectsWrapper}
        onClick={onFrameButton6Click}
      >
        <div className={styles.moreProjects}>More Projects</div>
      </button>
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <button className={styles.goBack} onClick={onGoBackClick}>
        Go Back
      </button>
    </div>
  );
};

export default Projects;

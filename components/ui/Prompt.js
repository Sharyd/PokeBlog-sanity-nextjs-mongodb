import React from "react";
import classes from "./Prompt.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onKeepIt}></div>;
};

const PromptOverlay = (props) => {
  return (
    <div className={classes.prompt}>
      <h3>Are you sure?</h3>
      <div className={classes.content}>
        <p onClick={props.onRemove}>Yes, delete</p>
        <p onClick={props.onKeepIt}>No, keep it</p>
      </div>
    </div>
  );
};
const Prompt = (props) => {
  return (
    <>
      <Backdrop onKeepIt={props.keepIt} />

      <PromptOverlay onRemove={props.onRemoveAll} onKeepIt={props.keepIt} />
    </>
  );
};

export default Prompt;

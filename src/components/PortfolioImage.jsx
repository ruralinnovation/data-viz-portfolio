import React, {useState, useEffect, useCallback} from 'react';
import styles from './styles/PortfolioImage.module.css';

export default function PortolioImage({src, alt}) {

  const [imgStyles, setImgStyles] = useState({});
  const [wrapperStyles, setWrapperStyles] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  const expand_style = {
    height: "98%",
    display: "block",
    position: "fixed",
    left:"0",
    right:"0",
    top: "1%",
    margin:"auto",
    border: "none",
    zIndex: 11

  };

  const wrapper_styles = {
    height: "100%",
    width: "100%",
    display: "block",
    position: "fixed",
    left:"0",
    right:"0",
    top: "0",
    margin:"auto",
    backgroundColor: "rgba(208, 210, 206, 1)",
    zIndex: 10
  }

  function enlargeImage(e) {

    let new_value = !isExpanded;

    setIsExpanded(new_value);
    setImgStyles(new_value === true? expand_style: {});
    setWrapperStyles(new_value === true? wrapper_styles: {});
  }

  const escFunction = useCallback((event) => {

    if (event.key === "Escape") {
      console.log("IN here???");
      setIsExpanded(false);
      setImgStyles({});
      setWrapperStyles({});
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <div onClick={enlargeImage} style={wrapperStyles} >
    <img 
      style={imgStyles} 
      className={styles["portfolio-image"]} 
      src={src} 
      alt={alt}>
    </img>
    </div>
  );
}
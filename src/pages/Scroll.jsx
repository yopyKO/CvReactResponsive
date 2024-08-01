import { useState, useEffect } from "react";


function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 1000) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="scrollButton" className={`scroll-to-top-button ${visible ? "visible" : ""}`}>
      <button onClick={scrollToTop}>▲ <br />Haut de la page</button>
    </div>
  );
}

export default ScrollToTopButton;
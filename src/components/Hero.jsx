import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import styled from "styled-components";
import bg1Mobile from "./images/mobile-image-hero-1.jpg";
import bg2Mobile from "./images/mobile-image-hero-2.jpg";
import bg3Mobile from "./images/mobile-image-hero-3.jpg";
import bg1Desktop from "./images/desktop-image-hero-1.jpg";
import bg2Desktop from "./images/desktop-image-hero-2.jpg";
import bg3Desktop from "./images/desktop-image-hero-3.jpg";
import Header from "./Header";
import HeroArticle from "./HeroArticle";
import { col_20, col_30 } from "./styles";

const StyledHero = styled.section`
  display: grid;
  height: auto;
  margin-bottom: 72px;
  grid-template-areas:
    "hero-container"
    "article";

  @media (min-width: 1200px) {
    grid-template-areas: "hero-container article";
    grid-template-columns: 1.25fr 1fr;
    margin-bottom: 0;
    height: max-content;

    .heroContainer {
      width: 100%;
      min-height: 534px;
    }

    .controls {
      position: relative;
    }
  }

  @media (min-width: 1024px) and (max-height: 600px) {
    grid-template-areas: "hero-container article";
    grid-template-columns: 1.25fr 1fr;
    margin-bottom: 0;
  }

  .heroContainer {
    position: relative;
    height: 50vh;
    overflow: hidden;
    grid-area: hero-container;
    @media (min-width: 1024px) {
      height: 60vh;
    }
  }

  &::before {
    content: "";
    display: ${(props) => (props.$navopen ? "block" : "none")};
    position: absolute;
    background-color: ${col_20};
    opacity: 50%;
    width: 100%;
    height: 100%;

    @media (min-width: 1200px) {
      display: none;
    }
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    /* object-fit: cover; */
  }

  img.active {
    z-index: 1;
    opacity: 1 !important;
  }

  .controls {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    gap: 0;
    z-index: 2;

    button {
      padding: 10px 15px;
      border: none;
      background: ${col_20};
      color: ${col_30};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      .angleIcon {
        height: 16.8px;
        font-weight: 1px;
      }
    }
  }
`;

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [images, setImages] = useState([bg1Mobile, bg2Mobile, bg3Mobile]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = (e) => {
      if (e.matches) {
        setImages([bg1Desktop, bg2Desktop, bg3Desktop]);
      } else {
        setImages([bg1Mobile, bg2Mobile, bg3Mobile]);
      }
    };

    handleMediaChange(mediaQuery); // Set initial images based on screen size
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <StyledHero $navopen={navOpen}>
      <div className="heroContainer">
        <Header navOpen={navOpen} setNavOpen={setNavOpen} />
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index + 1}`}
            className={currentImage === index ? "active" : ""}
          />
        ))}
        <div className="controls">
          <button
            onClick={() => {
              const newIndex =
                (currentImage - 1 + images.length) % images.length;
              console.log("Prev Image:", newIndex);
              setCurrentImage(newIndex);
              setNavOpen(false);
            }}
          >
            <FaAngleLeft className="angleIcon" />
          </button>
          <button
            onClick={() => {
              const newIndex = (currentImage + 1) % images.length;
              console.log("Next Image:", newIndex);
              setCurrentImage(newIndex);
              setNavOpen(false);
            }}
          >
            <FaAngleRight className="angleIcon" />
          </button>
        </div>
      </div>
      <HeroArticle />
    </StyledHero>
  );
}

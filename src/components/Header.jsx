import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import logo from "./images/logo.png";
import styled from "styled-components";
import {
  col_10,
  col_20,
  col_30,
  col_40,
  regular,
  semiBold,
  bold,
} from "./styles";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 40px 24px;
  background-color: ${(props) => (props.$navopen ? "white" : "")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;

  @media (min-width: 1200px) {
    position: relative;
    left: 100px;
    background-color: ${(props) => (props.$navopen ? "transparent" : "")};
    button {
      display: none;
    }

    ul {
      li {
        transition: transform 0.5s ease;
        &:hover::after {
          content: "";
          display: block;
          position: relative;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background-color: ${col_30};
          transform: translateY(8px);
        }
      }
      a {
        color: ${col_30} !important;
      }
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;

    .navBtn {
      width: 30px;
      height: 24px;
    }
    .btn--close {
      color: ${col_10};
    }
    .btn--open {
      color: ${col_30};
    }
  }

  /* .logo {
    background-image: url(${logo});
    width: auto;
    height: 14px;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex !important;
    z-index: 30 !important;
  } */

  ul {
    display: flex;
    gap: 32px;
    list-style-type: none;
    a {
      color: ${col_20};
      text-decoration: none;
      font-size: 12px;
      font-weight: ${semiBold};
    }
  }
`;

export default function Header({ navOpen, setNavOpen }) {
  function toggleMenu() {
    setNavOpen(!navOpen);
  }
  console.log(logo);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)");

    const handleMediaChange = (e) => {
      if (e.matches) {
        setNavOpen(true);
      } else {
        ("");
      }
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "";
    if (navOpen && window.innerWidth < 1200) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Enable scroll
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setNavOpen(true); // Open the navigation menu at 1200px or more
      } else {
        setNavOpen(false); // Close the navigation menu below 1200px
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledHeader $navopen={navOpen}>
      <button onClick={toggleMenu} aria-label="Toggle navigation menu">
        {navOpen ? (
          <IoMdClose className="navBtn btn--close" />
        ) : (
          <FaBars className="navBtn btn--open" />
        )}
      </button>

      {navOpen ? (
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      ) : (
        // <div classname="logo"><img src={logo} alt="logo--header" style={{ zIndex: 30 }} /></div>
        ""
      )}
    </StyledHeader>
  );
}

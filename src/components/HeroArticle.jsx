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

export default function HeroArticle() {
  return (
    <StyledArticle>
      <h1>Discover innovative ways to decorate</h1>
      <p>
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>

      <button>
        SHOP NOW <img src="/images/icon-arrow.svg" alt="Arrow Icon" />
      </button>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  grid-area: article;
  margin: auto;
  max-width: 500px;
  padding: 32px;
  margin-top: 72px;

  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) and (max-height: 600px) {
    p {
      margin-bottom: 20px !important;
    }
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 48px !important;
    }
  }

  h1 {
    font-size: 28px;
    font-weight: ${semiBold};
    letter-spacing: -1.17px;
    color: ${col_20};
    line-height: auto;
    margin-bottom: 14px;
  }
  p {
    font-weight: ${regular};
    color: ${col_10};
    line-height: 20px;
    margin-bottom: 52px;
  }

  button {
    background: none;
    border: none;
    line-height: 16px;
    letter-spacing: 10px;
  }
`;

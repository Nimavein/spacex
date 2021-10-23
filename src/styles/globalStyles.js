import { createGlobalStyle } from "styled-components";
import { getColor, getFontFamily } from "./utils";

const GlobalStyle = createGlobalStyle`
   html {
    min-height: 100%;
  }
    
  body {
    position: relative;
    background: ${getColor("backgroundGradient")};
    color: white;
  }

  .loader {
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, 150%);
  }

  .BrainhubCarouselItem {
    align-items: flex-start;
  }

.BrainhubCarousel__container{
overflow: visible;
  .BrainhubCarousel {
    position: relative;
    overflow: visible;

    .BrainhubCarousel__customArrows {
    position: absolute;
    top: -80px;

    @media ${({ theme }) => theme.medias.mobile} {
      top: -54px;
    }

    &:last-child {
      right: 0;
      @media ${({ theme }) => theme.medias.mobile} {
        right: 20px;
      }
    }
    &:first-child {
      @media ${({ theme }) => theme.medias.mobile} {
        left: 20px;
      }
    }
  }
  }
}
  
  

  
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${getFontFamily("primaryFont")};
  }
`;

export default GlobalStyle;

import styled from 'styled-components';
import { CardApp, Heading4 } from '@Commons/components/domain/Styles/Style.styled';
import { device } from '@Commons/styles/breakpoints';

export const WrapperConfiguration = styled(CardApp)`
  width: 90%;
  margin-top: 30px;
  box-sizing: border-box;
  padding: 20px;
  
 
  @media ${device.tablet} {
    padding-top: 30px;
    margin-left: 40px;
    width: 45%;
  }
`;

export const WrapperTitle = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    .icon {
        font-size: 33px;
        margin-right: 10px;
    }
    
`;

export const TitlePage = styled(Heading4)`
    width: 200px;
    font-size: 20px;
    border-bottom: 5px solid black;
    margin-bottom: 0;
    border-radius: 3px;
    line-height: 40px;
    font-family: poppins, sans-serif;
  
`;

export const WrapperPhoto = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const WrapperInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const ImgSaloon = styled.img`
  border-radius: 100px;
  width: 200px;
`;

export const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;


  .group {
    position: relative;
    margin-bottom: 45px;
  }

  input {
    font-size: 14px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 200px;
    border: none;
    border-bottom: 1px solid #757575;
  }

  input:focus {
    outline: none;
  }

  /* LABEL ======================================= */

  label {
    color: #999;
    font-size: 11px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: -10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  /* active state */

  input:focus ~ label, input:disabled ~ label{
    top: -20px;
    font-size: 14px;
    color: #5264AE;
  }

  /* BOTTOM BARS ================================= */

  .bar {
    position: relative;
    display: block;
    width: 200px;
  }

  .bar:before, .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  /* active state */

  input:focus ~ .bar:before, input:focus ~ .bar:after {
    width: 50%;
  }

  /* HIGHLIGHTER ================================== */

  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  /* active state */

  input:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }

  /* ANIMATIONS ================ */
  @-webkit-keyframes inputHighlighter {
    from {
      background: #5264AE;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @-moz-keyframes inputHighlighter {
    from {
      background: #5264AE;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @keyframes inputHighlighter {
    from {
      background: #5264AE;
    }
    to {
      width: 0;
      background: transparent;
    }
  }

`;

export const WrapperLanguage = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
  width: 90%;
  justify-content: flex-end;
`;

export const Input = styled.input`
  border-radius: 5px;
  margin-bottom: 10px;
`;

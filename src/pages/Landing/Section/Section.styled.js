import styled from 'styled-components';
import { deviceMax } from '@Commons/styles/breakpoints';
import Fonts from '@Commons/styles/fonts';
/* ${Fonts.montserrat}
${Fonts.poppins} */
/*
* Colors
* FEE995
* ADB9F3
* 6B74A1
* DAE0FE
* 8265A7
* */

export const Title = styled.div` 
   ${Fonts.poppins}
   color:#8265a7;
   font-size: 25px;
   border-bottom:3px solid #8265a7;
    max-width:350px;
    text-align: left;
    @media ${deviceMax.tablet} {
      text-align: center;
      display: block;
      margin: auto;
      padding-bottom: 1px;
    }
    
`;

export const SubTitle = styled.div`
   ${Fonts.poppins}
  color:#6B74A1;
  font-weight: bold;
  font-size: 15px;
  @media ${deviceMax.tablet} {
      text-align: center;
      padding-top: 3px;
    }
`;

export const Text = styled.p` 
   ${Fonts.montserrat}
   font-size: 15px;
  line-height: 25px;
   color: gray;
   margin-bottom:50px;
   @media ${deviceMax.tablet} {
      text-align: center;
    }
`;

export const Container = styled.div`
  background-color: rgb(220,220,220);
  line-height: 40px;
`;
export const Card = styled.div`
  padding: 5em;
  display: flex;
  max-width: 1000px;
  margin: auto;
  justify-content: space-around;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : '')};
  .right{
  margin-left: 4vw !important;
}
.left{
  margin-right: 4vw !important;
}
  @media ${deviceMax.tablet} {
    flex-direction: column;
    align-items: center;
  }
  @media ${deviceMax.tablet} {
    padding: 2em;
  }
  @media ${deviceMax.mobileS} {
    .right{
  margin-left: 0;
}
  }
`;

export const WrapperText = styled.div`
 width: 50%;
  @media ${deviceMax.tablet} {
    width: 90%;
  }

`;

export const WrapperImg = styled.div`
  width: 50%;
  img {
    width: 100%;
    margin: auto;
    display: block;
  }
  @media ${deviceMax.tablet} {
    width: 90%;
    margin-top: 20px;
  }
`;

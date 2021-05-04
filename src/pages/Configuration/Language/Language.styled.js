import styled from 'styled-components';

export const StyledLi = styled.li`
  float: left;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
`;

export const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 6px 1px;
  text-decoration: none;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;

  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  
  &:hover {
    background-color: gray;
  }
`;

export const SubA = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Arrow = styled.div`
    background-color: black;
    width: 8px;
    height: 8px;
    margin-left: 3px;
    transform: rotate(45deg);
    background-color: #00000000;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
`;

export const Flag = styled.img`
   width: 25px;
   height: 20px;
   margin-right: 3px;
`;

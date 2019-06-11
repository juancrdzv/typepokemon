import styled from 'styled-components';
import backgroundButtonImage from '../../images/gen1.png';
import backgroundImage from '../../images/choose.gif';

export const PokeButton = styled.div`
  background-image: url(${backgroundButtonImage});
  width: 65px;
  height: 65px;
  display: inline-block;
  background-color: white;
  margin: 3px;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 3px solid #000000;

  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

export const BackGroundImage = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow-y: auto;
`;

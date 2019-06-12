import styled from 'styled-components';
import backgroundImage from '../../images/tutorial.gif';

export const BackGroundImage = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

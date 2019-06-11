import styled from 'styled-components';
import backgroundImage from '../../images/game.gif';

export const BackGroundImage = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const PokeSpan = styled.span`
  font-size: 45px;
  font-family: PokemonSolid;
  color: green;
`;

export const PokeChar = styled.span`
  font-size: 85px;
  font-family: PokemonSolid;
  color: green;
`;

import React from 'react';
import { BackGroundImage } from './styled';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import escribir from '../../images/escribir.png';
import phase from '../../images/fase.png';

import Typography from '@material-ui/core/Typography';

function TutorialScreenDisplay(props) {
  return (
    <BackGroundImage>
      <div>
        <input
          className="pokemon-font"
          type="button"
          value="return"
          onClick={props.returnToHome}
          style={{
            left: '0px',
            position: 'absolute',
            width: '100px',
            height: '100px',
          }}
        />
      </div>
      <Card style={{ display: 'flex', border: '8px solid' }}>
        <CardMedia
          component="img"
          alt="Write"
          height="240"
          image={escribir}
          title="Contemplative Reptile"
          style={{ width: 'auto' }}
        />
        <Typography
          style={{
            fontSize: '44px',
            color: 'black',
            width: 'auto',
            margin: 'auto',
          }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          You must write the word in the screen
        </Typography>
      </Card>

      <Card
        style={{
          display: 'flex',
          bottom: '0px',
          position: 'absolute',
          border: '8px solid',
        }}
      >
        <CardMedia
          component="img"
          alt="Write"
          height="240"
          image={phase}
          title="Contemplative Reptile"
          style={{ width: 'auto' }}
        />
        <Typography
          style={{
            fontSize: '34px',
            color: 'black',
            width: 'auto',
            margin: 'auto',
          }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          If the phase is in defend you can be harmed but you cant harm, in the
          other case in attack you can harm, in both cases if you do a mistake
          your life will decrease.
        </Typography>
      </Card>
    </BackGroundImage>
  );
}

export default TutorialScreenDisplay;

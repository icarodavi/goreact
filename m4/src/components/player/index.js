import React from 'react';
import Slider from 'rc-slider';
import { Container, Current, Volume } from './styles';
import VolumeIcon from '../../assets/images/volume.svg';

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://99designs-blog.imgix.net/wp-content/uploads/2017/12/f09b9132584da6ba9ed3d99e5478f201.500x500x1.png?auto=format&q=60&fit=max&w=930"
        alt="album cover"
      />
      <div>
        <span>Times like these</span>
        <small>Foo Fighters</small>
      </div>
    </Current>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
      />
    </Volume>
  </Container>
);

export default Player;

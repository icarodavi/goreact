import React from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container, Current, Volume, Controls, Progress, Time, ProgressSlider,
} from './styles';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && <Sound url={player.currentSong.file} playStatus={player.status} />}
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
    <Progress>
      <Controls>
        <button type="submit">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button type="submit">
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button type="submit">
          <img src={PlayIcon} alt="Play" />
        </button>
        <button type="submit">
          <img src={PauseIcon} alt="Pause" />
        </button>
        <button type="submit">
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button type="submit">
          <img src={RepeatIcon} alt="Shuffle" />
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadios: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);
Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};
const mapStateToProps = state => ({
  player: state.player,
});
export default connect(mapStateToProps)(Player);

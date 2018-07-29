import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';

import {
  Container,
  Header,
  Songlist,
  SongItem,
} from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import Loading from '../../components/Loading';

class Playlist extends React.Component {
  static propTypes = {
    getPlaylistDetailsRequest: PropTypes.func,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          artist: PropTypes.string,
          album: PropTypes.string,
        }),
      }),
      loading: PropTypes.bool,
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  };

  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  };

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data;
    let numberSong = 0;
    return (
      <Container>
        <Header>
          <img
            src="https://99designs-blog.imgix.net/wp-content/uploads/2017/12/f09b9132584da6ba9ed3d99e5478f201.500x500x1.png?auto=format&q=60&fit=max&w=930"
            alt="playlist"
          />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.song && <p>{playlist.song.legth} músicas</p>}

            <button type="submit">Play</button>
          </div>
        </Header>
        <Songlist cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>
              <img src={ClockIcon} alt="Duração" />
            </th>
          </thead>
          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map((song) => {
                numberSong += 1;
                return (
                  <SongItem
                    key={song.id}
                    onClick={() => this.setState({ selectedSong: song.id })}
                    onDoubleClick={() => this.props.loadSong(song, playlist.songs)}
                    selected={this.state.selectedSong === song.id}
                    playing={this.props.currentSong && this.props.currentSong.id === song.id}
                  >
                    <td>
                      #{numberSong} <img src={PlusIcon} alt="Adicionar a playlist" />
                    </td>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>3:23</td>
                  </SongItem>
                );
              })
            )}
          </tbody>
        </Songlist>
      </Container>
    );
  };

  render() {
    return this.props.playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}
const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);

import React from 'react';

// REDUX-SAGA
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ROUTER
import { Link } from 'react-router-dom';

// PROPTYPES
import PropTypes from 'prop-types';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

// STYLES
import { Container, NewPlaylist, Nav } from './styles';

import Loading from '../Loading';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends React.Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }),
    loading: PropTypes.bool,
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="#s">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="#d">Seu Daily Mix</a>
            </li>
            <li>
              <a href="#d">Tocados recentementes</a>
            </li>
            <li>
              <a href="#d">Músicas</a>
            </li>
            <li>
              <a href="#d">Álbuns</a>
            </li>
            <li>
              <a href="#d">Artista</a>
            </li>
            <li>
              <a href="#d">Estações Locais</a>
            </li>
            <li>
              <a href="#d">Vídeos</a>
            </li>
            <li>
              <a href="#d">Podcasts</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(item => (
              <li key={item.id}>
                <Link to={`/playlists/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);

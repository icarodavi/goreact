import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

// PROPTYPES
import PropTypes from 'prop-types';

// STYLES
import {
  Container, Title, List, Playlist,
} from './styles';

//COMPONENTS
import Loading from '../../components/Loading';


class Browse extends React.Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          description: PropTypes.string,
          thumbnail: PropTypes.string,
        }),
      ),
    }),
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <Title>Navegar
        {this.props.playlists.loading && <Loading />}</Title>

        <List>
          {this.props.playlists.data.map(playlist => (
            <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <storng>{playlist.title}</storng>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
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
)(Browse);

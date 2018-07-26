import React from 'react';
import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="#s">Navegar</a>
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
        </li>
        <li>
          <a href="#s">Melhores do Rock</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;

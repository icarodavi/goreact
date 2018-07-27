import React from 'react';

import { Container, Header, Songlist } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://99designs-blog.imgix.net/wp-content/uploads/2017/12/f09b9132584da6ba9ed3d99e5478f201.500x500x1.png?auto=format&q=60&fit=max&w=930"
        alt="playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>

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
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:23</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar a playlist" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:23</td>
        </tr>
      </tbody>
    </Songlist>
  </Container>
);

export default Playlist;

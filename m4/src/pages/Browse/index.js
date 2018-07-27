import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/wp-content/uploads/2017/12/f09b9132584da6ba9ed3d99e5478f201.500x500x1.png?auto=format&q=60&fit=max&w=930"
          alt="playlist"
        />
        <storng>Rock dos bons</storng>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores músicas de rock</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/wp-content/uploads/2017/12/f09b9132584da6ba9ed3d99e5478f201.500x500x1.png?auto=format&q=60&fit=max&w=930"
          alt="playlist"
        />
        <storng>Rock dos bons</storng>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores músicas de rock</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/wp-content/uploads/2017/12/f09b9132584da6ba9ed3d99e5478f201.500x500x1.png?auto=format&q=60&fit=max&w=930"
          alt="playlist"
        />
        <storng>Rock dos bons</storng>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores músicas de rock</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/wp-content/uploads/2017/12/f09b9132584da6ba9ed3d99e5478f201.500x500x1.png?auto=format&q=60&fit=max&w=930"
          alt="playlist"
        />
        <storng>Rock dos bons</storng>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores músicas de rock</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;

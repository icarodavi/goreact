import React from 'react';
import { render } from 'react-dom';

import Head from './components/head';
import Posts from './components/post';
import './styles/styles.scss';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo elit ut elit
dictum dignissim. Pellentesque augue ligula, ultrices ut enim sit amet, elementum
aliquam leo.Fusce et feugiat lorem.Aenean a metus elementum, suscipit dolor ut,
  luctus ex.Proin aliquam nulla rutrum, vestibulum sem ut, varius felis.Sed ut diam
ligula.Morbi lorem eros, pellentesque id mollis nec, maximus eu nulla.Maecenas a
diam accumsan, fermentum tellus sed, consectetur dui.Ut vitae iaculis ante.Aenean in
  finibus purus.Vestibulum et nulla rutrum, bibendum orci sed, fringilla tortor.
Suspendisse erat neque, sodales quis nisl sed, convallis feugiat ligula.Nulla
facilisi.Nulla dui ipsum, suscipit ut lacus et, rutrum porttitor tellus.`;
const App = () => (
  <div>
    <Head />
    <section id="post">
      <Posts>
        <div className="postTopo">
          <div>
            <img
              src="https://thumbs.dreamstime.com/z/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-58249506.jpg"
              alt=""
            />
          </div>
          <div>
            <strong className="username">Icaro Monteiro</strong>
            <p>há 10 min</p>
          </div>
        </div>
        <p>{lorem}</p>
      </Posts>
      <Posts>
        <div className="postTopo">
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/moderno-masculino-do-avatar-do-%C3%ADcone-do-perfil-do-homem-de-neg%C3%B3cio-69046013.jpg"
              alt=""
            />
          </div>
          <div>
            <strong className="username">João Miguel</strong>
            <p>há 15 min</p>
          </div>
        </div>
        <p>{lorem}</p>
      </Posts>
      <Posts>
        <div className="postTopo">
          <div>
            <img
              src="https://comps.canstockphoto.com.br/perfil-mulher-silueta-pessoa-avatar-cliparte-vetor_csp29677506.jpg"
              alt=""
            />
          </div>
          <div>
            <strong className="username">Maria Francisca</strong>
            <p>há 20 min</p>
          </div>
        </div>
        <p>{lorem}</p>
      </Posts>
    </section>
  </div>
);
render(<App />, document.getElementById('app'));

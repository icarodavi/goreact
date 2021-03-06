import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

injectGlobal`
  * {
      margin:0;
      padding:0;
      box-sizing: border-box;
      outline:0;
  }

  body {
      background: #9b65e5;
      text-rendering: optimizelegibility !important;
      -webkit-font-smoothing: antialiased !important;
      font-family: Sans Serif;
  }
`;

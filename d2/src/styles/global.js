import { injectGlobal } from 'styled-components';

injectGlobal`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background: #f5f5f5;
        height: 100%;
    }
    div.wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        border: 1px solid #f00;
    }
`;

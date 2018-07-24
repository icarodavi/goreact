import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ name: 'React JS' })
    .use(reactotronRedux())
    .connect();

  console.tron = tron;
}

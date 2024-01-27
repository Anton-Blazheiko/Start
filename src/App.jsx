import 'normalize.css';
import '../src/css/general.module.scss';

import Header from './components/Header';
import Layout from './components/Layout';

export const App = () => {
  return (
    <>
      <Header />
      <Layout />
    </>
  );
};

export default App;

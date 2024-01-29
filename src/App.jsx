import 'normalize.css';
import '../src/css/general.module.scss';

import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Layout />
      <Footer />
    </>
  );
};

export default App;

import './style/index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  let title = 'eVolve Motors';
  let link = 'Products';

  return (
    <body>
      <Header title={title} link={link}/>
      <main>
      <div className="container">
        <Banner />
      </div>
      <Gallery />
      </main>
      <Footer />
    </body>
  );
}

export default App;
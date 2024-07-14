import 'bootstrap/dist/js/bootstrap.js'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import Header from './components/header';
import MoviesPortal from './components/moviesPortal';

function App() {
  return (
    <div >
     <Header></Header>
     <br/>
     <div className='container'>
      <MoviesPortal>

      </MoviesPortal>
     </div>
     

    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {action,Orginals,ComedyMovies,HorrorMovies,Documentaries,RomanceMovies} from './urls'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={Orginals} title='Netflix Orginals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall />
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall />
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall />
      
    </div>
  );
}

export default App;

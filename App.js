import React from 'react';
import NavMenu from './DynamicMenu';
import Carousel from './Carousel';
import './App.css';

const items = [
  'APP',
  'HOME',
  'ELECTRONICS',
  'BOOKS',
  'MUSIC',
  'MOVIES',
  'CLOTHING',
  'GAMES',
];

const images = [
  'https://picsum.photos/id/1001/600/400',
  'https://picsum.photos/id/1002/600/400',
  'https://picsum.photos/id/1003/600/400',
  'https://picsum.photos/id/1004/600/400',
];

const App = () => (
  <div className="App">
    <NavMenu items={items} />
    <Carousel images={images} />
  </div>
);

export default App;
import logo from './logo.svg';
import './App.css';
import FbImageLibrary from 'react-fb-image-grid'
import Facebook from './components/Facebook'
import { useState } from 'react';
import Buttons from './components/Buttons';






function App() {

  const images = [
    'https://images.pexels.com/photos/850359/pexels-photo-850359.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-850359.jpg&fm=jpg',
    'https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg',
    'https://p1.pxfuel.com/preview/653/702/399/rose-flower-flowers-red-rose-royalty-free-thumbnail.jpg',
    'https://c8.alamy.com/comp/TACMXH/three-red-rose-flower-buds-and-petals-from-a-vase-TACMXH.jpg',
    'https://thumbs.dreamstime.com/b/frangipani-flowers-10997030.jpg'

  ]

  const currentDate = new Date()
  return (
    <div className="App">
      <header className="App-header">
        <Facebook title='Pictures of flowers' date={currentDate} username='Iqra Rizwan' profilePic='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' />
        <div style={{width:700}}>
          <FbImageLibrary images={images} />
        </div>

        <Buttons />
      </header>
    </div>
  );
}

export default App;

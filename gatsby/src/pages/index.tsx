import React from 'react';
import { Nav } from '../components/Nav';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <p>Hey! I'm the home page.</p>
      </div>
    );
  }
}

export default HomePage;

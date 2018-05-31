import React from 'react';
import { Link } from 'react-router-dom';
import PokeCatalog from './PokedexComponents/PokeCatalog';

const HomePage = () => {
  return (
    <div>
      <PokeCatalog/>

      <h1>React Slingshot</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="/fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </div>
  );
};

export default HomePage;

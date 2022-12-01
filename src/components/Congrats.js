import React from 'react'
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import Nav from './Nav';

function Congrats() {
  // this customizes the component tsParticles installation
  const customInit = async (engine) => {
    // this adds the preset to tsParticles, you can safely use the
    await loadFireworksPreset(engine);
  };

  const options = {
    preset: "fireworks"
  };

  return (
    <div className='congrats-container'>
      <div className='congrats'>
        <div>
          <h1>Countdown finished!</h1>
        </div>
        <div className='congrats-nav'>
          <Nav />
        </div>
      </div>
      <Particles options={options} init={customInit} />
    </div>
  );
}

export default Congrats
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
    <div>
      <div className='congrats'>
        <h1>Congrats!</h1>
        <h2>No Nut November has finished!</h2>
        <a className='btn' href='https://www.pornhub.com/video?o=tr' target="_blank">PornHub</a>
      </div>
      <div className='congrats-nav'>
        <Nav />
      </div>
      <Particles options={options} init={customInit} />
    </div>
  );
}

export default Congrats
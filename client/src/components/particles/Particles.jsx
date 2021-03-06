import React from "react";
import "./particles.scss";
import Particles from "react-tsparticles";

let params = {
  particles: {
    number: {
      value: 35,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#e9505a", "#828282", "#508ead", "#dbc663", "#FF7E79"]
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1.2,
        opacity_min: 0.8,
        sync: false
      }
    },
    size: {
      value: 6,
      random: true,
      anim: {
        enable: false,
        speed: 30,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 1
      },
      repulse: {
        distance: 150,
        duration: 1
      },
      push: {
        particles_nb: 3
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

export default function Particle(){
  return(
    <div id="particles-js">
    <Particles width="100vw" height="100vh" params={params} />
  </div>
  )
}


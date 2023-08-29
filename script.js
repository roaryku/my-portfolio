/* ---- slides - certificates ---- */

const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ["fullstack.png", "js_certificate.jpg", "bootstrap.jpg", "GSAP_FIGMA .jpg"];

let i = 0;

next.addEventListener("click", () => {
    i++;
   if (i > photos.length - 1){
       i = 0;
    }
    document.querySelector("#slide").src = photos[i];
})

back.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = photos.length -1;
    }
    document.querySelector("#slide").src= photos[i];
})

/* ---- particles.js config ---- */




/* ---- stats.js config ---- */

  gsap.from(".part", {x: -400, duration: 2, ease: "power1.out", stagger: 1})

  gsap.from(".red", {x: 900, delay: 1.5, duration: 2.5, ease: "power1.out", rotation: 150, stagger: 1})

  gsap.from(".btn", {x: 900, delay: 3.5, duration: 2.5, ease: "power1.out",  stagger: 1})

  gsap.from(".buttonTwo", {x: -900, delay: 3, duration: 4, ease: "power1.out", stagger: 1})

  gsap.from(".black", {x: -1100, duration: 3.5, delay: 3,  ease: "power1.out",  stagger: 1})

  gsap.from("#about", {y: 300, duration: 4,  ease: "back", stagger: 1, delay: 3, opacity: 0})

  gsap.from(".heding-projects", {x: -80, delay: 2, duration: 3, repeat:3, repeatDelay:3, ease: "power1.in", stagger: 1, opacity: 0})

  gsap.from(".main", {x: -80, delay: 2, duration: 3, repeat:3, repeatDelay:3, ease: "power1.in", stagger: 1, opacity: 0})

  gsap.from(".text", {y: -300, delay: 3, duration: 2, ease: "potwer1.inOut", stagger: 1, opacity: 0,})

  

  gsap.to(".black", {
    
    text: "FRONTEND WEB DEVELOPER",
    duration: 4, repeat: -1, repeatDelay: 2, ease: "none", yoyo: true, delay: 3
  })

  gsap.from(".color", {
    y: 100, duration: 1.7, delay: 3.5, ease: "power1.out", stagger: 1, opacity: 0
  })

  gsap.from(".colorSecond", {
    y: 100, duration: 1.7, delay: 5.5, ease: "power1.out", stagger: 1, opacity: 0
  })

  gsap.from(".button-one", {
    x: 20, rotation: 360, duration: 2, ease: "power1.out", stagger: 1, opacity: 0, repeat: 15, repeatDelay: 5
  })

  gsap.from(".name-work", {
    x: 20,  duration: 2, ease: "power1.out", stagger: 1, opacity: 0, repeat: 15, repeatDelay: 5
  })


  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#F9F7F7"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 3,
          "color": "#355C7D"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1.5,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#B33030",
        "opacity": 0.4,
        "width": 3
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 3,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });












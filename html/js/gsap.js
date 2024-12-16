window.onload = function () {
  //fadeIn animation
  const fadeEls = document.querySelectorAll(".fadeIn");

  gsap.to(fadeEls, {
    opacity: 1,
    duration: 1,
  });

  // * * * * * main * * * * *

  // visual trigger

  const svg = document.querySelectorAll(".svg");

  $(document).ready(function () {
    // 페이지 로드 후 비주얼 텍스트 애니메이션 실행

    gsap.to("body", {
      opacity: 1,
      duration: 1.5,
      onComplete: function () {
        gsap.to(svg, {
          transform: "translate( 0px, 0px )",
          duration: 1.5,
          delay: 0.3,
          onComplete: function () {
            gsap.to(".visualTxt-small", {
              opacity: 1,
              duration: 1.5,
            });
          },
        });
      },
    });
  });

  gsap.to(".visualCover", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".visual",
      start: "top -20%",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  });

  // introduce trigger

  gsap.to("main", {
    top: "-100vh",
    scrollTrigger: {
      trigger: ".visual",
      start: "top top",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(".introduce", {
    top: "-100vh",
    scrollTrigger: {
      trigger: ".introduce",
      start: "top top",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  });

  // portfolio intro Trigger

  gsap.to(".portfolioBg-wrap1", {
    transform: "translate(0,-550px)",
    scrollTrigger: {
      trigger: ".introduce",
      start: "top top",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  });
  gsap.to(".portfolioBg-wrap3", {
    transform: "translate(0,550px)",
    scrollTrigger: {
      trigger: ".introduce",
      start: "top top",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(".portfolioBg", {
    scale: 2,
    duration: 1,
    scrollTrigger: {
      trigger: ".introduce",
      start: "bottom top+=10%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(".portfolioBg-bg strong", {
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".introduce",
      start: "bottom top+=10%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(".portfolioWrap", {
    top: "0",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".introduce",
      start: "bottom top",
      toggleActions: "play none none reverse",
    },
  });
};

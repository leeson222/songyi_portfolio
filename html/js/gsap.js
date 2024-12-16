window.onload = function() {

  //fadeIn animation
  const fadeEls = document.querySelectorAll('.fadeIn');
  
  gsap.to(fadeEls, {
    opacity: 1,
    duration: 1
  });

  // * * * * * main * * * * *

  // visual trigger

  const svg = document.querySelectorAll('.svg')

  $(document).ready(function(){
    // 페이지 로드 후 비주얼 텍스트 애니메이션 실행
    
    gsap.to('body',{
      opacity: 1,
      duration: 1.5,
      onComplete: function () {
        gsap.to(svg,{
          transform: 'translate( 0px, 0px )',
          duration: 1.5,
          delay: 0.3,
          onComplete: function () {
            gsap.to('.visualTxt-small',{
              opacity: 1,
              duration: 1.5
            })
          }
        });
      }
    })
  })

  gsap.to('.visualCover',{
    opacity: 1,
    scrollTrigger: {
      trigger: '.visual',
      start: 'top -20%',
      end: 'bottom top',
      scrub: true,
      toggleActions: 'play none none reverse'
    }
  })

  // introduce trigger

  gsap.to('main', {
    top: '-100vh',
    scrollTrigger: {
      trigger: '.visual',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      toggleActions: 'play none none reverse'
    }
  });

  gsap.to('.introduce', {
    top: '-100vh',
    scrollTrigger: {
      trigger: '.introduce',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      toggleActions: 'play none none reverse'
    }
  });

  // portfolio intro Trigger

  gsap.to('.portfolioBg-wrap1',{
    transform: 'translate(0,-550px)',
    scrollTrigger: {
      trigger: '.introduce',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      toggleActions: 'play none none reverse'
    }
  })
  gsap.to('.portfolioBg-wrap3',{
    transform: 'translate(0,550px)',
    scrollTrigger: {
      trigger: '.introduce',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      toggleActions: 'play none none reverse'
    }
  });

  gsap.to('.portfolioBg', {
    scale: 2,
    duration: 1,
    scrollTrigger: {
      trigger: '.introduce',
      start: 'bottom top+=10%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.to('.portfolioBg-bg strong', {
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: '.introduce',
      start: 'bottom top+=10%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.to('.portfolioWrap', {
    top: '0',
    duration: 1.5,
    scrollTrigger: {
      trigger: '.introduce',
      start: 'bottom top',
      toggleActions: 'play none none reverse'
    }
  });

  // 모든 .portfolioBox에 애니메이션 적용
  gsap.utils.toArray(".portfolioBox").forEach((box) => {
    gsap.fromTo(
      box,
      { opacity: 0, y: 50 }, // 초기 상태
      {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
              trigger: box,         // 각 박스를 트리거로 사용
              start: "top =+700",     // 화면에 박스의 top이 80% 지점에 도달하면
              end: "top =+200",       // 종료 지점 (필요에 따라 설정)
              toggleActions: "play none none reverse", // 애니메이션 재생
              markers: true         // 디버깅용 마커 표시
          }
      }
    );
  });

};

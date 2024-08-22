function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const [vw, vh] = [window.innerWidth, window.innerHeight];
    star.style.left = `${Math.random() * vw}px`;
    star.style.top = `${Math.random() * vh}px`;
  
    document.body.appendChild(star);
  
    setTimeout(() => {
      star.remove();
    }, 3000);
  }
  
  setInterval(createStar, 100);
  
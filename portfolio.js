const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '☰';
document.querySelector('.navbar').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
  document.querySelector('.navi ul').classList.toggle('active');
});

document.querySelectorAll('.navi a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); 
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId); 
      
      
      window.scrollTo({
        top: targetSection.offsetTop - 70, 
        behavior: 'smooth' 
      });
    });
  });
 

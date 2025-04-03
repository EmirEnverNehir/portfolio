const titleElement = document.querySelector('.title');
console.log(titleElement);

titleElement.textContent = "Emir Enver Nehir - Web Developer";
titleElement.style.color = "#4CAF50"; 
titleElement.style.fontSize = "28px"; 

const profilePhoto = document.querySelector('.photo');

 

document.querySelector('.aboutme h2').textContent = "Who Am I?";

const navLinks = document.querySelectorAll('.navi a');  
console.log(navLinks);  

const projectImages = document.querySelectorAll('.webp, .blp,.photo');
projectImages.forEach(img => {
  img.addEventListener('mouseover', function() {
    this.style.border = "3px solid #4CAF50";
  });
  img.addEventListener('mouseout', function() {
    this.style.border = "none";
  });
});

navLinks.forEach(link => {
  link.addEventListener('mouseover', function() {
    this.style.border = "3px solid #4CAF50";
  });
  link.addEventListener('mouseout', function() {
    this.style.border = "none";
  });
});
 
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '☰';
document.querySelector('.navbar').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
  document.querySelector('.navi ul').classList.toggle('active');
});
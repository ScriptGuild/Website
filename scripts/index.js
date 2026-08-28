// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Subtle header border intensifies on scroll
const header = document.querySelector('.site-header');
const onScroll = () => {
  if (window.scrollY > 8) {
    header.style.borderBottomColor = 'rgba(201,169,97,0.35)';
  } else {
    header.style.borderBottomColor = '';
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

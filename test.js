const sectionsArray = document.querySelectorAll('section');
const sectionPos = {};

sectionsArray.forEach((section) => {
 sectionPos[section.id] = section.offsetTop;
});
window.onscroll = () => {
 var scrollPosition =
  document.documentElement.scrollTop || document.body.scrollTop;
 for (id in sectionPos) {
  if (sectionPos[id] <= scrollPosition) {
   document.querySelector('.active').classList.remove('active');
   document.querySelector(`a[href*=${id}]`).classList.add('active');
  }
 }
};
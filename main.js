const side = Math.floor(innerHeight * devicePixelRatio);
const imgUrl = `https://picsum.photos/${side}.webp`;
const slider = document.querySelector('input');
const maxOffset = side - Math.floor(innerWidth * devicePixelRatio);

slider.max = Math.floor(maxOffset / devicePixelRatio);

slider.addEventListener('input', () => {
  document.body.style.backgroundPosition = `-${parseInt(slider.value)}px 0`;
});

document.body.style.backgroundImage = `url(${imgUrl})`;

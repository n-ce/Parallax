const side = Math.floor(innerHeight * devicePixelRatio);
const imgUrl = `https://picsum.photos/${side}.webp`;
const slider = document.querySelector('input');
slider.max = innerHeight - innerWidth;

slider.addEventListener('input', () => {
  document.body.style.backgroundPosition = `-${parseInt(slider.value)}px 0`;
});

document.body.style.backgroundImage = `url(${imgUrl})`;

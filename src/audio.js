<<<<<<< HEAD
const Sound = {};

require.context("../audio/", true, /\.(wav)$/i).keys().forEach(file => {
  Sound[file.substring(2).split('.')[0]] = new Audio(`audio/${file.substring(2)}`);
})

Sound.play = function (name) {
  if (Sound[name].paused) Sound[name].play();
  else Sound[name].currentTime = 0;
}

export default Sound
=======
const AUDIO = {};

require.context("../audio/", true, /\.(wav)$/i).keys().forEach(file => {
  AUDIO[file.substring(2).split('.')[0]] = new Audio(`audio/${file.substring(2)}`);
})

AUDIO.play = function (name) {
  if (AUDIO[name].paused) AUDIO[name].play();
  else AUDIO[name].currentTime = 0;
}

export default AUDIO
>>>>>>> 28cdee8750daea129dfe229402f7e9166c3d4476

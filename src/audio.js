const AUDIO = {};

require.context("../audio/", true, /\.(wav)$/i).keys().forEach(file => {
  AUDIO[file.substring(2).split('.')[0]] = new Audio(`audio/${file.substring(2)}`);
})

AUDIO.play = function (name) {
  if (AUDIO[name].paused) AUDIO[name].play();
  else AUDIO[name].currentTime = 0;
}

export default AUDIO
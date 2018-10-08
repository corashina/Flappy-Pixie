const Sound = {};

require.context("../audio/", true, /\.(wav)$/i).keys().forEach(file => {
  Sound[file.substring(2).split('.')[0]] = new Audio(`audio/${file.substring(2)}`);
})

Sound.play = function (name) {
  if (Sound[name].paused) Sound[name].play();
  else Sound[name].currentTime = 0;
}

export default Sound
const Sound = {};

// Iterate over files in audio folder, add them to an object
require.context("../audio/", true, /\.(wav)$/i).keys().forEach(file => {
  Sound[file.substring(2).split('.')[0]] = new Audio(`audio/${file.substring(2)}`);
})

// Reset audio if already playing
Sound.play = function (name) {
  if (Sound[name].paused) Sound[name].play();
  else Sound[name].currentTime = 0;
}

export default Sound

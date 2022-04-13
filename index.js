import MediaPlayer from "./classes/MediaPlayer.js";

const audio1 = document.querySelector("._audio_1");
const audio2 = document.querySelector("._audio_2");

const buttonPlay1 = document.querySelector(".button_play1");
const buttonPlay2 = document.querySelector(".button_play2");

const redCirculeNeon = document.querySelector(".red-circule-container");
const redCirculeNeon2 = document.querySelector(".red-circule-container2");

const allAudios = [
  {
    audio: audio1,
    playButton: buttonPlay1,
    feedBackIcon: redCirculeNeon,
  },
  {
    audio: audio2,
    playButton: buttonPlay2,
    feedBackIcon: redCirculeNeon2,
  },
];

allAudios.forEach((element) => {
  const player = new MediaPlayer(
    element.audio,
    element.playButton,
    element.feedBackIcon
  );
  if (element.playButton)
    element.playButton.onclick = () => player.togglePlay();
});

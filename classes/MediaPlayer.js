class MediaPlayer {
  constructor(audio, icon, redCircule) {
    this.audio = audio;
    this.icon = icon; // Feedback icon (Played or Puased)
    this.redCircule = redCircule;
  }

  play() {
    this.audio.play();
    this.changeImage("../assets/icons/icon-pausa-white.png");
    this.redCirculeOn();
  }

  pause() {
    this.audio.pause();
    this.changeImage("../assets/icons/icon-play.png");
    this.redCirculeOff();
  }

  changeImage(icon) {
    const img = this.icon.querySelector("img");
    img.src = icon;
  }

  redCirculeOn() {
    this.redCircule.style.display = "inline-block";
  }
  redCirculeOff() {
    this.redCircule.style.display = "none";
  }

  togglePlay() {
    if (this.audio.paused) {
      this.audio.play();
      this.changeImage("../assets/icons/icon-pausa-white.png");
      this.redCirculeOn();
    } else {
      this.audio.pause();
      this.changeImage("../assets/icons/icon-play.png");
      this.redCirculeOff();
    }
  }
}

export default MediaPlayer;

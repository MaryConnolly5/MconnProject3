import { LitElement, html, css } from 'lit';


const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MconnProject3 extends LitElement {
  static properties = {
    header: { type: String },
    source: { type: String, reflect: true},
    icon: { type: String},
    playing: { type: Boolean, reflect: true},
    canPlay: { type: Boolean, reflect: true}
  }
}

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--mconn-project-3-background-color);
    }
  

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  .container {
display: inline-flex;
align-items: center;
padding: 5px 5px 5px 0px;
background: Blue;
border-radius: 5px;
min-width: 64px;
font-size: 18px;
/*cursor: pointer;*/
  }
  .icon-spacing{
    padding-right: 10px;
  }
  ';

  constructor() {
    super();
    this.source = '';
    this.icon = "av:play-arrow";
    this.playing = false;
    this.canPlay = false;
    this.header = 'My app';
  }

  render() {
    handleTimeUpdate(){
      if(this.shadowRoot.querySelector(".player").ended){
        this.audioController(false);
      }
      var audioDuration = this.shadowRoot.querySelector(".player").duration;
      var audioCurrentTime = this.shadowRoot.querySelector(".player").currentTime;
      var progressPercentage = (audioCurrentTime / audioDuration)*100;
      this.shadowRoot.querySelector(".container").style.background = `linear-gradient(90deg, var(--simple-colors-default-theme-accent-6) 0% ${progressPercentage}%, grey ${progressPercentage}% 100%)`;
    }

    loadAudio(source) {
      const audioFile = this.shadowRoot.querySelector('.player');
      audioFile.src = source;
      audioFile.load();
    }

    handlePlaythrough(){
      setTimeout(() => {
        console.log("Loading finished");
        this.canPlay = true;
        this.audioController(true);
      }, 500); 
    }
    
    return html`
    <body>

  <div>
<div>
      <audio ref={this.audioRef} src="https://soundboardguy.com/sounds/lebron-james-vine/" onTimeUpdate={this.handleTimeUpdate}>
      <div className="progress-bar" 
      
  );
}

</div>
</div>
    `;
  }
  handleTimeUpdate = () => {
    const audio = this.audioRef.current;
    const progress = (audio.currentTime / audio.duration) * 100;
    this.setState({
      progress: progress
    });
  }
customElements.define('mconn-project-3', MconnProject3);
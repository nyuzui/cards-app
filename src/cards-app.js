import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "@lrnwebcomponents/a11y-figure/a11y-figure.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardsApp extends LitElement {
  static properties = {
    header: { type: String },
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
      background-color: var(--cards-app-background-color);
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

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>
  
        <!-- Add the meme-maker component here -->
        <meme-maker
          alt="Cat stalking a small toy"
          image-url="https://cdn2.thecatapi.com/images/9j5.jpg"
          top-text="AAAAAAAA"
          bottom-text="AAAAAAAAAAAAA"
        ></meme-maker>
  
        <p>Edit <code>src/CardsApp.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>
  
      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
      <a11y-figure img-src="//placekitten.com/400/300" img-alt="random kitten" open-text="Show Description" close-text="Hide Description" style="max-width:400px;">
      <h4 slot="figcaption">AAAAAAAAAAAAAAA</h4>
      <div slot="details">Awesome kitty</div>
      <div slot="summary">Image Description</div>
      </a11y-figure>
    `;
  }
}

customElements.define('cards-app', CardsApp);
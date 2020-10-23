
customElements.define('webcomp-link', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
          <a href="Counter">ShadowDOM Link</a>
    `;
    }
});

const { html } = require("common-tags");

const Footer = () => {
  return html`
    <footer class="scroll-to-up" id="scroll-to-up">
      <button onclick="scrollToUp()">
        <i class="fa-solid fa-circle-arrow-up"></i>
      </button>
    </footer>
  `;
};

module.exports = Footer;

const { html } = require("common-tags");

const Navbar = () => {
  return html`
    <header>
      <nav class="desktop-navbar">
        <div>
          <label for="check">
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
          <img src="../../../assets/weblogo.png" alt="Web Logo" id="weblogo" />
        </div>

        <div>
          <p id="scroll-definition">Definition</p>
          <p id="scroll-articles">Articles</p>
          <p id="scroll-examples">Examples</p>
          <p id="scroll-infographics">Infographic</p>
          <p id="scroll-conclusion">Conclusion</p>
        </div>
      </nav>

      <nav class="mobile-navbar" id="mobile-navbar">
        <p id="scroll-definition">Definition</p>
        <p id="scroll-articles">Articles</p>
        <p id="scroll-examples">Examples</p>
        <p id="scroll-infographics">Infographic</p>
        <p id="scroll-conclusion">Conclusion</p>
      </nav>

      <div class="navbar-overlay" id="navbar-overlay" />
    </header>
  `;
};

module.exports = Navbar;

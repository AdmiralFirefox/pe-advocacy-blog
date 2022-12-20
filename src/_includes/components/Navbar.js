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
          <p>Definition</p>
          <p>Articles</p>
          <p>Examples</p>
          <p>Infographic</p>
          <p>Conclusion</p>
        </div>
      </nav>

      <nav class="mobile-navbar" id="mobile-navbar">
        <p>Definition</p>
        <p>Articles</p>
        <p>Examples</p>
        <p>Infographic</p>
        <p>Conclusion</p>
      </nav>

      <div class="navbar-overlay" id="navbar-overlay" />
    </header>
  `;
};

module.exports = Navbar;

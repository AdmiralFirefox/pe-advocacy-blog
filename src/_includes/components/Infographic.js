const { html } = require("common-tags");

const Infographic = () => {
  return html`
    <div class="infographic-wrapper">
      <h1>Laro ng Lahi Fitness Exercises</h1>
      <div class="infographic-image-wrapper">
        <img src="../../assets/infographics.png" alt="Infographic Poster" />
      </div>
    </div>
  `;
};

module.exports = Infographic;

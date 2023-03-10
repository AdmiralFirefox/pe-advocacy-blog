const { html } = require("common-tags");

const Examples = () => {
  return html`
    <div class="examples-top-waves" id="examples-section">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-12.19,126.80 C319.07,72.52 320.20,73.51 574.72,27.14 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #ffddc2"
        ></path>
      </svg>
    </div>

    <div class="examples-wrapper">
      <h1 class="examples-title">Examples of Laro ng Lahi</h1>

      <div class="examples-content">
        <div class="content-card" id="fade-up-animation">
          <div class="examples-image-overflow">
            <img src="../../assets/hukbo.jpg" alt="Hukbo" />
          </div>
          <h1>Hukbo</h1>
        </div>
        <div class="content-card" id="fade-up-animation">
          <div class="examples-image-overflow">
            <img src="../../assets/batuhangbola.jpg" alt="Hukbo" />
          </div>
          <h1>Batuhang Bola</h1>
        </div>
        <div class="content-card" id="fade-up-animation">
          <div class="examples-image-overflow">
            <img src="../../assets/dampa.jpg" alt="Hukbo" />
          </div>
          <h1>Dampa</h1>
        </div>
        <div class="content-card" id="fade-up-animation">
          <div class="examples-image-overflow">
            <img src="../../assets/tumbangpreso.jpg" alt="Hukbo" />
          </div>
          <h1>Tumbang Preso</h1>
        </div>
        <div class="content-card" id="fade-up-animation">
          <div class="examples-image-overflow">
            <img src="../../assets/luksongtinik.jpg" alt="Hukbo" />
          </div>
          <h1>Luksong Tinik</h1>
        </div>
        <div class="content-card" id="fade-up-animation">
          <div class="examples-image-overflow">
            <img src="../../assets/luksonglubid.jpg" alt="Hukbo" />
          </div>
          <h1>Luksong Lubid</h1>
        </div>
      </div>
    </div>

    <div class="examples-bottom-waves" id="infographics-section">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-12.19,126.80 C319.07,72.52 320.20,73.51 574.72,27.14 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #ffddc2"
        ></path>
      </svg>
    </div>
  `;
};

module.exports = Examples;

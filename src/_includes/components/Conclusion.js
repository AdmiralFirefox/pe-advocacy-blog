const { html } = require("common-tags");

const Conclusion = () => {
  return html`
    <div id="conclusion-section">
      <div class="conclusion-top-waves">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%"
        >
          <path
            d="M-12.19,126.80 C319.07,72.52 320.20,73.51 574.72,27.14 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: #c6ffc1"
          ></path>
        </svg>
      </div>

      <div class="conclusion-content">
        <h1>Conclusion</h1>
        <div class="conclusion-text">
          <p id="fade-up-animation-low-delay">
            In general, Laro ng Lahi, our Traditional Filipino Games, are an
            integral and essential part of our culture. These games give us a
            glimpse into our past and our culture. Despite all the modernity
            that globalization has brought, it&apos;s imperative that we keep
            this spirit of tradition alive no matter what. May this blog inspire
            you, dear reader, to continue the spirit our ancestors passed down
            toward us. We hope that you have learned much from your time here.
            <br />
            <br />
            Thank you for visiting our site. <br />
            Now go out there and explore laro ng lahi to your heart&apos;s
            content!
          </p>
        </div>
      </div>
    </div>
  `;
};

module.exports = Conclusion;

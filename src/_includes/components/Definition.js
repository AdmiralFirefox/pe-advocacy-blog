const { html } = require("common-tags");

const Definition = () => {
  return html`
    <div id="definition-section">
      <div class="definition-wrapper">
        <section class="definition-content">
          <h1>What is...</h1>
          <h1>Laro ng Lahi?</h1>
          <p>
            Many of you may ask, “What is Laro ng Lahi” or “Larong Lahi” as some
            of you may pronounce it.
            <br />
            <br />
            Laro ng Lahi, or in English, Games your kind are the games that were
            developed or created by our fellow Filipinos. They are significant
            treasures of our past. Our ancestors formulated them, who passed
            them down to their sons and then to their grandsons, eventually
            passing them down to us.
            <br />
            <br />
            Larong Lahi is not specific. Rather, it is a catch-all term for many
            individual games and sporting events. Some are relatively simple,
            requiring little to no equipment, and can be played with a few or
            even just one player, while others require lots of players,
            preparation, and even equipment.
            <br />
            <br />
            It&apos;s a local heritage that even now continues to be popular and
            fun among all groups of people regardless of income, status, race,
            or location. Ranging from relatively young kids living in remote
            barrios to affluent teenagers living in private subdivisions, Larong
            Lahi has definitely made its way into our cultural zeitgeist and has
            influenced many people.
          </p>
        </section>

        <div class="definition-image-wrapper">
          <img src="../../assets/definition.png" alt="Luksong Baka" />
        </div>
      </div>

      <div class="definition-waves" id="article-section">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%;"
        >
          <path
            d="M0.23,36.01 C137.36,224.50 277.31,-68.57 500.22,87.33 L500.00,0.00 L0.00,0.00 Z"
            style="stroke: none; fill: #C6FFC1;"
          ></path>
        </svg>
      </div>
    </div>
  `;
};

module.exports = Definition;

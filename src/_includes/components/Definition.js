const { html } = require("common-tags");

const Definition = () => {
  return html`
    <div id="definition-section">
      <div class="definition-wrapper">
        <section class="definition-content">
          <h1>What is...</h1>
          <h1>Laro ng Lahi?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            laboriosam reiciendis doloribus perspiciatis. Veniam culpa
            molestias, tenetur exercitationem optio reprehenderit quasi numquam
            aut velit vitae illo, impedit in commodi deleniti. Accusantium
            aperiam corporis quae distinctio, adipisci ipsum velit assumenda
            incidunt dolores mollitia voluptate similique sunt quo aut vero
            temporibus voluptates ipsam unde. Atque molestiae veniam reiciendis
            eveniet in, ullam vel hic quis recusandae dolores illum delectus
            nemo dolorem natus, non dicta ut, fugiat culpa impedit laudantium
            vero tempora dignissimos? Deserunt magni ipsa est labore tenetur et
            nihil, qui, repudiandae voluptas, consequuntur a enim exercitationem
            maxime dolor? Ratione a inventore cupiditate voluptatibus velit,
            nostrum dolores, iste pariatur cum earum eum eveniet! Quos suscipit
            et amet deserunt! Voluptates adipisci, voluptatibus recusandae sit
            quis, mollitia numquam praesentium totam quidem dolores sequi sed
            sint accusamus omnis. Est nisi perferendis quaerat blanditiis illum
            dolore pariatur nobis doloremque, ut exercitationem rerum quo!
            Expedita, itaque delectus quos eligendi praesentium temporibus
            necessitatibus dicta, facere, dolorem corporis dolores suscipit
            labore beatae numquam voluptates quaerat minima maiores cupiditate!
            Nihil sunt ratione, dolorem explicabo libero temporibus quas
            suscipit! Aliquid, repellat quaerat facere iusto ex corrupti nam,
            culpa cupiditate velit quo voluptates deleniti accusamus. Iste
            repellendus quo officiis natus ratione, explicabo odio
            necessitatibus minus. Voluptatum deleniti vitae, ullam rem soluta
            quisquam iure numquam! Corrupti, cumque ullam voluptatibus maiores
            accusamus exercitationem maxime aperiam, saepe aspernatur debitis
            expedita accusantium tenetur assumenda eos ad mollitia alias
            asperiores quis reiciendis magni ipsum adipisci sapiente. Tempora ad
            aperiam, explicabo cupiditate alias excepturi adipisci perferendis
            totam aliquid exercitationem.
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

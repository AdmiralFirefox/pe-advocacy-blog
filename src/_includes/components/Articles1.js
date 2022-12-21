const { html } = require("common-tags");

const Articles1 = () => {
  return html`
    <section class="articles-one-wrapper">
      <div class="articles-one-image-wrapper">
        <img src="../../assets/article1.png" alt="Laro ng Lahi" />
      </div>
      <div class="articles-one-content">
        <h1>Laro ng Lahi in Danger of Vanishing</h1>
        <p>
          One of the nations renowned for its rich, varied cultural history and
          distinctive customs is the Philippines. Strongly affected by the many
          colonizers, from the Spanish to the Americans to neighboring Japan,
          their long histories and exchanges combine to form the foundation of
          our current society. Indeed, the distinctiveness, vivacity, and
          spirituality of our rituals profoundly represent the Filipino
          identity.
          <br />
          <br />
          While we are progressively entering the world of globalization, and
          the advancement it brought to the nation is excellent, on the
          downside, it has slowly taken the vital elements that have already
          been a part of our culture and customs for many decades.
          <br />
          <br />
          The world in which we live is advancing technologically. This is the
          era when millennials frequently ignore these traditional games in
          favor of new technology. However, several studies have found that
          these age-old Filipino pastimes benefit our physical, social, and
          emotional well-being. This type of physical stamina and endurance
          training strengthens your immune system. Additionally, the social
          component was established, which is crucial for child development.
          Playing with other kids improves confidence and communication
          abilities. It's beneficial in that it also strengthens our feeling of
          cultural identity. Our advocacy aims to prevent traditional games,
          such as laro ng lahi, from being irrelevant.
        </p>
      </div>
    </section>
  `;
};

module.exports = Articles1;

const { html } = require("common-tags");

const Articles1 = () => {
  return html`
    <section class="articles-three-wrapper">
      <div class="articles-three-image-wrapper">
        <img src="../../assets/article3.png" alt="Laro ng Lahi" />
      </div>
      <div class="articles-three-content">
        <h1>Laro ng Lahi Experiences</h1>
        <p>
          "Laro ng lahi" holds a special place to the children of the
          Philippines who played outside with friends and family as well as on
          festivals. These games give memories of childhood bliss out in summer
          or just after school in the afternoon playing without a care to
          mundane things, enjoying the air, relishing in the mood, and overall
          just having a good time with other kids outside. As adults the
          memories will be like bittersweet experiences due to having more
          responsibility now; however people can always look back and find a
          sliver of happiness. As for personal experiences I myself got a lot of
          injuries from playing these games, I even have scars on my knees still
          present due to playing too much. I wasn't that active of a kid back
          then but I still played because I don't know- I was a kid I wanted to
          play.
        </p>
      </div>
    </section>
  `;
};

module.exports = Articles1;

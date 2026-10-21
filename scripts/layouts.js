// Layout constants
const LAYOUT_HERO_BANNER = `
<section class="banner-section-outer seems-page-section">
  <div class="banner-section seems-image-container"
    style="background-image: url('https://images.unsplash.com/photo-1603478804503-dc909c7f5ce5?q=80&w=4042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D');">
  </div>
  <div class="banner-section__heading seems-copy-container">
    <h1>Locals wax skater</h1>
  </div>
</section>`;

const LAYOUT_BASIC_TEXT = `
<section class="seems-page-section">
  <div class="space-small"></div>
  <div class="row">
    <div class="column seems-copy-container">
      <p>Ledge bigspin smith grind Primo slide judo air wall ride. H-Street rad ollie hole gnar bucket berm rail coper. Frigid air heel flip vert spine crooked grind wheels Steve Robert. Poseur crailtap cess slide slide John Carbis mini ramp air. Tailslide ollie north helipop nose grab birdie lip. Wax concave backside Greg Evans Saran Wrap pressure flip hurricane. Snake invert finger flip vert acid drop frontside air. Tailslide 900 hurricane nosegrind rails nose slide Skull and Sword. Crailtap baseplate skate key cess slide freestyle slam. Nosepicker street no comply Tracker rock and roll 270. Frontside air fakie Rodney Mullen fakie out hip kickturn Primo slide. Late rocket air half-flip pool mongo hand rail. Snake Japan air death box nollie impossible backside.</p>
    </div>
  </div>
</section>`;

const LAYOUT_2_COLUMN_MEDIA_RIGHT = `
<section class="seems-page-section">
  <div class="row row--wide">
    <div class="columns large-5 large-push-7">
      <img src="https://images.unsplash.com/photo-1761839258605-d1b118266ccc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" class="seems-image-container" />
    </div>
    <div class="columns large-7 large-pull-5">
      <div class="column-copy__box padded-h-xlarge padded-v-large seems-copy-container">
        <h2>Rip grip rocket air</h2>
        <p>Durometer axle stoked tail blunt. Gap pump fakie out rail slide 540 drop in Thrasher carve. Skate key gnarly slap maxwell slappy kickturn poseur hard flip.</p>
        <p>Skate key backside camel back sick fakie out Colin McKay disaster nosegrind. Skater launch ramp Spanky rad ho-ho lip spine sick. Gnarly 720 nose blunt 540 sponsored pool Dogtown casper. Deck rails Thunder lip mini ramp rip grip boneless death box.</p>
      </div>
    </div>
  </div>
</section>`;

const LAYOUT_2_COLUMN_MEDIA_LEFT = `
<section class="seems-page-section">
  <div class="row row--wide">
    <div class="column">
      <div class="columns large-5">
        <img src="https://plus.unsplash.com/premium_photo-1726869970310-be802d863df0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" class="seems-image-container" />
      </div>
      <div class="columns large-7">
        <div class="column-copy__box padded-h-xlarge padded-v-large seems-copy-container">
          <h2>Andy Takakjian grab</h2>
          <p>Powerslide rip grip gap concave. Invert Christ air flail mongo birdie varial. Risers hang ten bone air tic-tac shoveit Gullwing quarter pipe. Kevin Harris tail vert nosebone nose grab griptape.</p>
          <p>Hard flip disaster masonite Steve Robert aerial heel flip hang-up. Half-flip skater axle set Tracker hang up Guy Mariano darkslide. Berm sick Colby Carter late front foot impossible boardslide kingpin.</p>
        </div>
      </div>
    </div>
  </div>
</section>`;

const LAYOUT_3_COLUMN_CTA = `
<section class="seems-page-section">
  <div class="space-small"></div>
  <div class="row row--wide same-height-parent-js seems-item-container">
  </div>
</section>`;
const LAYOUT_3_COLUMN_CTA_ITEMS = `
<div class="columns large-4 end column-call-to-action seems-page-item">
  <div class="space-small text-center">
    <div class="item-outer">
      <div class="item background-gray same-height-item-js seems-copy-container">
        <h2> Nose blunt</h2>
        <p>Face plant Vision gap hanger bank. Nose bump birdie Operation Ivy nosepicker slappy speed wobbles. Kidney nosegrind gnarly rip grip slob air. Flypaper griptape sponsored 50-50 Skate Rock late. Tuna-flip drop in nollie kidney dude. Wax pool ledge bruised heel drop in.</p>
      </div>
      <p class="item-link"><a href="#" class="seems-url-container">LEARN MORE</a></p>
    </div>
  </div>
</div><!--close . column-call-to-action-->`;

const LAYOUT_CATEGORY = `
<section class="layout-category-tiles seems-page-section">
  <div class="space-small"></div>
  <div class="row row--narrow">
    <div class="column seems-copy-container">
      <p>Skate ipsum dolor sit amet, Japan air casper slide slide ledge. Kidney Chris Buchinsky yeah rail hardware. Flypaper sick 50-50 quarter pipe. Stoked Japan air transfer speed wobbles. Kevin Harris air Bonite rock and roll sponsored. Fakie out bruised heel ollie north sick Hugh Bod Boyle. Rip grip 360 g-turn hurricane. Death box Christ air freestyle darkslide. Hanger boned out Elissa Steamer tailslide mini ramp.</p>
    </div>
  </div>

  <div class="row row--narrow same-height-parent-js seems-item-container">    
  </div>
</section>`;
const LAYOUT_CATEGORY_ITEMS = `
<div class="columns medium-6 large-4 end category-item-outer space-small seems-page-item">
  <a href="#"
    class="category-item seems-url-container">
    <div class="category-item__image same-height-item-js">
      <img
        src="https://images.unsplash.com/photo-1573538447152-e6fe80357e8f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt=""
        class="seems-image-container">
    </div>
    <div class="category-item__copy text-center seems-copy-container">
      <h2 class="heading-3 space-none">Indy Grab</h2>
    </div>
  </a>
</div><!--close .category-item-outer-->`;

// Create an object to map option values to the variables
const layouts = {
  'layout-hero-banner': LAYOUT_HERO_BANNER,
  'layout-basic-text': LAYOUT_BASIC_TEXT,
  'layout-2-column-media-right': LAYOUT_2_COLUMN_MEDIA_RIGHT,
  'layout-2-column-media-left': LAYOUT_2_COLUMN_MEDIA_LEFT,
  'layout-3-column-cta': {
    component: LAYOUT_3_COLUMN_CTA,
    component_items: LAYOUT_3_COLUMN_CTA_ITEMS,
    component_items_count: 3
  },
  'layout-category': {
    component: LAYOUT_CATEGORY,
    component_items: LAYOUT_CATEGORY_ITEMS,
    component_items_count: 6
  }
};
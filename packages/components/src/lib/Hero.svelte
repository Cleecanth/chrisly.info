<script>
  import Grid from './Grid.svelte';
  /** @type { string? } */
  export let image = null;
  export let title = 'Chris Lee';
</script>

<header>
  <Grid class="grid-wrap">
    <figure class="preview" style="background-image: url({image})">
      {#if image}<img src={image} class="preview-image" alt="Chris looking out a window" />{/if}
    </figure>

    <div class="title">
      <h1>{title}</h1>
    </div>

    <div class="meta-wrap">
      <hr />
      <p>UI / UX</p>
      <ul>
        <li>Design</li>
        <li>Development</li>
      </ul>
    </div>

    <div class="arrow">↓</div>

  </Grid>
</header>

<style lang="scss">
  @use 'sass:math';
  @use 'styles/variables' as g;
  @import 'styles/functions.scss';
  @import 'styles/grid.scss';

  %title-size {
    font-size: fluid-type(g.$type-fs-6-min, 259);
  }

  header {
    background-color: color('bg');
    min-height: rems(700px);
    height: 101vh;
    max-height: rems(1300px);
  }

  :global(.grid-wrap) {
    height: 100%;
    grid-auto-rows: min-content;

    grid-template-rows:
      [gutter-start] minmax(4rem, 10vh)
      [gutter-end name-start preview-start] 1fr
      [name-end] minmax(1rem, 1fr)
        minmax(0.5rem, 20vh)
      [meta-start] minmax(2rem, 5vh)
      [preview-end] minmax(2rem, 10vh)
        minmax(3rem, 2fr)
        minmax(2rem, 1fr)
      [meta-end];
    position: relative;
  }

  .preview {
    @extend %title-size;
    display: grid;
    grid-template-columns:
      repeat(10, 1fr) [gutter-start]
      minmax(2rem, calc(50vw - 600px)) [gutter-end];
    grid-template-rows:
      [offset-start] #{(0.7413 * 2) - 0.25em}
      repeat(4, 1fr)
      [offset-end] 0.75fr
      [end];
    grid-column: three-start/full-end;
    grid-row: preview;
    margin-top: 6rem;
    background-color: color('accent');
    height: 100%;
    overflow: visible;
    position: relative;
    background-blend-mode: soft-light;
    background-size: auto 400%;
    background-position: top center;
    background-repeat: repeat;
    animation: 20s ease-in-out infinite alternate;
    animation-name: preview-breathe;
  }

  @keyframes preview-breathe {
    0% {
      background-size: auto 400%;
      background-position-x: 50%;
      background-position-y: 0%;
    }
    100% {
      background-size: auto 410%;
      background-position-x: 40%;
      background-position-y: 5%;
    }
  }

  .preview-image {
    grid-column: 1 / gutter-start;
    grid-row: 1 / offset-end;
    align-self: end;
    mix-blend-mode: multiply;
    margin-top: -10%;
    margin-left: -5%;
    opacity: 0.25;
    max-width: 100%;
  }

  .title {
    @extend %title-size;
    grid-column: l-gutter/span 4;
    grid-row: 2 / auto;
    position: relative;
    align-self: start;
    z-index: 3;
  }

  h1 {
    font-size: 1em;
    line-height: 0.7413;
    font-variation-settings: 'wght' 800;
    letter-spacing: -0.035em;
    text-align: right;
    direction: rtl;
    color: color('type', light);
    display: inline-block;
    margin-left: -0.2em;
  }

  .meta-wrap {
    @extend %grid-c-inherit;
    margin-bottom: 3rem;
    position: relative;
    grid-row: meta;
    align-self: stretch;
    z-index: 2;
    grid-auto-rows: min-content;

    hr {
      grid-column: two-start/twelve-end;
      border-top: 3px solid color('type', light);
      outline: none;
      margin-bottom: 2rem;
    }

    p,
    li {
      font-size: rems(18px, 24px);
      font-weight: 700;
      letter-spacing: 0.75em;
      font-variation-settings: 'wght' 800;
      text-transform: uppercase;
    }

    ul {
      grid-column: 9 / span 4;
      margin: 0;
      padding: 0;
      list-style-type: '–';
    }

    li {
      margin-bottom: 0.5rem;
    }

    p {
      grid-column: two-start/seven-end;
    }
  }

  .arrow {
    @include fluid-type(24, 50, mq(sm), mq(xxxl));
    font-variation-settings: 'wght' 100;
    line-height: 1;
    text-align: center;
    color: color('type', light);
    padding: calc(2.65em - 0.5em) 2.65em;
    justify-self: center;

    border: 3px solid white;
    border-radius: 50%;
    height: calc(1em + #{2.65 * 2em});
    width: calc(1em + #{2.65 * 2em});

    position: absolute;
    bottom: -2.65em;
    left: 0;
    transform: translateX(-25%);
  }

  // Circles
  // ----------------

  header:after,
  :global(.grid-wrap:after) {
    content: '';
    display: block;
    background-color: rgba(#fff, .2);
    border-radius: 50%;
    box-shadow: inset -1rem -5px 5rem rgba(#fff, .35);
    animation: 45s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite alternate;
    animation-name: move-circles;
  }

  header:after {
    width: calc(12rem + 2vw);
    height: calc(12rem + 2vw);
    position: absolute;
    right: 48vw;
    top: 0;
    transform: translateY(-20%);
    transform-origin: 50% 50%;
    animation-name: move-circles;
  }

  :global(.grid-wrap:after) {
    width: 7rem;
    height: 7rem;
    grid-column: twelve-start;
    justify-self: end;
    grid-row: 1;
    transform-origin: 0% 100%;
    transform: translateY(-35%);
  }

  @keyframes move-circles {
    from {
      top: -10%;
      transform: scale(1.1) rotate(35deg) translateX(-5%);
    }
    to {
      top: calc(10% + 25vh);
      transform: scale(.8) rotate(0) translate(-150%);
    }
  }
</style>

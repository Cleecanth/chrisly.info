<script>
  import { setContext, getContext } from 'svelte';
  import Heading from './Heading.svelte';

  let classname = '';
  export { classname as class };
  /** @type {{root?: ?string, Heading?: ?string }} */
  export let classes = {};
  export let id = "";

  let sectionClass = `${classname}${classes.root ? ` ${classes.root}` : ''}`;

  let level = 2;
  if (getContext('headingLevel')) {
    level = getContext('headingLevel') + 1;
  } else {
    setContext('headingLevel', level);
  }
</script>

<section {id} class={sectionClass} {...$$restProps}>
  {#if $$slots.heading}
    <Heading class={classes.Heading || ''} level={level}>
      <slot name="heading" />
    </Heading>
  {/if}
  <slot />
</section>

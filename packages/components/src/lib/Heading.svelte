<script>
  import { getContext, setContext } from 'svelte';
  /** @type {string}*/
  let classname;
  export { classname as class };
  export let level = getContext('headingLevel') || 2;

  if (!level || getContext('headingLevel')) {
    level = getContext('headingLevel') + 1;
  } else {
    setContext('headingLevel', level);
  }
  let tag = `h${level}`;
</script>

<svelte:element this={tag} class={classname}>
  <slot/>
</svelte:element>

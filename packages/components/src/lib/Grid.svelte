<script>
  export let reset = false;
  export let tag = 'div';
  let classname = '';
  export { classname as class };
</script>

<svelte:element this={tag} class={`grid ${classname}`} class:reset>
  <slot />
</svelte:element>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns:
      [full-start l-gutter-start] minmax(2rem, 10vw)
      [one-start l-gutter-end] 1fr
      [one-end two-start] minmax(0, 1fr)
      [two-end three-start] minmax(0, 1fr)
      [three-end four-start] minmax(0, 1fr)
      [four-end five-start] minmax(0, 1fr)
      [five-end six-start] minmax(0, 1fr)
      [six-end seven-start] minmax(0, 1fr)
      [seven-end eight-start] minmax(0, 1fr)
      [eight-end nine-start] minmax(0, 1fr)
      [nine-end ten-start] minmax(0, 1fr)
      [ten-end eleven-start] minmax(0, 1fr)
      [eleven-end twelve-start] minmax(0, 1fr)
      [twelve-end r-gutter-start] minmax(2rem, calc(50vw - 600px))
      [full-end r-gutter-end];
  }
  .reset {
    grid-column: full-start/full-end;
  }
</style>

<script>
  let classname = '';
  /** @type {boolean | null} */
  export let nakedList = false;
  /** @type {'ul' | 'ol' }  */
  export let tag = 'ul';
  export {classname as class};
</script>

<svelte:element this={tag} class={classname} class:naked-list={nakedList}>
  <slot />
</svelte:element>

<style lang="scss">
  .naked-list {
    margin-left: 0;
    list-style: none;
    list-style-type: none;
  }
</style>

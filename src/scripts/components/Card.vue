<template>
  <div class="card">
    <div :class="`card-body ${droppable ? 'card-droppable' : ''}`" data-droppable>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    droppable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.Card {
}
</style>

<template>
  <Card id="Workloads" :droppable="true">
    <div
      v-for="(item, k) in workloads"
      :key="k"
      data-draggable
      :data-item-id="item.id"
      class="ui-widget-content item draggable-item">
      <p>{{ item.title }}</p>
    </div>
  </Card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Workloads',
  computed: {
    ...mapState({
      workloads: ({ workloads }) => workloads,
    }),
  },
};
</script>

<style lang="scss">
.workloads {
}
</style>

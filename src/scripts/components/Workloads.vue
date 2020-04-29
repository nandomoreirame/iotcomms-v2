<template>
  <Card>
    <div v-for="(workload, k) in workloads" :key="k" data-card :data-workload="k" class="ui-widget-content item draggable-item">
      <p>{{ workload.title }}</p>
    </div>
  </Card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Workloads',
  data: () => ({
  }),
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

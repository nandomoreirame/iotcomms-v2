<template>
  <Card id="ProtocolNetworks" :droppable="true">
    <div
      v-for="(item, k) in protocolNetworks"
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
  name: 'ProtocolNetworks',
  computed: {
    ...mapState({
      protocolNetworks: ({ protocolNetworks }) => protocolNetworks,
    }),
  },
};
</script>

<style lang="scss">
</style>

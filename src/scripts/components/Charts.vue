<template>
  <div class="charts">
    <div class="run-button row">
      <button type="button" class="btn btn-success" @click="!show">Run!</button>
    </div>

    <div class="chart-row row" v-if="show">
        <div class="col-sm-4">
            <div id="app" class="card">
                <div id="chart" class="card-body"></div>
            </div>
        </div>

        <div class="col-sm-4">
            <div id="latency_app" class="card">
                <div id="latency_chart" class="card-body"></div>
            </div>
        </div>
        <div class="col-sm-4">
            <div id="server_cpu_app">
                <div class="chart-wrap card">
                    <div id="server_cpu_chart" class="card-body"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="chart-row row" v-if="show">
        <div class="col-sm-4">
            <div id="server_memory_app" class="card">
                <div id="server_memory_chart" class="card-body"></div>
            </div>
        </div>

        <div class="col-sm-4">
            <div id="client_cpu_app" class="card">
                <div id="client_cpu_chart" class="card-body"></div>
            </div>
        </div>
        <div class="col-sm-4">
            <!-- <div id="pie_app">
                <div class="chart-wrap card">
                    <div id="pie_chart" class="card-body"></div>
                </div>
            </div> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Charts',
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.charts {
}
</style>

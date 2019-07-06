<template>
  <div class="container">
    <h1 class="display-4">Dashboard</h1>
    <table class="table">
      <tbody>
        <tr>
          <th scope="row">Server Command</th>
          <td>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-success">Start</button>
              <button type="button" class="btn btn-danger">Stop</button>
              <button type="button" class="btn btn-light">Restart</button>
            </div>
            <div class="float-right">
              <button type="button" class="btn btn-success">Save Settings</button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">Name</th>
          <td>
            <input type="text" class="form-control" aria-label="Default" placeholder="my server">
          </td>
        </tr>

        <ServerIP />
        <ServerPlayerSlot />

      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    ServerIP: () => import('~/components/dashboard/ServerIP.vue'),
    ServerPlayerSlot: () => import('~/components/dashboard/ServerPlayerSlot.vue'),
  }
})
export default class extends Vue {
}
</script>

<style lang="scss">
.table {
  th, td {
    vertical-align: middle;

    &:last-of-type {
      border-bottom: 1px solid #dee2e6;
    }
  }

  th {
    width: 25%;
  }
}
</style>



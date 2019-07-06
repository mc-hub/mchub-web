<template>
  <tr>
    <th scope="row">IP / Port</th>
    <td>IP: { server.ip }<br>Port: { server.port }</td>
  </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
}
</script>
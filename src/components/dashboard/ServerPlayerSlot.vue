<template>
  <tr>
    <th scope="row">Player Slots</th>
    <td>{ server.playerslot }</td>
  </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
}
</script>
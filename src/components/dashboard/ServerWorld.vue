<template>
  <tr>
    <th scope="row">World</th>
    <td>{ server.world }</td>
  </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
}
</script>
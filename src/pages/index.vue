<template>
  <div class="container">
    <h1 class="display-4">Welcome to MCHub!</h1>
    <h1 class="lead">Rent-a-server for Low cost and High performance.</h1>

    <p>aiueo</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    SideBar: () => import('~/components/SideBar.vue')
  }
})

export default class extends Vue {
}
</script>

<style lang="scss">
.lead {
  font-size: 1.5rem;
}
</style>



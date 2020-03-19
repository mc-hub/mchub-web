<template>
  <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile has-background-dark">
    <p class="menu-label is-hidden-touch has-text-white">Navigation</p>
    <ul class="menu-list">
      <li>
        <a href="#" :class="{ 'is-active': activeNum == 0 }" @click="changeActiveLink(0)">
          <span class="icon"><i class="fa fa-home"></i></span> Home
        </a>
      </li>

    </ul>
  </aside>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SideBar extends Vue {}
</script>
<template>
  <div>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <n-link to="/" class="navbar-brand col-sm-3 col-md-2 mr-0">
        <img
          src="~/assets/mc-logo.png"
          alt="logo"
          class="mr-1">
        MC Hub
      </n-link>
      <ul class="navbar-nav px-3">
        <li class="nav-item">
          <n-link to="/register">
            <button type="button" class="btn btn-outline-info">Sign up</button>
          </n-link>
          <n-link to="/login">
            <button type="button" class="btn btn-outline-light">Login</button>
          </n-link>
        </li>
      </ul>
    </nav>

    <div class="row">
      <div class="">
        <SideBar />
      </div>

      <div class="col mt-4">
        <nuxt />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    SideBar: () => import('~/components/SideBar.vue')
  }
})

export default class DefaultLayout extends Vue {
}
</script>

<style lang="scss">

// Sidebar
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

// Navbar

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  //background-color: rgba(0, 0, 0, .25);

  img {
    width: 24px;
    height: 24px;
  }
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
}
</style>

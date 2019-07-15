<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>


      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-button variant="primary" href="/login">Login</b-button>
          <b-button variant="success" href="/register">Register</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>

    <div>
      <nuxt />
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
export default class PostPreview extends Vue {
  @Prop()

  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$menu-item-active-background-color: hsl(171, 100%, 41%);
$menu-item-color: hsl(0, 0%, 100%);

.nav-tag{
  padding-right: 30px;
}
.tag-notif{
  border-radius: 50%;
  position: absolute;
  top: 5px;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: -2px;
  }
}
.hero{
}
.navbar{

  &-item{
    &.is-active{
    }
    &:hover {
    }
  }

  .is--brand{
    &:hover {
    }
  }

  &-brand-logo{
    max-height: 3rem !important;
    border-radius: .25em;
    padding: .25em;
  }

  &-dropdown{
    .navbar-item{
    }
  }

  &-burger{
    border: 0;
    span{
    }
  }

  &-link{

    figure{
      img{
        border-radius: 50%;
        max-height: 2em;
      }
    }

    &:hover{
    }
  }
}

.message.is-dark{
  .message-body{
  }
}

.breadcrumb:not(:last-child){
  margin-bottom: 0;
}

@media screen and (min-width: 1088px) {
  .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {
  }
}
// navigation left area
.aside{
  padding: 2em .2em 0 1em;

  a{
  }

  .menu-list {
    li {
      margin-top: .5em;
    }
  }
}

// main area
.main{
  padding: 2em 1em 0 1em;
}

.menu-label{
  margin-left: .5em;
}

.block{
  margin-top: .5em;
}
</style>

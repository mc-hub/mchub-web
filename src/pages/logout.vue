<template>
  <div>
  <p>Are you sure you want to logout?</p>
  <b-navbar-nav class="ml-auto">
    <b-nav-form>
      <b-button @click="logout" variant="danger">yes</b-button>
    </b-nav-form>
  </b-navbar-nav>
</div>
</template>

<script>

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  methods: {
    logout() {
      // Code will also be required to invalidate the JWT Cookie on external API
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
      this.$router.push('/');
    }
  }


}

</script>

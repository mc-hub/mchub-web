<template>
    <div class="root">
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input v-model="email" name="email" class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input v-model="password" name="password" class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button @click="login" class="button is-success">
      Login
    </button>
  </p>
</div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

const Cookie = process.client ? require('js-cookie') : undefined

@Component
export default class Login extends Vue {
  public email: string = ""
  public password: string = ""

  async login(): void {

    middleware: 'notAuthenticated'
    const validated = await this.$validator.validateAll()
    console.log(this.email);
    if (validated) {
      const user = {
        email: this.email,
        password: this.password
      }

      const result = await this.$axios.$post('http://localhost:4000/api/login', { user })
      //return result.token;
      this.postLogin(result.token);
    }
  }




    postLogin(token): void {
      setTimeout(() => { // we simulate the async request with timeout.
        const auth = {
          accessToken: token
        }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/loggedin')
      }, 1000)
    }
  }


</script>

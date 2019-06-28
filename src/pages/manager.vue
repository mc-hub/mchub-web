<template>
  <div class="root">
    <div class="wrapper">
      <form action="">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox">
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question">
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question">
              No
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'


@Component
export default class Manager extends Vue {
  private user: object = {}

  async fetch({ store, redirect }) {
    if(store.getters["authentication/isAuthenticated"]) {
      redirect('/')
    }
  }

  async createServer() {
    try {
      await this.$store.dispatch('serverManager/createServer')
    } catch {
      console.log("error")
    }
  }
}
</script>

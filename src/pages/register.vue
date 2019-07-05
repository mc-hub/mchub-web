<template>
  <div>
    <form class="form">
      <div class="form-group">
        <label class="label">ユーザー名</label>
        <input
          type="text"
          name="username"
          class="form-control"
          v-model="username"
          data-vv-as="タイトル"
          v-validate="'required|min:4|max:16'"
          :class="{'input': true, 'is-invalid': errors.has('username') }"
        />
        <div class="invalid-feedback" v-show="errors.has('username')">
          {{ errors.first('username') }}
        </div>
      </div>

      <div class="form-group">
        <label class="label">メールアドレス</label>
        <input
          type="email"
          name="email"
          class="form-control"
          v-model="email"
          data-vv-as="Email"
          v-validate="'email|required'"
          :class="{'input': true, 'is-invalid': errors.has('email') }"
          />
        <div class="invalid-feedback" v-show="errors.has('email')">
          {{ errors.first('email') }}
        </div>
      </div>

      <div class="form-group">
        <label class="password">パスワード</label>
        <input
          type="password"
          name="password"
          class="form-control"
          v-model="password"
          data-vv-as="password"
          v-validate="'required'"
          :class="{'input': true, 'form-danger': errors.has('password') }"
          />
        <div class="invalid-feedback" v-show="errors.has('password')">
          {{ errors.first('password') }}
        </div>
      </div>

      <div class="form-group">
        <label class="password_confirm">パスワード確認</label>
        <input
          type="password"
          name="passwordConfirm"
          class="form-control"
          v-model="passwordConfirm"
          data-vv-as="password"
          v-validate="'required|confirmed:password'"
          ref="password"
          :class="{'input': true, 'form-danger': errors.has('passwordConfirm') }"
          />
      </div>

      <div class="form-check">
        <label v-model="tosAgreed" class="form-check-label" for="exampleCheck1"><a  href="tos">利用規約</a>に同意します</label>
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
      </div>


      <div class="form-group">
        <button @click="register" type="button" class="btn btn-primary btn-sm">登録する</button>
        <button type="button" class="btn btn-secondary btn-sm">Back</button>
      </div>
    </form>
  </div>
</template>


<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class Register extends Vue {
  public email: string = ""
  public username: string = ""
  public password: string = ""
  public passwordConfirm: string = ""
  public emailerrormessage = ""
  public usernameerrormessage: string = ""
  public passworderrormessage: string = ""
  public passwordconfirmerrormessage: string = ""
  public tosagreederrormessage: string = ""
  public tosAgreed: boolean = false

  async register(): void {
    const validated = await this.$validator.validateAll()
    if (validated) {
      const user = {
        name: this.username,
        email: this.email,
        password: this.password
      }

      const result = await this.$axios.$post('http://localhost:4000/api/register', { user })
    }
  }
}
</script>

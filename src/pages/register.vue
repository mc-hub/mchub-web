<template>
  <div class="root">




    <div class="field">
      <label class="label">ユーザー名</label>
      <div class="control has-icons-left has-icons-right">
        <input v-model="username" class="input is-success" type="text" placeholder="ログイン時のみ使用する名前です。(英数字のみ。4-16文字以内)" value="">
        <p> {{ usernameerrormessage}} </p>

        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <!---
  <p class="help is-success">このユーザー名は使用できます!</p>
  <p class="help is-failed">このユーザー名はすでに使用されています</p>
  <p class="help is-letters-not-matched">ユーザー名は４文字〜１６文字以内である必要があります</p>
  --->
    </div>



    <div class="field">
      <label class="label">メールアドレス</label>
      <div class="control has-icons-left has-icons-right">
        <input v-model="email" id="address" class="input is-success" type="email" placeholder="必ず確認可能なメールアドレスを使用してください。" value="">
        <p> {{ emailerrormessage }}</p>
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <!---<p class="help is-danger">メールアドレスが正しくありません。</p>--->
    </div>



    <div class="password">
      <label class="password">パスワード</label>
      <div class="control has-icons-left has-icons-right">
        <input v-model="password" class="input is-success" type="password" placeholder="強固なパスワードを使用することをおすすめします。6-128文字以内。)" value="">
        <p> {{ passworderrormessage }} </p>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>

    <div class="passwordconfirm">
      <label class="password">パスワード確認</label>
      <div class="control has-icons-left has-icons-right">
        <input v-model="passwordconfirm" class="input is-success" type="password" placeholder="確認のため、もう一度入力してください。" value="">
        <p> {{ passwordconfirmerrormessage }} </p>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          <a href="tos">利用規約</a>に同意します
        </label>
      </div>
    </div>



    <div class="field is-grouped">
      <div class="control">
        <button @click="onClick" class="button is-link">登録</button>
      </div>
      <div class="control">
        <button class="button is-text">戻る</button>
      </div>
    </div>


  </div>
</template>


<script lang="ts">
  import {
    Vue,
    Component
  } from 'vue-property-decorator';

  @Component({
    watch: {
      // この関数は question が変わるごとに実行されます。
      email: function(newEmail, oldEmail) {

        this.emailValidator(newEmail);
      },

      username: function(newUsername, oldUsername) {

        this.usernameValidator(newUsername);
      },

      password: function(newPassword, oldPassword) {

        this.passwordValidator(newPassword);

      },
      passwordconfirm: function(neww, old) {
        this.passwordconfirmValidator(neww);
      }
    }
  })
  export default class Register extends Vue {
    public email: string = ""
    public username: string = ""
    public password: string = ""
    public passwordconfirm: string = ""
    public emailerrormessage = ""
    public usernameerrormessage: string = ""
    public passworderrormessage: string = ""
    public passwordconfirmerrormessage: string = ""
    public onClick(): void {
      if (
        this.emailValidator(this.email) ||
        this.usernameValidator(this.username) ||
        this.passwordValidator(this.password) ||
        this.passwordconfirmValidator(this.passwordconfirm)) {
        // TODO: APIサーバーに対して送る処理
        // TODO: APIサーバーからエラー(例えばユーザー名がかぶってるなど)が帰ってきた場合の処理
      } else {

      }

    }

    public emailValidator(input: string): boolean {
      if (!(input.includes("@"))) {
        this.emailerrormessage = "メールアドレスが正しくありません。";
        return false;
      } else {
        this.emailerrormessage = "";
        return true;
      }
      console.log("???? at emailValidator"); //ありえない
      return false;
    }
    public usernameValidator(input: string): boolean {
      if (newUsername.length < 4) {
        this.usernameerrormessage = "ユーザー名が短すぎます。";
        return false;
      } else if (newUsername.length > 16) {
        this.usernameerrormessage = "ユーザー名が長すぎます。";
        return false;
      } else {
        this.usernameerrormessage = "";
        return true;
      }

      console.log("???? at usernameValidator"); //ありえない
      return false;
    }

    public passwordValidator(input: string): boolean {
      if (newPassword.length < 6) {
        this.passworderrormessage = "パスワードが短すぎます。"
        return false;
      } else if (newPassword.length > 128) {
        this.passworderrormessage = "パスワードが長すぎます。"
        return false;
      } else {
        this.passworderrormessage = ""
        return true;
      }

      console.log("???? at passwordValidator"); //ありえない
      return false;
    }

    public passwordconfirmValidator(input: string): boolean {
      if (neww === this.password) {
        this.passwordconfirmerrormessage = ""
        return true;
      } else {
        this.passwordconfirmerrormessage = "パスワードが合致しません。"
        return false;
      }

      console.log("???? at passwordValidator"); //ありえ
      return false;

    }





  }
</script>

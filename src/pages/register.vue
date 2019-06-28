<template>
  <div class="root">




<div class="field">
  <label class="label">ユーザー名</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="ログイン時のみ使用する名前です。(英数字のみ。4-16文字以内)" value="">
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

<!---  SQLインジェクションの元になりそうなのでまとまるまでこのまま。
<div class="field">
  <label class="label">表示名</label>
  <div class="control">
    <input class="input" type="text" placeholder="サイト上には、ここに入力した名前が表示されます。(4-16文字以内)">
  </div>
</div>
--->

<div class="field">
  <label class="label">メールアドレス</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="必ず確認可能なメールアドレスを使用してください。" value="">
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
    <input class="input is-success" type="password" placeholder="強固なパスワードを使用することをおすすめします。" value="">
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
    <button class="button is-link">登録</button>
  </div>
  <div class="control">
    <button class="button is-text">戻る</button>
  </div>
</div>
</div>
</template>

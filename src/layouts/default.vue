<template>
  <div>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            ホーム
          </a>

          <a class="navbar-item" href="/">
            プラン一覧
          </a>

<!--- ドロップダウンメニューだけど使いみちが思いつくまでこのまま。
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        
        --->
      </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" href="register">
                <strong>新規登録</strong>
              </a>
              <a class="button is-light" href="login">
                ログイン
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="container column is-10">
      <nuxt />
    </div>
    </section>
  </div>
</template>

<script>
export default {
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

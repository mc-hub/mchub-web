<template>
  <div class="app">
    <!-- @TOC -->
    <!-- =================================================== -->
    <!--
        + @Page Loader
        + @App Content
            - #Left Sidebar
                > $Sidebar Header
                > $Sidebar Menu

            - #Main
                > $Topbar
                > $App Screen Content
    -->

    <!-- @Page Loader -->
    <!-- =================================================== -->

    <!-- @App Content -->
    <!-- =================================================== -->
    <div>
      <!-- #Left Sidebar ==================== -->
      <div class="sidebar">
        <div class="sidebar-inner">
          <!-- ### $Sidebar Header ### -->
          <div class="sidebar-logo">
            <div class="peers ai-c fxw-nw">
              <div class="peer peer-greed">
                <a class="sidebar-link td-n" href="index.html">
                  <div class="peers ai-c fxw-nw">
                    <div class="peer">
                      <div class="logo">
                        <img src="assets/static/images/logo.png" alt />
                      </div>
                    </div>
                    <div class="peer peer-greed">
                      <h5 class="lh-1 mB-0 logo-text">Sugoi-Hosting</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="peer">
                <div class="mobile-toggle sidebar-toggle">
                  <a href class="td-n">
                    <i class="ti-arrow-circle-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- ### $Sidebar Menu ### -->
          <ul class="sidebar-menu scrollable pos-r">
            <li class="nav-item mT-30 actived">
              <a class="sidebar-link" href="/inspire">
                <span class="icon-holder">
                  <i class="c-blue-500 ti-home"></i>
                </span>
                <span class="title">ダッシュボード</span>
              </a>
            </li>
            <!-- サーバー一覧 -->
            <li class="nav-item dropdown">
              <a class="dropdown-toggle" href="javascript:void(0);" id="dropmenu" @click="onClick">
                <span class="icon-holder">
                  <i class="c-orange-500 ti-layout-list-thumb"></i>
                </span>
                <span class="title">契約中のサーバー</span>
                <span class="arrow">
                  <i class="ti-angle-right"></i>
                </span>
              </a>
              <ul v-show="isServerShown">
                <li>
                  <a class="sidebar-link" href="basic-table.html">Minecraft Singapore 1GB</a>
                </li>
                <li>
                  <a class="sidebar-link" href="datatable.html">Server Name here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="sidebar-link" href="addServer">
                <span class="icon-holder">
                  <i class="c-brown-500 ti-email"></i>
                </span>
                <span class="title">サーバー追加</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- #Main ============================ -->
      <div class="page-container">
        <!-- ### $Topbar ### -->
        <div class="header navbar">
          <div class="header-container">
            <ul class="nav-left">
              <li>
                <a id="sidebar-toggle" class="sidebar-toggle" href="javascript:void(0);">
                  <i class="ti-menu"></i>
                </a>
              </li>
              <li class="search-box">
                <a class="search-toggle no-pdd-right" href="javascript:void(0);">
                  <i class="search-icon ti-search pdd-right-10"></i>
                  <i class="search-icon-close ti-close pdd-right-10"></i>
                </a>
              </li>
              <li class="search-input">
                <input class="form-control" type="text" placeholder="Search..." />
              </li>
            </ul>
            <ul class="nav-right">
              <li class="notifications dropdown">
                <span class="counter bgc-red">3</span>
                <a href class="dropdown-toggle no-after" data-toggle="dropdown">
                  <i class="ti-bell"></i>
                </a>

                <ul class="dropdown-menu">
                  <li class="pX-20 pY-15 bdB">
                    <i class="ti-bell pR-10"></i>
                    <span class="fsz-sm fw-600 c-grey-900">Notifications</span>
                  </li>
                  <li>
                    <ul class="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                      <li>
                        <a href class="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                          <div class="peer mR-15">
                            <img
                              class="w-3r bdrs-50p"
                              src="https://randomuser.me/api/portraits/men/1.jpg"
                              alt
                            />
                          </div>
                          <div class="peer peer-greed">
                            <span>
                              <span class="fw-500">John Doe</span>
                              <span class="c-grey-600">
                                liked your
                                <span class="text-dark">post</span>
                              </span>
                            </span>
                            <p class="m-0">
                              <small class="fsz-xs">5 mins ago</small>
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href class="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                          <div class="peer mR-15">
                            <img
                              class="w-3r bdrs-50p"
                              src="https://randomuser.me/api/portraits/men/2.jpg"
                              alt
                            />
                          </div>
                          <div class="peer peer-greed">
                            <span>
                              <span class="fw-500">Moo Doe</span>
                              <span class="c-grey-600">
                                liked your
                                <span class="text-dark">cover image</span>
                              </span>
                            </span>
                            <p class="m-0">
                              <small class="fsz-xs">7 mins ago</small>
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href class="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                          <div class="peer mR-15">
                            <img
                              class="w-3r bdrs-50p"
                              src="https://randomuser.me/api/portraits/men/3.jpg"
                              alt
                            />
                          </div>
                          <div class="peer peer-greed">
                            <span>
                              <span class="fw-500">Lee Doe</span>
                              <span class="c-grey-600">
                                commented on your
                                <span class="text-dark">video</span>
                              </span>
                            </span>
                            <p class="m-0">
                              <small class="fsz-xs">10 mins ago</small>
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="pX-20 pY-15 ta-c bdT">
                    <span>
                      <a href class="c-grey-600 cH-blue fsz-sm td-n">
                        View All Notifications
                        <i class="ti-angle-right fsz-xs mL-10"></i>
                      </a>
                    </span>
                  </li>
                </ul>
              </li>
              <li class="notifications dropdown">
                <span class="counter bgc-blue">3</span>
                <a href class="dropdown-toggle no-after" data-toggle="dropdown">
                  <i class="ti-email"></i>
                </a>

                <ul class="dropdown-menu">
                  <li class="pX-20 pY-15 bdB">
                    <i class="ti-email pR-10"></i>
                    <span class="fsz-sm fw-600 c-grey-900">Emails</span>
                  </li>
                  <li>
                    <ul class="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                      <li>
                        <a href class="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                          <div class="peer mR-15">
                            <img
                              class="w-3r bdrs-50p"
                              src="https://randomuser.me/api/portraits/men/1.jpg"
                              alt
                            />
                          </div>
                          <div class="peer peer-greed">
                            <div>
                              <div class="peers jc-sb fxw-nw mB-5">
                                <div class="peer">
                                  <p class="fw-500 mB-0">John Doe</p>
                                </div>
                                <div class="peer">
                                  <small class="fsz-xs">5 mins ago</small>
                                </div>
                              </div>
                              <span
                                class="c-grey-600 fsz-sm"
                              >Want to create your own customized data generator for your app...</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href class="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                          <div class="peer mR-15">
                            <img
                              class="w-3r bdrs-50p"
                              src="https://randomuser.me/api/portraits/men/2.jpg"
                              alt
                            />
                          </div>
                          <div class="peer peer-greed">
                            <div>
                              <div class="peers jc-sb fxw-nw mB-5">
                                <div class="peer">
                                  <p class="fw-500 mB-0">Moo Doe</p>
                                </div>
                                <div class="peer">
                                  <small class="fsz-xs">15 mins ago</small>
                                </div>
                              </div>
                              <span
                                class="c-grey-600 fsz-sm"
                              >Want to create your own customized data generator for your app...</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href class="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                          <div class="peer mR-15">
                            <img
                              class="w-3r bdrs-50p"
                              src="https://randomuser.me/api/portraits/men/3.jpg"
                              alt
                            />
                          </div>
                          <div class="peer peer-greed">
                            <div>
                              <div class="peers jc-sb fxw-nw mB-5">
                                <div class="peer">
                                  <p class="fw-500 mB-0">Lee Doe</p>
                                </div>
                                <div class="peer">
                                  <small class="fsz-xs">25 mins ago</small>
                                </div>
                              </div>
                              <span
                                class="c-grey-600 fsz-sm"
                              >Want to create your own customized data generator for your app...</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="pX-20 pY-15 ta-c bdT">
                    <span>
                      <a href="email.html" class="c-grey-600 cH-blue fsz-sm td-n">
                        View All Email
                        <i class="fs-xs ti-angle-right mL-10"></i>
                      </a>
                    </span>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle no-after peers fxw-nw ai-c lh-1"
                  data-toggle="dropdown"
                  id="dropmenu"
                  @click="whatAGreatFunction"
                >
                  <div class="peer mR-10">
                    <img
                      class="w-2r bdrs-50p"
                      src="https://randomuser.me/api/portraits/men/10.jpg"
                      alt
                    />
                  </div>
                  <div class="peer">
                    <span class="fsz-sm c-grey-900">John Doe</span>
                  </div>
                </a>
                <ul class="dropdown fsz-sm" v-show="isUserinfoShown">
                  <li>
                    <a href class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                      <i class="ti-settings mR-10"></i>
                      <span>残高</span>
                      <p class="balance">250 円</p>
                    </a>
                  </li>
                  <li>
                    <a href class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                      <i class="ti-user mR-10"></i>
                      <span>ユーザー情報</span>
                    </a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                      <i class="ti-power-off mR-10"></i>
                      <span>ログアウト</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <!-- ### $App Screen Content ### -->
        <main class="main-content bgc-grey-100">
          <nuxt />
        </main>

        <!-- ### $App Screen Footer ### -->
        <footer class="bdT ta-c p-30 lh-0 fsz-sm c-grey-600"></footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class dropmenu extends Vue {
  public isServerShown: boolean = false;
  public isUserinfoShown: boolean = false;

  public onClick() {
    this.isServerShown = !this.isServerShown;
  }

  public whatAGreatFunction() {
    this.isUserinfoShown = !this.isUserinfoShown;
  }

  public created() {
    if (process.isClient) {
      window.addEventListener("load", function load() {
        const loader = document.getElementById("loader");
        setTimeout(function() {
          loader.classList.add("fadeOut");
        }, 500);
      });
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";

.balance {
  text-align: right;
}
</style>
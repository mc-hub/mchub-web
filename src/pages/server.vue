<template>


  <div class="root">
    <!-- ↓最上部ステータス情報↓ -->
    <h4>Minecraft Singapore 1GB </h4>
    <b-container fluid>
      <b-row>
        <b-col>
          <div class="serverStatus">
            <b-card title="ステータス">
              <b-card-text class="serverStatus text-right">
                <h3>動作中</h3>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="serverPlan">
            <b-card title="プラン">
              <b-card-text class="balance text-right">
                <h3>1GBプラン</h3>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="serverLocation">
            <b-card title="サーバーロケーション">
              <b-card-text class="balance text-right">
                <h3>シンガポール</h3>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- ↑最上部ステータス情報↑ -->
    <div>
      <b-tabs content-class="mt-3" fill>
        <!-- サーバー情報タブ -->
        <b-tab title="サーバー情報" active>
          <div>

            <b-container fluid>
                <b-row>
                  <b-col>
                    <b-card title="サーバー情報">
                      <b-card-text>
                        <div class="d-flex justify-content-around">
                        <h4>サーバー接続IP</h4>
                        <h5>192.168.44.1:29153</h5>
                      </div>
                      </b-card-text>
                    </b-card>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>

                    <b-card title="電源操作">
                      <div class="float-right">
                        <b-card-text>
                          <b-container>
                            <b-row>
                              <b-col>
                                <b-button variant="success">起動</b-button>
                                <b-button variant="warning">停止</b-button>
                                <b-button variant="info">再起動</b-button>
                                <b-button variant="danger">強制停止</b-button>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-card-text>
                      </div>
                    </b-card>

                  </b-col>
                </b-row>
              <b-row>
                <b-col>

                  <b-card title="リソース使用状況">
                    <div class="">
                      <b-card-text>
                        <b-container>
                          <b-row>


                            <b-col>
                              <div class="d-flex justify-content-around">
                                <div>
                                  <h5 class="text-center">CPU</h5>
                                  <vue-easy-pie-chart :percent="2" bar-color="#11d211">
                                  </vue-easy-pie-chart>
                                </div>
                                <div>
                                  <h5 class="text-center">RAM</h5>
                                  <vue-easy-pie-chart :percent="95" bar-color="#11d211"></vue-easy-pie-chart>
                                </div>
                                <div>
                                  <h5 class="text-center">Storage</h5>
                                  <vue-easy-pie-chart :percent="12" bar-color="#11d211"></vue-easy-pie-chart>
                                </div>
                              </div>
                            </b-col>

                          </b-row>
                        </b-container>
                      </b-card-text>
                    </div>
                  </b-card>

                </b-col>
              </b-row>

            </b-container>
          </div>
        </b-tab>
        <b-tab title="コンソール">
          <b-container>
            <b-row>
              <b-col>
                <h4>TODO: Console</h4>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
        <b-tab title="ファイル操作">
          <b-container>
            <b-row>
              <b-col>
                <h4>TODO: File Manager</h4>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Vue,
    Component,
    BootstrapVue
  } from 'nuxt-property-decorator'
  import VueEasyPieChart from 'vue-easy-pie-chart'
  import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'



  @Component({
    layout: 'dashboard',
    components: {
      VueEasyPieChart
    }
  })
  export default class IndexPage extends Vue {

  }
</script>



<<style lang="scss">
  @import '~/assets/styles/index.scss';
  </style>

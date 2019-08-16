<template>


  <div class="root">
    <b-container fluid>
      <b-row>
        <b-col>
          <div class="userBalance">
            <b-card title="残高">
              <b-card-text class="balance text-right">
                <h3>250円</h3>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="userUsage">
            <b-card title="今月の利用金額">
              <b-card-text class="balance">
                <h3>20,382円</h3>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="userServers">
            <b-card title="利用中のサーバー数">
              <b-card-text class="balance">
                <h3>2台</h3>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div>
      <p>
        <h2>サーバー状況</h2>
      </p>
      <b-container fluid>
        <b-row>
          <b-col>

            <b-card title="Minecraft Singapore 1GB">
              <div class="float-right">
                <b-card-text>
                  <b-container>
                    <b-row>


                      <b-col>
                        <h5 class="d-flex justify-content-center">CPU</h5>
                        <vue-easy-pie-chart :percent="60" bar-color="#d2d211">
                        </vue-easy-pie-chart>
                      </b-col>
                      <b-col>
                        <h5 class="d-flex justify-content-center">RAM</h5>
                        <vue-easy-pie-chart :percent="95" bar-color="#11d211"></vue-easy-pie-chart>
                      </b-col>
                      <b-col>
                        <h5 class="d-flex justify-content-center">Storage</h5>
                        <vue-easy-pie-chart :percent="11" bar-color="#11d211"></vue-easy-pie-chart>
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

            <b-card title="Server Name Here">
              <div class="float-right">
                <b-card-text>
                  <b-container>
                    <b-row>
                      <b-col>
                        <h5 class="d-flex justify-content-center">CPU</h5>
                        <vue-easy-pie-chart :percent="99" bar-color="#d21111">
                        </vue-easy-pie-chart>
                      </b-col>
                      <b-col>
                        <h5 class="d-flex justify-content-center">RAM</h5>
                        <vue-easy-pie-chart :percent="68" bar-color="#11d211"></vue-easy-pie-chart>
                      </b-col>
                      <b-col>
                        <h5 class="d-flex justify-content-center">Storage</h5>
                        <vue-easy-pie-chart :percent="82" bar-color="#d2d211"></vue-easy-pie-chart>
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

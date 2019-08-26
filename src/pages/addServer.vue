<template>
  <div class="root">
    <!-- ↓最上部ステータス情報↓ -->
    <h4>サーバー追加</h4>

    <!-- ↑最上部ステータス情報↑ -->
      <b-tabs content-class="mt-4" fill>
        <!-- サーバー情報タブ -->
        <b-tab title="Minecraft JE サーバー" active>
          <b-container fluid>
            <b-row>
              <b-col>
                <b-card title="シンガポールリージョン">
                  <b-card-text>
                    <div class="d-flex justify-content-around">
                      <b-form-group>
                        <b-form-radio-group
                          id="btn-radios-1"
                          v-model="selected"
                          @input="changePrice"
                          :options="options.filter(option => option.value === 'radio1')"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          name="radio-btn-outline"
                        />
                      </b-form-group>
                      <b-form-group>
                        <b-form-radio-group
                          id="btn-radios-2"
                          v-model="selected"
                          :options="options.filter(option => option.value === 'radio2')"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          name="radio-btn-outline"
                        />
                      </b-form-group>
                      <b-form-group>
                        <b-form-radio-group
                          id="btn-radios-3"
                          v-model="selected"
                          :options="options.filter(option => option.value === 'radio3')"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          name="radio-btn-outline"
                        />
                      </b-form-group>
                      <b-form-group>
                        <b-form-radio-group
                          id="btn-radios-4"
                          v-model="selected"
                          :options="options.filter(option => option.value === 'radio4')"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          name="radio-btn-outline"
                        />
                      </b-form-group>
                    </div>
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card title="アメリカリージョン">
                  <b-card-text>
                    <div class="d-flex justify-content-around">
                      <b-form-group>
                        <b-form-radio-group
                          id="btn-radios-2"
                          v-model="selected"
                          :options="options.filter(option => option.value === 'radio5')"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          name="radio-btn-outline"
                        />
                      </b-form-group>

                      <b-form-group>
                        <b-form-radio-group
                          id="btn-radios-2"
                          v-model="selected"
                          :options="options.filter(option => option.value === 'radio6')"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          name="radio-btn-outline"
                        />
                      </b-form-group>
                      <b-form-group>
                        <b-form-radio-group
                          id="btn-radios-2"
                          v-model="selected"
                          :options="options.filter(option => option.value === 'radio7')"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          name="radio-btn-outline"
                        />
                      </b-form-group>
                      <b-form-group>
                        <b-form-radio-group
                          id="btn-radios-2"
                          v-model="selected"
                          :options="options.filter(option => option.value === 'radio8')"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          name="radio-btn-outline"
                        />
                      </b-form-group>
                    </div>
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
          <b-container>
            <b-row>
              <b-col>
                <b-card title="チェックアウト">
                  <b-card-text>
                    <div>
                      <b-form-checkbox
                        v-model="hourly"
                        name="check-button"
                        switch
                        @input="changePrice"
                      >月額プラン/時間制プラン</b-form-checkbox>
                    </div>
                    <h3>料金: {{monthlyprice}}円/{{pricetext}}</h3>
                    <div class="pull-right">
                      <b-button v-b-modal.modal-confirm variant="primary">サーバー追加</b-button>

                      <b-modal id="modal-confirm" title="確認">
                        <p class="my-4">以下のサーバーを追加します。よろしいですか？</p>
                        <p>リージョン: {{regiontext}}</p>
                        <p>メモリ: {{ramtext}}</p>
                        <p>料金: {{monthlyprice}}円/{{pricetext}}</p>
                        <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
                          <b-button size="sm" variant="success" @click="ok()">サーバー追加</b-button>
                          <b-button size="sm" variant="danger" @click="cancel()">キャンセル</b-button>
                        </template>
                      </b-modal>
                    </div>
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
        <b-tab title="CS:GOサーバー">
          <b-container>
            <b-row>
              <b-col>
                <h4>Coming soon</h4>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
        <b-tab title="？？？サーバー">
          <b-container>
            <b-row>
              <b-col>
                <h4>Coming soon</h4>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
      </b-tabs>
    <footer class="bdT ta-c p-30 lh-0 fsz-sm c-grey-600"></footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

import VueEasyPieChart from "vue-easy-pie-chart";
import "vue-easy-pie-chart/dist/vue-easy-pie-chart.css";

@Component({
  layout: "dashboard",
  components: {
    VueEasyPieChart
  }
})
export default class IndexPage extends Vue {
  public monthlyprice: int = 700;
  public pricetext: string = "月";
  public regiontext: string = "アメリカ";
  public ramtext: string = "1GB";

  public data() {
    return {
      selected: "radio1",
      options: [
        {
          text: "1GB",
          html:
            '<b-button block variant="outline-primary">1GBプラン<br>700円/月<br>2円/時</b-button>',
          value: "radio1",
          test: "a"
        },
        {
          text: "2GB",
          html:
            '<b-button block variant="outline-primary">2GBプラン<br>1400円/月<br>4円/時</b-button>',
          value: "radio2",
          test: "a"
        },
        {
          text: "4GB",
          html:
            '<b-button block variant="outline-primary">4GBプラン<br>2700円/月<br>8円/時</b-button>',
          value: "radio3",
          test: "a"
        },
        {
          text: "6GB",
          html:
            '<b-button block variant="outline-primary">6GBプラン<br>4000円/月<br>12円/時</b-button>',
          value: "radio4",
          test: "a"
        },
        {
          text: "1GB",
          html:
            '<b-button  block variant="outline-primary">1GBプラン<br>400円/月<br>1円/時</b-button>',
          value: "radio5",
          test: "b"
        },
        {
          text: "2GB",
          html:
            '<b-button  block variant="outline-primary">2GBプラン<br>800円/月<br>2円/時</b-button>',
          value: "radio6",
          test: "b"
        },
        {
          text: "4GB",
          html:
            '<b-button  block variant="outline-primary">4GBプラン<br>1500円/月<br>4円/時</b-button>',
          value: "radio7",
          test: "b"
        },
        {
          text: "6GB",
          html:
            '<b-button  block variant="outline-primary">6GBプラン<br>2200円/月<br>6円/時</b-button>',
          value: "radio8",
          test: "b"
        }
      ],
      hourly: false
    };
  }
  public changePrice() {
    if (!this.hourly) {
      if (this.selected == "radio1") {
        this.monthlyprice = 700;
        this.ramtext = "1GB";
      }
      if (this.selected == "radio2") {
        this.monthlyprice = 1400;
        this.ramtext = "2GB";
      }
      if (this.selected == "radio3") {
        this.monthlyprice = 2700;
        this.ramtext = "4GB";
      }
      if (this.selected == "radio4") {
        this.monthlyprice = 4000;
        this.ramtext = "6GB";
      }
      if (this.selected == "radio5") {
        this.monthlyprice = 400;
        this.ramtext = "1GB";
      }
      if (this.selected == "radio6") {
        this.monthlyprice = 800;
        this.ramtext = "2GB";
      }
      if (this.selected == "radio7") {
        this.monthlyprice = 1500;
        this.ramtext = "4GB";
      }
      if (this.selected == "radio8") {
        this.monthlyprice = 2200;
        this.ramtext = "6GB";
      }
      this.pricetext = "月";
    } else {
      if (this.selected == "radio1") {
        this.monthlyprice = 2;
        this.ramtext = "1GB";
      }
      if (this.selected == "radio2") {
        this.monthlyprice = 4;
        this.ramtext = "2GB";
      }
      if (this.selected == "radio3") {
        this.monthlyprice = 8;
        this.ramtext = "4GB";
      }
      if (this.selected == "radio4") {
        this.monthlyprice = 12;
        this.ramtext = "6GB";
      }
      if (this.selected == "radio5") {
        this.monthlyprice = 1;
        this.ramtext = "1GB";
      }
      if (this.selected == "radio6") {
        this.monthlyprice = 2;
        this.ramtext = "2GB";
      }
      if (this.selected == "radio7") {
        this.monthlyprice = 4;
        this.ramtext = "4GB";
      }
      if (this.selected == "radio8") {
        this.monthlyprice = 6;
        this.ramtext = "6GB";
      }
      this.pricetext = "時";
    }
    if (
      this.selected == "radio1" ||
      this.selected == "radio2" ||
      this.selected == "radio3" ||
      this.selected == "radio4"
    )
      this.regiontext = "シンガポール";
    if (
      this.selected == "radio5" ||
      this.selected == "radio6" ||
      this.selected == "radio7" ||
      this.selected == "radio8"
    )
      this.regiontext = "アメリカ";
    console.log("sdf");
  }
}
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";
</style>

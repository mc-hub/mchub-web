<template>
    <section>

        <b-tabs v-model="activeTab">
            <b-tab-item label="アジアリージョン">
              <table class="table">
<thead>
  <tr>
    <th><b-tooltip label="プランに設定された名前です">
          <abbr title="Planname">プラン名</abbr>
        </b-tooltip></th>
    <th><b-tooltip label="サーバーに割り当てられるCPUコア数です。この値が高いほど、サーバーを安定して動かすことができます。" multilined>
          <abbr title="Cores">CPUコア</abbr>
    </b-tooltip></th>
    <th><b-tooltip label="サーバーに割り当てられるメモリ容量です。メモリが足りない場合、サーバーがダウン可能性があります。" multilined>
          <abbr title="Ram">メモリ</abbr>
        </b-tooltip></th>
    <th><b-tooltip label="サーバーに割り当てられるディスク容量です。容量が多いほど、多くのデータを保存できます。" multilined>
          <abbr title="Storage">ディスク容量</abbr>
        </b-tooltip></th>
    <th><b-tooltip label="設定可能は最大人数です。この値を超えて人数を設定することはできません。" multilined>
          <abbr title="MaxPlayers">最大人数</abbr>
        </b-tooltip></th>
    <th><b-tooltip label="サーバーの月額料金です。料金は毎月請求されます。" multilined>
          <abbr title="PricePerMonth">料金(月額)</abbr>
        </b-tooltip></th>
    <th><b-tooltip label="サーバーの１時間ごとの料金です。料金はチャージ残高から請求されます。" multilined>
          <abbr title="PricePerHour">料金(時額)</abbr>
        </b-tooltip></th>
  </tr>
</thead>
<tfoot>
  <tr>
    <th><abbr title="Planname">プラン名</abbr></th>
    <th><abbr title="Cores">CPUコア</abbr></th>
    <th><abbr title="Ram">メモリ</abbr></th>
    <th><abbr title="Storage">ディスク容量</abbr></th>
    <th><abbr title="MaxPlayers">最大人数</abbr></th>
    <th><abbr title="PricePerMonth">料金(月額)</abbr></th>
    <th><abbr title="PricePerHour">料金(時額)</abbr></th>
  </tr>
</tfoot>
<tbody>
  <tr>
    <th>メモリ512MBプラン</th>
    <td>0.5</td>
    <td>512MB</td>
    <td>10GB</td>
    <td>3</td>
    <td>400円</td>
    <td>2円</td>
</tr>
<tr>
  <th>メモリ1GBプラン</th>
  <td>1</td>
  <td>1GB</td>
  <td>20GB</td>
  <td>6</td>
  <td>700円</td>
  <td>3円</td>
</tr>
<tr>
  <th>メモリ2GBプラン</th>
  <td>1</td>
  <td>2GB</td>
  <td>40GB</td>
  <td>12</td>
  <td>1400円</td>
  <td>6円</td>
</tr>
<tr>
  <th>メモリ3GBプラン</th>
  <td>1</td>
  <td>3GB</td>
  <td>60GB</td>
  <td>18</td>
  <td>2100円</td>
  <td>9円</td>
</tr>
<tr>
  <th>メモリ4GBプラン</th>
  <td>2</td>
  <td>4GB</td>
  <td>80GB</td>
  <td>24</td>
  <td>2800円</td>
  <td>12円</td>
</tr>
</tbody>
</table>

            </b-tab-item>

            <b-tab-item label="Music">
              <table class="table">
                <thead>
                  <tr>
                    <th><b-tooltip label="プランに設定された名前です">
                          <abbr title="Planname">プラン名</abbr>
                        </b-tooltip></th>
                    <th><b-tooltip label="サーバーに割り当てられるCPUコア数です。この値が高いほど、サーバーを安定して動かすことができます。" multilined>
                          <abbr title="Cores">CPUコア</abbr>
                    </b-tooltip></th>
                    <th><b-tooltip label="サーバーに割り当てられるメモリ容量です。メモリが足りない場合、サーバーがダウン可能性があります。" multilined>
                          <abbr title="Ram">メモリ</abbr>
                        </b-tooltip></th>
                    <th><b-tooltip label="サーバーに割り当てられるディスク容量です。容量が多いほど、多くのデータを保存できます。" multilined>
                          <abbr title="Storage">ディスク容量</abbr>
                        </b-tooltip></th>
                    <th><b-tooltip label="設定可能は最大人数です。この値を超えて人数を設定することはできません。" multilined>
                          <abbr title="MaxPlayers">最大人数</abbr>
                        </b-tooltip></th>
                    <th><b-tooltip label="サーバーの月額料金です。料金は毎月請求されます。" multilined>
                          <abbr title="PricePerMonth">料金(月額)</abbr>
                        </b-tooltip></th>
                    <th><b-tooltip label="サーバーの１時間ごとの料金です。料金はチャージ残高から請求されます。" multilined>
                          <abbr title="PricePerHour">料金(時額)</abbr>
                        </b-tooltip></th>
                  </tr>
                </thead>
<tfoot>
  <tr>
    <th><abbr title="Planname">プラン名</abbr></th>
    <th><abbr title="Cores">CPUコア</abbr></th>
    <th><abbr title="Ram">メモリ</abbr></th>
    <th><abbr title="Storage">ディスク容量</abbr></th>
    <th><abbr title="MaxPlayers">最大人数</abbr></th>
    <th><abbr title="PricePerMonth">料金(月額)</abbr></th>
    <th><abbr title="PricePerHour">料金(時額)</abbr></th>
  </tr>
</tfoot>
<tbody>
  <tr>
    <th>メモリ512MBプラン</th>
    <td>0.5</td>
    <td>512MB</td>
    <td>10GB</td>
    <td>3</td>
    <td>300円</td>
    <td>1円</td>
</tr>
<tr>
  <th>メモリ1GBプラン</th>
  <td>1</td>
  <td>1GB</td>
  <td>20GB</td>
  <td>6</td>
  <td>500円</td>
  <td>2</td>
</tr>
<tr>
  <th>メモリ2GBプラン</th>
  <td>1</td>
  <td>2GB</td>
  <td>40GB</td>
  <td>12</td>
  <td>1000円</td>
  <td>4円</td>
</tr>
<tr>
  <th>メモリ3GBプラン</th>
  <td>1</td>
  <td>3GB</td>
  <td>60GB</td>
  <td>18</td>
  <td>1500円</td>
  <td>6円</td>
</tr>
<tr>
  <th>メモリ4GBプラン</th>
  <td>2</td>
  <td>4GB</td>
  <td>80GB</td>
  <td>24</td>
  <td>2000円</td>
  <td>8円</td>
</tr>
</tbody>
</table>
            </b-tab-item>

            <b-tab-item label="Videos" disabled>
                Nunc nec velit nec libero vestibulum eleifend.
                Curabitur pulvinar congue luctus.
                Nullam hendrerit iaculis augue vitae ornare.
                Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: 0,
                showBooks: false
            }
        }
    }
</script>

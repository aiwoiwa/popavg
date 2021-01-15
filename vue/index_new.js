Vue.component('v-accordion', {
    data: function() {
        return {
            isOpened: false,
        }
    },
    props: ['i'],
    template: `
        <tbody>
            <tr @click='switchShow()'>
                <td class='left'>{{ i.lv }}</td>
                <td class='left'>{{ i.version }}</td>
                <td class='left'>
                    {{ i.genre }}
                    <span class='UPPER' v-if='i.isUPPER'>(UPPER)</span>
                    <span :class='i.difficulty'>({{ i.difficulty }})</span>
                </td>
                <td class='right rate'>{{ i.pf_rate }}%</td>
                <td class='right rate'>{{ i.fc_rate }}%</td>
                <td class='right rate'>{{ i.clear_rate }}%</td>
            </tr>
            <tr v-if='isOpened'>
                <td colspan='6'>
                    <canvas :id='"cvs_" + i.id'></canvas>
                </td>
            </tr>
        </tbody>
    `,
    methods: {
        switchShow: function(){
            this.isOpened = !this.isOpened;
            if(!this.isOpened) return;

            Vue.nextTick(() => {
                const ctx = document.getElementById(`cvs_${this.i.id}`);
                const pie = new Chart(ctx, {
                  type: 'pie',
                  data: {
                    labels: ["Perfect", "FullCombo", "Clear", "Easy", "Failed"],
                    datasets: [{
                        backgroundColor: [
                            "#FFD700",
                            "#C0C0C0",
                            "#C47222",
                            "#A9C087",
                            "#3E3A39"
                        ],
                        data: [
                            this.i.num_of_perfect,
                            this.i.num_of_fullCombo,
                            this.i.num_of_clear - this.i.num_of_perfect - this.i.num_of_fullCombo,
                            this.i.num_of_easy,
                            this.i.num_of_failed_gauge_16_15 + this.i.num_of_failed_gauge_14_12 + this.i.num_of_failed_gauge_11_0
                        ],
                    }]
                  },
                  options: {
                    title: {
                      display: false,
                    }
                  }
                });
            });
        }
    },
});

const app = new Vue({
    el: '#app',
    data: {
        items: data
    },
});
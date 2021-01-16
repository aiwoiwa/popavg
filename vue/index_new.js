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
                    labels: ["Pf", "FC☆", "FC◇", "FC○", "Clear☆", "Clear◇", "Clear○", "Easy", "★", "◆", "●"],
                    datasets: [{
                        backgroundColor: [
                            "#ffd700",
                            "#c0c0c0",
                            "#c0c0c0",
                            "#c0c0c0",
                            "#cf622d",
                            "#cf622d",
                            "#cf622d",
                            "#08d078",
                            "#494967",
                            "#494967",
                            "#494967"
                        ],
                        data: [
                            this.i.num_of_perfect,
                            this.i.num_of_fullCombo_good_1_5,
                            this.i.num_of_fullCombo_good_6_20,
                            this.i.num_of_fullCombo_good_21_,
                            this.i.num_of_clear_bad_1_5,
                            this.i.num_of_clear_bad_6_20,
                            this.i.num_of_clear_bad_21_,
                            this.i.num_of_easy,
                            this.i.num_of_failed_gauge_16_15,
                            this.i.num_of_failed_gauge_14_12,
                            this.i.num_of_failed_gauge_11_0
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
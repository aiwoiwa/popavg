const v_accordion_grid_tbody = {
    template: '#v-accordion-grid-tbody-template',
    data: function() {
        return {
            isOpened: false,
            pie_medal: null,
            pie_score: null,
            line: null,
        }
    },
    props: {
        item: Object,
    },
    methods: {
        toggle: function(){
            this.isOpened = !this.isOpened;
            if(this.isOpened) {
                this.showDatail();
            }else{
                setTimeout(
                    () => [
                        this.pie_medal,
                        this.pie_score,
                        this.line
                    ].forEach(i => i.destroy())
                    , 300
                );
            }
        },
        showDatail: function(){
            Vue.nextTick(() => {
                const canvas_for_pie_medal = document.getElementById(`canvas-pie-medal-${this.item.id}`);
                this.pie_medal = new Chart(canvas_for_pie_medal, {
                    type: 'pie',
                    data: {
                        labels: ["★", "★", "◆", "●", "★", "◆", "●", "EASY", "★", "◆", "●"],
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
                                this.item.num_of_perfect,
                                this.item.num_of_fullCombo_1_good_5,
                                this.item.num_of_fullCombo_6_good_20,
                                this.item.num_of_fullCombo_21_good,
                                this.item.num_of_clear_1_bad_5,
                                this.item.num_of_clear_6_bad_20,
                                this.item.num_of_clear_21_bad,
                                this.item.num_of_easy,
                                this.item.num_of_failed_15_gauge_16,
                                this.item.num_of_failed_12_gauge_14,
                                this.item.num_of_failed_0_gauge
                            ],
                        }],
                    },
                    options: {
                        title: {
                            display: false,
                        },
                        legend: {
                            position: 'right',
                            labels: {
                                fontFamily: "'メイリオ',Meiryo,monospace,sans-serif",
                                fontColor: '#cfd2da',
                                fontSize: 12,
                            },
                        },
                    },
                });

                const canvas_for_pie_score = document.getElementById(`canvas-pie-score-${this.item.id}`);
                this.pie_medal = new Chart(canvas_for_pie_score, {
                    type: 'pie',
                    data: {
                        labels: [
                            "100k",
                            "99k",
                            "98k",
                            "97k",
                            "96k",
                            "95k",
                            "94k",
                            "93k",
                            "92k",
                            "91k",
                            "90k",
                            "86k-89k",
                            "82k-85k",
                            "0k-81k",
                        ],
                        datasets: [{
                            backgroundColor: [
                                "#c7000b",
                                "#d28300",
                                "#d28300",
                                "#dfd000",
                                "#dfd000",
                                "#dfd000",
                                "#7baa17",
                                "#7baa17",
                                "#7baa17",
                                "#7baa17",
                                "#7baa17",
                                "#00873c",
                                "#00873c",
                                "#008a83"
                            ],
                            data: [
                                this.item.num_of_100k,
                                this.item.num_of_99k,
                                this.item.num_of_98k,
                                this.item.num_of_97k,
                                this.item.num_of_96k,
                                this.item.num_of_95k,
                                this.item.num_of_94k,
                                this.item.num_of_93k,
                                this.item.num_of_92k,
                                this.item.num_of_91k,
                                this.item.num_of_90k,
                                this.item.num_of_86k_89k,
                                this.item.num_of_82k_85k,
                                this.item.num_of_0k_81k
                            ],
                        }],
                    },
                    options: {
                        title: {
                            display: false,
                        },
                        legend: {
                            position: 'right',
                            labels: {
                                fontFamily: "'メイリオ',Meiryo,monospace,sans-serif",
                                fontColor: '#cfd2da',
                                fontSize: 12,
                            },
                        },
                    },
                });

                const canvas_for_line = document.getElementById(`canvas-line-${this.item.id}`);
                this.line = new Chart(canvas_for_line, {
                    type: 'line',
                    data: {
                        labels: [
                            "99.0",
                            "99.1",
                            "99.2",
                            "99.3",
                            "99.4",
                            "99.5",
                            "99.6",
                            "99.7",
                            "99.8",
                            "99.9",
                            "100.0",
                            "100.1",
                            "100.2以上"
                        ],
                        datasets: [
                            {
                                label: "max",
                                data: this.item.avg_scores_group_by_popn_class.map(i => i.top_score),
                                borderColor: '#ff6384',
                            },
                            {
                                label: "median",
                                data: this.item.avg_scores_group_by_popn_class.map(i => Math.round(i.median_score)),
                                borderColor: '#4bc0c0',
                            },
                            {
                                label: "avg",
                                data: this.item.avg_scores_group_by_popn_class.map(i => Math.round(i.avg_score)),
                                borderColor: '#ff9f40',
                            },
                        ],
                    },
                    options: {
                        title: {
                            display: false,
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            labels: {
                                fontFamily: "'メイリオ',Meiryo,monospace,sans-serif",
                                fontColor: '#cfd2da',
                                fontSize: 12,
                            },
                        },
                        scales: {
                            xAxes: [{
                                ticks: {
                                    fontColor: '#cfd2da',
                                },
                                display: true,
                                stacked: false,
                                gridLines: {
                                    color: '#9fa5b5',
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    fontColor: '#cfd2da',
                                    suggestedMax: 100000,
                                    suggestedMin: 90000,
                                    stepSize: 1000,
                                    callback: function(val){
                                        return  val
                                    },
                                },
                                gridLines: {
                                    color: '#9fa5b5',
                                },
                            }]
                        },
                    },
                });
            });
        },
        beforeEnter: function(el) {
            Vue.nextTick(() => {el.style.height='0'});
        },
        enter: function(el) {
            Vue.nextTick(() => {el.style.height=`${el.scrollHeight}px`});
        },
        beforeLeave: function(el) {
            Vue.nextTick(() => {el.style.height=`${el.scrollHeight}px`});
        },
        leave: function(el) {
            Vue.nextTick(() => {el.style.height='0'});
        },
    },
};

const v_accordion_grid = {
    template: '#v-accordion-grid-template',
    components: {
        'v-accordion-grid-tbody': v_accordion_grid_tbody,
    },
    data: function() {
        const sortOrders = {};
        this.columns.forEach(function(key) {
            sortOrders[key] = 1;
        });
        return {
          sortKey: "",
          sortOrders: sortOrders
        };
    },
    props: {
        items: Array,
        columns: Array,
    },
    computed: {
        sortedItems: function() {
            const sortKey = this.sortKey;
            const order = this.sortOrders[sortKey] || 1;
            let items = this.items;

            if (sortKey) {
                items = items.slice().sort(
                    function(a, b) {
                        if(~['lv', 'pf_rate', 'fc_rate', 'clear_rate', 'top_score'].indexOf(sortKey)){
                            a = Number(a[sortKey]);
                            b = Number(b[sortKey]);
                        }else{
                            a = a[sortKey];
                            b = b[sortKey];    
                        }
                        return (a === b ? 0 : a > b ? 1 : -1) * order;
                    }
                );
            }
            return items;
        }
    },
    methods: {
        sortBy: function(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        },
    },
};

const app = new Vue({
    el: '#app',
    components: {
        'v-accordion-grid': v_accordion_grid,
    },
    data: {
        dataSrcKey: null, 
        gridItems: null,
        gridColumns: ['lv', 'version', 'genre', 'pf_rate', 'fc_rate', 'clear_rate', 'top_score', 'top_medal'],
    },
    methods: {
        getData: function(lv) {
            this.dataSrcKey = lv;
            fetch(`https://aiwoiwa.github.io/popavg/vue/src/data${lv}.json`)
            .then(response => response.json())
            .then(data => this.gridItems = data);
        },
    },
    mounted: function() {
        this.getData(50);
    },
});
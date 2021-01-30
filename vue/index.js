const v_accordion_grid_tbody = {
    template: '#v-accordion-grid-tbody-template',
    data: function() {
        return {
            isOpened: false,
            pie: null,
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
                    () => [this.pie, this.line].forEach(i => i.destroy())
                    , 300
                );
            }
        },
        showDatail: function(){
            Vue.nextTick(() => {
                const canvas_for_pie = document.getElementById(`canvas-pie-${this.item.id}`);
                this.pie = new Chart(canvas_for_pie, {
                    type: 'pie',
                    data: {
                        labels: ["★", "★", "◆", "●", "★", "◆", "●", "Easy", "★", "◆", "●"],
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
                                this.item.num_of_failed_15_gauge,
                                this.item.num_of_failed_12_gauge,
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
                        if(~['lv', 'pf_rate', 'fc_rate', 'clear_rate', 'max'].indexOf(sortKey)){
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
        gridColumns: ['lv', 'version', 'genre', 'pf_rate', 'fc_rate', 'clear_rate', 'max'],
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
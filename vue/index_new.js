const v_accordion_grid_tbody = {
    template: '#v-accordion-grid-tbody-template',
    data: function() {
        return {
            isOpened: false,
        }
    },
    props: {
        item: Object,
    },
    methods: {
        toggle: function(){
            this.isOpened = !this.isOpened;
            if(this.isOpened) this.$parent.showDatail(this.item);
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
        columns: Array
    },
    computed: {
        sortedItems: function() {
            const sortKey = this.sortKey;
            const order = this.sortOrders[sortKey] || 1;
            let items = this.items;

            if (sortKey) {
                items = items.slice().sort(
                    function(a, b) {
                        if(~['lv', 'pf_rate', 'fc_rate', 'clear_rate'].indexOf(sortKey)){
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
        showDatail: function(item){
            Vue.nextTick(() => {
                const pie = document.getElementById(`canvas-pie-${item.id}`);
                new Chart(pie, {
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
                                item.num_of_perfect,
                                item.num_of_fullCombo_good_1_5,
                                item.num_of_fullCombo_good_6_20,
                                item.num_of_fullCombo_good_21_,
                                item.num_of_clear_bad_1_5,
                                item.num_of_clear_bad_6_20,
                                item.num_of_clear_bad_21_,
                                item.num_of_easy,
                                item.num_of_failed_gauge_16_15,
                                item.num_of_failed_gauge_14_12,
                                item.num_of_failed_gauge_11_0
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
                                fontColor: '#cfd2da',
                                fontSize: 12,
                            },
                        },
                    },
                });

                const bar = document.getElementById(`canvas-bar-${item.id}`);
                new Chart(bar, {
                    type: 'bar',
                    data: {
                        labels: [
                            "99.0未満",
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
                        datasets: [{
                            data: item.avg_scores_group_by_popn_class.map(i => Math.round(i.avg)),
                            backgroundColor: '#9fa5b5',
                        }],
                    },
                    options: {
                        title: {
                            display: false,
                        },
                        legend: {
                            display: false,
                        },
                        scales: {
                            xAxes: [{
                                ticks: {
                                    fontColor: '#cfd2da',
                                },
                                display: true,
                                stacked: false,
                                gridLines: {
                                    display: false,
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    fontColor: '#cfd2da',
                                    suggestedMax: 100000,
                                    suggestedMin: 70000,
                                    stepSize: 1000,
                                    callback: function(val){
                                        return  val
                                    },
                                },
                                gridLines: {
                                    drawBorder: false,
                                    color: '#cfd2da',
                                },
                            }]
                        },
                    },
                });
            });
        },
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
        gridItems: data,
        gridColumns: ['lv', 'version', 'genre', 'pf_rate', 'fc_rate', 'clear_rate'],
    },
});
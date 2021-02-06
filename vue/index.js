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
                            data: this.item.distribution_of_medal,
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
                this.pie_score = new Chart(canvas_for_pie_score, {
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
                            data: this.item.distribution_of_score,
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
                                data: this.item.group_by_popn_class.map(i => i.scores[0]),
                                borderColor: '#ff6384',
                            },
                            {
                                label: "median",
                                data: this.item.group_by_popn_class.map(i => i.scores[1]),
                                borderColor: '#4bc0c0',
                            },
                            {
                                label: "avg",
                                data: this.item.group_by_popn_class.map(i => i.scores[2]),
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
            sortOrders[key] = -1;
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
                items.sort(
                    function(a, b) {
                        if(~['ver_order', 'pf_rate', 'fc_rate', 'clear_rate', 'top_score'].indexOf(sortKey)){
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
        pClasses_r1: [
            "99.0",
            "99.1",
            "99.2",
            "99.3",
            "99.4"
        ],
        pClasses_r2: [
            "99.5",
            "99.6",
            "99.7",
            "99.8",
            "99.9"
        ],
        pClasses_r3: [
            "100.0",
            "100.1",
            "100.2gte"
        ],
        dataSrcKeys: [42, 43, 44, 45, 46, 47, 48, 49, 50],
        selectedPClass: "All",
        selectedDataSrcKey: null,
        gridItems: null,
        gridColumns: ['ver_order', 'genre', 'pf_rate', 'fc_rate', 'clear_rate', 'top_score', 'top_medal'],
    },
    methods: {
        setPClass: function(pClass) {
            this.selectedPClass = pClass;
            this.getData(this.selectedDataSrcKey);
        },
        getData: function(lv) {
            this.selectedDataSrcKey = lv;
            fetch(`https://aiwoiwa.github.io/popavg/vue/src/data${lv}.json`)
            .then(response => response.json())
            .then(data => this.setGridItems(data));
        },
        setGridItems: function(data) {
            this.gridItems = data.map(
                item => ({
                    id: item.id,
                    lv: item.lv,
                    genre: item.genre,
                    song: item.song,
                    isUPPER: item.isUPPER,
                    difficulty: item.difficulty,
                    ver: item.ver,
                    ver_order: item.ver_order,
                    pf_rate: item.pf_rate,
                    fc_rate: item.fc_rate,
                    top_score: this.selectedPClass === 'All' ? item.top_score
                             : item.group_by_popn_class.find(i => i.popn_class === this.selectedPClass)?.scores[0] ?? 0,
                    top_medal: this.selectedPClass === 'All' ? item.top_medal
                             : item.group_by_popn_class.find(i => i.popn_class === this.selectedPClass)?.top_medal ?? -1,
                    clear_rate: item.clear_rate,
                    distribution_of_medal: item.distribution_of_medal,
                    distribution_of_score: item.distribution_of_score,
                    group_by_popn_class: item.group_by_popn_class
                })
            );
        },
    },
    mounted: function() {
        this.getData(50);
    },
});
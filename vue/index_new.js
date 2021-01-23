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

            console.log(sortKey);
            console.log(order);

            if (sortKey) {
                console.log("a");
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
                console.log("b");
            }
            return items;
        }
    },
    methods: {
        showDatail: function(item){
            Vue.nextTick(() => {
                const canvas = document.getElementById(`canvas_${item.id}`);
                new Chart(canvas, {
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
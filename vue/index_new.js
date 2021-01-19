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
    },
};

const v_accordion_grid = {
    template: '#v-accordion-grid-template',
    components: {
        'v-accordion-grid-tbody': v_accordion_grid_tbody,
    },
    props: {
        items: Array,
    },
    methods: {
        showDatail: function(item){
            Vue.nextTick(() => {
                const canvas = document.getElementById(`canvas_${item.id}`);
                new Chart(canvas, {
                    type: 'pie',
                    data: {
                        labels: ["☆", "☆", "◇", "○", "☆", "◇", "○", "Easy", "★", "◆", "●"],
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
                                defaultFontFamily:"'meiryo', 'serif'",
                                fontColor: '#cfd2da',
                                fontSize: 12,
                            },
                        },
                    },
                });
            });
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
    },
});
const app = new Vue({
  el: '#app'
  ,data: {
      arr: data
      ,sort: {
          key: ''
          ,isAsc: false
      }
  },
  computed: {
    sortedArr: function() {
      if(this.sort.key) {
        this.arr.sort((a, b) => {
          if(~['lv', 'pf_rate', 'fc_rate', 'clear_rate'].indexOf(this.sort.key)){
            a = Number(a[this.sort.key]);
            b = Number(b[this.sort.key]);
          }else if(~this.sort.key.indexOf('genre')){
            a = `${a[this.sort.key]}${a.isUPPER ? '(UPPER)' : ''}(${a.difficulty})`;
            b = `${b[this.sort.key]}${b.isUPPER ? '(UPPER)' : ''}(${b.difficulty})`;
          }else{
            a = a[this.sort.key];
            b = b[this.sort.key];
          }

          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1);
        });
      }

      return this.arr;
    }
  },
  methods: {
    sortBy: function(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },
    sortedClass: function(key) {
      return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc'}` : '';
    }
  }
});
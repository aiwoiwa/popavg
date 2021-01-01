const app = new Vue({
    el: '#app'
    ,data: {
        songs: data
        ,sort: {
            key: ''
            ,isAsc: false
        }
    },
    computed: {
        eventedAction: function() {
          let list = this.songs.slice();
    
          // ソート実施
          if(this.sort.key) {
            list.sort((a, b) => {
              a = a[this.sort.key];
              b = b[this.sort.key];
              return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1);
            });
          }
    
          return list;
        }   
      },
      methods: {
        // sort用キーをセットし、昇順・降順を入れ替える
        sortBy: function(key) {
          this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
          this.sort.key = key;
        },
        sortedClass: function(key) {
          return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc' }` : '';
        }
      }
    });
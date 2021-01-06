const label = {
  lv50: data50.map(i => i.genre),
  lv49: data49.map(i => i.genre),
  lv48: data48.map(i => i.genre)
};

console.log(label.lv50);
console.log(label.lv49);
console.log(label.lv48);

const data = {
  lv50: {
    pc0990: data50.map(i => i.data.filter(j => j.popn_class === "000.00_<=_x_<_099.00")[0].avg),
    pc0990: data50.map(i => i.data.filter(j => j.popn_class === "099.00_<=_x_<_099.10")[0].avg),
    pc0991: data50.map(i => i.data.filter(j => j.popn_class === "099.10_<=_x_<_099.20")[0].avg),
    pc0992: data50.map(i => i.data.filter(j => j.popn_class === "099.20_<=_x_<_099.30")[0].avg),
    pc0993: data50.map(i => i.data.filter(j => j.popn_class === "099.30_<=_x_<_099.40")[0].avg),
    pc0994: data50.map(i => i.data.filter(j => j.popn_class === "099.40_<=_x_<_099.50")[0].avg),
    pc0995: data50.map(i => i.data.filter(j => j.popn_class === "099.50_<=_x_<_099.60")[0].avg),
    pc0996: data50.map(i => i.data.filter(j => j.popn_class === "099.60_<=_x_<_099.70")[0].avg),
    pc0997: data50.map(i => i.data.filter(j => j.popn_class === "099.70_<=_x_<_099.80")[0].avg),
    pc0998: data50.map(i => i.data.filter(j => j.popn_class === "099.80_<=_x_<_099.90")[0].avg),
    pc0999: data50.map(i => i.data.filter(j => j.popn_class === "099.90_<=_x_<_100.00")[0].avg),
    pc1000: data50.map(i => i.data.filter(j => j.popn_class === "100.00_<=_x_<_100.10")[0].avg),
    pc1001: data50.map(i => i.data.filter(j => j.popn_class === "100.10_<=_x_<_100.20")[0].avg),
    pc1002: data50.map(i => i.data.filter(j => j.popn_class === "100.20_<=_x")[0].avg)
  },
  lv49: {
    pc0990: data49.map(i => i.data.filter(j => j.popn_class === "000.00_<=_x_<_099.00")[0].avg),
    pc0990: data49.map(i => i.data.filter(j => j.popn_class === "099.00_<=_x_<_099.10")[0].avg),
    pc0991: data49.map(i => i.data.filter(j => j.popn_class === "099.10_<=_x_<_099.20")[0].avg),
    pc0992: data49.map(i => i.data.filter(j => j.popn_class === "099.20_<=_x_<_099.30")[0].avg),
    pc0993: data49.map(i => i.data.filter(j => j.popn_class === "099.30_<=_x_<_099.40")[0].avg),
    pc0994: data49.map(i => i.data.filter(j => j.popn_class === "099.40_<=_x_<_099.50")[0].avg),
    pc0995: data49.map(i => i.data.filter(j => j.popn_class === "099.50_<=_x_<_099.60")[0].avg),
    pc0996: data49.map(i => i.data.filter(j => j.popn_class === "099.60_<=_x_<_099.70")[0].avg),
    pc0997: data49.map(i => i.data.filter(j => j.popn_class === "099.70_<=_x_<_099.80")[0].avg),
    pc0998: data49.map(i => i.data.filter(j => j.popn_class === "099.80_<=_x_<_099.90")[0].avg),
    pc0999: data49.map(i => i.data.filter(j => j.popn_class === "099.90_<=_x_<_100.00")[0].avg),
    pc1000: data49.map(i => i.data.filter(j => j.popn_class === "100.00_<=_x_<_100.10")[0].avg),
    pc1001: data49.map(i => i.data.filter(j => j.popn_class === "100.10_<=_x_<_100.20")[0].avg),
    pc1002: data49.map(i => i.data.filter(j => j.popn_class === "100.20_<=_x")[0].avg)
  },
  lv48: {
    pc0990: data48.map(i => i.data.filter(j => j.popn_class === "000.00_<=_x_<_099.00")[0].avg),
    pc0990: data48.map(i => i.data.filter(j => j.popn_class === "099.00_<=_x_<_099.10")[0].avg),
    pc0991: data48.map(i => i.data.filter(j => j.popn_class === "099.10_<=_x_<_099.20")[0].avg),
    pc0992: data48.map(i => i.data.filter(j => j.popn_class === "099.20_<=_x_<_099.30")[0].avg),
    pc0993: data48.map(i => i.data.filter(j => j.popn_class === "099.30_<=_x_<_099.40")[0].avg),
    pc0994: data48.map(i => i.data.filter(j => j.popn_class === "099.40_<=_x_<_099.50")[0].avg),
    pc0995: data48.map(i => i.data.filter(j => j.popn_class === "099.50_<=_x_<_099.60")[0].avg),
    pc0996: data48.map(i => i.data.filter(j => j.popn_class === "099.60_<=_x_<_099.70")[0].avg),
    pc0997: data48.map(i => i.data.filter(j => j.popn_class === "099.70_<=_x_<_099.80")[0].avg),
    pc0998: data48.map(i => i.data.filter(j => j.popn_class === "099.80_<=_x_<_099.90")[0].avg),
    pc0999: data48.map(i => i.data.filter(j => j.popn_class === "099.90_<=_x_<_100.00")[0].avg),
    pc1000: data48.map(i => i.data.filter(j => j.popn_class === "100.00_<=_x_<_100.10")[0].avg),
    pc1001: data48.map(i => i.data.filter(j => j.popn_class === "100.10_<=_x_<_100.20")[0].avg),
    pc1002: data48.map(i => i.data.filter(j => j.popn_class === "100.20_<=_x")[0].avg)
  }
};

//rgba(20,159,219,1)
//rgba(20,219,80,1)
//rgba(220,20,60,1)

const ctx50 = document.getElementById("myBarChart50");
const myBarChart50 = new Chart(ctx50, {
    type: 'bar'
    ,data: {
      labels: label.lv50
      ,datasets: [
        {
          label: "99"
          ,data: data.lv50.pc0990
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.1"
          ,data: data.lv50.pc0991
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.2"
          ,data: data.lv50.pc0992
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.3"
          ,data: data.lv50.pc0993
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.4"
          ,data: data.lv50.pc0994
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.5"
          ,data: data.lv50.pc0995
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.6"
          ,data: data.lv50.pc0996
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.7"
          ,data: data.lv50.pc0997
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.8"
          ,data: data.lv50.pc0998
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.9"
          ,data: data.lv50.pc0999
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "100"
          ,data: data.lv50.pc1000
          ,backgroundColor: "rgba(0,88,66,1)"
        }
        ,{
          label: "100.1"
          ,data: data.lv50.pc1001
          ,backgroundColor: "rgba(0,88,66,1)"
        }
        ,{
          label: "100.2以上"
          ,data: data.lv50.pc1002
          ,backgroundColor: "rgba(0,88,66,1)"
        }
      ]
    },
    options: {
      title: {
        display: true
        ,text: 'ポックラ別 平均スコア'
      }
      ,scales: {
        xAxes: [{
          ticks: {
            maxRotation: 90,
            minRotation: 90,
            callback: function(val){
              if(val.length > 10){
                return [val.substr(0, 10), val.substr(10)]
              }else{
                return val;                
              }
            }
          }          
        }],
        yAxes: [{
          ticks: {
            suggestedMax: 100000
            ,suggestedMin: 70000
            ,stepSize: 1000,
            callback: function(val){
              return  val
            }
          }
        }]
      }
    }
});

const ctx49 = document.getElementById("myBarChart49");
const myBarChart49 = new Chart(ctx49, {
    type: 'bar'
    ,data: {
      labels: label.lv49
      ,datasets: [
        {
          label: "99"
          ,data: data.lv49.pc0990
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.1"
          ,data: data.lv49.pc0991
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.2"
          ,data: data.lv49.pc0992
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.3"
          ,data: data.lv49.pc0993
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.4"
          ,data: data.lv49.pc0994
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.5"
          ,data: data.lv49.pc0995
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.6"
          ,data: data.lv49.pc0996
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.7"
          ,data: data.lv49.pc0997
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.8"
          ,data: data.lv49.pc0998
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.9"
          ,data: data.lv49.pc0999
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "100"
          ,data: data.lv49.pc1000
          ,backgroundColor: "rgba(0,88,66,1)"
        }
        ,{
          label: "100.1"
          ,data: data.lv49.pc1001
          ,backgroundColor: "rgba(0,88,66,1)"
        }
        ,{
          label: "100.2以上"
          ,data: data.lv49.pc1002
          ,backgroundColor: "rgba(0,88,66,1)"
        }
      ]
    },
    options: {
      title: {
        display: true
        ,text: 'ポックラ別 平均スコア'
      }
      ,scales: {
        xAxes: [{
          ticks: {
            maxRotation: 90,
            minRotation: 90,
            callback: function(val){
              if(val.length > 10){
                return `${val.substr(0, 10)}..`
              }else{
                return val;
              }
            }
          }          
        }],
        yAxes: [{
          ticks: {
            suggestedMax: 100000
            ,suggestedMin: 70000
            ,stepSize: 1000,
            callback: function(val){
              return  val
            }
          }
        }]
      }
    }
});

const ctx48 = document.getElementById("myBarChart48");
const myBarChart48 = new Chart(ctx48, {
    type: 'bar'
    ,data: {
      labels: label.lv48
      ,datasets: [
        {
          label: "99"
          ,data: data.lv48.pc0990
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.1"
          ,data: data.lv48.pc0991
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.2"
          ,data: data.lv48.pc0992
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.3"
          ,data: data.lv48.pc0993
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.4"
          ,data: data.lv48.pc0994
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.5"
          ,data: data.lv48.pc0995
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.6"
          ,data: data.lv48.pc0996
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.7"
          ,data: data.lv48.pc0997
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.8"
          ,data: data.lv48.pc0998
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.9"
          ,data: data.lv48.pc0999
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "100"
          ,data: data.lv48.pc1000
          ,backgroundColor: "rgba(0,88,66,1)"
        }
        ,{
          label: "100.1"
          ,data: data.lv48.pc1001
          ,backgroundColor: "rgba(0,88,66,1)"
        }
        ,{
          label: "100.2以上"
          ,data: data.lv48.pc1002
          ,backgroundColor: "rgba(0,88,66,1)"
        }
      ]
    },
    options: {
      title: {
        display: true
        ,text: 'ポックラ別 平均スコア'
      }
      ,scales: {
        xAxes: [{
          ticks: {
            maxRotation: 90,
            minRotation: 90,
            callback: function(val){
              if(val.length > 10){
                return `${val.substr(0, 10)}..`
              }else{
                return val;
              }
            }
          }          
        }],
        yAxes: [{
          ticks: {
            suggestedMax: 100000
            ,suggestedMin: 70000
            ,stepSize: 1000,
            callback: function(val){
              return  val
            }
          }
        }]
      }
    }
});
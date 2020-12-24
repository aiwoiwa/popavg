//rgba(20,159,219,1)
//rgba(20,219,80,1)
//rgba(220,20,60,1)
const ctx = document.getElementById("myBarChart");
const myBarChart = new Chart(ctx, {
    type: 'bar'
    ,data: {
      labels: labels.lv50
      ,datasets: [
        {
          label: "99"
          ,data: data50.pc0990
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.1"
          ,data: data50.pc0991
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.2"
          ,data: data50.pc0992
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.3"
          ,data: data50.pc0993
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.4"
          ,data: data50.pc0994
          ,backgroundColor: "rgba(0,124,69,1)"
        }
        ,{
          label: "99.5"
          ,data: data50.pc0995
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.6"
          ,data: data50.pc0996
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.7"
          ,data: data50.pc0997
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.8"
          ,data: data50.pc0998
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "99.9"
          ,data: data50.pc0999
          ,backgroundColor: "rgba(79,138,93,1)"
        }
        ,{
          label: "100"
          ,data: data50.pc1000
          ,backgroundColor: "rgba(0,88,66,1)"
        }
        ,{
          label: "100.1"
          ,data: data50.pc1001
          ,backgroundColor: "rgba(0,88,66,1)"
        }
        ,{
          label: "100.2以上"
          ,data: data50.pc1002
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
        yAxes: [{
          ticks: {
            suggestedMax: 100000
            ,suggestedMin: 70000
            ,stepSize: 1000,
            callback: function(value, index, values){
              return  value
            }
          }
        }]
      }
    }
});

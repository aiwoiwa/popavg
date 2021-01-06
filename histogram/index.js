const ctx = document.getElementById("myHistogramChart").getContext('2d');

const labels = Object.keys(data);
const values = Object.values(data);
const num_of_players = Object.values(data).reduce((sum, element) => sum + element, 0);

const myChart = new Chart(ctx, {
    type: 'bar'
    ,data: {
        labels: labels,
        datasets: [
            {
                data: values
                ,backgroundColor: 'rgba(255, 99, 132, 1)',
            }
        ]
    },
    options: {
        title: {
            display: true
            ,text: `Total: ${num_of_players}`
        },
        legend: {
            display: false
        }
        ,scales: {
            xAxes: [
                {
                    display: false
                    ,barPercentage: 1.3
                    ,ticks: { max: 100.6 }
                }
                ,{
                    display: true,
                    ticks: {
                        autoSkip: false,
                        max: 100.7
                    }
                }
            ]
            ,yAxes: [
                {
                    ticks: { beginAtZero: true }
                }
            ]
        }
    }
});

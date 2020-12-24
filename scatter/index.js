const ctx = document.getElementById("myScatterChart");
const myScatterChart = new Chart(
    ctx
    ,{
        type: 'scatter'
        ,data: { 
            datasets: [
                {
                    label: '42'
                    ,data: data42
                    ,backgroundColor: 'RGBA(255, 191, 127, 1)'
                }
                ,{
                    label: '43'
                    ,data: data43
                    ,backgroundColor: 'RGBA(255, 255, 127, 1)'
                }
                ,{
                    label: '44'
                    ,data: data44
                    ,backgroundColor: 'RGBA(191, 255, 127, 1)'
                }
                ,{
                    label: '45'
                    ,data: data45
                    ,backgroundColor: 'RGBA(127, 255, 191, 1)'
                }
                ,{
                    label: '46'
                    ,data: data46
                    ,backgroundColor: 'RGBA(127, 191, 255, 1)'
                }
                ,{
                    label: '47'
                    ,data: data47
                    ,backgroundColor: 'RGBA(127, 127, 255, 1)'
                }
                ,{
                    label: '48'
                    ,data: data48
                    ,backgroundColor: 'RGBA(191, 127, 255, 1)'
                }
                ,{
                    label: '49'
                    ,data: data49
                    ,backgroundColor: 'RGBA(255, 127, 191, 1)'
                }
                ,{
                    label: '50'
                    ,data: data50
                    ,backgroundColor: 'RGBA(255, 127, 127, 1)'
                }
            ]
        }
        ,options: {
            title: {
                display: false
                ,text: ''
            }
            ,animation: false
            ,aspectRatio: 1
            ,tooltips: {
                mode: 'point'
                ,callbacks: {
                    label: function(tooltipItem, data) {
                        const p = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return `${p.genre},${p.song}`;
                    }
                }
            }
            ,scales: {
                xAxes: [
                    {
                        scaleLabel: {
                            display: true
                            ,labelString: 'fullcombo rate (no bad)'
                        }
                        ,ticks: {
                            suggestedMax: 1
                            ,suggestedMin: 0
                            ,stepSize: 0.05
                            ,callback: function(value, index, values){ return  value }
                        }
                    }
                ]
                ,yAxes: [
                    {
                        scaleLabel: {
                            display: true
                            ,labelString: 'perfect rate (no bad & no good)' 
                        }
                        ,ticks: {
                            suggestedMax: 1
                            ,suggestedMin: 0
                            ,stepSize: 0.05
                            ,callback: function(value, index, values){ return  value }
                        }
                    }
                ]
            }
        }
    }
);

const chg = () => {
    const all = [data42, data43, data44, data45, data46, data47, data48, data49, data50];
    
    all.forEach(arr =>
        arr.filter(item => item.isVisible)
        .forEach(item => item.isVisible = false)
    );

    const isChecked_HYPER   = document.getElementById('chkHYPER').checked;
    const isChecked_EX      = document.getElementById('chkEX').checked;
    const isChecked_General = document.getElementById('chkGeneral').checked;
    const isChecked_UPPER   = document.getElementById('chkUPPER').checked;

    if((isChecked_HYPER || isChecked_EX) && (isChecked_General || isChecked_UPPER)){
        console.log(isChecked_HYPER);
        console.log(isChecked_EX);
        console.log(isChecked_General);
        console.log(isChecked_UPPER);

        const judge = (isChecked_HYPER && isChecked_EX && isChecked_General && isChecked_UPPER) ? i => true
                    : (isChecked_HYPER && isChecked_EX && isChecked_General)                    ? i => (i.difficulty === 'HYPER' || i.difficulty === 'EX') && !i.isUPPER
                    : (isChecked_HYPER && isChecked_EX && isChecked_UPPER)                      ? i => (i.difficulty === 'HYPER' || i.difficulty === 'EX') && i.isUPPER
                    : (isChecked_HYPER && isChecked_General && isChecked_UPPER)                 ? i => i.difficulty === 'HYPER'
                    : (isChecked_HYPER && isChecked_General)                                    ? i => i.difficulty === 'HYPER' && !i.isUPPER
                    : (isChecked_HYPER && isChecked_UPPER)                                      ? i => i.difficulty === 'HYPER' && i.isUPPER
                    : (isChecked_EX && isChecked_General && isChecked_UPPER)                    ? i => i.difficulty === 'EX'
                    : (isChecked_EX && isChecked_General)                                       ? i => i.difficulty === 'EX' && !i.isUPPER
                    : (isChecked_EX && isChecked_UPPER)                                         ? i => i.difficulty === 'EX' && i.isUPPER
                    : i => false;

        console.log(judge);

        all.forEach(arr =>
            arr.filter(judge)
            .forEach(item => item.isVisible = true)   
        );
    }

    all.forEach((arr, index) => 
        myScatterChart.data.datasets[index].data = arr.filter(i => i.isVisible)
    );
    
    myScatterChart.update();
};
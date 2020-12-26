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

    const isChecked_1         = document.getElementById('chk1').checked;
    const isChecked_2         = document.getElementById('chk2').checked;
    const isChecked_3         = document.getElementById('chk3').checked;
    const isChecked_4         = document.getElementById('chk4').checked;
    const isChecked_5         = document.getElementById('chk5').checked;
    const isChecked_6         = document.getElementById('chk6').checked;
    const isChecked_7         = document.getElementById('chk7').checked;
    const isChecked_8         = document.getElementById('chk8').checked;
    const isChecked_9         = document.getElementById('chk9').checked;
    const isChecked_10        = document.getElementById('chk10').checked;
    const isChecked_11        = document.getElementById('chk11').checked;
    const isChecked_12        = document.getElementById('chk12').checked;
    const isChecked_13        = document.getElementById('chk13').checked;
    const isChecked_14        = document.getElementById('chk14').checked;
    const isChecked_15        = document.getElementById('chk15').checked;
    const isChecked_16        = document.getElementById('chk16').checked;
    const isChecked_17        = document.getElementById('chk17').checked;
    const isChecked_18        = document.getElementById('chk18').checked;
    const isChecked_19        = document.getElementById('chk19').checked;
    const isChecked_20        = document.getElementById('chk20').checked;
    const isChecked_SP        = document.getElementById('chkSP').checked;
    const isChecked_LT        = document.getElementById('chkLT').checked;
    const isChecked_Ecl       = document.getElementById('chkEcl').checked;
    const isChecked_Usa       = document.getElementById('chkUsa').checked;
    const isChecked_Pe        = document.getElementById('chkPe').checked;
    const isChecked_Rid       = document.getElementById('chkRid').checked;
    const isChecked_CS1       = document.getElementById('chkCS1').checked;
    const isChecked_CS2       = document.getElementById('chkCS2').checked;
    const isChecked_CS3       = document.getElementById('chkCS3').checked;
    const isChecked_CS4       = document.getElementById('chkCS4').checked;
    const isChecked_CS5       = document.getElementById('chkCS5').checked;
    const isChecked_CS6       = document.getElementById('chkCS6').checked;
    const isChecked_CS7       = document.getElementById('chkCS7').checked;
    const isChecked_CS8       = document.getElementById('chkCS8').checked;
    const isChecked_CS9       = document.getElementById('chkCS9').checked;
    const isChecked_CS10      = document.getElementById('chkCS10').checked;
    const isChecked_CS11      = document.getElementById('chkCS11').checked;
    const isChecked_CS12      = document.getElementById('chkCS12').checked;
    const isChecked_CS13      = document.getElementById('chkCS13').checked;
    const isChecked_CS14      = document.getElementById('chkCS14').checked;
    const isChecked_CSBest    = document.getElementById('chkCSBest').checked;
    const isChecked_PMP       = document.getElementById('chkPMP').checked;
    const isChecked_PMP2      = document.getElementById('chkPMP2').checked;
    const isChecked_ee        = document.getElementById('chkee').checked;
    const isChecked_ee2       = document.getElementById('chkee2').checked;
    const isChecked_Hanken    = document.getElementById('chkHanken').checked;
    const isChecked_HankenRid = document.getElementById('chkHankenRid').checked;

    if((isChecked_HYPER || isChecked_EX)
    && (isChecked_General || isChecked_UPPER)
    && (isChecked_1 || isChecked_2 || isChecked_3 || isChecked_4 || isChecked_5 || isChecked_6 || isChecked_7 || isChecked_8 || isChecked_9 || isChecked_10
        || isChecked_11 || isChecked_12 || isChecked_13 || isChecked_14 || isChecked_15 || isChecked_16 || isChecked_17 || isChecked_18 || isChecked_19 || isChecked_20
        || isChecked_SP || isChecked_LT || isChecked_Ecl || isChecked_Usa || isChecked_Pe || isChecked_Rid
        || isChecked_CS1 || isChecked_CS2 || isChecked_CS3 || isChecked_CS4 || isChecked_CS5 || isChecked_CS6 || isChecked_CS7 || isChecked_CS8 || isChecked_CS9 || isChecked_CS10
        || isChecked_CS11 || isChecked_CS12 || isChecked_CS13 || isChecked_CS14 || isChecked_CSBest || isChecked_PMP || isChecked_PMP2
        || isChecked_ee || isChecked_ee2 || isChecked_Hanken || isChecked_HankenRid)){

        if(isChecked_1        )  all.forEach(arr => arr.filter(item => item.version === '1').forEach(item => item.isVisible = true));
        if(isChecked_2        )  all.forEach(arr => arr.filter(item => item.version === '2').forEach(item => item.isVisible = true));
        if(isChecked_3        )  all.forEach(arr => arr.filter(item => item.version === '3').forEach(item => item.isVisible = true));
        if(isChecked_4        )  all.forEach(arr => arr.filter(item => item.version === '4').forEach(item => item.isVisible = true));
        if(isChecked_5        )  all.forEach(arr => arr.filter(item => item.version === '5').forEach(item => item.isVisible = true));
        if(isChecked_6        )  all.forEach(arr => arr.filter(item => item.version === '6').forEach(item => item.isVisible = true));
        if(isChecked_7        )  all.forEach(arr => arr.filter(item => item.version === '7').forEach(item => item.isVisible = true));
        if(isChecked_8        )  all.forEach(arr => arr.filter(item => item.version === '8').forEach(item => item.isVisible = true));
        if(isChecked_9        )  all.forEach(arr => arr.filter(item => item.version === '9').forEach(item => item.isVisible = true));
        if(isChecked_10       )  all.forEach(arr => arr.filter(item => item.version === '10').forEach(item => item.isVisible = true));
        if(isChecked_11       )  all.forEach(arr => arr.filter(item => item.version === '11').forEach(item => item.isVisible = true));
        if(isChecked_12       )  all.forEach(arr => arr.filter(item => item.version === '12').forEach(item => item.isVisible = true));
        if(isChecked_13       )  all.forEach(arr => arr.filter(item => item.version === '13').forEach(item => item.isVisible = true));
        if(isChecked_14       )  all.forEach(arr => arr.filter(item => item.version === '14').forEach(item => item.isVisible = true));
        if(isChecked_15       )  all.forEach(arr => arr.filter(item => item.version === '15').forEach(item => item.isVisible = true));
        if(isChecked_16       )  all.forEach(arr => arr.filter(item => item.version === '16').forEach(item => item.isVisible = true));
        if(isChecked_17       )  all.forEach(arr => arr.filter(item => item.version === '17').forEach(item => item.isVisible = true));
        if(isChecked_18       )  all.forEach(arr => arr.filter(item => item.version === '18').forEach(item => item.isVisible = true));
        if(isChecked_19       )  all.forEach(arr => arr.filter(item => item.version === '19').forEach(item => item.isVisible = true));
        if(isChecked_20       )  all.forEach(arr => arr.filter(item => item.version === '20').forEach(item => item.isVisible = true));
        if(isChecked_SP       )  all.forEach(arr => arr.filter(item => item.version === 'SP').forEach(item => item.isVisible = true));
        if(isChecked_LT       )  all.forEach(arr => arr.filter(item => item.version === 'LT').forEach(item => item.isVisible = true));
        if(isChecked_Ecl      )  all.forEach(arr => arr.filter(item => item.version === 'écl').forEach(item => item.isVisible = true));
        if(isChecked_Usa      )  all.forEach(arr => arr.filter(item => item.version === 'うさ').forEach(item => item.isVisible = true));
        if(isChecked_Pe       )  all.forEach(arr => arr.filter(item => item.version === 'pe').forEach(item => item.isVisible = true));
        if(isChecked_Rid      )  all.forEach(arr => arr.filter(item => item.version === '解').forEach(item => item.isVisible = true));
        if(isChecked_CS1      )  all.forEach(arr => arr.filter(item => item.version === 'CS1').forEach(item => item.isVisible = true));
        if(isChecked_CS2      )  all.forEach(arr => arr.filter(item => item.version === 'CS2').forEach(item => item.isVisible = true));
        if(isChecked_CS3      )  all.forEach(arr => arr.filter(item => item.version === 'CS3').forEach(item => item.isVisible = true));
        if(isChecked_CS4      )  all.forEach(arr => arr.filter(item => item.version === 'CS4').forEach(item => item.isVisible = true));
        if(isChecked_CS5      )  all.forEach(arr => arr.filter(item => item.version === 'CS5').forEach(item => item.isVisible = true));
        if(isChecked_CS6      )  all.forEach(arr => arr.filter(item => item.version === 'CS6').forEach(item => item.isVisible = true));
        if(isChecked_CS7      )  all.forEach(arr => arr.filter(item => item.version === 'CS7').forEach(item => item.isVisible = true));
        if(isChecked_CS8      )  all.forEach(arr => arr.filter(item => item.version === 'CS8').forEach(item => item.isVisible = true));
        if(isChecked_CS9      )  all.forEach(arr => arr.filter(item => item.version === 'CS9').forEach(item => item.isVisible = true));
        if(isChecked_CS10     )  all.forEach(arr => arr.filter(item => item.version === 'CS10').forEach(item => item.isVisible = true));
        if(isChecked_CS11     )  all.forEach(arr => arr.filter(item => item.version === 'CS11').forEach(item => item.isVisible = true));
        if(isChecked_CS12     )  all.forEach(arr => arr.filter(item => item.version === 'CS12').forEach(item => item.isVisible = true));
        if(isChecked_CS13     )  all.forEach(arr => arr.filter(item => item.version === 'CS13').forEach(item => item.isVisible = true));
        if(isChecked_CS14     )  all.forEach(arr => arr.filter(item => item.version === 'CS14').forEach(item => item.isVisible = true));
        if(isChecked_CSBest   )  all.forEach(arr => arr.filter(item => item.version === 'CSBest').forEach(item => item.isVisible = true));
        if(isChecked_PMP      )  all.forEach(arr => arr.filter(item => item.version === 'PMP').forEach(item => item.isVisible = true));
        if(isChecked_PMP2     )  all.forEach(arr => arr.filter(item => item.version === 'PMP2').forEach(item => item.isVisible = true));
        if(isChecked_ee       )  all.forEach(arr => arr.filter(item => item.version === 'ee').forEach(item => item.isVisible = true));
        if(isChecked_ee2      )  all.forEach(arr => arr.filter(item => item.version === 'ee2').forEach(item => item.isVisible = true));
        if(isChecked_Hanken   )  all.forEach(arr => arr.filter(item => item.version === '版権').forEach(item => item.isVisible = true));
        if(isChecked_HankenRid)  all.forEach(arr => arr.filter(item => item.version === '版解').forEach(item => item.isVisible = true));

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
            arr.filter(item => item.isVisible)
            .filter(judge)
            .forEach(item => item.isVisible = true)   
        );
    }

    all.forEach((arr, index) => 
        myScatterChart.data.datasets[index].data = arr.filter(i => i.isVisible)
    );
    
    myScatterChart.update();
};

const allCheck = (tf) => {
    document.getElementById('chk1').checked = tf;
    document.getElementById('chk2').checked = tf;
    document.getElementById('chk3').checked = tf;
    document.getElementById('chk4').checked = tf;
    document.getElementById('chk5').checked = tf;
    document.getElementById('chk6').checked = tf;
    document.getElementById('chk7').checked = tf;
    document.getElementById('chk8').checked = tf;
    document.getElementById('chk9').checked = tf;
    document.getElementById('chk10').checked = tf;
    document.getElementById('chk11').checked = tf;
    document.getElementById('chk12').checked = tf;
    document.getElementById('chk13').checked = tf;
    document.getElementById('chk14').checked = tf;
    document.getElementById('chk15').checked = tf;
    document.getElementById('chk16').checked = tf;
    document.getElementById('chk17').checked = tf;
    document.getElementById('chk18').checked = tf;
    document.getElementById('chk19').checked = tf;
    document.getElementById('chk20').checked = tf;
    document.getElementById('chkSP').checked = tf;
    document.getElementById('chkLT').checked = tf;
    document.getElementById('chkEcl').checked = tf;
    document.getElementById('chkUsa').checked = tf;
    document.getElementById('chkPe').checked = tf;
    document.getElementById('chkRid').checked = tf;
    document.getElementById('chkCS1').checked = tf;
    document.getElementById('chkCS2').checked = tf;
    document.getElementById('chkCS3').checked = tf;
    document.getElementById('chkCS4').checked = tf;
    document.getElementById('chkCS5').checked = tf;
    document.getElementById('chkCS6').checked = tf;
    document.getElementById('chkCS7').checked = tf;
    document.getElementById('chkCS8').checked = tf;
    document.getElementById('chkCS9').checked = tf;
    document.getElementById('chkCS10').checked = tf;
    document.getElementById('chkCS11').checked = tf;
    document.getElementById('chkCS12').checked = tf;
    document.getElementById('chkCS13').checked = tf;
    document.getElementById('chkCS14').checked = tf;
    document.getElementById('chkCSBest').checked = tf;
    document.getElementById('chkPMP').checked = tf;
    document.getElementById('chkPMP2').checked = tf;
    document.getElementById('chkee').checked = tf;
    document.getElementById('chkee2').checked = tf;
    document.getElementById('chkHanken').checked = tf;
    document.getElementById('chkHankenRid').checked = tf;

    chg();
};
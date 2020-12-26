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
                        return ~['LT', 'écl', 'うさ', 'pe', '解', '版権', '解版'].indexOf(p.version) ? p.genre : `${p.genre},${p.song}`;
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

    const [isChecked_HYPER, isChecked_EX] = 
          ['chkHYPER', 'chkEX'].map(i => document.getElementById(i).checked);

    const [isChecked_General, isChecked_UPPER, isChecked_Ura] =
          ['chkGeneral', 'chkUPPER', 'chkUra'].map(i => document.getElementById(i).checked);

    const [isChecked_1, isChecked_2, isChecked_3, isChecked_4, isChecked_5, isChecked_6, isChecked_7, isChecked_8, isChecked_9, isChecked_10,
           isChecked_11, isChecked_12, isChecked_13, isChecked_14, isChecked_15, isChecked_16, isChecked_17, isChecked_18, isChecked_19, isChecked_20,
           isChecked_SP, isChecked_LT, isChecked_Ecl, isChecked_Usa, isChecked_Pe, isChecked_Rid,
           isChecked_CS1, isChecked_CS2, isChecked_CS3, isChecked_CS4, isChecked_CS5, isChecked_CS6, isChecked_CS7, isChecked_CS8, isChecked_CS9, isChecked_CS10,
           isChecked_CS11, isChecked_CS12, isChecked_CS13, isChecked_CS14, isChecked_CSBest, isChecked_PMP, isChecked_PMP2,
           isChecked_ee, isChecked_ee2, isChecked_Hanken, isChecked_HankenRid] = 
           ['chk1', 'chk2', 'chk3', 'chk4', 'chk5', 'chk6', 'chk7', 'chk8', 'chk9', 'chk10',
            'chk11', 'chk12', 'chk13', 'chk14', 'chk15', 'chk16', 'chk17', 'chk18', 'chk19', 'chk20',
            'chkSP', 'chkLT', 'chkEcl', 'chkUsa', 'chkPe', 'chkRid',
            'chkCS1', 'chkCS2', 'chkCS3', 'chkCS4', 'chkCS5', 'chkCS6', 'chkCS7', 'chkCS8', 'chkCS9', 'chkCS10',
            'chkCS11', 'chkCS12', 'chkCS13', 'chkCS14', 'chkCSBest', 'chkPMP', 'chkPMP2',
            'chkee', 'chkee2', 'chkHanken', 'chkHankenRid'].map(i => document.getElementById(i).checked);
        
    if((isChecked_HYPER || isChecked_EX)
    && (isChecked_General || isChecked_UPPER || isChecked_Ura)
    && (isChecked_1  || isChecked_2  || isChecked_3  || isChecked_4  || isChecked_5  || isChecked_6  || isChecked_7  || isChecked_8  || isChecked_9  || isChecked_10
     || isChecked_11 || isChecked_12 || isChecked_13 || isChecked_14 || isChecked_15 || isChecked_16 || isChecked_17 || isChecked_18 || isChecked_19 || isChecked_20
     || isChecked_SP || isChecked_LT || isChecked_Ecl || isChecked_Usa || isChecked_Pe || isChecked_Rid
     || isChecked_CS1  || isChecked_CS2  || isChecked_CS3  || isChecked_CS4  || isChecked_CS5 || isChecked_CS6 || isChecked_CS7 || isChecked_CS8 || isChecked_CS9 || isChecked_CS10
     || isChecked_CS11 || isChecked_CS12 || isChecked_CS13 || isChecked_CS14 || isChecked_CSBest || isChecked_PMP || isChecked_PMP2
     || isChecked_ee || isChecked_ee2 || isChecked_Hanken || isChecked_HankenRid)){

        const getVisibleSongs = (isChecked_HYPER && isChecked_EX && isChecked_General && isChecked_UPPER && isChecked_Ura) ? i => true
                              : (isChecked_HYPER && isChecked_EX && isChecked_General && isChecked_UPPER)                  ? i => (i.difficulty === 'HYPER' || i.difficulty === 'EX') && !i.isUra
                              : (isChecked_HYPER && isChecked_EX && isChecked_General && isChecked_Ura)                    ? i => (i.difficulty === 'HYPER' || i.difficulty === 'EX') && !i.isUPPER 
                              : (isChecked_HYPER && isChecked_EX && isChecked_UPPER   && isChecked_Ura)                    ? i => (i.difficulty === 'HYPER' || i.difficulty === 'EX') && (i.isUPPER || i.isUra) 
                              : (isChecked_HYPER && isChecked_EX && isChecked_General)                                     ? i => (i.difficulty === 'HYPER' || i.difficulty === 'EX') && !i.isUPPER && !i.isUra 
                              : (isChecked_HYPER && isChecked_EX && isChecked_UPPER)                                       ? i => (i.difficulty === 'HYPER' || i.difficulty === 'EX') && i.isUPPER  && !i.isUra
                              : (isChecked_HYPER && isChecked_EX && isChecked_Ura)                                         ? i => (i.difficulty === 'HYPER' || i.difficulty === 'EX') && !i.isUPPER && i.isUra

                              : (isChecked_HYPER && isChecked_General && isChecked_UPPER && isChecked_Ura) ? i => i.difficulty === 'HYPER'
                              : (isChecked_HYPER && isChecked_General && isChecked_UPPER)                  ? i => i.difficulty === 'HYPER' && !i.isUra
                              : (isChecked_HYPER && isChecked_General && isChecked_Ura)                    ? i => i.difficulty === 'HYPER' && !i.isUPPER 
                              : (isChecked_HYPER && isChecked_UPPER   && isChecked_Ura)                    ? i => i.difficulty === 'HYPER' && (i.isUPPER || i.isUra) 
                              : (isChecked_HYPER && isChecked_General)                                     ? i => i.difficulty === 'HYPER' && !i.isUPPER && !i.isUra 
                              : (isChecked_HYPER && isChecked_UPPER)                                       ? i => i.difficulty === 'HYPER' && i.isUPPER  && !i.isUra
                              : (isChecked_HYPER && isChecked_Ura)                                         ? i => i.difficulty === 'HYPER' && !i.isUPPER && i.isUra

                              : (isChecked_EX && isChecked_General && isChecked_UPPER && isChecked_Ura) ? i => i.difficulty === 'EX'
                              : (isChecked_EX && isChecked_General && isChecked_UPPER)                  ? i => i.difficulty === 'EX' && !i.isUra
                              : (isChecked_EX && isChecked_General && isChecked_Ura)                    ? i => i.difficulty === 'EX' && !i.isUPPER 
                              : (isChecked_EX && isChecked_UPPER   && isChecked_Ura)                    ? i => i.difficulty === 'EX' && (i.isUPPER || i.isUra) 
                              : (isChecked_EX && isChecked_General)                                     ? i => i.difficulty === 'EX' && !i.isUPPER && !i.isUra 
                              : (isChecked_EX && isChecked_UPPER)                                       ? i => i.difficulty === 'EX' && i.isUPPER  && !i.isUra
                              : (isChecked_EX && isChecked_Ura)                                         ? i => i.difficulty === 'EX' && !i.isUPPER && i.isUra
                              
                              : i => false;

        //console.log(getVisibleSongs);

        const checkedVers = [];
        if(isChecked_1        )  checkedVers.push('1');
        if(isChecked_2        )  checkedVers.push('2');
        if(isChecked_3        )  checkedVers.push('3');
        if(isChecked_4        )  checkedVers.push('4');
        if(isChecked_5        )  checkedVers.push('5');
        if(isChecked_6        )  checkedVers.push('6');
        if(isChecked_7        )  checkedVers.push('7');
        if(isChecked_8        )  checkedVers.push('8');
        if(isChecked_9        )  checkedVers.push('9');
        if(isChecked_10       )  checkedVers.push('10');
        if(isChecked_11       )  checkedVers.push('11');
        if(isChecked_12       )  checkedVers.push('12');
        if(isChecked_13       )  checkedVers.push('13');
        if(isChecked_14       )  checkedVers.push('14');
        if(isChecked_15       )  checkedVers.push('15');
        if(isChecked_16       )  checkedVers.push('16');
        if(isChecked_17       )  checkedVers.push('17');
        if(isChecked_18       )  checkedVers.push('18');
        if(isChecked_19       )  checkedVers.push('19');
        if(isChecked_20       )  checkedVers.push('20');
        if(isChecked_SP       )  checkedVers.push('SP');
        if(isChecked_LT       )  checkedVers.push('LT');
        if(isChecked_Ecl      )  checkedVers.push('écl');
        if(isChecked_Usa      )  checkedVers.push('うさ');
        if(isChecked_Pe       )  checkedVers.push('pe');
        if(isChecked_Rid      )  checkedVers.push('解');
        if(isChecked_CS1      )  checkedVers.push('CS1');
        if(isChecked_CS2      )  checkedVers.push('CS2');
        if(isChecked_CS3      )  checkedVers.push('CS3');
        if(isChecked_CS4      )  checkedVers.push('CS4');
        if(isChecked_CS5      )  checkedVers.push('CS5');
        if(isChecked_CS6      )  checkedVers.push('CS6');
        if(isChecked_CS7      )  checkedVers.push('CS7');
        if(isChecked_CS8      )  checkedVers.push('CS8');
        if(isChecked_CS9      )  checkedVers.push('CS9');
        if(isChecked_CS10     )  checkedVers.push('CS10');
        if(isChecked_CS11     )  checkedVers.push('CS11');
        if(isChecked_CS12     )  checkedVers.push('CS12');
        if(isChecked_CS13     )  checkedVers.push('CS13');
        if(isChecked_CS14     )  checkedVers.push('CS14');
        if(isChecked_CSBest   )  checkedVers.push('CSBest');
        if(isChecked_PMP      )  checkedVers.push('PMP');
        if(isChecked_PMP2     )  checkedVers.push('PMP2');
        if(isChecked_ee       )  checkedVers.push('ee');
        if(isChecked_ee2      )  checkedVers.push('ee2');
        if(isChecked_Hanken   )  checkedVers.push('版権');
        if(isChecked_HankenRid)  checkedVers.push('解版');

        //console.log(checkedVers);

        all.forEach(arr =>
            arr.filter(getVisibleSongs)
            .forEach(item => item.isVisible = ~checkedVers.indexOf(item.version) ? true : false)
        );
    }

    all.forEach((arr, index) => 
        myScatterChart.data.datasets[index].data = arr.filter(i => i.isVisible)
    );
    
    myScatterChart.update();
};

const allCheck = (tf) => {
    document.getElementsByName('chkVer').forEach(i => i.checked = tf);
    chg();
};
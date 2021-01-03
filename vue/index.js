const app = new Vue({
  el: '#app'
  ,data: {
      arr: data
      ,display: 'all'
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

      return this.arr.filter((i) => i.isVisible);
    }
  },
  methods: {
    sortBy: function(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },
    sortedClass: function(key) {
      return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc'}` : '';
    },
    setDisplay: function(key){
      this.display = key;
    }
  }
});

const chg = () => {
  data.forEach(item => item.isVisible = false);

  const [isChecked_HYPER, isChecked_EX] = 
        ['chkHYPER', 'chkEX'].map(i => document.getElementById(i).checked);

  const [isChecked_General, isChecked_UPPER, isChecked_Ura] =
        ['chkGeneral', 'chkUPPER', 'chkUra'].map(i => document.getElementById(i).checked);

  const [isChecked_lv42, isChecked_lv43, isChecked_lv44, isChecked_lv45, isChecked_lv46, isChecked_lv47, isChecked_lv48, isChecked_lv49, isChecked_lv50] = 
        ['chkLv42', 'chkLv43', 'chkLv44', 'chkLv45', 'chkLv46', 'chkLv47', 'chkLv48', 'chkLv49', 'chkLv50'].map(i => document.getElementById(i).checked);

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
  && (isChecked_lv42 || isChecked_lv43 || isChecked_lv44 || isChecked_lv45 || isChecked_lv46 || isChecked_lv47 || isChecked_lv48 || isChecked_lv49 || isChecked_lv50)
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

      const checkedLvs = [];
      if(isChecked_lv42)  checkedLvs.push(42);
      if(isChecked_lv43)  checkedLvs.push(43);
      if(isChecked_lv44)  checkedLvs.push(44);
      if(isChecked_lv45)  checkedLvs.push(45);
      if(isChecked_lv46)  checkedLvs.push(46);
      if(isChecked_lv47)  checkedLvs.push(47);
      if(isChecked_lv48)  checkedLvs.push(48);
      if(isChecked_lv49)  checkedLvs.push(49);
      if(isChecked_lv50)  checkedLvs.push(50);
      
      data.filter(item => item.isVisible)
      .forEach(item => item.isVisible = ~checkedLvs.indexOf(item.lv) ? true : false);

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

      data.filter(getVisibleSongs)
      .forEach(item => item.isVisible = (~checkedLvs.indexOf(item.lv) && ~checkedVers.indexOf(item.version)) ? true : false);
  }
};

const chgDisp = () => {
  const [isChecked_DispGenre, isChecked_DispSong, isChecked_DispAll] = 
    ['rdbDispGenre', 'rdbDispSong', 'rdbDispAll'].map(i => document.getElementById(i).checked);

  app.setDisplay(isChecked_DispGenre ? 'genre'
               : isChecked_DispSong ? 'song'
               : isChecked_DispAll ? 'all'
               : ''); 
};

const allCheck = (name, tf) => {
  document.getElementsByName(name).forEach(i => i.checked = tf);
  chg();
};
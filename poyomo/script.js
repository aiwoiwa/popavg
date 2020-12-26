$(function(){
	//consts
	const DEF_ORDER = ['l1','l2','l3','l4','l5','l6','l7','l8','l9'];
	
	const MIR_ORDER = ['l9','l8','l7','l6','l5','l4','l3','l2','l1'];
	const CRO_ORDER = ['l2','l1','l4','l3','l5','l7','l6','l9','l8'];
	const CROMIR_ORDER = ['l8','l9','l6','l7','l5','l3','l4','l1','l2'];
	const RRAN_ORDERS = [
		//['l1','l2','l3','l4','l5','l6','l7','l8','l9'],
		['l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l1'],
		['l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l1', 'l2'],
		['l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l1', 'l2', 'l3'],
		['l5', 'l6', 'l7', 'l8', 'l9', 'l1', 'l2', 'l3', 'l4'],
		['l6', 'l7', 'l8', 'l9', 'l1', 'l2', 'l3', 'l4', 'l5'],
		['l7', 'l8', 'l9', 'l1', 'l2', 'l3', 'l4', 'l5', 'l6'],
		['l8', 'l9', 'l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7'],
		['l9', 'l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8'],
		//['l9','l8','l7','l6','l5','l4','l3','l2','l1'],
		['l8', 'l7', 'l6', 'l5', 'l4', 'l3', 'l2', 'l1', 'l9'],
		['l7', 'l6', 'l5', 'l4', 'l3', 'l2', 'l1', 'l9', 'l8'],
		['l6', 'l5', 'l4', 'l3', 'l2', 'l1', 'l9', 'l8', 'l7'],
		['l5', 'l4', 'l3', 'l2', 'l1', 'l9', 'l8', 'l7', 'l6'],
		['l4', 'l3', 'l2', 'l1', 'l9', 'l8', 'l7', 'l6', 'l5'],
		['l3', 'l2', 'l1', 'l9', 'l8', 'l7', 'l6', 'l5', 'l4'],
		['l2', 'l1', 'l9', 'l8', 'l7', 'l6', 'l5', 'l4', 'l3'],
		['l1', 'l9', 'l8', 'l7', 'l6', 'l5', 'l4', 'l3', 'l2']
	];

	const IS_NOT_PROCESSED = 'is_not_processed';

	//CNの始点, 中継, 終点
	const FIRST = 'first';
	const MIDDLE = 'middle';
	const LAST = 'last';

	const WHITE = ['l1','l9'];
	const YELLOW = ['l2','l8'];
	const GREEN = ['l3','l7'];
	const BLUE = ['l4','l6'];
	const RED = ['l5'];

	const PATH_IMG_W = './../img/popn/w.png';
	const PATH_IMG_Y = './../img/popn/y.png';
	const PATH_IMG_G = './../img/popn/g.png';
	const PATH_IMG_B = './../img/popn/b.png';
	const PATH_IMG_R = './../img/popn/r.png';
	const PATH_IMG_LW = './../img/beat/lw.gif';
	const PATH_IMG_LY = './../img/beat/lb.gif';
	const PATH_IMG_LG = './../img/beat/lw.gif';
	const PATH_IMG_LB = './../img/beat/lb.gif';
	const PATH_IMG_LR = './../img/beat/lw.gif';

	const getRndOrder = () => {
	    let arr = [...DEF_ORDER];
	    for(let i = 0; i < arr.length; i++){
			const l = Math.floor(Math.random() * arr.length);

			if (i === l)
			    continue;

			const tmp = arr[i];
			arr[i] = arr[l];
			arr[l] = tmp;
		}
		return arr;
	};

	const getRRndOrder = () => {
	    const nowOrder = getArrByTxtOrder();
	    const arr = RRAN_ORDERS.filter(i => i.toString() !== nowOrder.toString());
	    return arr[Math.floor(Math.random() * arr.length)];
	};

	const getRndCombination = len => getRndOrder().slice(0, len);
	
	const getRndLane = () => `l${Math.floor(Math.random() * DEF_ORDER.length) + 1}`;

	const getImgSrc = (lnum, cnType) => {
		if(WHITE.indexOf(lnum) >= 0){
			return cnType === MIDDLE ? PATH_IMG_LW : PATH_IMG_W;
		}else if(YELLOW.indexOf(lnum) >= 0){
			return cnType === MIDDLE ? PATH_IMG_LY : PATH_IMG_Y;
		}else if(GREEN.indexOf(lnum) >= 0){
			return cnType === MIDDLE ? PATH_IMG_LG : PATH_IMG_G;
		}else if(BLUE.indexOf(lnum) >= 0){
			return cnType === MIDDLE ? PATH_IMG_LB : PATH_IMG_B;
		}else if(RED.indexOf(lnum) >= 0){
			return cnType === MIDDLE ? PATH_IMG_LR : PATH_IMG_R;
		}else{
			return null;
		}
	};

	const setNoteImg = () => {
	    for(const l of DEF_ORDER) {
	        $(`.${l}`).each(function () {
	            if ($(this).hasClass(FIRST)) {
	                $(this).attr('src', getImgSrc(l, FIRST));
	            } else if ($(this).hasClass(MIDDLE)) {
	                $(this).attr('src', getImgSrc(l, MIDDLE));
	            } else if ($(this).hasClass(LAST)) {
	                $(this).attr('src', getImgSrc(l, LAST));
	            } else {
	                $(this).attr('src', getImgSrc(l));
	            }
	        });
	    }
	};

	const swapLane = (newOrder) => {
	    $('.note').addClass(IS_NOT_PROCESSED);
	    for (const target of DEF_ORDER) {
	        const destination = `l${newOrder.indexOf(target) + 1}`;
	        notes = $(`[data-def-lane='${target}']`);
	        notes.each((index, element) => {
	            if($(element).hasClass(IS_NOT_PROCESSED)){
	                $(element)
                    .removeClass((index, className) => {
                        matchClass = (className.match(/l[1-9]{1}/) || []).join(' ');
                        return matchClass;
                    })
                    .addClass(destination)
                    .removeClass(IS_NOT_PROCESSED);
	            }
	        });
        }
	};

	const setSortable = order => {
	    order = order.map(i => `#${i}`);
		$(order[0])
        .after(
            $(order[1]),
            $(order[2]),
            $(order[3]),
            $(order[4]),
            $(order[5]),
            $(order[6]),
            $(order[7]),
            $(order[8])
        );
	};

    //文字列の長さが9である
    //1から9までの数値で構成されている
    //1から9までの数値に重複がない
    //ok: 123456789, 918273645
    //ng: 112345678, 123451234
	const isCorrectFormat = str => {
	    if (!/^[1-9]{9}$/.test(str))
	        return false;

	    let regs = [...Array(9).keys()].map(i => new RegExp(`${++i}`, 'g'));
	    return regs.every(reg => str.match(reg) !== null
                              && str.match(reg).length === 1);
	};

    //['l1','l2','l3','l4','l5','l6','l7','l8','l9']
    //→['1','2','3','4','5','6','7','8','9']
    //→'123456789'
	const getStrForTxtOrder = arr => arr.map(i => i.slice(1)).join('');
    
	const getArrByTxtOrder = () => $('#txtOrder').val().split('').map(i => `l${i}`)

	const func_swap = newOrder =>{
		swapLane(newOrder);
		$('#txtOrder').val(getStrForTxtOrder(newOrder));
		setSortable(newOrder);
		setNoteImg();
	};

	const func_sran = () =>{
	    //S-RANDOM
        //同時押し
	    $('.combination')
        .each((index, element) => {
	        const notes = $(element).find('.note');
	        const lanes = getRndCombination(notes.length);

	        notes.removeClass((index, className) => {
	            matchClass = (className.match(/l[1-9]{1}/) || []).join(' ');
	            return matchClass;
	        }).each((index, element) => {
	            $(element).addClass(lanes[index]);
	        });
	    });

        //同時押し以外
	    $('.bar-note > .note')
        .removeClass((index, className) => {
	        matchClass = (className.match(/l[1-9]{1}/) || []).join(' ');
	        return matchClass;
	    }).each(function (index, element) {
	        $(element).addClass(getRndLane());
		});
		
		setNoteImg();
	};

    //initialize
	$('.note').each((index, element) => {
	    const l = $(element).data('def-lane');
	    $(element).addClass(l);
	});

	$('#txtOrder').val(getStrForTxtOrder(DEF_ORDER));

	setNoteImg();

    //ドラッグエリアをテキスト選択不可にする
	$('#sortable').disableSelection();

	//event handler
	$('#btn_d').on('click', () => func_swap(DEF_ORDER));
	$('#btn_m').on('click', () => func_swap(MIR_ORDER));
	$('#btn_r').on('click', () => func_swap(getRndOrder()));
	$('#btn_r-r').on('click', () => func_swap(getRRndOrder()));
	$('#btn_c').on('click', () => func_swap(CRO_ORDER));
	$('#btn_c-m').on('click', () => func_swap(CROMIR_ORDER));

	$('#btn_decide').on('click', () => {
	    if (isCorrectFormat($('#txtOrder').val())) {
	        func_swap(getArrByTxtOrder())
	    } else {
	        $('#txtOrder').val('err');
	    }
	});

	$('#btn_s-r').on('click', () => func_sran());

	$("#sortable").sortable({
	    update: function(){
	        const result = $(this).sortable("toArray");
	        $('#txtOrder').val(getStrForTxtOrder(result));
	        func_swap(result);
	    }
	});
});

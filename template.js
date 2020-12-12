let app = new Vue({
    el: '#app'
    ,data: {
        songs: [
            {
                "lv" : 50,
                "genre" : "25 o'clock the WORLD(EX)",
                "song" : "25 o'clock the WORLD",
                "pf_rate" : 0,
                "fc_rate" : 0.005952380952380952,
                "clear_rate" : 0.36904761904761907
            },
            {
                "lv" : 50,
                "genre" : "Chaos:Q(EX)",
                "song" : "Chaos:Q",
                "pf_rate" : 0,
                "fc_rate" : 0.005434782608695652,
                "clear_rate" : 0.2554347826086957
            },
            {
                "lv" : 50,
                "genre" : "L-an!ma(EX)",
                "song" : "L-an!ma",
                "pf_rate" : 0,
                "fc_rate" : 0.009900990099009901,
                "clear_rate" : 0.49504950495049505
            },
            {
                "lv" : 50,
                "genre" : "Popperz Chronicle(EX)",
                "song" : "Popperz Chronicle",
                "pf_rate" : 0,
                "fc_rate" : 0.005780346820809248,
                "clear_rate" : 0.43352601156069365
            },
            {
                "lv" : 50,
                "genre" : "Popperz Chronicle(UPPER)(EX)",
                "song" : "Popperz Chronicle",
                "pf_rate" : 0,
                "fc_rate" : 0.007194244604316547,
                "clear_rate" : 0.23741007194244604
            },
            {
                "lv" : 50,
                "genre" : "o†o(EX)",
                "song" : "o†o",
                "pf_rate" : 0,
                "fc_rate" : 0.004975124378109453,
                "clear_rate" : 0.21393034825870647
            },
            {
                "lv" : 50,
                "genre" : "perditus†paradisus(UPPER)(EX)",
                "song" : "perditus†paradisus",
                "pf_rate" : 0,
                "fc_rate" : 0.006289308176100629,
                "clear_rate" : 0.389937106918239
            },
            {
                "lv" : 50,
                "genre" : "НУМЛ(EX)",
                "song" : "НУМЛ",
                "pf_rate" : 0.004784688995215311,
                "fc_rate" : 0.019138755980861243,
                "clear_rate" : 0.6267942583732058
            },
            {
                "lv" : 50,
                "genre" : "ふること(UPPER)(EX)",
                "song" : "序",
                "pf_rate" : 0.0051813471502590676,
                "fc_rate" : 0.025906735751295335,
                "clear_rate" : 0.5958549222797928
            },
            {
                "lv" : 50,
                "genre" : "インボルク(UPPER)(EX)",
                "song" : "生命の焔纏いて",
                "pf_rate" : 0.011627906976744186,
                "fc_rate" : 0.011627906976744186,
                "clear_rate" : 0.5116279069767442
            },
            {
                "lv" : 50,
                "genre" : "エンジェリオン(EX)",
                "song" : "生命の環を紡いで",
                "pf_rate" : 0.017777777777777778,
                "fc_rate" : 0.08444444444444445,
                "clear_rate" : 0.7288888888888889
            },
            {
                "lv" : 50,
                "genre" : "カウボーイ(EX)",
                "song" : "Blue River",
                "pf_rate" : 0.005025125628140704,
                "fc_rate" : 0.05025125628140704,
                "clear_rate" : 0.7638190954773869
            },
            {
                "lv" : 50,
                "genre" : "カウボーイ(UPPER)(EX)",
                "song" : "Blue River",
                "pf_rate" : 0.006711409395973154,
                "fc_rate" : 0.053691275167785234,
                "clear_rate" : 0.7718120805369127
            },
            {
                "lv" : 50,
                "genre" : "コアダストビート(UPPER)(EX)",
                "song" : "真超深ＴＩＯＮ",
                "pf_rate" : 0,
                "fc_rate" : 0.015706806282722512,
                "clear_rate" : 0.5602094240837696
            },
            {
                "lv" : 50,
                "genre" : "サイレント(EX)",
                "song" : "音楽",
                "pf_rate" : 0,
                "fc_rate" : 0.004761904761904762,
                "clear_rate" : 0.38571428571428573
            },
            {
                "lv" : 50,
                "genre" : "ダージュ(EX)",
                "song" : "ピアノ協奏曲第１番”蠍火”",
                "pf_rate" : 0,
                "fc_rate" : 0.0047169811320754715,
                "clear_rate" : 0.4056603773584906
            },
            {
                "lv" : 50,
                "genre" : "トイコンテンポラリー(EX)",
                "song" : "シュレーディンガーの猫",
                "pf_rate" : 0,
                "fc_rate" : 0.0091324200913242,
                "clear_rate" : 0.6621004566210046
            },
            {
                "lv" : 50,
                "genre" : "ムラクモ(EX)",
                "song" : "少年は空を辿る",
                "pf_rate" : 0,
                "fc_rate" : 0.009389671361502348,
                "clear_rate" : 0.5633802816901409
            },
            {
                "lv" : 50,
                "genre" : "辿る君を超えて(EX)",
                "song" : "辿る君を超えて",
                "pf_rate" : 0.005076142131979695,
                "fc_rate" : 0.005076142131979695,
                "clear_rate" : 0.48223350253807107
            },
            {
                "lv" : 49,
                "genre" : "24/7 Popperz(EX)",
                "song" : "24/7 Popperz",
                "pf_rate" : 0.01818181818181818,
                "fc_rate" : 0.045454545454545456,
                "clear_rate" : 0.65
            },
            {
                "lv" : 49,
                "genre" : "BabeL ～MODEL DD101～(EX)",
                "song" : "BabeL ～MODEL DD101～",
                "pf_rate" : 0.009900990099009901,
                "fc_rate" : 0.0297029702970297,
                "clear_rate" : 0.6435643564356436
            },
            {
                "lv" : 49,
                "genre" : "Black Emperor(EX)",
                "song" : "Black Emperor",
                "pf_rate" : 0.02304147465437788,
                "fc_rate" : 0.08294930875576037,
                "clear_rate" : 0.9585253456221198
            },
            {
                "lv" : 49,
                "genre" : "C18H27NO3(EX)",
                "song" : "C18H27NO3",
                "pf_rate" : 0.07048458149779736,
                "fc_rate" : 0.13215859030837004,
                "clear_rate" : 0.8854625550660793
            },
            {
                "lv" : 49,
                "genre" : "CHERNOBOG(EX)",
                "song" : "CHERNOBOG",
                "pf_rate" : 0.0044444444444444444,
                "fc_rate" : 0.035555555555555556,
                "clear_rate" : 0.9466666666666667
            },
            {
                "lv" : 49,
                "genre" : "DIAVOLO(EX)",
                "song" : "DIAVOLO",
                "pf_rate" : 0.004347826086956522,
                "fc_rate" : 0.0391304347826087,
                "clear_rate" : 0.8347826086956521
            },
            {
                "lv" : 49,
                "genre" : "Festum Duodecimum!(EX)",
                "song" : "Festum Duodecimum!",
                "pf_rate" : 0.01951219512195122,
                "fc_rate" : 0.07317073170731707,
                "clear_rate" : 0.8731707317073171
            },
            {
                "lv" : 49,
                "genre" : "INF-B《L-aste-R》(EX)",
                "song" : "INF-B《L-aste-R》",
                "pf_rate" : 0.023148148148148147,
                "fc_rate" : 0.08333333333333333,
                "clear_rate" : 0.8888888888888888
            },
            {
                "lv" : 49,
                "genre" : "Innocence(EX)",
                "song" : "Innocence",
                "pf_rate" : 0.017699115044247787,
                "fc_rate" : 0.10176991150442478,
                "clear_rate" : 0.911504424778761
            },
            {
                "lv" : 49,
                "genre" : "K∀MUY(EX)",
                "song" : "K∀MUY",
                "pf_rate" : 0.009009009009009009,
                "fc_rate" : 0.013513513513513514,
                "clear_rate" : 0.7747747747747747
            },
            {
                "lv" : 49,
                "genre" : "MADSPEED狂信道(UPPER)(EX)",
                "song" : "MADSPEED狂信道",
                "pf_rate" : 0.01744186046511628,
                "fc_rate" : 0.040697674418604654,
                "clear_rate" : 0.6744186046511628
            },
            {
                "lv" : 49,
                "genre" : "Prey(EX)",
                "song" : "Prey",
                "pf_rate" : 0.04524886877828054,
                "fc_rate" : 0.20361990950226244,
                "clear_rate" : 0.9592760180995475
            },
            {
                "lv" : 49,
                "genre" : "QuoN(EX)",
                "song" : "QuoN",
                "pf_rate" : 0.06896551724137931,
                "fc_rate" : 0.21982758620689655,
                "clear_rate" : 0.9439655172413793
            },
            {
                "lv" : 49,
                "genre" : "RINИE(EX)",
                "song" : "RINИE",
                "pf_rate" : 0.025974025974025976,
                "fc_rate" : 0.09956709956709957,
                "clear_rate" : 0.8787878787878788
            },
            {
                "lv" : 49,
                "genre" : "SailRen(EX)",
                "song" : "SailRen",
                "pf_rate" : 0.043478260869565216,
                "fc_rate" : 0.21739130434782608,
                "clear_rate" : 0.9565217391304348
            },
            {
                "lv" : 49,
                "genre" : "Sky High(EX)",
                "song" : "Sky High",
                "pf_rate" : 0.08370044052863436,
                "fc_rate" : 0.23348017621145375,
                "clear_rate" : 0.9647577092511013
            },
            {
                "lv" : 49,
                "genre" : "StrayedCatz(EX)",
                "song" : "StrayedCatz",
                "pf_rate" : 0.008928571428571428,
                "fc_rate" : 0.049107142857142856,
                "clear_rate" : 0.8973214285714286
            },
            {
                "lv" : 49,
                "genre" : "Timepiece phase II(EX)",
                "song" : "Timepiece phase II",
                "pf_rate" : 0.10666666666666667,
                "fc_rate" : 0.24888888888888888,
                "clear_rate" : 0.96
            },
            {
                "lv" : 49,
                "genre" : "Triple Counter(EX)",
                "song" : "Triple Counter",
                "pf_rate" : 0.031818181818181815,
                "fc_rate" : 0.12727272727272726,
                "clear_rate" : 0.8727272727272727
            },
            {
                "lv" : 49,
                "genre" : "Vinculum stellarum(EX)",
                "song" : "Vinculum stellarum",
                "pf_rate" : 0.019138755980861243,
                "fc_rate" : 0.06220095693779904,
                "clear_rate" : 0.9138755980861244
            },
            {
                "lv" : 49,
                "genre" : "XROSS INFECTION(EX)",
                "song" : "XROSS INFECTION",
                "pf_rate" : 0.03167420814479638,
                "fc_rate" : 0.06787330316742081,
                "clear_rate" : 0.9230769230769231
            },
            {
                "lv" : 49,
                "genre" : "moon_child(EX)",
                "song" : "moon_child",
                "pf_rate" : 0.09691629955947137,
                "fc_rate" : 0.22466960352422907,
                "clear_rate" : 0.9251101321585903
            },
            {
                "lv" : 49,
                "genre" : "perditus†paradisus(EX)",
                "song" : "perditus†paradisus",
                "pf_rate" : 0.004424778761061947,
                "fc_rate" : 0.0752212389380531,
                "clear_rate" : 0.9070796460176991
            },
            {
                "lv" : 49,
                "genre" : "the Chameleon(EX)",
                "song" : "the Chameleon",
                "pf_rate" : 0.004524886877828055,
                "fc_rate" : 0.02262443438914027,
                "clear_rate" : 0.9592760180995475
            },
            {
                "lv" : 49,
                "genre" : "trideca(EX)",
                "song" : "trideca",
                "pf_rate" : 0.026785714285714284,
                "fc_rate" : 0.10714285714285714,
                "clear_rate" : 0.9553571428571429
            },
            {
                "lv" : 49,
                "genre" : "zeeros(EX)",
                "song" : "zeeros",
                "pf_rate" : 0.015463917525773196,
                "fc_rate" : 0.08762886597938144,
                "clear_rate" : 0.9123711340206185
            },
            {
                "lv" : 49,
                "genre" : "ΩVERSOUL(EX)",
                "song" : "ΩVERSOUL",
                "pf_rate" : 0.029850746268656716,
                "fc_rate" : 0.04477611940298507,
                "clear_rate" : 0.845771144278607
            },
            {
                "lv" : 49,
                "genre" : "アンセム(EX)",
                "song" : "天空の夜明け",
                "pf_rate" : 0.03862660944206009,
                "fc_rate" : 0.15879828326180256,
                "clear_rate" : 0.9527896995708155
            },
            {
                "lv" : 49,
                "genre" : "インボルク(EX)",
                "song" : "生命の焔纏いて",
                "pf_rate" : 0.11255411255411256,
                "fc_rate" : 0.24675324675324675,
                "clear_rate" : 0.9047619047619048
            },
            {
                "lv" : 49,
                "genre" : "オイパンク(EX)",
                "song" : "悲しいね",
                "pf_rate" : 0.008583690987124463,
                "fc_rate" : 0.04291845493562232,
                "clear_rate" : 0.9527896995708155
            },
            {
                "lv" : 49,
                "genre" : "オイパンク０(EX)",
                "song" : "ブタパンチのテーマ",
                "pf_rate" : 0.0043859649122807015,
                "fc_rate" : 0.10964912280701754,
                "clear_rate" : 0.9254385964912281
            },
            {
                "lv" : 49,
                "genre" : "カウボーイ(EX)",
                "song" : "Blue River",
                "pf_rate" : 0.008849557522123894,
                "fc_rate" : 0.16371681415929204,
                "clear_rate" : 0.8672566371681416
            },
            {
                "lv" : 49,
                "genre" : "クラシック１１(EX)",
                "song" : "想い出をありがとう",
                "pf_rate" : 0,
                "fc_rate" : 0.08450704225352113,
                "clear_rate" : 0.8826291079812206
            },
            {
                "lv" : 49,
                "genre" : "クラシック８(EX)",
                "song" : "Line Times",
                "pf_rate" : 0,
                "fc_rate" : 0,
                "clear_rate" : 0.5355450236966824
            },
            {
                "lv" : 49,
                "genre" : "クラシック９(EX)",
                "song" : "Hell? or Heaven?",
                "pf_rate" : 0.004651162790697674,
                "fc_rate" : 0.03255813953488372,
                "clear_rate" : 0.8372093023255814
            },
            {
                "lv" : 49,
                "genre" : "ジオメトリック∮ティーパーティー(EX)",
                "song" : "ジオメトリック∮ティーパーティー",
                "pf_rate" : 0.004484304932735426,
                "fc_rate" : 0.03587443946188341,
                "clear_rate" : 0.874439461883408
            },
            {
                "lv" : 49,
                "genre" : "ジャッジメント(EX)",
                "song" : "終末を追う者",
                "pf_rate" : 0.034782608695652174,
                "fc_rate" : 0.12608695652173912,
                "clear_rate" : 0.9347826086956522
            },
            {
                "lv" : 49,
                "genre" : "スクリーン(EX)",
                "song" : "GALAXY FOREST 11.6&12 ",
                "pf_rate" : 0,
                "fc_rate" : 0.01293103448275862,
                "clear_rate" : 0.9612068965517241
            },
            {
                "lv" : 49,
                "genre" : "スケールアウト(EX)",
                "song" : "BabeL ～Next Story～",
                "pf_rate" : 0.004464285714285714,
                "fc_rate" : 0.0625,
                "clear_rate" : 0.8214285714285714
            },
            {
                "lv" : 49,
                "genre" : "スペースレクイエム(EX)",
                "song" : "Zirkfied",
                "pf_rate" : 0.04017857142857143,
                "fc_rate" : 0.15625,
                "clear_rate" : 0.8571428571428571
            },
            {
                "lv" : 49,
                "genre" : "ゾディアックオラクル7(EX)",
                "song" : "アストライアの双皿",
                "pf_rate" : 0.008547008547008548,
                "fc_rate" : 0.08974358974358974,
                "clear_rate" : 0.9358974358974359
            },
            {
                "lv" : 49,
                "genre" : "ニエンテ(EX)",
                "song" : "neu",
                "pf_rate" : 0.008583690987124463,
                "fc_rate" : 0.07296137339055794,
                "clear_rate" : 0.8283261802575107
            },
            {
                "lv" : 49,
                "genre" : "ハードルネッサンス(EX)",
                "song" : "Elemental Creation",
                "pf_rate" : 0.06493506493506493,
                "fc_rate" : 0.24675324675324675,
                "clear_rate" : 0.9047619047619048
            },
            {
                "lv" : 49,
                "genre" : "ブラッドメタル(EX)",
                "song" : "IX",
                "pf_rate" : 0.06465517241379311,
                "fc_rate" : 0.21551724137931033,
                "clear_rate" : 0.9698275862068966
            },
            {
                "lv" : 49,
                "genre" : "プログレッシブバロック(EX)",
                "song" : "Ubertreffen",
                "pf_rate" : 0.039301310043668124,
                "fc_rate" : 0.12663755458515283,
                "clear_rate" : 0.9170305676855895
            },
            {
                "lv" : 49,
                "genre" : "ヘビーメタル(EX)",
                "song" : "I'm on Fire",
                "pf_rate" : 0,
                "fc_rate" : 0,
                "clear_rate" : 0.526829268292683
            },
            {
                "lv" : 49,
                "genre" : "メタリックオペラ(EX)",
                "song" : "Geiselhaus",
                "pf_rate" : 0.0044444444444444444,
                "fc_rate" : 0.04,
                "clear_rate" : 0.9511111111111111
            },
            {
                "lv" : 49,
                "genre" : "ラメント(UPPER)(EX)",
                "song" : "雫",
                "pf_rate" : 0.029556650246305417,
                "fc_rate" : 0.08374384236453201,
                "clear_rate" : 0.8275862068965517
            },
            {
                "lv" : 49,
                "genre" : "リナシタ(EX)",
                "song" : "uen",
                "pf_rate" : 0.004347826086956522,
                "fc_rate" : 0.013043478260869565,
                "clear_rate" : 0.7086956521739131
            },
            {
                "lv" : 49,
                "genre" : "ルイナススピリチュアル(EX)",
                "song" : "Remain",
                "pf_rate" : 0.034782608695652174,
                "fc_rate" : 0.1826086956521739,
                "clear_rate" : 0.9347826086956522
            },
            {
                "lv" : 49,
                "genre" : "ヴェラム(EX)",
                "song" : "Eine Haube ～聖地の果てにあるもの～",
                "pf_rate" : 0.029535864978902954,
                "fc_rate" : 0.15611814345991562,
                "clear_rate" : 0.9704641350210971
            },
            {
                "lv" : 49,
                "genre" : "恋歌疾風！かるたクイーンいろは(EX)",
                "song" : "恋歌疾風！かるたクイーンいろは",
                "pf_rate" : 0.10043668122270742,
                "fc_rate" : 0.26200873362445415,
                "clear_rate" : 0.9170305676855895
            },
            {
                "lv" : 49,
                "genre" : "最小三倍完全数(EX)",
                "song" : "最小三倍完全数",
                "pf_rate" : 0,
                "fc_rate" : 0.03286384976525822,
                "clear_rate" : 0.8544600938967136
            },
            {
                "lv" : 49,
                "genre" : "未完成ノ蒸氣驅動乙女(EX)",
                "song" : "未完成ノ蒸氣驅動乙女",
                "pf_rate" : 0.02252252252252252,
                "fc_rate" : 0.09009009009009009,
                "clear_rate" : 0.954954954954955
            },
            {
                "lv" : 49,
                "genre" : "激走！！ヤング☆ダンプ！(EX)",
                "song" : "激走！！ヤング☆ダンプ！",
                "pf_rate" : 0.03571428571428571,
                "fc_rate" : 0.08035714285714286,
                "clear_rate" : 0.7991071428571429
            },
            {
                "lv" : 49,
                "genre" : "西馬込交通曲(EX)",
                "song" : "西馬込交通曲",
                "pf_rate" : 0.009708737864077669,
                "fc_rate" : 0.043689320388349516,
                "clear_rate" : 0.6747572815533981
            },
            {
                "lv" : 49,
                "genre" : "限界食堂(EX)",
                "song" : "限界食堂",
                "pf_rate" : 0.09359605911330049,
                "fc_rate" : 0.2315270935960591,
                "clear_rate" : 0.8620689655172413
            },
            {
                "lv" : 48,
                "genre" : "ANNIVERSARY ∴∵∴ ←↓↑→(EX)",
                "song" : "ANNIVERSARY ∴∵∴ ←↓↑→",
                "pf_rate" : 0.1201923076923077,
                "fc_rate" : 0.35096153846153844,
                "clear_rate" : 0.9711538461538461
            },
            {
                "lv" : 48,
                "genre" : "Celsus Ⅱ(EX)",
                "song" : "Celsus Ⅱ",
                "pf_rate" : 0.2131979695431472,
                "fc_rate" : 0.3604060913705584,
                "clear_rate" : 0.9949238578680203
            },
            {
                "lv" : 48,
                "genre" : "Chronoxia(EX)",
                "song" : "Chronoxia",
                "pf_rate" : 0.11158798283261803,
                "fc_rate" : 0.2145922746781116,
                "clear_rate" : 0.9613733905579399
            },
            {
                "lv" : 48,
                "genre" : "Dracophobia(EX)",
                "song" : "Dracophobia",
                "pf_rate" : 0.04519774011299435,
                "fc_rate" : 0.1751412429378531,
                "clear_rate" : 0.9830508474576272
            },
            {
                "lv" : 48,
                "genre" : "Funky sonic World(EX)",
                "song" : "Funky sonic World",
                "pf_rate" : 0.11158798283261803,
                "fc_rate" : 0.2145922746781116,
                "clear_rate" : 0.9871244635193133
            },
            {
                "lv" : 48,
                "genre" : "GOLDEN CROSS(EX)",
                "song" : "GOLDEN CROSS",
                "pf_rate" : 0.14912280701754385,
                "fc_rate" : 0.2719298245614035,
                "clear_rate" : 0.9692982456140351
            },
            {
                "lv" : 48,
                "genre" : "Grand Chariot(EX)",
                "song" : "Grand Chariot",
                "pf_rate" : 0.07657657657657657,
                "fc_rate" : 0.19369369369369369,
                "clear_rate" : 0.963963963963964
            },
            {
                "lv" : 48,
                "genre" : "Idola(EX)",
                "song" : "Idola",
                "pf_rate" : 0.15289256198347106,
                "fc_rate" : 0.2975206611570248,
                "clear_rate" : 0.9628099173553719
            },
            {
                "lv" : 48,
                "genre" : "LEAD Gravity（M）(EX)",
                "song" : "LEAD Gravity（M）",
                "pf_rate" : 0.0044444444444444444,
                "fc_rate" : 0.035555555555555556,
                "clear_rate" : 0.9644444444444444
            },
            {
                "lv" : 48,
                "genre" : "La fame di Adria(EX)",
                "song" : "La fame di Adria",
                "pf_rate" : 0.046296296296296294,
                "fc_rate" : 0.14351851851851852,
                "clear_rate" : 0.9722222222222222
            },
            {
                "lv" : 48,
                "genre" : "Life is beautiful(EX)",
                "song" : "Life is beautiful",
                "pf_rate" : 0.051643192488262914,
                "fc_rate" : 0.2112676056338028,
                "clear_rate" : 0.9765258215962441
            },
            {
                "lv" : 48,
                "genre" : "MADSPEED狂信道(EX)",
                "song" : "MADSPEED狂信道",
                "pf_rate" : 0.041474654377880185,
                "fc_rate" : 0.1935483870967742,
                "clear_rate" : 0.9631336405529954
            },
            {
                "lv" : 48,
                "genre" : "Metamorphose(EX)",
                "song" : "Metamorphose",
                "pf_rate" : 0.04602510460251046,
                "fc_rate" : 0.18828451882845187,
                "clear_rate" : 0.9707112970711297
            },
            {
                "lv" : 48,
                "genre" : "Mirage Age(EX)",
                "song" : "Mirage Age",
                "pf_rate" : 0.11711711711711711,
                "fc_rate" : 0.2747747747747748,
                "clear_rate" : 0.9954954954954955
            },
            {
                "lv" : 48,
                "genre" : "PSGブレイクコア(EX)",
                "song" : "CHIP'N'RIDDIM",
                "pf_rate" : 0.05752212389380531,
                "fc_rate" : 0.1902654867256637,
                "clear_rate" : 0.9646017699115044
            },
            {
                "lv" : 48,
                "genre" : "Puberty Dysthymia(EX)",
                "song" : "Puberty Dysthymia",
                "pf_rate" : 0.07075471698113207,
                "fc_rate" : 0.1792452830188679,
                "clear_rate" : 1
            },
            {
                "lv" : 48,
                "genre" : "Russian Caravan Rhapsody(UPPER)(EX)",
                "song" : "Russian Caravan Rhapsody",
                "pf_rate" : 0.08421052631578947,
                "fc_rate" : 0.11578947368421053,
                "clear_rate" : 0.9263157894736842
            },
            {
                "lv" : 48,
                "genre" : "SYMPHONY FROM ZERO(EX)",
                "song" : "SYMPHONY FROM ZERO",
                "pf_rate" : 0.035555555555555556,
                "fc_rate" : 0.12,
                "clear_rate" : 0.9644444444444444
            },
            {
                "lv" : 48,
                "genre" : "Trixxxter(EX)",
                "song" : "Trixxxter",
                "pf_rate" : 0.027522935779816515,
                "fc_rate" : 0.13761467889908258,
                "clear_rate" : 0.9541284403669725
            },
            {
                "lv" : 48,
                "genre" : "Warriors Aboot(EX)",
                "song" : "Warriors Aboot",
                "pf_rate" : 0.10407239819004525,
                "fc_rate" : 0.27149321266968324,
                "clear_rate" : 0.9773755656108597
            },
            {
                "lv" : 48,
                "genre" : "ZADAMGA(EX)",
                "song" : "ZADAMGA",
                "pf_rate" : 0.05150214592274678,
                "fc_rate" : 0.21888412017167383,
                "clear_rate" : 0.9527896995708155
            },
            {
                "lv" : 48,
                "genre" : "asteer(EX)",
                "song" : "asteer",
                "pf_rate" : 0.04035874439461883,
                "fc_rate" : 0.18834080717488788,
                "clear_rate" : 0.9955156950672646
            },
            {
                "lv" : 48,
                "genre" : "forever under construction(EX)",
                "song" : "forever under construction",
                "pf_rate" : 0.1643192488262911,
                "fc_rate" : 0.29107981220657275,
                "clear_rate" : 0.9906103286384976
            },
            {
                "lv" : 48,
                "genre" : "good night , mommy(EX)",
                "song" : "good night , mommy",
                "pf_rate" : 0.13716814159292035,
                "fc_rate" : 0.28761061946902655,
                "clear_rate" : 0.9734513274336283
            },
            {
                "lv" : 48,
                "genre" : "nostos(UPPER)(EX)",
                "song" : "nostos",
                "pf_rate" : 0.03664921465968586,
                "fc_rate" : 0.09424083769633508,
                "clear_rate" : 0.9633507853403142
            },
            {
                "lv" : 48,
                "genre" : "saQrifice(EX)",
                "song" : "saQrifice",
                "pf_rate" : 0.12558139534883722,
                "fc_rate" : 0.32558139534883723,
                "clear_rate" : 1
            },
            {
                "lv" : 48,
                "genre" : "voltississimo(EX)",
                "song" : "voltississimo",
                "pf_rate" : 0.04090909090909091,
                "fc_rate" : 0.09545454545454546,
                "clear_rate" : 0.9409090909090909
            },
            {
                "lv" : 48,
                "genre" : "たまごの物理科学的 及び調理特性に関しての調査、そしてその考察(EX)",
                "song" : "たまごの物理科学的 及び調理特性に関しての調査、そしてその考察",
                "pf_rate" : 0.1559633027522936,
                "fc_rate" : 0.3165137614678899,
                "clear_rate" : 0.9770642201834863
            },
            {
                "lv" : 48,
                "genre" : "ふること(EX)",
                "song" : "序",
                "pf_rate" : 0.07327586206896551,
                "fc_rate" : 0.2025862068965517,
                "clear_rate" : 0.978448275862069
            },
            {
                "lv" : 48,
                "genre" : "アートコア(EX)",
                "song" : "Valanga",
                "pf_rate" : 0.18828451882845187,
                "fc_rate" : 0.35564853556485354,
                "clear_rate" : 0.9748953974895398
            },
            {
                "lv" : 48,
                "genre" : "エッセンシャリー(EX)",
                "song" : "True Blue",
                "pf_rate" : 0.26666666666666666,
                "fc_rate" : 0.49583333333333335,
                "clear_rate" : 0.975
            },
            {
                "lv" : 48,
                "genre" : "エピックプログレ(EX)",
                "song" : "量子の海のリントヴルム",
                "pf_rate" : 0.2222222222222222,
                "fc_rate" : 0.4156378600823045,
                "clear_rate" : 0.9711934156378601
            },
            {
                "lv" : 48,
                "genre" : "オリエンタルミソロジー(EX)",
                "song" : "蛇神",
                "pf_rate" : 0.21074380165289255,
                "fc_rate" : 0.43388429752066116,
                "clear_rate" : 0.9669421487603306
            },
            {
                "lv" : 48,
                "genre" : "カグランジ(EX)",
                "song" : "生きてこそ～特別版～",
                "pf_rate" : 0.20253164556962025,
                "fc_rate" : 0.46835443037974683,
                "clear_rate" : 0.9957805907172996
            },
            {
                "lv" : 48,
                "genre" : "カラフルトイズ・ワンダーランド(EX)",
                "song" : "カラフルトイズ・ワンダーランド",
                "pf_rate" : 0.08482142857142858,
                "fc_rate" : 0.22321428571428573,
                "clear_rate" : 0.9955357142857143
            },
            {
                "lv" : 48,
                "genre" : "クラシック１０(EX)",
                "song" : "Doll's sight",
                "pf_rate" : 0.05240174672489083,
                "fc_rate" : 0.16593886462882096,
                "clear_rate" : 0.9781659388646288
            },
            {
                "lv" : 48,
                "genre" : "クラシック４(H)",
                "song" : "Concertare",
                "pf_rate" : 0.03765690376569038,
                "fc_rate" : 0.33472803347280333,
                "clear_rate" : 0.9790794979079498
            },
            {
                "lv" : 48,
                "genre" : "クリエイター(EX)",
                "song" : "創世ノート",
                "pf_rate" : 0.02100840336134454,
                "fc_rate" : 0.09663865546218488,
                "clear_rate" : 0.9537815126050421
            },
            {
                "lv" : 48,
                "genre" : "グランヂデス(EX)",
                "song" : "ULTRA BUTTERFLY(坤剛力)",
                "pf_rate" : 0.042735042735042736,
                "fc_rate" : 0.14102564102564102,
                "clear_rate" : 0.9529914529914529
            },
            {
                "lv" : 48,
                "genre" : "グラヴィオール(EX)",
                "song" : "STULTI",
                "pf_rate" : 0.06779661016949153,
                "fc_rate" : 0.2330508474576271,
                "clear_rate" : 0.9533898305084746
            },
            {
                "lv" : 48,
                "genre" : "グロッソラリア(EX)",
                "song" : "万物快楽理論",
                "pf_rate" : 0.05485232067510549,
                "fc_rate" : 0.20675105485232068,
                "clear_rate" : 0.9789029535864979
            },
            {
                "lv" : 48,
                "genre" : "サイバーガガク(EX)",
                "song" : "Vairocana",
                "pf_rate" : 0.05240174672489083,
                "fc_rate" : 0.2096069868995633,
                "clear_rate" : 0.9650655021834061
            },
            {
                "lv" : 48,
                "genre" : "サイバーフラメンコ(EX)",
                "song" : "hora de verdad",
                "pf_rate" : 0.03508771929824561,
                "fc_rate" : 0.22807017543859648,
                "clear_rate" : 0.9780701754385965
            },
            {
                "lv" : 48,
                "genre" : "シンフォニックメタルop.２(EX)",
                "song" : "Sanctum Crusade",
                "pf_rate" : 0.02586206896551724,
                "fc_rate" : 0.15517241379310345,
                "clear_rate" : 0.9827586206896551
            },
            {
                "lv" : 48,
                "genre" : "スターリートランス(EX)",
                "song" : "Southern Cross",
                "pf_rate" : 0.09465020576131687,
                "fc_rate" : 0.3374485596707819,
                "clear_rate" : 0.9794238683127572
            },
            {
                "lv" : 48,
                "genre" : "スパイラルステアーズ(EX)",
                "song" : "BabeL ～Grand Story～",
                "pf_rate" : 0.0546218487394958,
                "fc_rate" : 0.16806722689075632,
                "clear_rate" : 0.9747899159663865
            },
            {
                "lv" : 48,
                "genre" : "スピードコア(EX)",
                "song" : "MVA",
                "pf_rate" : 0.06751054852320675,
                "fc_rate" : 0.23628691983122363,
                "clear_rate" : 0.9873417721518988
            },
            {
                "lv" : 48,
                "genre" : "スピードダンス(EX)",
                "song" : "GAIA",
                "pf_rate" : 0.06329113924050633,
                "fc_rate" : 0.19831223628691982,
                "clear_rate" : 0.9535864978902954
            },
            {
                "lv" : 48,
                "genre" : "デスレゲエ(EX)",
                "song" : "夜間行",
                "pf_rate" : 0.01327433628318584,
                "fc_rate" : 0.0752212389380531,
                "clear_rate" : 0.9734513274336283
            },
            {
                "lv" : 48,
                "genre" : "トランスコア(UPPER)(EX)",
                "song" : "FLOWER",
                "pf_rate" : 0.11057692307692307,
                "fc_rate" : 0.21634615384615385,
                "clear_rate" : 0.9807692307692307
            },
            {
                "lv" : 48,
                "genre" : "ドラムンフライ(EX)",
                "song" : "テンプラ揚三",
                "pf_rate" : 0.004830917874396135,
                "fc_rate" : 0.043478260869565216,
                "clear_rate" : 0.961352657004831
            },
            {
                "lv" : 48,
                "genre" : "ドリームチャンプル(EX)",
                "song" : "Dimensiva Vulnus",
                "pf_rate" : 0.10222222222222223,
                "fc_rate" : 0.18222222222222223,
                "clear_rate" : 0.96
            },
            {
                "lv" : 48,
                "genre" : "ナイトメアカルーセル(EX)",
                "song" : "カーニバルの主題による人形のためのいびつな狂想曲",
                "pf_rate" : 0.12017167381974249,
                "fc_rate" : 0.30042918454935624,
                "clear_rate" : 0.9613733905579399
            },
            {
                "lv" : 48,
                "genre" : "ナイトメアメタル(EX)",
                "song" : "背徳と邪悪のエピタフ",
                "pf_rate" : 0.07623318385650224,
                "fc_rate" : 0.17937219730941703,
                "clear_rate" : 0.968609865470852
            },
            {
                "lv" : 48,
                "genre" : "ネオクラシカル・ヘヴィメタル(UPPER)(EX)",
                "song" : "Aithon",
                "pf_rate" : 0.18324607329842932,
                "fc_rate" : 0.4031413612565445,
                "clear_rate" : 0.9895287958115183
            },
            {
                "lv" : 48,
                "genre" : "ノマディックネイション(EX)",
                "song" : "カラルの月",
                "pf_rate" : 0.012711864406779662,
                "fc_rate" : 0.07203389830508475,
                "clear_rate" : 0.9703389830508474
            },
            {
                "lv" : 48,
                "genre" : "ノマディックネイション２(EX)",
                "song" : "Esperanza",
                "pf_rate" : 0.0847457627118644,
                "fc_rate" : 0.2288135593220339,
                "clear_rate" : 0.9661016949152542
            },
            {
                "lv" : 48,
                "genre" : "ハードPf+(EX)",
                "song" : "fffff op.2",
                "pf_rate" : 0.008438818565400843,
                "fc_rate" : 0.12658227848101267,
                "clear_rate" : 0.9831223628691983
            },
            {
                "lv" : 48,
                "genre" : "ハードルネッサンス２(EX)",
                "song" : "Evans",
                "pf_rate" : 0.09282700421940929,
                "fc_rate" : 0.18565400843881857,
                "clear_rate" : 0.9324894514767933
            },
            {
                "lv" : 48,
                "genre" : "ハードルネッサンス３(EX)",
                "song" : "JOMANDA",
                "pf_rate" : 0.05603448275862069,
                "fc_rate" : 0.21982758620689655,
                "clear_rate" : 0.9741379310344828
            },
            {
                "lv" : 48,
                "genre" : "ハードＰｆ(EX)",
                "song" : "fffff",
                "pf_rate" : 0.07983193277310924,
                "fc_rate" : 0.2857142857142857,
                "clear_rate" : 0.9663865546218487
            },
            {
                "lv" : 48,
                "genre" : "バイキング(EX)",
                "song" : "バイキングマン",
                "pf_rate" : 0.004310344827586207,
                "fc_rate" : 0.05603448275862069,
                "clear_rate" : 0.9525862068965517
            },
            {
                "lv" : 48,
                "genre" : "バトルダンス(UPPER)(EX)",
                "song" : "シャムシールの舞",
                "pf_rate" : 0.03349282296650718,
                "fc_rate" : 0.07655502392344497,
                "clear_rate" : 0.937799043062201
            },
            {
                "lv" : 48,
                "genre" : "ヒップロック３(EX)",
                "song" : "雪上断火",
                "pf_rate" : 0.12987012987012986,
                "fc_rate" : 0.3246753246753247,
                "clear_rate" : 0.9134199134199135
            },
            {
                "lv" : 48,
                "genre" : "ヒップロック５(EX)",
                "song" : "一激必翔",
                "pf_rate" : 0.15384615384615385,
                "fc_rate" : 0.38461538461538464,
                "clear_rate" : 0.9914529914529915
            },
            {
                "lv" : 48,
                "genre" : "ビーストメタル(EX)",
                "song" : "野獣ワイルド",
                "pf_rate" : 0.09871244635193133,
                "fc_rate" : 0.1888412017167382,
                "clear_rate" : 0.9742489270386266
            },
            {
                "lv" : 48,
                "genre" : "ピアノコンテンポラリー(EX)",
                "song" : "Macuilxochitl",
                "pf_rate" : 0.11538461538461539,
                "fc_rate" : 0.23931623931623933,
                "clear_rate" : 0.9658119658119658
            },
            {
                "lv" : 48,
                "genre" : "フィーバーロボ(EX)",
                "song" : "踊るフィーバーロボ",
                "pf_rate" : 0.03829787234042553,
                "fc_rate" : 0.17446808510638298,
                "clear_rate" : 0.9574468085106383
            },
            {
                "lv" : 48,
                "genre" : "ブラックアルバム(EX)",
                "song" : "OVERHEAT -Type P-",
                "pf_rate" : 0.04680851063829787,
                "fc_rate" : 0.16170212765957448,
                "clear_rate" : 0.9531914893617022
            },
            {
                "lv" : 48,
                "genre" : "ブロークンサンバブレイク(EX)",
                "song" : "灼熱Beach Side Bunny",
                "pf_rate" : 0.03734439834024896,
                "fc_rate" : 0.13278008298755187,
                "clear_rate" : 0.950207468879668
            },
            {
                "lv" : 48,
                "genre" : "プログレ(UPPER)(EX)",
                "song" : "子供の落書き帳",
                "pf_rate" : 0.005291005291005291,
                "fc_rate" : 0.1111111111111111,
                "clear_rate" : 0.9629629629629629
            },
            {
                "lv" : 48,
                "genre" : "プログレタンゴ(EX)",
                "song" : "Red Roses",
                "pf_rate" : 0.07627118644067797,
                "fc_rate" : 0.18220338983050846,
                "clear_rate" : 0.9491525423728814
            },
            {
                "lv" : 48,
                "genre" : "プログレッシブ(EX)",
                "song" : "Concertino In Blue",
                "pf_rate" : 0.12236286919831224,
                "fc_rate" : 0.270042194092827,
                "clear_rate" : 0.9620253164556962
            },
            {
                "lv" : 48,
                "genre" : "プログレッシブ(EX)",
                "song" : "The Least 100 sec",
                "pf_rate" : 0.22083333333333333,
                "fc_rate" : 0.4875,
                "clear_rate" : 0.9875
            },
            {
                "lv" : 48,
                "genre" : "ベースボールヒロイン(EX)",
                "song" : "轟け！恋のビーンボール！！",
                "pf_rate" : 0.11715481171548117,
                "fc_rate" : 0.28451882845188287,
                "clear_rate" : 0.9874476987447699
            },
            {
                "lv" : 48,
                "genre" : "モダンパンク(EX)",
                "song" : "夢について　TYPE C",
                "pf_rate" : 0.16666666666666666,
                "fc_rate" : 0.4,
                "clear_rate" : 0.9833333333333333
            },
            {
                "lv" : 48,
                "genre" : "ラメント(EX)",
                "song" : "雫",
                "pf_rate" : 0.04564315352697095,
                "fc_rate" : 0.18672199170124482,
                "clear_rate" : 0.979253112033195
            },
            {
                "lv" : 48,
                "genre" : "リリーゼと炎龍レーヴァテイン(EX)",
                "song" : "リリーゼと炎龍レーヴァテイン",
                "pf_rate" : 0.05333333333333334,
                "fc_rate" : 0.18222222222222223,
                "clear_rate" : 0.96
            },
            {
                "lv" : 48,
                "genre" : "レッスン(EX)",
                "song" : "POP-STEP-UP",
                "pf_rate" : 0.009523809523809525,
                "fc_rate" : 0.08095238095238096,
                "clear_rate" : 0.8809523809523809
            },
            {
                "lv" : 48,
                "genre" : "ワラベステップ(EX)",
                "song" : "コドモライブ",
                "pf_rate" : 0.12083333333333333,
                "fc_rate" : 0.275,
                "clear_rate" : 0.9666666666666667
            },
            {
                "lv" : 48,
                "genre" : "亜空間ジャズ(EX)",
                "song" : "Ergosphere",
                "pf_rate" : 0.1078838174273859,
                "fc_rate" : 0.3153526970954357,
                "clear_rate" : 0.966804979253112
            },
            {
                "lv" : 48,
                "genre" : "人妖絵巻其の三「鴉天狗」～ 鞍馬のHAYATE ～(EX)",
                "song" : "人妖絵巻其の三「鴉天狗」～ 鞍馬のHAYATE ～",
                "pf_rate" : 0.0684931506849315,
                "fc_rate" : 0.2009132420091324,
                "clear_rate" : 0.9726027397260274
            },
            {
                "lv" : 48,
                "genre" : "令和の国(EX)",
                "song" : "令和の国",
                "pf_rate" : 0.04455445544554455,
                "fc_rate" : 0.17326732673267325,
                "clear_rate" : 0.9554455445544554
            },
            {
                "lv" : 48,
                "genre" : "少女と時の花(EX)",
                "song" : "少女と時の花",
                "pf_rate" : 0.026041666666666668,
                "fc_rate" : 0.16145833333333334,
                "clear_rate" : 0.9895833333333334
            },
            {
                "lv" : 48,
                "genre" : "御千手メディテーション(EX)",
                "song" : "御千手メディテーション",
                "pf_rate" : 0.07111111111111111,
                "fc_rate" : 0.21777777777777776,
                "clear_rate" : 0.9688888888888889
            },
            {
                "lv" : 48,
                "genre" : "忍者メタル　ポプコネ(EX)",
                "song" : "背水之陣 (Kagutsuchi Remix)",
                "pf_rate" : 0.03125,
                "fc_rate" : 0.15178571428571427,
                "clear_rate" : 0.9642857142857143
            },
            {
                "lv" : 48,
                "genre" : "戦乱絵巻(EX)",
                "song" : "西軍||∴⊂SEKIGAHARA⊃∴||東軍",
                "pf_rate" : 0.20353982300884957,
                "fc_rate" : 0.36283185840707965,
                "clear_rate" : 0.9823008849557522
            },
            {
                "lv" : 48,
                "genre" : "敬老パンク(EX)",
                "song" : "進め！爺ちゃん！",
                "pf_rate" : 0,
                "fc_rate" : 0.2168141592920354,
                "clear_rate" : 0.9424778761061947
            },
            {
                "lv" : 48,
                "genre" : "流離(EX)",
                "song" : "流離",
                "pf_rate" : 0.09375,
                "fc_rate" : 0.28125,
                "clear_rate" : 0.9821428571428571
            },
            {
                "lv" : 48,
                "genre" : "海神(EX)",
                "song" : "海神",
                "pf_rate" : 0.2719665271966527,
                "fc_rate" : 0.47280334728033474,
                "clear_rate" : 0.9790794979079498
            },
            {
                "lv" : 48,
                "genre" : "混乱少女♥そふらんちゃん!!(EX)",
                "song" : "混乱少女♥そふらんちゃん!!",
                "pf_rate" : 0.04326923076923077,
                "fc_rate" : 0.19230769230769232,
                "clear_rate" : 0.9663461538461539
            },
            {
                "lv" : 48,
                "genre" : "火風陸空(EX)",
                "song" : "火風陸空",
                "pf_rate" : 0.13247863247863248,
                "fc_rate" : 0.27350427350427353,
                "clear_rate" : 0.9700854700854701
            },
            {
                "lv" : 48,
                "genre" : "現代のヘイヨエ祭り(EX)",
                "song" : "現代のヘイヨエ祭り",
                "pf_rate" : 0.046296296296296294,
                "fc_rate" : 0.22685185185185186,
                "clear_rate" : 0.9675925925925926
            },
            {
                "lv" : 48,
                "genre" : "蟲の棲む処(EX)",
                "song" : "蟲の棲む処",
                "pf_rate" : 0.03636363636363636,
                "fc_rate" : 0.11363636363636363,
                "clear_rate" : 0.9454545454545454
            },
            {
                "lv" : 48,
                "genre" : "謀叛トランス(EX)",
                "song" : "NOBUNAGA",
                "pf_rate" : 0.29535864978902954,
                "fc_rate" : 0.5021097046413502,
                "clear_rate" : 0.9662447257383966
            },
            {
                "lv" : 48,
                "genre" : "賢聖シリウスの采配(EX)",
                "song" : "賢聖シリウスの采配",
                "pf_rate" : 0.09259259259259259,
                "fc_rate" : 0.2777777777777778,
                "clear_rate" : 1
            },
            {
                "lv" : 48,
                "genre" : "金縛りの逢を(EX)",
                "song" : "金縛りの逢を",
                "pf_rate" : 0.1072961373390558,
                "fc_rate" : 0.19313304721030042,
                "clear_rate" : 0.9699570815450643
            },
            {
                "lv" : 48,
                "genre" : "陣旗プログレッシブ(EX)",
                "song" : "風林火山",
                "pf_rate" : 0.09691629955947137,
                "fc_rate" : 0.34801762114537443,
                "clear_rate" : 0.9823788546255506
            },
            {
                "lv" : 48,
                "genre" : "霊魂爆砕 -SOUL EXPLOSION-(EX)",
                "song" : "霊魂爆砕 -SOUL EXPLOSION-",
                "pf_rate" : 0.08530805687203792,
                "fc_rate" : 0.21800947867298578,
                "clear_rate" : 0.995260663507109
            },
            {
                "lv" : 48,
                "genre" : "霖が哭く(EX)",
                "song" : "霖が哭く",
                "pf_rate" : 0.044642857142857144,
                "fc_rate" : 0.20982142857142858,
                "clear_rate" : 0.9598214285714286
            },
            {
                "lv" : 48,
                "genre" : "ＤＤＲ(EX)",
                "song" : "DDR MEGAMIX",
                "pf_rate" : 0.017316017316017316,
                "fc_rate" : 0.24675324675324675,
                "clear_rate" : 0.9264069264069265
            },
            {
                "lv" : 48,
                "genre" : "ＩＤＭ(EX)",
                "song" : "ZETA～素数の世界と超越者～",
                "pf_rate" : 0.10330578512396695,
                "fc_rate" : 0.29338842975206614,
                "clear_rate" : 0.9669421487603306
            },
            {
                "lv" : 47,
                "genre" : "50th Memorial Songs -The BEMANI History-(EX)",
                "song" : "50th Memorial Songs -The BEMANI History-",
                "pf_rate" : 0.09278350515463918,
                "fc_rate" : 0.24742268041237114,
                "clear_rate" : 0.979381443298969
            },
            {
                "lv" : 47,
                "genre" : "ACCELERATION(EX)",
                "song" : "ACCELERATION",
                "pf_rate" : 0.2714285714285714,
                "fc_rate" : 0.4666666666666667,
                "clear_rate" : 0.9857142857142858
            },
            {
                "lv" : 47,
                "genre" : "BILLION MONEY BAZOOKA(EX)",
                "song" : "BILLION MONEY BAZOOKA",
                "pf_rate" : 0.13432835820895522,
                "fc_rate" : 0.263681592039801,
                "clear_rate" : 0.9900497512437811
            },
            {
                "lv" : 47,
                "genre" : "BLAZE∞BREEZE(EX)",
                "song" : "BLAZE∞BREEZE",
                "pf_rate" : 0.34183673469387754,
                "fc_rate" : 0.4897959183673469,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "Caradbolg(EX)",
                "song" : "Caradbolg",
                "pf_rate" : 0.1111111111111111,
                "fc_rate" : 0.31555555555555553,
                "clear_rate" : 0.9911111111111112
            },
            {
                "lv" : 47,
                "genre" : "Cleopatrysm(EX)",
                "song" : "Cleopatrysm",
                "pf_rate" : 0.18502202643171806,
                "fc_rate" : 0.3876651982378855,
                "clear_rate" : 0.9955947136563876
            },
            {
                "lv" : 47,
                "genre" : "Dance to Blue (Respect Style)(EX)",
                "song" : "Dance to Blue (Respect Style)",
                "pf_rate" : 0.185,
                "fc_rate" : 0.315,
                "clear_rate" : 0.965
            },
            {
                "lv" : 47,
                "genre" : "El venenciador(EX)",
                "song" : "El venenciador",
                "pf_rate" : 0.15897435897435896,
                "fc_rate" : 0.2512820512820513,
                "clear_rate" : 0.9948717948717949
            },
            {
                "lv" : 47,
                "genre" : "Fate No.23(EX)",
                "song" : "Fate No.23",
                "pf_rate" : 0.2019704433497537,
                "fc_rate" : 0.3645320197044335,
                "clear_rate" : 0.9852216748768473
            },
            {
                "lv" : 47,
                "genre" : "Floccinaucinihilipilification(EX)",
                "song" : "Floccinaucinihilipilification",
                "pf_rate" : 0.15609756097560976,
                "fc_rate" : 0.3024390243902439,
                "clear_rate" : 0.9902439024390244
            },
            {
                "lv" : 47,
                "genre" : "Hatcha Metcha Party(EX)",
                "song" : "Hatcha Metcha Party",
                "pf_rate" : 0.20600858369098712,
                "fc_rate" : 0.38197424892703863,
                "clear_rate" : 0.9957081545064378
            },
            {
                "lv" : 47,
                "genre" : "I just hate you(EX)",
                "song" : "I just hate you",
                "pf_rate" : 0.10106382978723404,
                "fc_rate" : 0.30319148936170215,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "INFINITY(EX)",
                "song" : "INFINITY",
                "pf_rate" : 0.23555555555555555,
                "fc_rate" : 0.38222222222222224,
                "clear_rate" : 0.9866666666666667
            },
            {
                "lv" : 47,
                "genre" : "Invisible Farewell(EX)",
                "song" : "Invisible Farewell",
                "pf_rate" : 0.12574850299401197,
                "fc_rate" : 0.3652694610778443,
                "clear_rate" : 0.9940119760479041
            },
            {
                "lv" : 47,
                "genre" : "Jack in the Box(EX)",
                "song" : "Jack in the Box",
                "pf_rate" : 0.0684931506849315,
                "fc_rate" : 0.2694063926940639,
                "clear_rate" : 0.9817351598173516
            },
            {
                "lv" : 47,
                "genre" : "Jetcoaster Windy(EX)",
                "song" : "Jetcoaster Windy",
                "pf_rate" : 0.2471264367816092,
                "fc_rate" : 0.41379310344827586,
                "clear_rate" : 0.9942528735632183
            },
            {
                "lv" : 47,
                "genre" : "La Lumiere(EX)",
                "song" : "La Lumiere",
                "pf_rate" : 0.11320754716981132,
                "fc_rate" : 0.2830188679245283,
                "clear_rate" : 0.9858490566037735
            },
            {
                "lv" : 47,
                "genre" : "Monkshood(EX)",
                "song" : "Monkshood",
                "pf_rate" : 0.28865979381443296,
                "fc_rate" : 0.5309278350515464,
                "clear_rate" : 0.9896907216494846
            },
            {
                "lv" : 47,
                "genre" : "Mychronicle(EX)",
                "song" : "Mychronicle",
                "pf_rate" : 0.185,
                "fc_rate" : 0.325,
                "clear_rate" : 0.98
            },
            {
                "lv" : 47,
                "genre" : "NINE PIECE(EX)",
                "song" : "NINE PIECE",
                "pf_rate" : 0.15859030837004406,
                "fc_rate" : 0.3303964757709251,
                "clear_rate" : 0.9779735682819384
            },
            {
                "lv" : 47,
                "genre" : "Nove Primavere(EX)",
                "song" : "Nove Primavere",
                "pf_rate" : 0.06417112299465241,
                "fc_rate" : 0.2994652406417112,
                "clear_rate" : 0.9732620320855615
            },
            {
                "lv" : 47,
                "genre" : "ON-DO(EX)",
                "song" : "ON-DO",
                "pf_rate" : 0.31746031746031744,
                "fc_rate" : 0.4603174603174603,
                "clear_rate" : 0.9735449735449735
            },
            {
                "lv" : 47,
                "genre" : "On top of the world(EX)",
                "song" : "On top of the world",
                "pf_rate" : 0.16346153846153846,
                "fc_rate" : 0.3557692307692308,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "Peragro(EX)",
                "song" : "Peragro",
                "pf_rate" : 0.3397129186602871,
                "fc_rate" : 0.5741626794258373,
                "clear_rate" : 0.9856459330143541
            },
            {
                "lv" : 47,
                "genre" : "Reconsideration(EX)",
                "song" : "Reconsideration",
                "pf_rate" : 0.19534883720930232,
                "fc_rate" : 0.3627906976744186,
                "clear_rate" : 0.986046511627907
            },
            {
                "lv" : 47,
                "genre" : "Russian Caravan Rhapsody(EX)",
                "song" : "Russian Caravan Rhapsody",
                "pf_rate" : 0.2576419213973799,
                "fc_rate" : 0.45414847161572053,
                "clear_rate" : 0.982532751091703
            },
            {
                "lv" : 47,
                "genre" : "SPACE CRASH LANDING(EX)",
                "song" : "SPACE CRASH LANDING",
                "pf_rate" : 0.11734693877551021,
                "fc_rate" : 0.25,
                "clear_rate" : 0.9897959183673469
            },
            {
                "lv" : 47,
                "genre" : "STERLING SILVER(EX)",
                "song" : "STERLING SILVER",
                "pf_rate" : 0.1414141414141414,
                "fc_rate" : 0.29292929292929293,
                "clear_rate" : 0.9797979797979798
            },
            {
                "lv" : 47,
                "genre" : "Spiral Clouds(EX)",
                "song" : "Spiral Clouds",
                "pf_rate" : 0.14492753623188406,
                "fc_rate" : 0.3333333333333333,
                "clear_rate" : 0.9903381642512077
            },
            {
                "lv" : 47,
                "genre" : "Swinging Skulls(EX)",
                "song" : "Swinging Skulls",
                "pf_rate" : 0.07692307692307693,
                "fc_rate" : 0.13846153846153847,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "TRUTH behind U(EX)",
                "song" : "TRUTH behind U",
                "pf_rate" : 0.29577464788732394,
                "fc_rate" : 0.460093896713615,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "The last of world music(EX)",
                "song" : "The last of world music",
                "pf_rate" : 0.0673076923076923,
                "fc_rate" : 0.22115384615384615,
                "clear_rate" : 0.9855769230769231
            },
            {
                "lv" : 47,
                "genre" : "Trill auf G(EX)",
                "song" : "Trill auf G",
                "pf_rate" : 0.05909090909090909,
                "fc_rate" : 0.19090909090909092,
                "clear_rate" : 0.9590909090909091
            },
            {
                "lv" : 47,
                "genre" : "Versa(EX)",
                "song" : "Versa",
                "pf_rate" : 0.05829596412556054,
                "fc_rate" : 0.2062780269058296,
                "clear_rate" : 0.9955156950672646
            },
            {
                "lv" : 47,
                "genre" : "ZEPHYRANTHES(EX)",
                "song" : "ZEPHYRANTHES",
                "pf_rate" : 0.34545454545454546,
                "fc_rate" : 0.5590909090909091,
                "clear_rate" : 0.990909090909091
            },
            {
                "lv" : 47,
                "genre" : "cucumis melo(EX)",
                "song" : "cucumis melo",
                "pf_rate" : 0.05555555555555555,
                "fc_rate" : 0.20202020202020202,
                "clear_rate" : 0.9949494949494949
            },
            {
                "lv" : 47,
                "genre" : "ice crystals(EX)",
                "song" : "ice crystals",
                "pf_rate" : 0.2079646017699115,
                "fc_rate" : 0.45132743362831856,
                "clear_rate" : 0.9867256637168141
            },
            {
                "lv" : 47,
                "genre" : "nostos(EX)",
                "song" : "nostos",
                "pf_rate" : 0.05339805825242718,
                "fc_rate" : 0.21359223300970873,
                "clear_rate" : 0.9660194174757282
            },
            {
                "lv" : 47,
                "genre" : "popcorn parade(EX)",
                "song" : "popcorn parade",
                "pf_rate" : 0.125,
                "fc_rate" : 0.3894230769230769,
                "clear_rate" : 0.9759615384615384
            },
            {
                "lv" : 47,
                "genre" : "virtual killer(EX)",
                "song" : "virtual killer",
                "pf_rate" : 0.16336633663366337,
                "fc_rate" : 0.41089108910891087,
                "clear_rate" : 0.9702970297029703
            },
            {
                "lv" : 47,
                "genre" : "♥LOVE² シュガ→♥ (かめりあ&amp;ななひら's Over-Sweet-Dempa ♥LOVE² シュガ→♥な恋愛教室 Remix)(EX)",
                "song" : "♥LOVE² シュガ→♥ (かめりあ&ななひら's Over-Sweet-Dempa ♥LOVE² シュガ→♥な恋愛教室 Remix)",
                "pf_rate" : 0.046875,
                "fc_rate" : 0.16666666666666666,
                "clear_rate" : 0.9739583333333334
            },
            {
                "lv" : 47,
                "genre" : "あやかしロック(EX)",
                "song" : "情操ディストピア",
                "pf_rate" : 0.3138075313807531,
                "fc_rate" : 0.5355648535564853,
                "clear_rate" : 0.99581589958159
            },
            {
                "lv" : 47,
                "genre" : "おしゃまスウィング(EX)",
                "song" : "なまいきプリンセス",
                "pf_rate" : 0.1885245901639344,
                "fc_rate" : 0.46311475409836067,
                "clear_rate" : 0.9918032786885246
            },
            {
                "lv" : 47,
                "genre" : "お米タル(EX)",
                "song" : "お米の美味しい炊き方、そしてお米を食べることによるその効果。",
                "pf_rate" : 0.10869565217391304,
                "fc_rate" : 0.30434782608695654,
                "clear_rate" : 0.9869565217391304
            },
            {
                "lv" : 47,
                "genre" : "けもののおうじゃ★めうめう(EX)",
                "song" : "けもののおうじゃ★めうめう",
                "pf_rate" : 0.29523809523809524,
                "fc_rate" : 0.46190476190476193,
                "clear_rate" : 0.9809523809523809
            },
            {
                "lv" : 47,
                "genre" : "ちんどんジャズ(EX)",
                "song" : "文明開化",
                "pf_rate" : 0.3274336283185841,
                "fc_rate" : 0.4823008849557522,
                "clear_rate" : 0.9867256637168141
            },
            {
                "lv" : 47,
                "genre" : "ほおずき程度には赤い頭髪(EX)",
                "song" : "ほおずき程度には赤い頭髪",
                "pf_rate" : 0.12796208530805686,
                "fc_rate" : 0.3791469194312796,
                "clear_rate" : 0.9715639810426541
            },
            {
                "lv" : 47,
                "genre" : "ませまてぃっく♥ま+ま=まじっく！(EX)",
                "song" : "ませまてぃっく♥ま+ま=まじっく！",
                "pf_rate" : 0.14545454545454545,
                "fc_rate" : 0.29545454545454547,
                "clear_rate" : 0.9818181818181818
            },
            {
                "lv" : 47,
                "genre" : "アスレチックブギー(EX)",
                "song" : "ATTRACTION！",
                "pf_rate" : 0.26576576576576577,
                "fc_rate" : 0.5,
                "clear_rate" : 0.9819819819819819
            },
            {
                "lv" : 47,
                "genre" : "アスレチックミート(EX)",
                "song" : "一発逆転！××だらけのハッピー大運動会！！",
                "pf_rate" : 0.04878048780487805,
                "fc_rate" : 0.15121951219512195,
                "clear_rate" : 0.9853658536585366
            },
            {
                "lv" : 47,
                "genre" : "アンセムトランスREMIX(EX)",
                "song" : "Votum stellarum -forest #25 RMX-",
                "pf_rate" : 0.09663865546218488,
                "fc_rate" : 0.37815126050420167,
                "clear_rate" : 0.9789915966386554
            },
            {
                "lv" : 47,
                "genre" : "ウィザウチュナイ-ゼクス-(EX)",
                "song" : "Squeeze",
                "pf_rate" : 0.2641509433962264,
                "fc_rate" : 0.4339622641509434,
                "clear_rate" : 0.9811320754716981
            },
            {
                "lv" : 47,
                "genre" : "エキサイティング！！も・ちゃ・ちゃ☆(EX)",
                "song" : "エキサイティング！！も・ちゃ・ちゃ☆",
                "pf_rate" : 0.1559633027522936,
                "fc_rate" : 0.3211009174311927,
                "clear_rate" : 0.9724770642201835
            },
            {
                "lv" : 47,
                "genre" : "エレクトロバロック(EX)",
                "song" : "Amalgamation",
                "pf_rate" : 0.30603448275862066,
                "fc_rate" : 0.4827586206896552,
                "clear_rate" : 0.9827586206896551
            },
            {
                "lv" : 47,
                "genre" : "エレジィ２(EX)",
                "song" : "この子の七つのお祝いに",
                "pf_rate" : 0.18695652173913044,
                "fc_rate" : 0.3826086956521739,
                "clear_rate" : 0.9956521739130435
            },
            {
                "lv" : 47,
                "genre" : "エンカREMIX(EX)",
                "song" : "お江戸花吹雪 TEYAN-day MIX",
                "pf_rate" : 0.05217391304347826,
                "fc_rate" : 0.28695652173913044,
                "clear_rate" : 0.991304347826087
            },
            {
                "lv" : 47,
                "genre" : "エンシャントユーロ(EX)",
                "song" : "In The Ruins",
                "pf_rate" : 0.3025210084033613,
                "fc_rate" : 0.5714285714285714,
                "clear_rate" : 0.9789915966386554
            },
            {
                "lv" : 47,
                "genre" : "カイジュウ(EX)",
                "song" : "突然ゴルゴンゾーラ",
                "pf_rate" : 0.21008403361344538,
                "fc_rate" : 0.3067226890756303,
                "clear_rate" : 0.9789915966386554
            },
            {
                "lv" : 47,
                "genre" : "カイゾク(EX)",
                "song" : "KING of the SEA",
                "pf_rate" : 0.19047619047619047,
                "fc_rate" : 0.4069264069264069,
                "clear_rate" : 0.987012987012987
            },
            {
                "lv" : 47,
                "genre" : "カドルコア(EX)",
                "song" : "murmur twins",
                "pf_rate" : 0.024154589371980676,
                "fc_rate" : 0.25120772946859904,
                "clear_rate" : 0.9806763285024155
            },
            {
                "lv" : 47,
                "genre" : "キルト（Patchworker RMX）(EX)",
                "song" : "キルト（Patchworker RMX）",
                "pf_rate" : 0.11374407582938388,
                "fc_rate" : 0.2796208530805687,
                "clear_rate" : 0.981042654028436
            },
            {
                "lv" : 47,
                "genre" : "クラシック６(EX)",
                "song" : "Maritare!",
                "pf_rate" : 0.013100436681222707,
                "fc_rate" : 0.11790393013100436,
                "clear_rate" : 0.9912663755458515
            },
            {
                "lv" : 47,
                "genre" : "クラシック７(EX)",
                "song" : "The tyro's reverie",
                "pf_rate" : 0.017467248908296942,
                "fc_rate" : 0.11353711790393013,
                "clear_rate" : 0.982532751091703
            },
            {
                "lv" : 47,
                "genre" : "ケンカドラム(EX)",
                "song" : "BBLLAASSTT!!",
                "pf_rate" : 0.20600858369098712,
                "fc_rate" : 0.3948497854077253,
                "clear_rate" : 0.9828326180257511
            },
            {
                "lv" : 47,
                "genre" : "コアダストビート(EX)",
                "song" : "真超深ＴＩＯＮ",
                "pf_rate" : 0.29385964912280704,
                "fc_rate" : 0.5307017543859649,
                "clear_rate" : 0.9956140350877193
            },
            {
                "lv" : 47,
                "genre" : "コアロック(EX)",
                "song" : "へんたいトリロジー",
                "pf_rate" : 0.3775933609958506,
                "fc_rate" : 0.5518672199170125,
                "clear_rate" : 0.970954356846473
            },
            {
                "lv" : 47,
                "genre" : "コルトーン(EX)",
                "song" : "コルトーン",
                "pf_rate" : 0.07009345794392523,
                "fc_rate" : 0.26635514018691586,
                "clear_rate" : 0.9719626168224299
            },
            {
                "lv" : 47,
                "genre" : "コンテンポラリーネイション(EX)",
                "song" : "BEYOND THE EARTH",
                "pf_rate" : 0.12916666666666668,
                "fc_rate" : 0.2916666666666667,
                "clear_rate" : 0.9875
            },
            {
                "lv" : 47,
                "genre" : "ゴアトランス(EX)",
                "song" : "IMPLANTATION",
                "pf_rate" : 0.17903930131004367,
                "fc_rate" : 0.3318777292576419,
                "clear_rate" : 0.982532751091703
            },
            {
                "lv" : 47,
                "genre" : "サイバーウエスタン(EX)",
                "song" : "PITAゴラス☆KISS",
                "pf_rate" : 0.11363636363636363,
                "fc_rate" : 0.32727272727272727,
                "clear_rate" : 0.990909090909091
            },
            {
                "lv" : 47,
                "genre" : "サイバーメタル(EX)",
                "song" : "断罪プラズマ",
                "pf_rate" : 0.25333333333333335,
                "fc_rate" : 0.44,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "サケビノミドリ(EX)",
                "song" : "サケビノミドリ",
                "pf_rate" : 0.023923444976076555,
                "fc_rate" : 0.15311004784688995,
                "clear_rate" : 0.9856459330143541
            },
            {
                "lv" : 47,
                "genre" : "サーカス(EX)",
                "song" : "フリーパス",
                "pf_rate" : 0.18181818181818182,
                "fc_rate" : 0.3852813852813853,
                "clear_rate" : 0.9913419913419913
            },
            {
                "lv" : 47,
                "genre" : "シューゲイザー(EX)",
                "song" : "chilblain",
                "pf_rate" : 0.20588235294117646,
                "fc_rate" : 0.4117647058823529,
                "clear_rate" : 0.9831932773109243
            },
            {
                "lv" : 47,
                "genre" : "シンフォニックメタル(EX)",
                "song" : "Holy Forest",
                "pf_rate" : 0.1615720524017467,
                "fc_rate" : 0.38427947598253276,
                "clear_rate" : 0.9868995633187773
            },
            {
                "lv" : 47,
                "genre" : "ジオメトリック∮ティーパーティー(H)",
                "song" : "ジオメトリック∮ティーパーティー",
                "pf_rate" : 0,
                "fc_rate" : 0.024154589371980676,
                "clear_rate" : 0.9758454106280193
            },
            {
                "lv" : 47,
                "genre" : "ジャパメタ(EX)",
                "song" : "Craze for You",
                "pf_rate" : 0.10328638497652583,
                "fc_rate" : 0.39906103286384975,
                "clear_rate" : 0.9812206572769953
            },
            {
                "lv" : 47,
                "genre" : "スイーツプログレッシヴ(EX)",
                "song" : "ちくわパフェだよ☆ＣＫＰ",
                "pf_rate" : 0.2564102564102564,
                "fc_rate" : 0.4017094017094017,
                "clear_rate" : 0.9786324786324786
            },
            {
                "lv" : 47,
                "genre" : "セツナトリップ(UPPER)(EX)",
                "song" : "セツナトリップ",
                "pf_rate" : 0.10638297872340426,
                "fc_rate" : 0.2978723404255319,
                "clear_rate" : 0.9574468085106383
            },
            {
                "lv" : 47,
                "genre" : "ゾディアックオラクル１(EX)",
                "song" : "ストレイ・マーチ",
                "pf_rate" : 0.3173913043478261,
                "fc_rate" : 0.4782608695652174,
                "clear_rate" : 0.9826086956521739
            },
            {
                "lv" : 47,
                "genre" : "ターバン(EX)",
                "song" : "Manhattan Sports Club",
                "pf_rate" : 0.2170212765957447,
                "fc_rate" : 0.44680851063829785,
                "clear_rate" : 0.9914893617021276
            },
            {
                "lv" : 47,
                "genre" : "ダークオペラREMIX(EX)",
                "song" : "Der Wald(kors k Remix)",
                "pf_rate" : 0.15086206896551724,
                "fc_rate" : 0.3232758620689655,
                "clear_rate" : 0.9870689655172413
            },
            {
                "lv" : 47,
                "genre" : "チテイタンケン(EX)",
                "song" : "スーパーモグー",
                "pf_rate" : 0.05555555555555555,
                "fc_rate" : 0.2264957264957265,
                "clear_rate" : 0.9743589743589743
            },
            {
                "lv" : 47,
                "genre" : "デパファンク(EX)",
                "song" : "デパ地下のお話",
                "pf_rate" : 0.2088888888888889,
                "fc_rate" : 0.4444444444444444,
                "clear_rate" : 0.9866666666666667
            },
            {
                "lv" : 47,
                "genre" : "デュスノミア(EX)",
                "song" : "デュスノミア",
                "pf_rate" : 0.2613065326633166,
                "fc_rate" : 0.4723618090452261,
                "clear_rate" : 0.9849246231155779
            },
            {
                "lv" : 47,
                "genre" : "トランスコア(EX)",
                "song" : "FLOWER",
                "pf_rate" : 0.21224489795918366,
                "fc_rate" : 0.42448979591836733,
                "clear_rate" : 0.9673469387755103
            },
            {
                "lv" : 47,
                "genre" : "トランスランス(EX)",
                "song" : "full-consciousness green",
                "pf_rate" : 0.29385964912280704,
                "fc_rate" : 0.4692982456140351,
                "clear_rate" : 0.9692982456140351
            },
            {
                "lv" : 47,
                "genre" : "ドラムンコアダスト(EX)",
                "song" : "Mynarco",
                "pf_rate" : 0.1037344398340249,
                "fc_rate" : 0.2863070539419087,
                "clear_rate" : 0.970954356846473
            },
            {
                "lv" : 47,
                "genre" : "ドリームゲイザー(EX)",
                "song" : "Little prayer",
                "pf_rate" : 0.2948717948717949,
                "fc_rate" : 0.47863247863247865,
                "clear_rate" : 0.9914529914529915
            },
            {
                "lv" : 47,
                "genre" : "ナニワヒーロー(EX)",
                "song" : "でんがなマンガナ",
                "pf_rate" : 0.21145374449339208,
                "fc_rate" : 0.44933920704845814,
                "clear_rate" : 0.9823788546255506
            },
            {
                "lv" : 47,
                "genre" : "ナンキョク(UPPER)(EX)",
                "song" : "クラゲータ",
                "pf_rate" : 0.12371134020618557,
                "fc_rate" : 0.2268041237113402,
                "clear_rate" : 0.979381443298969
            },
            {
                "lv" : 47,
                "genre" : "ネジロック(EX)",
                "song" : "螺子之人",
                "pf_rate" : 0.09090909090909091,
                "fc_rate" : 0.2818181818181818,
                "clear_rate" : 0.9863636363636363
            },
            {
                "lv" : 47,
                "genre" : "ハイパードラマティック(EX)",
                "song" : "薔薇は永遠に美しく",
                "pf_rate" : 0.02109704641350211,
                "fc_rate" : 0.10970464135021098,
                "clear_rate" : 0.9915611814345991
            },
            {
                "lv" : 47,
                "genre" : "ハイパーロッケンローレ(UPPER)(EX)",
                "song" : "エイプリルフールの唄",
                "pf_rate" : 0.16748768472906403,
                "fc_rate" : 0.27586206896551724,
                "clear_rate" : 0.9950738916256158
            },
            {
                "lv" : 47,
                "genre" : "ハイパーＪポップ３(EX)",
                "song" : "1/6billionth",
                "pf_rate" : 0.3700440528634361,
                "fc_rate" : 0.5726872246696035,
                "clear_rate" : 0.9911894273127754
            },
            {
                "lv" : 47,
                "genre" : "ハイブリープ(EX)",
                "song" : "恋する☆宇宙戦争っ！！",
                "pf_rate" : 0.1322314049586777,
                "fc_rate" : 0.4462809917355372,
                "clear_rate" : 0.9917355371900827
            },
            {
                "lv" : 47,
                "genre" : "ハッピー(EX)",
                "song" : "quaver♪",
                "pf_rate" : 0.22916666666666666,
                "fc_rate" : 0.43333333333333335,
                "clear_rate" : 0.975
            },
            {
                "lv" : 47,
                "genre" : "ハッピーハードコア(EX)",
                "song" : "I'm so Happy",
                "pf_rate" : 0.35655737704918034,
                "fc_rate" : 0.5778688524590164,
                "clear_rate" : 0.9877049180327869
            },
            {
                "lv" : 47,
                "genre" : "ハッピーハードコア(EX)",
                "song" : "Sweet Sweet ♥ Magic",
                "pf_rate" : 0.03896103896103896,
                "fc_rate" : 0.354978354978355,
                "clear_rate" : 0.9826839826839827
            },
            {
                "lv" : 47,
                "genre" : "ハラショー！おにぎりサーカス団☆(EX)",
                "song" : "ハラショー！おにぎりサーカス団☆",
                "pf_rate" : 0.06493506493506493,
                "fc_rate" : 0.15584415584415584,
                "clear_rate" : 0.961038961038961
            },
            {
                "lv" : 47,
                "genre" : "バンブーソード・ガール(EX)",
                "song" : "バンブーソード・ガール",
                "pf_rate" : 0.0423728813559322,
                "fc_rate" : 0.19491525423728814,
                "clear_rate" : 0.9872881355932204
            },
            {
                "lv" : 47,
                "genre" : "ヒップロック3.5(EX)",
                "song" : "差無来！！",
                "pf_rate" : 0.09210526315789473,
                "fc_rate" : 0.2675438596491228,
                "clear_rate" : 0.956140350877193
            },
            {
                "lv" : 47,
                "genre" : "ヒップロック２(EX)",
                "song" : "男々道",
                "pf_rate" : 0.013100436681222707,
                "fc_rate" : 0.4017467248908297,
                "clear_rate" : 0.9694323144104804
            },
            {
                "lv" : 47,
                "genre" : "ヒルビリー(EX)",
                "song" : "Pa la la 42",
                "pf_rate" : 0.17117117117117117,
                "fc_rate" : 0.3918918918918919,
                "clear_rate" : 0.9774774774774775
            },
            {
                "lv" : 47,
                "genre" : "ビジュアル(EX)",
                "song" : "月光蝶",
                "pf_rate" : 0.04700854700854701,
                "fc_rate" : 0.4230769230769231,
                "clear_rate" : 0.9957264957264957
            },
            {
                "lv" : 47,
                "genre" : "ビビッド(EX)",
                "song" : "For Dear ～",
                "pf_rate" : 0.3375,
                "fc_rate" : 0.45416666666666666,
                "clear_rate" : 0.9875
            },
            {
                "lv" : 47,
                "genre" : "ピアノテック(EX)",
                "song" : "Stories",
                "pf_rate" : 0.046218487394957986,
                "fc_rate" : 0.226890756302521,
                "clear_rate" : 0.9831932773109243
            },
            {
                "lv" : 47,
                "genre" : "ピラミッド(EX)",
                "song" : "永遠という名の媚薬",
                "pf_rate" : 0.008888888888888889,
                "fc_rate" : 0.19111111111111112,
                "clear_rate" : 0.9777777777777777
            },
            {
                "lv" : 47,
                "genre" : "フィーバーロボ REMIX(EX)",
                "song" : "踊るフィーバーロボ　Eu-Robot mix",
                "pf_rate" : 0.2077922077922078,
                "fc_rate" : 0.4025974025974026,
                "clear_rate" : 0.987012987012987
            },
            {
                "lv" : 47,
                "genre" : "フォレストスノウ２(EX)",
                "song" : "白夜幻燈",
                "pf_rate" : 0.04680851063829787,
                "fc_rate" : 0.18723404255319148,
                "clear_rate" : 0.9829787234042553
            },
            {
                "lv" : 47,
                "genre" : "プログレッシブ(EX)",
                "song" : "V",
                "pf_rate" : 0.045081967213114756,
                "fc_rate" : 0.32786885245901637,
                "clear_rate" : 0.9877049180327869
            },
            {
                "lv" : 47,
                "genre" : "ポチコの幸せな日常 (狂犬U`x´UばうわうHARDCORE Remix)(EX)",
                "song" : "ポチコの幸せな日常 (狂犬U`x´UばうわうHARDCORE Remix)",
                "pf_rate" : 0.03333333333333333,
                "fc_rate" : 0.05238095238095238,
                "clear_rate" : 0.9380952380952381
            },
            {
                "lv" : 47,
                "genre" : "ポップミュージック(EX)",
                "song" : "うた",
                "pf_rate" : 0.10126582278481013,
                "fc_rate" : 0.31645569620253167,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "ムーニャポヨポヨスッポコニャーゴ(EX)",
                "song" : "ムーニャポヨポヨスッポコニャーゴ",
                "pf_rate" : 0.0625,
                "fc_rate" : 0.21153846153846154,
                "clear_rate" : 0.9903846153846154
            },
            {
                "lv" : 47,
                "genre" : "メイドメタル(EX)",
                "song" : "ホーンテッド★メイドランチ",
                "pf_rate" : 0.20675105485232068,
                "fc_rate" : 0.38396624472573837,
                "clear_rate" : 0.9789029535864979
            },
            {
                "lv" : 47,
                "genre" : "メンテナンス物語(EX)",
                "song" : "メンテナンス物語",
                "pf_rate" : 0.23423423423423423,
                "fc_rate" : 0.4594594594594595,
                "clear_rate" : 0.9954954954954955
            },
            {
                "lv" : 47,
                "genre" : "モンゴル(EX)",
                "song" : "怒れる大きな白い馬",
                "pf_rate" : 0.14782608695652175,
                "fc_rate" : 0.3782608695652174,
                "clear_rate" : 0.9869565217391304
            },
            {
                "lv" : 47,
                "genre" : "リンセイ(EX)",
                "song" : "カゲロウ",
                "pf_rate" : 0.24358974358974358,
                "fc_rate" : 0.44017094017094016,
                "clear_rate" : 0.9871794871794872
            },
            {
                "lv" : 47,
                "genre" : "ルーニックエア(EX)",
                "song" : "Princess Roki",
                "pf_rate" : 0.16593886462882096,
                "fc_rate" : 0.36681222707423583,
                "clear_rate" : 0.9912663755458515
            },
            {
                "lv" : 47,
                "genre" : "レーシング(EX)",
                "song" : "Violently Car",
                "pf_rate" : 0.22321428571428573,
                "fc_rate" : 0.4732142857142857,
                "clear_rate" : 0.9642857142857143
            },
            {
                "lv" : 47,
                "genre" : "ロックビリー(EX)",
                "song" : "ススメ！少年！！",
                "pf_rate" : 0.22972972972972974,
                "fc_rate" : 0.40540540540540543,
                "clear_rate" : 0.990990990990991
            },
            {
                "lv" : 47,
                "genre" : "ヴァイオリンプログレッシブ(EX)",
                "song" : "ポルターガイスト",
                "pf_rate" : 0.0611353711790393,
                "fc_rate" : 0.2183406113537118,
                "clear_rate" : 0.9956331877729258
            },
            {
                "lv" : 47,
                "genre" : "ヴァリアントレイヴ(EX)",
                "song" : "PUNISHER",
                "pf_rate" : 0.2017167381974249,
                "fc_rate" : 0.34763948497854075,
                "clear_rate" : 0.9699570815450643
            },
            {
                "lv" : 47,
                "genre" : "ヴァルキリーブレイクス(EX)",
                "song" : "Celsus",
                "pf_rate" : 0.2857142857142857,
                "fc_rate" : 0.5042016806722689,
                "clear_rate" : 0.9915966386554622
            },
            {
                "lv" : 47,
                "genre" : "ヴェルヴェットバレットヒット(EX)",
                "song" : "ヴェルヴェット　バレット",
                "pf_rate" : 0.17488789237668162,
                "fc_rate" : 0.3183856502242152,
                "clear_rate" : 0.9910313901345291
            },
            {
                "lv" : 47,
                "genre" : "下克上ドラムンベース(EX)",
                "song" : "Ge-Ko-Ku-Jo",
                "pf_rate" : 0.1774891774891775,
                "fc_rate" : 0.3722943722943723,
                "clear_rate" : 0.9956709956709957
            },
            {
                "lv" : 47,
                "genre" : "中華ロック(EX)",
                "song" : "己経忍不住了",
                "pf_rate" : 0.06278026905829596,
                "fc_rate" : 0.16591928251121077,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "乞い祈みの撫子(EX)",
                "song" : "乞い祈みの撫子",
                "pf_rate" : 0.18518518518518517,
                "fc_rate" : 0.3333333333333333,
                "clear_rate" : 0.9861111111111112
            },
            {
                "lv" : 47,
                "genre" : "僕らの旅はどこまでも(EX)",
                "song" : "僕らの旅はどこまでも",
                "pf_rate" : 0.11219512195121951,
                "fc_rate" : 0.375609756097561,
                "clear_rate" : 0.975609756097561
            },
            {
                "lv" : 47,
                "genre" : "元禄花吹雪(EX)",
                "song" : "元禄花吹雪",
                "pf_rate" : 0.08823529411764706,
                "fc_rate" : 0.27647058823529413,
                "clear_rate" : 0.9882352941176471
            },
            {
                "lv" : 47,
                "genre" : "凛として咲く花の如く　～ひなビタ♪edition～(EX)",
                "song" : "凛として咲く花の如く　～ひなビタ♪edition～",
                "pf_rate" : 0.32727272727272727,
                "fc_rate" : 0.5363636363636364,
                "clear_rate" : 0.9863636363636363
            },
            {
                "lv" : 47,
                "genre" : "十界(EX)",
                "song" : "十界",
                "pf_rate" : 0.1625,
                "fc_rate" : 0.2375,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "呪エモ？(EX)",
                "song" : "ミサコの日記（見ちゃダメ！）",
                "pf_rate" : 0.12612612612612611,
                "fc_rate" : 0.32432432432432434,
                "clear_rate" : 0.9819819819819819
            },
            {
                "lv" : 47,
                "genre" : "和風プログレッシブ(EX)",
                "song" : "たまゆら",
                "pf_rate" : 0.2791666666666667,
                "fc_rate" : 0.4708333333333333,
                "clear_rate" : 0.9916666666666667
            },
            {
                "lv" : 47,
                "genre" : "土偶テクノ(EX)",
                "song" : "Dogu Ditty",
                "pf_rate" : 0.15833333333333333,
                "fc_rate" : 0.3625,
                "clear_rate" : 0.9791666666666666
            },
            {
                "lv" : 47,
                "genre" : "在るが儘に(EX)",
                "song" : "在るが儘に",
                "pf_rate" : 0.25365853658536586,
                "fc_rate" : 0.37073170731707317,
                "clear_rate" : 0.9707317073170731
            },
            {
                "lv" : 47,
                "genre" : "地の記　獄編(EX)",
                "song" : "地の記　獄編",
                "pf_rate" : 0.33649289099526064,
                "fc_rate" : 0.4881516587677725,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "大宇宙の法典(EX)",
                "song" : "天庭 おとこのこ編",
                "pf_rate" : 0.20087336244541484,
                "fc_rate" : 0.44541484716157204,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "如雨露姫が世界征服(EX)",
                "song" : "如雨露姫が世界征服",
                "pf_rate" : 0.2882882882882883,
                "fc_rate" : 0.5180180180180181,
                "clear_rate" : 0.990990990990991
            },
            {
                "lv" : 47,
                "genre" : "姫コア(EX)",
                "song" : "KIMONO♥PRINCESS",
                "pf_rate" : 0.23109243697478993,
                "fc_rate" : 0.4579831932773109,
                "clear_rate" : 0.9873949579831933
            },
            {
                "lv" : 47,
                "genre" : "幻想音樂(EX)",
                "song" : "αρχη",
                "pf_rate" : 0.1037344398340249,
                "fc_rate" : 0.3360995850622407,
                "clear_rate" : 0.983402489626556
            },
            {
                "lv" : 47,
                "genre" : "彼女は快刀乱麻(EX)",
                "song" : "彼女は快刀乱麻",
                "pf_rate" : 0.2832618025751073,
                "fc_rate" : 0.4978540772532189,
                "clear_rate" : 0.9828326180257511
            },
            {
                "lv" : 47,
                "genre" : "忍者メタル(EX)",
                "song" : "背水之陣",
                "pf_rate" : 0.07234042553191489,
                "fc_rate" : 0.23404255319148937,
                "clear_rate" : 0.9744680851063829
            },
            {
                "lv" : 47,
                "genre" : "放課後コンチェルティーノ～私だけの部室狂騒曲(EX)",
                "song" : "放課後コンチェルティーノ～私だけの部室狂騒曲",
                "pf_rate" : 0.11235955056179775,
                "fc_rate" : 0.28651685393258425,
                "clear_rate" : 0.9887640449438202
            },
            {
                "lv" : 47,
                "genre" : "昭和ノワール(EX)",
                "song" : "誰がために陽はのぼる",
                "pf_rate" : 0.29831932773109243,
                "fc_rate" : 0.5210084033613446,
                "clear_rate" : 0.9957983193277311
            },
            {
                "lv" : 47,
                "genre" : "暴レ焔(EX)",
                "song" : "暴レ焔",
                "pf_rate" : 0.14732142857142858,
                "fc_rate" : 0.33482142857142855,
                "clear_rate" : 0.9910714285714286
            },
            {
                "lv" : 47,
                "genre" : "朧月覆う雲をも裂きぬ(EX)",
                "song" : "朧月覆う雲をも裂きぬ",
                "pf_rate" : 0.03614457831325301,
                "fc_rate" : 0.18072289156626506,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "漆黒のスペシャルプリンセスサンデー(EX)",
                "song" : "漆黒のスペシャルプリンセスサンデー",
                "pf_rate" : 0.2631578947368421,
                "fc_rate" : 0.46411483253588515,
                "clear_rate" : 0.9904306220095693
            },
            {
                "lv" : 47,
                "genre" : "演説(EX)",
                "song" : "猿の経",
                "pf_rate" : 0.09333333333333334,
                "fc_rate" : 0.3244444444444444,
                "clear_rate" : 0.9777777777777777
            },
            {
                "lv" : 47,
                "genre" : "焔華(EX)",
                "song" : "焔華",
                "pf_rate" : 0.031818181818181815,
                "fc_rate" : 0.12272727272727273,
                "clear_rate" : 0.9772727272727273
            },
            {
                "lv" : 47,
                "genre" : "煌-灼熱の裁き-(EX)",
                "song" : "煌-灼熱の裁き-",
                "pf_rate" : 0.32158590308370044,
                "fc_rate" : 0.4977973568281938,
                "clear_rate" : 0.9955947136563876
            },
            {
                "lv" : 47,
                "genre" : "猫侍の逆襲(EX)",
                "song" : "猫侍の逆襲",
                "pf_rate" : 0.09865470852017937,
                "fc_rate" : 0.3004484304932735,
                "clear_rate" : 0.9775784753363229
            },
            {
                "lv" : 47,
                "genre" : "神曲(EX)",
                "song" : "神曲",
                "pf_rate" : 0.23529411764705882,
                "fc_rate" : 0.5042016806722689,
                "clear_rate" : 0.9915966386554622
            },
            {
                "lv" : 47,
                "genre" : "祭ノ痕、君ヲ憶フ。(EX)",
                "song" : "祭ノ痕、君ヲ憶フ。",
                "pf_rate" : 0.04390243902439024,
                "fc_rate" : 0.08292682926829269,
                "clear_rate" : 0.9804878048780488
            },
            {
                "lv" : 47,
                "genre" : "禅ジャズ(EX)",
                "song" : "明鏡止水",
                "pf_rate" : 0.1038961038961039,
                "fc_rate" : 0.341991341991342,
                "clear_rate" : 0.9913419913419913
            },
            {
                "lv" : 47,
                "genre" : "近代絶頂音楽(EX)",
                "song" : "天庭",
                "pf_rate" : 0.2966101694915254,
                "fc_rate" : 0.538135593220339,
                "clear_rate" : 0.9915254237288136
            },
            {
                "lv" : 47,
                "genre" : "造花の貌(EX)",
                "song" : "造花の貌",
                "pf_rate" : 0.17894736842105263,
                "fc_rate" : 0.3157894736842105,
                "clear_rate" : 0.9894736842105263
            },
            {
                "lv" : 47,
                "genre" : "銃弾は解を撃ち抜いて(EX)",
                "song" : "銃弾は解を撃ち抜いて",
                "pf_rate" : 0.28365384615384615,
                "fc_rate" : 0.47596153846153844,
                "clear_rate" : 0.9951923076923077
            },
            {
                "lv" : 47,
                "genre" : "革命パッショネイト(EX)",
                "song" : "革命パッショネイト",
                "pf_rate" : 0.424390243902439,
                "fc_rate" : 0.5804878048780487,
                "clear_rate" : 0.9804878048780488
            },
            {
                "lv" : 47,
                "genre" : "黎明スケッチブック(EX)",
                "song" : "黎明スケッチブック",
                "pf_rate" : 0.10152284263959391,
                "fc_rate" : 0.25888324873096447,
                "clear_rate" : 0.9898477157360406
            },
            {
                "lv" : 47,
                "genre" : "黒髪乱れし修羅となりて～凛 edition～(EX)",
                "song" : "黒髪乱れし修羅となりて～凛 edition～",
                "pf_rate" : 0.2264957264957265,
                "fc_rate" : 0.3974358974358974,
                "clear_rate" : 0.9743589743589743
            },
            {
                "lv" : 47,
                "genre" : "龍と少女とデコヒーレンス(EX)",
                "song" : "龍と少女とデコヒーレンス",
                "pf_rate" : 0.18565400843881857,
                "fc_rate" : 0.35443037974683544,
                "clear_rate" : 0.9831223628691983
            },
            {
                "lv" : 47,
                "genre" : "Ａ．Ｉ．ダークネス(EX)",
                "song" : "DOES NOT COMPUTE",
                "pf_rate" : 0.3138075313807531,
                "fc_rate" : 0.5230125523012552,
                "clear_rate" : 0.9916317991631799
            },
            {
                "lv" : 47,
                "genre" : "Ｊ‐ロック(EX)",
                "song" : "Romance",
                "pf_rate" : 0.13274336283185842,
                "fc_rate" : 0.6327433628318584,
                "clear_rate" : 1
            },
            {
                "lv" : 47,
                "genre" : "ＪＡＭ(EX)",
                "song" : "HypArcSin(x)",
                "pf_rate" : 0.13302752293577982,
                "fc_rate" : 0.3394495412844037,
                "clear_rate" : 0.9908256880733946
            },
            {
                "lv" : 46,
                "genre" : "\"Schall\" we step？(EX)",
                "song" : "\"Schall\" we step？",
                "pf_rate" : 0.29464285714285715,
                "fc_rate" : 0.5625,
                "clear_rate" : 0.9776785714285714
            },
            {
                "lv" : 46,
                "genre" : "3 A.M. ディテクティブ・ゲーム(EX)",
                "song" : "3 A.M. ディテクティブ・ゲーム",
                "pf_rate" : 0.19617224880382775,
                "fc_rate" : 0.3875598086124402,
                "clear_rate" : 0.9952153110047847
            },
            {
                "lv" : 46,
                "genre" : "532nm(EX)",
                "song" : "532nm",
                "pf_rate" : 0.33771929824561403,
                "fc_rate" : 0.5307017543859649,
                "clear_rate" : 0.9868421052631579
            },
            {
                "lv" : 46,
                "genre" : "8000000(EX)",
                "song" : "8000000",
                "pf_rate" : 0.1509433962264151,
                "fc_rate" : 0.22641509433962265,
                "clear_rate" : 0.9858490566037735
            },
            {
                "lv" : 46,
                "genre" : "Akash(EX)",
                "song" : "Akash",
                "pf_rate" : 0.3181818181818182,
                "fc_rate" : 0.4494949494949495,
                "clear_rate" : 0.9797979797979798
            },
            {
                "lv" : 46,
                "genre" : "Amabie(EX)",
                "song" : "Amabie",
                "pf_rate" : 0.16901408450704225,
                "fc_rate" : 0.22535211267605634,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "Angelic Jelly(EX)",
                "song" : "Angelic Jelly",
                "pf_rate" : 0.07339449541284404,
                "fc_rate" : 0.23853211009174313,
                "clear_rate" : 0.9862385321100917
            },
            {
                "lv" : 46,
                "genre" : "BEEF(EX)",
                "song" : "BEEF",
                "pf_rate" : 0.19230769230769232,
                "fc_rate" : 0.4065934065934066,
                "clear_rate" : 0.9945054945054945
            },
            {
                "lv" : 46,
                "genre" : "BLSTR(EX)",
                "song" : "BLSTR",
                "pf_rate" : 0.2154696132596685,
                "fc_rate" : 0.48066298342541436,
                "clear_rate" : 0.988950276243094
            },
            {
                "lv" : 46,
                "genre" : "Butter-FLY(UPPER)(EX)",
                "song" : "Butter-FLY",
                "pf_rate" : 0.2911392405063291,
                "fc_rate" : 0.34177215189873417,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "CARNIVOROUS(EX)",
                "song" : "CARNIVOROUS",
                "pf_rate" : 0.3626943005181347,
                "fc_rate" : 0.5544041450777202,
                "clear_rate" : 0.9948186528497409
            },
            {
                "lv" : 46,
                "genre" : "CARTOON☆RagHour(EX)",
                "song" : "CARTOON☆RagHour",
                "pf_rate" : 0.18452380952380953,
                "fc_rate" : 0.3273809523809524,
                "clear_rate" : 0.9940476190476191
            },
            {
                "lv" : 46,
                "genre" : "Chaos:Q(H)",
                "song" : "Chaos:Q",
                "pf_rate" : 0.05917159763313609,
                "fc_rate" : 0.20710059171597633,
                "clear_rate" : 0.9171597633136095
            },
            {
                "lv" : 46,
                "genre" : "Come to Life(EX)",
                "song" : "Come to Life",
                "pf_rate" : 0.2537313432835821,
                "fc_rate" : 0.46766169154228854,
                "clear_rate" : 0.9751243781094527
            },
            {
                "lv" : 46,
                "genre" : "Crumble Soul(EX)",
                "song" : "Crumble Soul",
                "pf_rate" : 0.3316582914572864,
                "fc_rate" : 0.48743718592964824,
                "clear_rate" : 0.9949748743718593
            },
            {
                "lv" : 46,
                "genre" : "Dimension Gale(EX)",
                "song" : "Dimension Gale",
                "pf_rate" : 0.3175355450236967,
                "fc_rate" : 0.5213270142180095,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "EBONY &amp; IVORY(EX)",
                "song" : "EBONY & IVORY",
                "pf_rate" : 0.27927927927927926,
                "fc_rate" : 0.47297297297297297,
                "clear_rate" : 0.9819819819819819
            },
            {
                "lv" : 46,
                "genre" : "Fly far bounce(EX)",
                "song" : "Fly far bounce",
                "pf_rate" : 0.11210762331838565,
                "fc_rate" : 0.38565022421524664,
                "clear_rate" : 0.9775784753363229
            },
            {
                "lv" : 46,
                "genre" : "H@appy Fever Forever!!(EX)",
                "song" : "H@appy Fever Forever!!",
                "pf_rate" : 0.13664596273291926,
                "fc_rate" : 0.3167701863354037,
                "clear_rate" : 0.9503105590062112
            },
            {
                "lv" : 46,
                "genre" : "HADROS GALE(EX)",
                "song" : "HADROS GALE",
                "pf_rate" : 0.32653061224489793,
                "fc_rate" : 0.5663265306122449,
                "clear_rate" : 0.9897959183673469
            },
            {
                "lv" : 46,
                "genre" : "Habits(EX)",
                "song" : "Habits",
                "pf_rate" : 0.2169811320754717,
                "fc_rate" : 0.45754716981132076,
                "clear_rate" : 0.9905660377358491
            },
            {
                "lv" : 46,
                "genre" : "High Gravity(EX)",
                "song" : "High Gravity",
                "pf_rate" : 0.3121951219512195,
                "fc_rate" : 0.4585365853658537,
                "clear_rate" : 0.9951219512195122
            },
            {
                "lv" : 46,
                "genre" : "INHERITANCE of WILL(EX)",
                "song" : "INHERITANCE of WILL",
                "pf_rate" : 0.2961165048543689,
                "fc_rate" : 0.44660194174757284,
                "clear_rate" : 0.9902912621359223
            },
            {
                "lv" : 46,
                "genre" : "Little Little Princess(EX)",
                "song" : "Little Little Princess",
                "pf_rate" : 0.4611872146118721,
                "fc_rate" : 0.7031963470319634,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "Over Da Moon(EX)",
                "song" : "Over Da Moon",
                "pf_rate" : 0.3532110091743119,
                "fc_rate" : 0.555045871559633,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "Phlox(EX)",
                "song" : "Phlox",
                "pf_rate" : 0.21782178217821782,
                "fc_rate" : 0.4405940594059406,
                "clear_rate" : 0.9900990099009901
            },
            {
                "lv" : 46,
                "genre" : "SPEED KING ON FIRE(EX)",
                "song" : "SPEED KING ON FIRE",
                "pf_rate" : 0.329608938547486,
                "fc_rate" : 0.5698324022346368,
                "clear_rate" : 0.994413407821229
            },
            {
                "lv" : 46,
                "genre" : "SUPER SUMMER SALE(EX)",
                "song" : "SUPER SUMMER SALE",
                "pf_rate" : 0.2918918918918919,
                "fc_rate" : 0.4972972972972973,
                "clear_rate" : 0.972972972972973
            },
            {
                "lv" : 46,
                "genre" : "Scarlet Pinheel(EX)",
                "song" : "Scarlet Pinheel",
                "pf_rate" : 0.38235294117647056,
                "fc_rate" : 0.5784313725490197,
                "clear_rate" : 0.9950980392156863
            },
            {
                "lv" : 46,
                "genre" : "Six String Proof(EX)",
                "song" : "Six String Proof",
                "pf_rate" : 0.1878453038674033,
                "fc_rate" : 0.39226519337016574,
                "clear_rate" : 0.9779005524861878
            },
            {
                "lv" : 46,
                "genre" : "Sweet,Sweet,Sweet.(EX)",
                "song" : "Sweet,Sweet,Sweet.",
                "pf_rate" : 0.4708994708994709,
                "fc_rate" : 0.6190476190476191,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "TOXIC VIBRATION(EX)",
                "song" : "TOXIC VIBRATION",
                "pf_rate" : 0.2936170212765957,
                "fc_rate" : 0.5063829787234042,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "Welcome to pop'n fantasy(EX)",
                "song" : "Welcome to pop'n fantasy",
                "pf_rate" : 0.35353535353535354,
                "fc_rate" : 0.5404040404040404,
                "clear_rate" : 0.98989898989899
            },
            {
                "lv" : 46,
                "genre" : "Windy Fairy(EX)",
                "song" : "Windy Fairy",
                "pf_rate" : 0.18571428571428572,
                "fc_rate" : 0.38095238095238093,
                "clear_rate" : 0.9857142857142858
            },
            {
                "lv" : 46,
                "genre" : "beat it together(EX)",
                "song" : "beat it together",
                "pf_rate" : 0.2073170731707317,
                "fc_rate" : 0.39634146341463417,
                "clear_rate" : 0.9817073170731707
            },
            {
                "lv" : 46,
                "genre" : "nalca(EX)",
                "song" : "nalca",
                "pf_rate" : 0.2146341463414634,
                "fc_rate" : 0.35121951219512193,
                "clear_rate" : 0.975609756097561
            },
            {
                "lv" : 46,
                "genre" : "perditus†paradisus(UPPER)(H)",
                "song" : "perditus†paradisus",
                "pf_rate" : 0.04807692307692308,
                "fc_rate" : 0.15384615384615385,
                "clear_rate" : 0.9807692307692307
            },
            {
                "lv" : 46,
                "genre" : "√太陽系◎ドーナツ化計画∞∀∞(EX)",
                "song" : "√太陽系◎ドーナツ化計画∞∀∞",
                "pf_rate" : 0.3125,
                "fc_rate" : 0.49038461538461536,
                "clear_rate" : 0.9807692307692307
            },
            {
                "lv" : 46,
                "genre" : "あさきの刺激ロック(EX)",
                "song" : "鳥無き島にて",
                "pf_rate" : 0.21296296296296297,
                "fc_rate" : 0.4351851851851852,
                "clear_rate" : 0.9861111111111112
            },
            {
                "lv" : 46,
                "genre" : "おたすけ！アン子ちゃん (シノビアンレディーのテーマ 弐)(EX)",
                "song" : "おたすけ！アン子ちゃん (シノビアンレディーのテーマ 弐)",
                "pf_rate" : 0.15300546448087432,
                "fc_rate" : 0.3333333333333333,
                "clear_rate" : 0.9781420765027322
            },
            {
                "lv" : 46,
                "genre" : "おーまい！らぶりー！すうぃーてぃ！だーりん！(EX)",
                "song" : "おーまい！らぶりー！すうぃーてぃ！だーりん！",
                "pf_rate" : 0.03225806451612903,
                "fc_rate" : 0.16589861751152074,
                "clear_rate" : 0.9953917050691244
            },
            {
                "lv" : 46,
                "genre" : "ねぶた(EX)",
                "song" : "烏",
                "pf_rate" : 0.39555555555555555,
                "fc_rate" : 0.5244444444444445,
                "clear_rate" : 0.9866666666666667
            },
            {
                "lv" : 46,
                "genre" : "ほしのつくりかた(EX)",
                "song" : "ほしのつくりかた",
                "pf_rate" : 0.30837004405286345,
                "fc_rate" : 0.5154185022026432,
                "clear_rate" : 0.986784140969163
            },
            {
                "lv" : 46,
                "genre" : "わんわんコア(EX)",
                "song" : "ポチコの幸せな日常",
                "pf_rate" : 0.25416666666666665,
                "fc_rate" : 0.48333333333333334,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "アカシックハードコア(EX)",
                "song" : "PRANA",
                "pf_rate" : 0.248868778280543,
                "fc_rate" : 0.40271493212669685,
                "clear_rate" : 0.9773755656108597
            },
            {
                "lv" : 46,
                "genre" : "アジアンコンチェルトREMIX(EX)",
                "song" : "鳳凰～Chinese Phoenix Mix～",
                "pf_rate" : 0.08558558558558559,
                "fc_rate" : 0.20270270270270271,
                "clear_rate" : 0.9774774774774775
            },
            {
                "lv" : 46,
                "genre" : "アニマルミニマル(EX)",
                "song" : "The Zoo Zone",
                "pf_rate" : 0.3698630136986301,
                "fc_rate" : 0.5753424657534246,
                "clear_rate" : 0.9817351598173516
            },
            {
                "lv" : 46,
                "genre" : "アルレシャ(EX)",
                "song" : "アルレシャ",
                "pf_rate" : 0.48444444444444446,
                "fc_rate" : 0.64,
                "clear_rate" : 0.9866666666666667
            },
            {
                "lv" : 46,
                "genre" : "ウェルフェア(EX)",
                "song" : "つばめ",
                "pf_rate" : 0.2608695652173913,
                "fc_rate" : 0.4391304347826087,
                "clear_rate" : 0.991304347826087
            },
            {
                "lv" : 46,
                "genre" : "ウソツキ横丁は雨模様(EX)",
                "song" : "ウソツキ横丁は雨模様",
                "pf_rate" : 0.21153846153846154,
                "fc_rate" : 0.36538461538461536,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "ウラ・バリトランス(EX)",
                "song" : "Denpasar",
                "pf_rate" : 0.3670212765957447,
                "fc_rate" : 0.48936170212765956,
                "clear_rate" : 0.9893617021276596
            },
            {
                "lv" : 46,
                "genre" : "エッジ(EX)",
                "song" : "雷君",
                "pf_rate" : 0.32211538461538464,
                "fc_rate" : 0.5288461538461539,
                "clear_rate" : 0.9903846153846154
            },
            {
                "lv" : 46,
                "genre" : "エモーショナルデュオ(EX)",
                "song" : "カタルシスの月",
                "pf_rate" : 0.3938053097345133,
                "fc_rate" : 0.5619469026548672,
                "clear_rate" : 0.995575221238938
            },
            {
                "lv" : 46,
                "genre" : "エレジィ(EX)",
                "song" : "幸せを謳う詩",
                "pf_rate" : 0.06787330316742081,
                "fc_rate" : 0.49321266968325794,
                "clear_rate" : 0.9909502262443439
            },
            {
                "lv" : 46,
                "genre" : "エージビート(EX)",
                "song" : "NEW PEOPLE",
                "pf_rate" : 0.46919431279620855,
                "fc_rate" : 0.5829383886255924,
                "clear_rate" : 0.995260663507109
            },
            {
                "lv" : 46,
                "genre" : "オービタリックレボリューション(EX)",
                "song" : "Synergy For Angels",
                "pf_rate" : 0.391705069124424,
                "fc_rate" : 0.5806451612903226,
                "clear_rate" : 0.9907834101382489
            },
            {
                "lv" : 46,
                "genre" : "カラーフュージョン(EX)",
                "song" : "Riot of Color",
                "pf_rate" : 0.32,
                "fc_rate" : 0.5777777777777777,
                "clear_rate" : 0.9866666666666667
            },
            {
                "lv" : 46,
                "genre" : "キルト(EX)",
                "song" : "キルト",
                "pf_rate" : 0.4098360655737705,
                "fc_rate" : 0.6311475409836066,
                "clear_rate" : 0.9959016393442623
            },
            {
                "lv" : 46,
                "genre" : "グリーニング(EX)",
                "song" : "Greening",
                "pf_rate" : 0.2145922746781116,
                "fc_rate" : 0.41630901287553645,
                "clear_rate" : 0.9871244635193133
            },
            {
                "lv" : 46,
                "genre" : "ケシゴム(EX)",
                "song" : "School Life",
                "pf_rate" : 0.2722772277227723,
                "fc_rate" : 0.43564356435643564,
                "clear_rate" : 0.9702970297029703
            },
            {
                "lv" : 46,
                "genre" : "ケマリ(EX)",
                "song" : "Kicky Kemari Kicker",
                "pf_rate" : 0.35185185185185186,
                "fc_rate" : 0.5,
                "clear_rate" : 0.9861111111111112
            },
            {
                "lv" : 46,
                "genre" : "ケンドーロック(EX)",
                "song" : "ギターケンドー",
                "pf_rate" : 0.3113207547169811,
                "fc_rate" : 0.45754716981132076,
                "clear_rate" : 0.9952830188679245
            },
            {
                "lv" : 46,
                "genre" : "コスモロジカル(EX)",
                "song" : "UNBOUND MIND",
                "pf_rate" : 0.2009132420091324,
                "fc_rate" : 0.4337899543378995,
                "clear_rate" : 0.9954337899543378
            },
            {
                "lv" : 46,
                "genre" : "コンテンポラリーネイション２(EX)",
                "song" : "サヨナラ・ヘヴン",
                "pf_rate" : 0.15767634854771784,
                "fc_rate" : 0.4896265560165975,
                "clear_rate" : 0.9875518672199171
            },
            {
                "lv" : 46,
                "genre" : "コンテンポラリーネイション３(EX)",
                "song" : "Echoes",
                "pf_rate" : 0.27705627705627706,
                "fc_rate" : 0.48917748917748916,
                "clear_rate" : 0.9783549783549783
            },
            {
                "lv" : 46,
                "genre" : "コンテンポラリーネイション５(EX)",
                "song" : "The Sky of Sadness",
                "pf_rate" : 0.3855932203389831,
                "fc_rate" : 0.6016949152542372,
                "clear_rate" : 0.9957627118644068
            },
            {
                "lv" : 46,
                "genre" : "ゴールデンハート　ft. Kimberley Nutbey(EX)",
                "song" : "ゴールデンハート　ft. Kimberley Nutbey",
                "pf_rate" : 0.3473684210526316,
                "fc_rate" : 0.5842105263157895,
                "clear_rate" : 0.9894736842105263
            },
            {
                "lv" : 46,
                "genre" : "サイケデリックトランス(EX)",
                "song" : "Psyche Planet-V",
                "pf_rate" : 0.22897196261682243,
                "fc_rate" : 0.5093457943925234,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "サイコビリー(EX)",
                "song" : "辞世テンプレート",
                "pf_rate" : 0.19823788546255505,
                "fc_rate" : 0.3436123348017621,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "シンフォノベーティブロック(EX)",
                "song" : "Stella Sinistra",
                "pf_rate" : 0.3333333333333333,
                "fc_rate" : 0.539906103286385,
                "clear_rate" : 0.9812206572769953
            },
            {
                "lv" : 46,
                "genre" : "ジャズ・アリア(EX)",
                "song" : "L'eternita",
                "pf_rate" : 0.20476190476190476,
                "fc_rate" : 0.4666666666666667,
                "clear_rate" : 0.9761904761904762
            },
            {
                "lv" : 46,
                "genre" : "スウィングラテ(EX)",
                "song" : "coffee break",
                "pf_rate" : 0.16589861751152074,
                "fc_rate" : 0.3870967741935484,
                "clear_rate" : 0.9907834101382489
            },
            {
                "lv" : 46,
                "genre" : "スカ(EX)",
                "song" : "Cassandra",
                "pf_rate" : 0.00904977375565611,
                "fc_rate" : 0.21266968325791855,
                "clear_rate" : 0.9909502262443439
            },
            {
                "lv" : 46,
                "genre" : "スクリーン(H)",
                "song" : "GALAXY FOREST 11.6&12 ",
                "pf_rate" : 0.0182648401826484,
                "fc_rate" : 0.1689497716894977,
                "clear_rate" : 0.9954337899543378
            },
            {
                "lv" : 46,
                "genre" : "スケールアウト(H)",
                "song" : "BabeL ～Next Story～",
                "pf_rate" : 0.13963963963963963,
                "fc_rate" : 0.4009009009009009,
                "clear_rate" : 0.9819819819819819
            },
            {
                "lv" : 46,
                "genre" : "ストライフ(EX)",
                "song" : "疾風",
                "pf_rate" : 0.32905982905982906,
                "fc_rate" : 0.5854700854700855,
                "clear_rate" : 0.9914529914529915
            },
            {
                "lv" : 46,
                "genre" : "スパイREMIX(EX)",
                "song" : "SPICY PIECE (Ryu☆Remix)",
                "pf_rate" : 0.1222707423580786,
                "fc_rate" : 0.47161572052401746,
                "clear_rate" : 0.9912663755458515
            },
            {
                "lv" : 46,
                "genre" : "スペースポップ(EX)",
                "song" : "μ9",
                "pf_rate" : 0.23376623376623376,
                "fc_rate" : 0.45021645021645024,
                "clear_rate" : 0.9956709956709957
            },
            {
                "lv" : 46,
                "genre" : "ソウル(EX)",
                "song" : "Gotta Get My Groove On",
                "pf_rate" : 0.4539877300613497,
                "fc_rate" : 0.588957055214724,
                "clear_rate" : 0.9815950920245399
            },
            {
                "lv" : 46,
                "genre" : "ソーサリープログレッシヴ(EX)",
                "song" : "Shining Wizard",
                "pf_rate" : 0.3905579399141631,
                "fc_rate" : 0.5708154506437768,
                "clear_rate" : 0.9914163090128756
            },
            {
                "lv" : 46,
                "genre" : "ダークネス２(EX)",
                "song" : "禁じられた契約",
                "pf_rate" : 0.1262135922330097,
                "fc_rate" : 0.5,
                "clear_rate" : 0.9902912621359223
            },
            {
                "lv" : 46,
                "genre" : "チルノのパーフェクトさんすう教室(EX)",
                "song" : "チルノのパーフェクトさんすう教室",
                "pf_rate" : 0.2675438596491228,
                "fc_rate" : 0.4473684210526316,
                "clear_rate" : 0.9912280701754386
            },
            {
                "lv" : 46,
                "genre" : "ツインヒーロー(EX)",
                "song" : "明日への誓い",
                "pf_rate" : 0.24423963133640553,
                "fc_rate" : 0.4838709677419355,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "デスロック(EX)",
                "song" : "レトロスペクト路",
                "pf_rate" : 0.30660377358490565,
                "fc_rate" : 0.5943396226415094,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "デモンズメタル(EX)",
                "song" : "魔界！痛快！ヘルダンス",
                "pf_rate" : 0.14285714285714285,
                "fc_rate" : 0.3225806451612903,
                "clear_rate" : 0.9907834101382489
            },
            {
                "lv" : 46,
                "genre" : "トライバルポップ(EX)",
                "song" : "Gradation",
                "pf_rate" : 0.4028436018957346,
                "fc_rate" : 0.6255924170616114,
                "clear_rate" : 0.990521327014218
            },
            {
                "lv" : 46,
                "genre" : "トランス(EX)",
                "song" : "Colors",
                "pf_rate" : 0.18777292576419213,
                "fc_rate" : 0.4672489082969432,
                "clear_rate" : 0.9868995633187773
            },
            {
                "lv" : 46,
                "genre" : "ネガメロック(EX)",
                "song" : "繚乱ヒットチャート",
                "pf_rate" : 0.08658008658008658,
                "fc_rate" : 0.22943722943722944,
                "clear_rate" : 0.9826839826839827
            },
            {
                "lv" : 46,
                "genre" : "ハイνブリープ(EX)",
                "song" : "キャトられ♥恋はモ～モク",
                "pf_rate" : 0.2555066079295154,
                "fc_rate" : 0.42290748898678415,
                "clear_rate" : 0.986784140969163
            },
            {
                "lv" : 46,
                "genre" : "ハイコア(EX)",
                "song" : "†渚の小悪魔ラヴリィ～レイディオ†",
                "pf_rate" : 0.3686440677966102,
                "fc_rate" : 0.5466101694915254,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "ハイテンション(EX)",
                "song" : "どうなっちゃったって",
                "pf_rate" : 0.13368983957219252,
                "fc_rate" : 0.5561497326203209,
                "clear_rate" : 0.9893048128342246
            },
            {
                "lv" : 46,
                "genre" : "ハイパージャパネスク３(EX)",
                "song" : "天上の星 ～黎明記～",
                "pf_rate" : 0.2311111111111111,
                "fc_rate" : 0.52,
                "clear_rate" : 0.9777777777777777
            },
            {
                "lv" : 46,
                "genre" : "ハイパーＪロック(EX)",
                "song" : "brave!",
                "pf_rate" : 0.3981042654028436,
                "fc_rate" : 0.5592417061611374,
                "clear_rate" : 0.995260663507109
            },
            {
                "lv" : 46,
                "genre" : "ハッピーサッドコア(EX)",
                "song" : "Engraved Mark",
                "pf_rate" : 0.2511415525114155,
                "fc_rate" : 0.4292237442922374,
                "clear_rate" : 0.9908675799086758
            },
            {
                "lv" : 46,
                "genre" : "バトルダンス(EX)",
                "song" : "シャムシールの舞",
                "pf_rate" : 0.30042918454935624,
                "fc_rate" : 0.5236051502145923,
                "clear_rate" : 0.9914163090128756
            },
            {
                "lv" : 46,
                "genre" : "パーカッシヴ２(EX)",
                "song" : "西麻布水道曲",
                "pf_rate" : 0.09523809523809523,
                "fc_rate" : 0.4095238095238095,
                "clear_rate" : 0.9714285714285714
            },
            {
                "lv" : 46,
                "genre" : "ヒップロック４(EX)",
                "song" : "路男",
                "pf_rate" : 0.2112676056338028,
                "fc_rate" : 0.4788732394366197,
                "clear_rate" : 0.9859154929577465
            },
            {
                "lv" : 46,
                "genre" : "ビッグビート(EX)",
                "song" : "HYENA",
                "pf_rate" : 0.2857142857142857,
                "fc_rate" : 0.4976958525345622,
                "clear_rate" : 0.9861751152073732
            },
            {
                "lv" : 46,
                "genre" : "ピラミッドREMIX(EX)",
                "song" : "永遠という名の媚薬 ～Pyramid Power・Death Match ver.～",
                "pf_rate" : 0.14634146341463414,
                "fc_rate" : 0.36585365853658536,
                "clear_rate" : 0.9707317073170731
            },
            {
                "lv" : 46,
                "genre" : "ファンクフィーバー(EX)",
                "song" : "World Spider Web",
                "pf_rate" : 0.3417085427135678,
                "fc_rate" : 0.5326633165829145,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "フォルクローレ(EX)",
                "song" : "アンデスの太陽",
                "pf_rate" : 0.252212389380531,
                "fc_rate" : 0.5176991150442478,
                "clear_rate" : 0.9867256637168141
            },
            {
                "lv" : 46,
                "genre" : "フロウビート(EX)",
                "song" : "CURUS",
                "pf_rate" : 0.4713114754098361,
                "fc_rate" : 0.7172131147540983,
                "clear_rate" : 0.9918032786885246
            },
            {
                "lv" : 46,
                "genre" : "ブルガリアンリズム(EX)",
                "song" : "Deep Magenta",
                "pf_rate" : 0.31336405529953915,
                "fc_rate" : 0.4976958525345622,
                "clear_rate" : 0.9907834101382489
            },
            {
                "lv" : 46,
                "genre" : "ブルームフュージョン(EX)",
                "song" : "アルストロメリア",
                "pf_rate" : 0.4008097165991903,
                "fc_rate" : 0.6072874493927125,
                "clear_rate" : 0.979757085020243
            },
            {
                "lv" : 46,
                "genre" : "プロレタリア狂騒歌(EX)",
                "song" : "プロレタリア狂騒歌",
                "pf_rate" : 0.2393617021276596,
                "fc_rate" : 0.425531914893617,
                "clear_rate" : 0.9787234042553191
            },
            {
                "lv" : 46,
                "genre" : "ホッテストパーティー(EX)",
                "song" : "will",
                "pf_rate" : 0.3105022831050228,
                "fc_rate" : 0.54337899543379,
                "clear_rate" : 0.9817351598173516
            },
            {
                "lv" : 46,
                "genre" : "ホピタスコピラ(EX)",
                "song" : "ホピタスコピラ",
                "pf_rate" : 0.13559322033898305,
                "fc_rate" : 0.2711864406779661,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "ボタン(EX)",
                "song" : "ボタン",
                "pf_rate" : 0.41397849462365593,
                "fc_rate" : 0.5161290322580645,
                "clear_rate" : 0.989247311827957
            },
            {
                "lv" : 46,
                "genre" : "ボールヅアウトロック(EX)",
                "song" : "プリンシプル",
                "pf_rate" : 0.3936651583710407,
                "fc_rate" : 0.6018099547511312,
                "clear_rate" : 0.995475113122172
            },
            {
                "lv" : 46,
                "genre" : "ポータブルポップ(EX)",
                "song" : "Ensamble Forecast 3/28",
                "pf_rate" : 0.3347457627118644,
                "fc_rate" : 0.5635593220338984,
                "clear_rate" : 0.9957627118644068
            },
            {
                "lv" : 46,
                "genre" : "マイアガル、マイオドル(EX)",
                "song" : "マイアガル、マイオドル",
                "pf_rate" : 0.27014218009478674,
                "fc_rate" : 0.4597156398104265,
                "clear_rate" : 0.985781990521327
            },
            {
                "lv" : 46,
                "genre" : "メロパンク(EX)",
                "song" : "pure",
                "pf_rate" : 0.4090909090909091,
                "fc_rate" : 0.5545454545454546,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "モンゴルREMIX(EX)",
                "song" : "怒れる大きな白い馬～S.S.D.の役～",
                "pf_rate" : 0.3,
                "fc_rate" : 0.505,
                "clear_rate" : 0.995
            },
            {
                "lv" : 46,
                "genre" : "ヨーロピアンブレイクコア(EX)",
                "song" : "Les Vague",
                "pf_rate" : 0.2669683257918552,
                "fc_rate" : 0.4796380090497738,
                "clear_rate" : 0.9773755656108597
            },
            {
                "lv" : 46,
                "genre" : "ラウドミクスチャー＆ラガ(EX)",
                "song" : "Soul On Fire",
                "pf_rate" : 0.14601769911504425,
                "fc_rate" : 0.3495575221238938,
                "clear_rate" : 0.995575221238938
            },
            {
                "lv" : 46,
                "genre" : "ラッキーハードコア(EX)",
                "song" : "Daily Lunch Special",
                "pf_rate" : 0.33476394849785407,
                "fc_rate" : 0.47639484978540775,
                "clear_rate" : 0.9742489270386266
            },
            {
                "lv" : 46,
                "genre" : "ラピストリアの約束(EX)",
                "song" : "ラピストリアの約束",
                "pf_rate" : 0.3141592920353982,
                "fc_rate" : 0.4646017699115044,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "ラボテクノ(EX)",
                "song" : "左脳スパーク",
                "pf_rate" : 0.3201754385964912,
                "fc_rate" : 0.4824561403508772,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "ランカーキラーガール(EX)",
                "song" : "ランカーキラーガール",
                "pf_rate" : 0.4,
                "fc_rate" : 0.5828571428571429,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "レディースメタル(EX)",
                "song" : "麗破唖甦～rebirth～",
                "pf_rate" : 0.17889908256880735,
                "fc_rate" : 0.41743119266055045,
                "clear_rate" : 0.9862385321100917
            },
            {
                "lv" : 46,
                "genre" : "ロックギター(EX)",
                "song" : "ABSOLUTE",
                "pf_rate" : 0.2876712328767123,
                "fc_rate" : 0.547945205479452,
                "clear_rate" : 0.9908675799086758
            },
            {
                "lv" : 46,
                "genre" : "ワールドツアー２(EX)",
                "song" : "Magical 4",
                "pf_rate" : 0.1323529411764706,
                "fc_rate" : 0.39705882352941174,
                "clear_rate" : 0.9803921568627451
            },
            {
                "lv" : 46,
                "genre" : "ヴィジュアル４(EX)",
                "song" : "Desire",
                "pf_rate" : 0.2222222222222222,
                "fc_rate" : 0.4398148148148148,
                "clear_rate" : 0.9953703703703703
            },
            {
                "lv" : 46,
                "genre" : "ヴイエスサウンド(EX)",
                "song" : "異能対決!VS.淀ジョル",
                "pf_rate" : 0.46226415094339623,
                "fc_rate" : 0.6650943396226415,
                "clear_rate" : 0.9952830188679245
            },
            {
                "lv" : 46,
                "genre" : "一揆(EX)",
                "song" : "IKKI! Explosion",
                "pf_rate" : 0.42452830188679247,
                "fc_rate" : 0.6226415094339622,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "一生涯パンク(EX)",
                "song" : "青春の扉",
                "pf_rate" : 0.41708542713567837,
                "fc_rate" : 0.5879396984924623,
                "clear_rate" : 0.9949748743718593
            },
            {
                "lv" : 46,
                "genre" : "一触即発☆禅ガール(EX)",
                "song" : "一触即発☆禅ガール",
                "pf_rate" : 0.15760869565217392,
                "fc_rate" : 0.32065217391304346,
                "clear_rate" : 0.967391304347826
            },
            {
                "lv" : 46,
                "genre" : "乙女繚乱 舞い咲き誇れ(EX)",
                "song" : "乙女繚乱 舞い咲き誇れ",
                "pf_rate" : 0.39148936170212767,
                "fc_rate" : 0.5063829787234042,
                "clear_rate" : 0.9829787234042553
            },
            {
                "lv" : 46,
                "genre" : "乱れた風紀に天罰を(EX)",
                "song" : "乱れた風紀に天罰を",
                "pf_rate" : 0.13131313131313133,
                "fc_rate" : 0.3484848484848485,
                "clear_rate" : 0.9848484848484849
            },
            {
                "lv" : 46,
                "genre" : "人妖絵巻其の二「鬼」～夜叉の祭は終夜～(EX)",
                "song" : "人妖絵巻其の二「鬼」～夜叉の祭は終夜～",
                "pf_rate" : 0.43820224719101125,
                "fc_rate" : 0.6404494382022472,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "六花美人(EX)",
                "song" : "六花美人",
                "pf_rate" : 0.09523809523809523,
                "fc_rate" : 0.19047619047619047,
                "clear_rate" : 0.9619047619047619
            },
            {
                "lv" : 46,
                "genre" : "千年ノ理(EX)",
                "song" : "千年ノ理",
                "pf_rate" : 0.31932773109243695,
                "fc_rate" : 0.6134453781512605,
                "clear_rate" : 0.9831932773109243
            },
            {
                "lv" : 46,
                "genre" : "叛逆のディスパレート(EX)",
                "song" : "叛逆のディスパレート",
                "pf_rate" : 0.25,
                "fc_rate" : 0.4,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "哀彩(EX)",
                "song" : "哀彩",
                "pf_rate" : 0.2669902912621359,
                "fc_rate" : 0.5048543689320388,
                "clear_rate" : 0.9854368932038835
            },
            {
                "lv" : 46,
                "genre" : "哀愁ユーロ(EX)",
                "song" : "MOON",
                "pf_rate" : 0.24347826086956523,
                "fc_rate" : 0.4652173913043478,
                "clear_rate" : 0.9826086956521739
            },
            {
                "lv" : 46,
                "genre" : "土木ロック(EX)",
                "song" : "ガッテンだ！！",
                "pf_rate" : 0.2107843137254902,
                "fc_rate" : 0.47058823529411764,
                "clear_rate" : 0.9803921568627451
            },
            {
                "lv" : 46,
                "genre" : "地方創生☆チクワクティクス(EX)",
                "song" : "地方創生☆チクワクティクス",
                "pf_rate" : 0.2682926829268293,
                "fc_rate" : 0.44878048780487806,
                "clear_rate" : 0.9804878048780488
            },
            {
                "lv" : 46,
                "genre" : "巻寿司戦隊ウマイヤン ～コードネームはグリーン～(EX)",
                "song" : "巻寿司戦隊ウマイヤン ～コードネームはグリーン～",
                "pf_rate" : 0.2538860103626943,
                "fc_rate" : 0.47150259067357514,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "徹頭徹尾Thrive at Perfect Fourth(EX)",
                "song" : "徹頭徹尾Thrive at Perfect Fourth",
                "pf_rate" : 0.1368421052631579,
                "fc_rate" : 0.39473684210526316,
                "clear_rate" : 0.9947368421052631
            },
            {
                "lv" : 46,
                "genre" : "怒りと共に去りぬ！！(EX)",
                "song" : "怒りと共に去りぬ！！",
                "pf_rate" : 0.37435897435897436,
                "fc_rate" : 0.5128205128205128,
                "clear_rate" : 0.9948717948717949
            },
            {
                "lv" : 46,
                "genre" : "悪魔城ドラキュラSLOT2(EX)",
                "song" : "緋月の狂想曲",
                "pf_rate" : 0.25333333333333335,
                "fc_rate" : 0.4711111111111111,
                "clear_rate" : 0.9866666666666667
            },
            {
                "lv" : 46,
                "genre" : "悪魔城ドラキュラSLOT3(EX)",
                "song" : "De-a lungul vietii",
                "pf_rate" : 0.23809523809523808,
                "fc_rate" : 0.46190476190476193,
                "clear_rate" : 0.9904761904761905
            },
            {
                "lv" : 46,
                "genre" : "懐色坂(EX)",
                "song" : "懐色坂",
                "pf_rate" : 0.39903846153846156,
                "fc_rate" : 0.5721153846153846,
                "clear_rate" : 0.9951923076923077
            },
            {
                "lv" : 46,
                "genre" : "撫子メタル(EX)",
                "song" : "黒髪乱れし修羅となりて",
                "pf_rate" : 0.2804878048780488,
                "fc_rate" : 0.483739837398374,
                "clear_rate" : 0.9878048780487805
            },
            {
                "lv" : 46,
                "genre" : "撫子ロック(EX)",
                "song" : "凛として咲く花の如く",
                "pf_rate" : 0.42276422764227645,
                "fc_rate" : 0.6422764227642277,
                "clear_rate" : 0.991869918699187
            },
            {
                "lv" : 46,
                "genre" : "旗（Mystic Mix）(EX)",
                "song" : "旗（Mystic Mix）",
                "pf_rate" : 0.3473684210526316,
                "fc_rate" : 0.5368421052631579,
                "clear_rate" : 0.9842105263157894
            },
            {
                "lv" : 46,
                "genre" : "星屑の夜果て(EX)",
                "song" : "星屑の夜果て",
                "pf_rate" : 0.20441988950276244,
                "fc_rate" : 0.36464088397790057,
                "clear_rate" : 0.988950276243094
            },
            {
                "lv" : 46,
                "genre" : "曼珠沙華(EX)",
                "song" : "曼珠沙華",
                "pf_rate" : 0.2831050228310502,
                "fc_rate" : 0.4977168949771689,
                "clear_rate" : 0.9954337899543378
            },
            {
                "lv" : 46,
                "genre" : "未来派(EX)",
                "song" : "demolizione",
                "pf_rate" : 0.38095238095238093,
                "fc_rate" : 0.5571428571428572,
                "clear_rate" : 0.9904761904761905
            },
            {
                "lv" : 46,
                "genre" : "朱と碧のランページ(EX)",
                "song" : "朱と碧のランページ",
                "pf_rate" : 0.4403292181069959,
                "fc_rate" : 0.6460905349794238,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "水月鏡花のコノテーション(EX)",
                "song" : "水月鏡花のコノテーション",
                "pf_rate" : 0.4541284403669725,
                "fc_rate" : 0.5963302752293578,
                "clear_rate" : 0.9862385321100917
            },
            {
                "lv" : 46,
                "genre" : "流星RAVE REMIX(EX)",
                "song" : "流星☆ハニー Perforation Mix",
                "pf_rate" : 0.29493087557603687,
                "fc_rate" : 0.45161290322580644,
                "clear_rate" : 0.9815668202764977
            },
            {
                "lv" : 46,
                "genre" : "浪漫歌謡(EX)",
                "song" : "滅びに至るエランプシス",
                "pf_rate" : 0.3881278538812785,
                "fc_rate" : 0.5799086757990868,
                "clear_rate" : 0.9908675799086758
            },
            {
                "lv" : 46,
                "genre" : "熱情のサパデアード(EX)",
                "song" : "熱情のサパデアード",
                "pf_rate" : 0.5212765957446809,
                "fc_rate" : 0.675531914893617,
                "clear_rate" : 0.9946808510638298
            },
            {
                "lv" : 46,
                "genre" : "理系ポップ(EX)",
                "song" : "恋はどう？モロ◎波動OK☆方程式！！",
                "pf_rate" : 0.3724696356275304,
                "fc_rate" : 0.5546558704453441,
                "clear_rate" : 0.9838056680161943
            },
            {
                "lv" : 46,
                "genre" : "空想モダニズム -Alice Schach remix-(EX)",
                "song" : "空想モダニズム -Alice Schach remix-",
                "pf_rate" : 0.07042253521126761,
                "fc_rate" : 0.18309859154929578,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "空想モダニズム(EX)",
                "song" : "空想モダニズム",
                "pf_rate" : 0.5317073170731708,
                "fc_rate" : 0.6341463414634146,
                "clear_rate" : 0.9951219512195122
            },
            {
                "lv" : 46,
                "genre" : "萌えおこし電波ソング(EX)",
                "song" : "めうめうぺったんたん！！",
                "pf_rate" : 0.25523012552301255,
                "fc_rate" : 0.4393305439330544,
                "clear_rate" : 0.9916317991631799
            },
            {
                "lv" : 46,
                "genre" : "蒼い弓箭(EX)",
                "song" : "蒼い弓箭",
                "pf_rate" : 0.38288288288288286,
                "fc_rate" : 0.5765765765765766,
                "clear_rate" : 0.9954954954954955
            },
            {
                "lv" : 46,
                "genre" : "蒼が消えるとき(EX)",
                "song" : "蒼が消えるとき",
                "pf_rate" : 0.10043668122270742,
                "fc_rate" : 0.2445414847161572,
                "clear_rate" : 0.9781659388646288
            },
            {
                "lv" : 46,
                "genre" : "零と弌の鍵の唄(EX)",
                "song" : "零と弌の鍵の唄",
                "pf_rate" : 0.30985915492957744,
                "fc_rate" : 0.5070422535211268,
                "clear_rate" : 0.9859154929577465
            },
            {
                "lv" : 46,
                "genre" : "青春剛速球メタル(EX)",
                "song" : "マインド・ゲーム",
                "pf_rate" : 0.36787564766839376,
                "fc_rate" : 0.5440414507772021,
                "clear_rate" : 0.9896373056994818
            },
            {
                "lv" : 46,
                "genre" : "黒き螺旋のクレイドル(EX)",
                "song" : "黒き螺旋のクレイドル",
                "pf_rate" : 0.22784810126582278,
                "fc_rate" : 0.46835443037974683,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "黒点(EX)",
                "song" : "黒点",
                "pf_rate" : 0.09359605911330049,
                "fc_rate" : 0.3694581280788177,
                "clear_rate" : 0.9950738916256158
            },
            {
                "lv" : 46,
                "genre" : "黒船ファンク(EX)",
                "song" : "ペリーでぇす！",
                "pf_rate" : 0.33031674208144796,
                "fc_rate" : 0.5610859728506787,
                "clear_rate" : 1
            },
            {
                "lv" : 46,
                "genre" : "Ｊ‐ロックΦNEW(EX)",
                "song" : "Alicy",
                "pf_rate" : 0.28502415458937197,
                "fc_rate" : 0.47342995169082125,
                "clear_rate" : 0.9855072463768116
            },
            {
                "lv" : 46,
                "genre" : "ＪＶ‐ＲＯＣＫ(EX)",
                "song" : "洟・月・奇蹟",
                "pf_rate" : 0.13574660633484162,
                "fc_rate" : 0.28054298642533937,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "90G Race(EX)",
                "song" : "90G Race",
                "pf_rate" : 0.42134831460674155,
                "fc_rate" : 0.7078651685393258,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "BLACK JACKAL(EX)",
                "song" : "BLACK JACKAL",
                "pf_rate" : 0.4245810055865922,
                "fc_rate" : 0.5698324022346368,
                "clear_rate" : 0.994413407821229
            },
            {
                "lv" : 45,
                "genre" : "BLAZE∞BREEZE  - WHITE LIE Version -(EX)",
                "song" : "BLAZE∞BREEZE  - WHITE LIE Version -",
                "pf_rate" : 0.2777777777777778,
                "fc_rate" : 0.4074074074074074,
                "clear_rate" : 0.9814814814814815
            },
            {
                "lv" : 45,
                "genre" : "Beyond the prairie(EX)",
                "song" : "Beyond the prairie",
                "pf_rate" : 0.30952380952380953,
                "fc_rate" : 0.5238095238095238,
                "clear_rate" : 0.9940476190476191
            },
            {
                "lv" : 45,
                "genre" : "DEVIL’s Magic(EX)",
                "song" : "DEVIL’s Magic",
                "pf_rate" : 0.43333333333333335,
                "fc_rate" : 0.6277777777777778,
                "clear_rate" : 0.9888888888888889
            },
            {
                "lv" : 45,
                "genre" : "Dive to the Sky(EX)",
                "song" : "Dive to the Sky",
                "pf_rate" : 0.42771084337349397,
                "fc_rate" : 0.6204819277108434,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "Erosion Mark(EX)",
                "song" : "Erosion Mark",
                "pf_rate" : 0.3147208121827411,
                "fc_rate" : 0.5279187817258884,
                "clear_rate" : 0.9898477157360406
            },
            {
                "lv" : 45,
                "genre" : "FUNKY SUMMER BEACH(EX)",
                "song" : "FUNKY SUMMER BEACH",
                "pf_rate" : 0.46116504854368934,
                "fc_rate" : 0.6601941747572816,
                "clear_rate" : 0.9854368932038835
            },
            {
                "lv" : 45,
                "genre" : "KHAMEN BREAK(EX)",
                "song" : "KHAMEN BREAK",
                "pf_rate" : 0.4009009009009009,
                "fc_rate" : 0.6486486486486487,
                "clear_rate" : 0.9954954954954955
            },
            {
                "lv" : 45,
                "genre" : "L-an!ma(H)",
                "song" : "L-an!ma",
                "pf_rate" : 0.2094240837696335,
                "fc_rate" : 0.47643979057591623,
                "clear_rate" : 0.9947643979057592
            },
            {
                "lv" : 45,
                "genre" : "Last Traveller(EX)",
                "song" : "Last Traveller",
                "pf_rate" : 0.3977272727272727,
                "fc_rate" : 0.5738636363636364,
                "clear_rate" : 0.9829545454545454
            },
            {
                "lv" : 45,
                "genre" : "MAGICAL SUMMER SMILE(EX)",
                "song" : "MAGICAL SUMMER SMILE",
                "pf_rate" : 0.2875,
                "fc_rate" : 0.4625,
                "clear_rate" : 0.99375
            },
            {
                "lv" : 45,
                "genre" : "On Your Mark(EX)",
                "song" : "On Your Mark",
                "pf_rate" : 0.449438202247191,
                "fc_rate" : 0.6292134831460674,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "QuoN(H)",
                "song" : "QuoN",
                "pf_rate" : 0.24277456647398843,
                "fc_rate" : 0.4624277456647399,
                "clear_rate" : 0.9653179190751445
            },
            {
                "lv" : 45,
                "genre" : "Red Cape Theorem(EX)",
                "song" : "Red Cape Theorem",
                "pf_rate" : 0.21428571428571427,
                "fc_rate" : 0.3392857142857143,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "Sephirot(EX)",
                "song" : "Sephirot",
                "pf_rate" : 0.18324607329842932,
                "fc_rate" : 0.450261780104712,
                "clear_rate" : 0.9738219895287958
            },
            {
                "lv" : 45,
                "genre" : "Shock Me(EX)",
                "song" : "Shock Me",
                "pf_rate" : 0.5538461538461539,
                "fc_rate" : 0.6820512820512821,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "Sing a Song Sign(EX)",
                "song" : "Sing a Song Sign",
                "pf_rate" : 0.3523809523809524,
                "fc_rate" : 0.5666666666666667,
                "clear_rate" : 0.9904761904761905
            },
            {
                "lv" : 45,
                "genre" : "Spangles(EX)",
                "song" : "Spangles",
                "pf_rate" : 0.4111111111111111,
                "fc_rate" : 0.5833333333333334,
                "clear_rate" : 0.9833333333333333
            },
            {
                "lv" : 45,
                "genre" : "Sprite Digital(EX)",
                "song" : "Sprite Digital",
                "pf_rate" : 0.4624277456647399,
                "fc_rate" : 0.6127167630057804,
                "clear_rate" : 0.9942196531791907
            },
            {
                "lv" : 45,
                "genre" : "Struggle(EX)",
                "song" : "Struggle",
                "pf_rate" : 0.3922413793103448,
                "fc_rate" : 0.5948275862068966,
                "clear_rate" : 0.9870689655172413
            },
            {
                "lv" : 45,
                "genre" : "Symsonic Breeze(EX)",
                "song" : "Symsonic Breeze",
                "pf_rate" : 0.3253588516746411,
                "fc_rate" : 0.4880382775119617,
                "clear_rate" : 0.9760765550239234
            },
            {
                "lv" : 45,
                "genre" : "Time has no money(EX)",
                "song" : "Time has no money",
                "pf_rate" : 0.4121212121212121,
                "fc_rate" : 0.503030303030303,
                "clear_rate" : 0.9878787878787879
            },
            {
                "lv" : 45,
                "genre" : "Usual Days-remix(EX)",
                "song" : "Usual Days-remix",
                "pf_rate" : 0.5204081632653061,
                "fc_rate" : 0.7091836734693877,
                "clear_rate" : 0.9897959183673469
            },
            {
                "lv" : 45,
                "genre" : "VERSUS!!(EX)",
                "song" : "VERSUS!!",
                "pf_rate" : 0.17894736842105263,
                "fc_rate" : 0.43157894736842106,
                "clear_rate" : 0.9736842105263158
            },
            {
                "lv" : 45,
                "genre" : "Who done it?!(EX)",
                "song" : "Who done it?!",
                "pf_rate" : 0.3452914798206278,
                "fc_rate" : 0.5426008968609866,
                "clear_rate" : 0.9775784753363229
            },
            {
                "lv" : 45,
                "genre" : "badass girl(EX)",
                "song" : "badass girl",
                "pf_rate" : 0.22085889570552147,
                "fc_rate" : 0.4294478527607362,
                "clear_rate" : 0.9754601226993865
            },
            {
                "lv" : 45,
                "genre" : "draw!!!!(EX)",
                "song" : "draw!!!!",
                "pf_rate" : 0.47959183673469385,
                "fc_rate" : 0.6275510204081632,
                "clear_rate" : 0.9897959183673469
            },
            {
                "lv" : 45,
                "genre" : "home.(kors k Remix)(EX)",
                "song" : "home.(kors k Remix)",
                "pf_rate" : 0.39572192513368987,
                "fc_rate" : 0.5614973262032086,
                "clear_rate" : 0.983957219251337
            },
            {
                "lv" : 45,
                "genre" : "perditus†paradisus(H)",
                "song" : "perditus†paradisus",
                "pf_rate" : 0.17365269461077845,
                "fc_rate" : 0.3532934131736527,
                "clear_rate" : 0.9640718562874252
            },
            {
                "lv" : 45,
                "genre" : "НУМЛ(H)",
                "song" : "НУМЛ",
                "pf_rate" : 0.17058823529411765,
                "fc_rate" : 0.4176470588235294,
                "clear_rate" : 0.9764705882352941
            },
            {
                "lv" : 45,
                "genre" : "にじいろ☆とらべらぁず(EX)",
                "song" : "にじいろ☆とらべらぁず",
                "pf_rate" : 0.23076923076923078,
                "fc_rate" : 0.4125874125874126,
                "clear_rate" : 0.993006993006993
            },
            {
                "lv" : 45,
                "genre" : "ひまわりと散歩道(EX)",
                "song" : "ひまわりと散歩道",
                "pf_rate" : 0.41798941798941797,
                "fc_rate" : 0.5714285714285714,
                "clear_rate" : 0.9894179894179894
            },
            {
                "lv" : 45,
                "genre" : "アキネイション(EX)",
                "song" : "アキネイション",
                "pf_rate" : 0.37799043062200954,
                "fc_rate" : 0.583732057416268,
                "clear_rate" : 0.9808612440191388
            },
            {
                "lv" : 45,
                "genre" : "アジアンコンチェルト(EX)",
                "song" : "鳳凰",
                "pf_rate" : 0.43601895734597157,
                "fc_rate" : 0.6445497630331753,
                "clear_rate" : 0.995260663507109
            },
            {
                "lv" : 45,
                "genre" : "アフロパーカッションパーティー(EX)",
                "song" : "Earth Beat",
                "pf_rate" : 0.44339622641509435,
                "fc_rate" : 0.6839622641509434,
                "clear_rate" : 0.9905660377358491
            },
            {
                "lv" : 45,
                "genre" : "アンセムトランス(EX)",
                "song" : "Votum　stellarum",
                "pf_rate" : 0.1013215859030837,
                "fc_rate" : 0.5550660792951542,
                "clear_rate" : 0.9911894273127754
            },
            {
                "lv" : 45,
                "genre" : "インフィニティ(EX)",
                "song" : "kaleidoscope",
                "pf_rate" : 0.4213197969543147,
                "fc_rate" : 0.6142131979695431,
                "clear_rate" : 0.9898477157360406
            },
            {
                "lv" : 45,
                "genre" : "ウィンターポップ(EX)",
                "song" : "White Lovers",
                "pf_rate" : 0.4857142857142857,
                "fc_rate" : 0.68,
                "clear_rate" : 0.9942857142857143
            },
            {
                "lv" : 45,
                "genre" : "エイジロック(EX)",
                "song" : "カリスマ（ゲームサイズ）",
                "pf_rate" : 0.5024154589371981,
                "fc_rate" : 0.6376811594202898,
                "clear_rate" : 0.9903381642512077
            },
            {
                "lv" : 45,
                "genre" : "エナジーロック(EX)",
                "song" : "夢と現実",
                "pf_rate" : 0.45226130653266333,
                "fc_rate" : 0.6080402010050251,
                "clear_rate" : 0.9698492462311558
            },
            {
                "lv" : 45,
                "genre" : "エピックポエトリー(EX)",
                "song" : "Blind Justice ～Torn souls, Hurt Faiths ～",
                "pf_rate" : 0.5362903225806451,
                "fc_rate" : 0.8266129032258065,
                "clear_rate" : 0.9838709677419355
            },
            {
                "lv" : 45,
                "genre" : "エモクトロ(EX)",
                "song" : "少年リップルズ",
                "pf_rate" : 0.4978902953586498,
                "fc_rate" : 0.6286919831223629,
                "clear_rate" : 0.9915611814345991
            },
            {
                "lv" : 45,
                "genre" : "エレクトリックマヌーシュスウィング(EX)",
                "song" : "デッドボヲルdeホームラン",
                "pf_rate" : 0.31683168316831684,
                "fc_rate" : 0.5247524752475248,
                "clear_rate" : 0.9851485148514851
            },
            {
                "lv" : 45,
                "genre" : "エレクトロショック(EX)",
                "song" : "attack in the minor key",
                "pf_rate" : 0.40444444444444444,
                "fc_rate" : 0.5777777777777777,
                "clear_rate" : 0.9955555555555555
            },
            {
                "lv" : 45,
                "genre" : "エレクトロスウィング(EX)",
                "song" : "Broadway Diva",
                "pf_rate" : 0.20725388601036268,
                "fc_rate" : 0.49740932642487046,
                "clear_rate" : 0.9792746113989638
            },
            {
                "lv" : 45,
                "genre" : "エレフラッドウェイヴ(EX)",
                "song" : "Aqua",
                "pf_rate" : 0.6273584905660378,
                "fc_rate" : 0.7924528301886793,
                "clear_rate" : 0.9952830188679245
            },
            {
                "lv" : 45,
                "genre" : "エレメンタルジグ(EX)",
                "song" : "The Sealer ～ア・ミリアとミリアの民～",
                "pf_rate" : 0.5,
                "fc_rate" : 0.7117117117117117,
                "clear_rate" : 0.990990990990991
            },
            {
                "lv" : 45,
                "genre" : "オリエンタルフォークロア(EX)",
                "song" : "旗",
                "pf_rate" : 0.4174757281553398,
                "fc_rate" : 0.5631067961165048,
                "clear_rate" : 0.9805825242718447
            },
            {
                "lv" : 45,
                "genre" : "オービタリックテクノ(EX)",
                "song" : "Flow",
                "pf_rate" : 0.22167487684729065,
                "fc_rate" : 0.5615763546798029,
                "clear_rate" : 0.9753694581280788
            },
            {
                "lv" : 45,
                "genre" : "カドルコア(UPPER)(EX)",
                "song" : "murmur twins(guitar pop ver.)",
                "pf_rate" : 0.5502645502645502,
                "fc_rate" : 0.6666666666666666,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "ガムラン(EX)",
                "song" : "Klungkung 1655",
                "pf_rate" : 0.413953488372093,
                "fc_rate" : 0.6232558139534884,
                "clear_rate" : 0.9906976744186047
            },
            {
                "lv" : 45,
                "genre" : "ガムラントランス(EX)",
                "song" : "Gamelan de Couple",
                "pf_rate" : 0.3786407766990291,
                "fc_rate" : 0.6213592233009708,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "ガールズロック(EX)",
                "song" : "BRE∀K DOWN!",
                "pf_rate" : 0.49038461538461536,
                "fc_rate" : 0.7884615384615384,
                "clear_rate" : 0.9951923076923077
            },
            {
                "lv" : 45,
                "genre" : "ガールズロック(EX)",
                "song" : "☆shining☆",
                "pf_rate" : 0.6055045871559633,
                "fc_rate" : 0.7293577981651376,
                "clear_rate" : 0.981651376146789
            },
            {
                "lv" : 45,
                "genre" : "ガールズロックエクストリーム(EX)",
                "song" : "チカラ",
                "pf_rate" : 0.12682926829268293,
                "fc_rate" : 0.5463414634146342,
                "clear_rate" : 0.9902439024390244
            },
            {
                "lv" : 45,
                "genre" : "キリステゴメン(EX)",
                "song" : "キリステゴメン",
                "pf_rate" : 0.4079601990049751,
                "fc_rate" : 0.5920398009950248,
                "clear_rate" : 0.9900497512437811
            },
            {
                "lv" : 45,
                "genre" : "クラシック１１(H)",
                "song" : "想い出をありがとう",
                "pf_rate" : 0,
                "fc_rate" : 0.2857142857142857,
                "clear_rate" : 0.9642857142857143
            },
            {
                "lv" : 45,
                "genre" : "クラシック９(H)",
                "song" : "Hell? or Heaven?",
                "pf_rate" : 0.006024096385542169,
                "fc_rate" : 0.15060240963855423,
                "clear_rate" : 0.9397590361445783
            },
            {
                "lv" : 45,
                "genre" : "クラブジャズ(EX)",
                "song" : "Betty Boo",
                "pf_rate" : 0.10457516339869281,
                "fc_rate" : 0.6013071895424836,
                "clear_rate" : 0.9934640522875817
            },
            {
                "lv" : 45,
                "genre" : "クリスマスプレゼント(EX)",
                "song" : "Pop'n Xmas 2004 ～電子ノウタゴエ～",
                "pf_rate" : 0.25133689839572193,
                "fc_rate" : 0.5026737967914439,
                "clear_rate" : 0.9786096256684492
            },
            {
                "lv" : 45,
                "genre" : "グラディウス(EX)",
                "song" : "GRADIUS -FULL SPEED-",
                "pf_rate" : 0.15048543689320387,
                "fc_rate" : 0.4223300970873786,
                "clear_rate" : 0.9757281553398058
            },
            {
                "lv" : 45,
                "genre" : "コンテンポラリーネイション４(EX)",
                "song" : "Tree in Lake ～消えたチチカカの木～",
                "pf_rate" : 0.1990521327014218,
                "fc_rate" : 0.45023696682464454,
                "clear_rate" : 0.990521327014218
            },
            {
                "lv" : 45,
                "genre" : "コンビニサーガ(EX)",
                "song" : "24時間のヒーロー",
                "pf_rate" : 0.4318181818181818,
                "fc_rate" : 0.6227272727272727,
                "clear_rate" : 0.9954545454545455
            },
            {
                "lv" : 45,
                "genre" : "サイバーアラビアン(EX)",
                "song" : "Arrabbiata",
                "pf_rate" : 0.24880382775119617,
                "fc_rate" : 0.49760765550239233,
                "clear_rate" : 0.9808612440191388
            },
            {
                "lv" : 45,
                "genre" : "シノビシノノメ(EX)",
                "song" : "シノビシノノメ",
                "pf_rate" : 0.449438202247191,
                "fc_rate" : 0.6235955056179775,
                "clear_rate" : 0.9943820224719101
            },
            {
                "lv" : 45,
                "genre" : "シュピーゲル(EX)",
                "song" : "水鏡",
                "pf_rate" : 0.41517857142857145,
                "fc_rate" : 0.6607142857142857,
                "clear_rate" : 0.9866071428571429
            },
            {
                "lv" : 45,
                "genre" : "ジュブナイルロック(EX)",
                "song" : "偽りのアルカディア",
                "pf_rate" : 0.35406698564593303,
                "fc_rate" : 0.5885167464114832,
                "clear_rate" : 0.9856459330143541
            },
            {
                "lv" : 45,
                "genre" : "スカーレット(EX)",
                "song" : "紅焔",
                "pf_rate" : 0.29777777777777775,
                "fc_rate" : 0.5377777777777778,
                "clear_rate" : 0.9866666666666667
            },
            {
                "lv" : 45,
                "genre" : "スノーウィーコア(EX)",
                "song" : "snow prism",
                "pf_rate" : 0.3826086956521739,
                "fc_rate" : 0.5826086956521739,
                "clear_rate" : 0.9956521739130435
            },
            {
                "lv" : 45,
                "genre" : "スペースオペラ(EX)",
                "song" : "Stardust Wanderers",
                "pf_rate" : 0.16580310880829016,
                "fc_rate" : 0.47668393782383417,
                "clear_rate" : 0.9689119170984456
            },
            {
                "lv" : 45,
                "genre" : "スペースワルツ(EX)",
                "song" : "flutter",
                "pf_rate" : 0.04736842105263158,
                "fc_rate" : 0.38421052631578945,
                "clear_rate" : 0.9894736842105263
            },
            {
                "lv" : 45,
                "genre" : "テクノポップ(EX)",
                "song" : "321 STARS",
                "pf_rate" : 0.14761904761904762,
                "fc_rate" : 0.5333333333333333,
                "clear_rate" : 0.9761904761904762
            },
            {
                "lv" : 45,
                "genre" : "デスボサ(EX)",
                "song" : "SUN/光線",
                "pf_rate" : 0.5458715596330275,
                "fc_rate" : 0.7155963302752294,
                "clear_rate" : 0.9954128440366973
            },
            {
                "lv" : 45,
                "genre" : "デュアルメモリ(EX)",
                "song" : "デュアルメモリ",
                "pf_rate" : 0.3854166666666667,
                "fc_rate" : 0.5625,
                "clear_rate" : 0.9895833333333334
            },
            {
                "lv" : 45,
                "genre" : "トイコンテンポラリー(H)",
                "song" : "シュレーディンガーの猫",
                "pf_rate" : 0.22807017543859648,
                "fc_rate" : 0.4824561403508772,
                "clear_rate" : 0.9692982456140351
            },
            {
                "lv" : 45,
                "genre" : "トゥイーポップ(EX)",
                "song" : "７７７",
                "pf_rate" : 0.44075829383886256,
                "fc_rate" : 0.5971563981042654,
                "clear_rate" : 0.981042654028436
            },
            {
                "lv" : 45,
                "genre" : "トザン(EX)",
                "song" : "登山者たち",
                "pf_rate" : 0.4292929292929293,
                "fc_rate" : 0.601010101010101,
                "clear_rate" : 0.9949494949494949
            },
            {
                "lv" : 45,
                "genre" : "トライ▼ユーロ(EX)",
                "song" : "Let's go out!",
                "pf_rate" : 0.3004694835680751,
                "fc_rate" : 0.539906103286385,
                "clear_rate" : 0.9906103286384976
            },
            {
                "lv" : 45,
                "genre" : "ドラムステップ(EX)",
                "song" : "Empathetic",
                "pf_rate" : 0.26737967914438504,
                "fc_rate" : 0.4385026737967914,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "ドラムンフライ(H)",
                "song" : "テンプラ揚三",
                "pf_rate" : 0.08755760368663594,
                "fc_rate" : 0.31797235023041476,
                "clear_rate" : 0.9769585253456221
            },
            {
                "lv" : 45,
                "genre" : "ネオ・サイコ・ロ・イズム(EX)",
                "song" : "ネオ・サイコ・ロ・イズム",
                "pf_rate" : 0.23636363636363636,
                "fc_rate" : 0.38181818181818183,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "ハイスピード幻想チューン(EX)",
                "song" : "SHION",
                "pf_rate" : 0.4732510288065844,
                "fc_rate" : 0.691358024691358,
                "clear_rate" : 0.9958847736625515
            },
            {
                "lv" : 45,
                "genre" : "ハイテンションギャルロック(EX)",
                "song" : "イブの時代っ！",
                "pf_rate" : 0.47555555555555556,
                "fc_rate" : 0.6844444444444444,
                "clear_rate" : 0.9955555555555555
            },
            {
                "lv" : 45,
                "genre" : "ハイパーファンタジア(EX)",
                "song" : "Fantasia",
                "pf_rate" : 0.3114754098360656,
                "fc_rate" : 0.5163934426229508,
                "clear_rate" : 0.9877049180327869
            },
            {
                "lv" : 45,
                "genre" : "ハイパーロッケンローレ(EX)",
                "song" : "エイプリルフールの唄",
                "pf_rate" : 0.4327731092436975,
                "fc_rate" : 0.5672268907563025,
                "clear_rate" : 0.9915966386554622
            },
            {
                "lv" : 45,
                "genre" : "ハッピーキュートコア(EX)",
                "song" : "starmine (pop'n mixxx)",
                "pf_rate" : 0.4253393665158371,
                "fc_rate" : 0.6244343891402715,
                "clear_rate" : 0.9819004524886877
            },
            {
                "lv" : 45,
                "genre" : "ハンズアップ(EX)",
                "song" : "Second Heaven",
                "pf_rate" : 0.33195020746887965,
                "fc_rate" : 0.5311203319502075,
                "clear_rate" : 0.979253112033195
            },
            {
                "lv" : 45,
                "genre" : "ハードロック(EX)",
                "song" : "SA-DA-ME",
                "pf_rate" : 0.4386792452830189,
                "fc_rate" : 0.5377358490566038,
                "clear_rate" : 0.9905660377358491
            },
            {
                "lv" : 45,
                "genre" : "バイオテクノ(EX)",
                "song" : "彙電子奏叉",
                "pf_rate" : 0.3403141361256545,
                "fc_rate" : 0.5445026178010471,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "パペットアンサンブル(EX)",
                "song" : "セレクトショップに横たわるネコ",
                "pf_rate" : 0.2774869109947644,
                "fc_rate" : 0.5759162303664922,
                "clear_rate" : 0.9947643979057592
            },
            {
                "lv" : 45,
                "genre" : "ヒップロック(EX)",
                "song" : "大見解",
                "pf_rate" : 0.25,
                "fc_rate" : 0.45,
                "clear_rate" : 0.990909090909091
            },
            {
                "lv" : 45,
                "genre" : "ヒートアップ(EX)",
                "song" : "Ignited Night",
                "pf_rate" : 0.5225225225225225,
                "fc_rate" : 0.6891891891891891,
                "clear_rate" : 0.990990990990991
            },
            {
                "lv" : 45,
                "genre" : "ビートニク(EX)",
                "song" : "UPBEAT",
                "pf_rate" : 0.2887700534759358,
                "fc_rate" : 0.49732620320855614,
                "clear_rate" : 0.9679144385026738
            },
            {
                "lv" : 45,
                "genre" : "ファッシネイション(EX)",
                "song" : "朧",
                "pf_rate" : 0.5515873015873016,
                "fc_rate" : 0.7261904761904762,
                "clear_rate" : 0.9761904761904762
            },
            {
                "lv" : 45,
                "genre" : "ファンキーコタ(EX)",
                "song" : "AKATSUKI",
                "pf_rate" : 0.5203619909502263,
                "fc_rate" : 0.7330316742081447,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "ファンタジアフュージョン(EX)",
                "song" : "プロキオンの騎士団",
                "pf_rate" : 0.385,
                "fc_rate" : 0.57,
                "clear_rate" : 0.995
            },
            {
                "lv" : 45,
                "genre" : "フォレストスノウ(EX)",
                "song" : "月雪に舞う花のように",
                "pf_rate" : 0.3568075117370892,
                "fc_rate" : 0.5868544600938967,
                "clear_rate" : 0.9765258215962441
            },
            {
                "lv" : 45,
                "genre" : "フラッター現象の顛末と単一指向性の感情論(EX)",
                "song" : "フラッター現象の顛末と単一指向性の感情論",
                "pf_rate" : 0.35294117647058826,
                "fc_rate" : 0.5240641711229946,
                "clear_rate" : 0.983957219251337
            },
            {
                "lv" : 45,
                "genre" : "フラワーポップREMIX(EX)",
                "song" : "Marigold (Jazzy Hip-Hop Remix)",
                "pf_rate" : 0.3936651583710407,
                "fc_rate" : 0.6470588235294118,
                "clear_rate" : 0.9909502262443439
            },
            {
                "lv" : 45,
                "genre" : "フルーフ(EX)",
                "song" : "水面静かに大地の烈日わたらせて",
                "pf_rate" : 0.32019704433497537,
                "fc_rate" : 0.6108374384236454,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "フロンティア(EX)",
                "song" : "探検ノート",
                "pf_rate" : 0.2857142857142857,
                "fc_rate" : 0.49107142857142855,
                "clear_rate" : 0.9955357142857143
            },
            {
                "lv" : 45,
                "genre" : "プラチナムファンタジア(EX)",
                "song" : "Märchen",
                "pf_rate" : 0.6277056277056277,
                "fc_rate" : 0.7532467532467533,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "プリティ雅(EX)",
                "song" : "突確全回転！",
                "pf_rate" : 0.4696969696969697,
                "fc_rate" : 0.6666666666666666,
                "clear_rate" : 0.9949494949494949
            },
            {
                "lv" : 45,
                "genre" : "ポップコーンパーティー(EX)",
                "song" : "microwave popcorn",
                "pf_rate" : 0.46634615384615385,
                "fc_rate" : 0.5865384615384616,
                "clear_rate" : 0.9903846153846154
            },
            {
                "lv" : 45,
                "genre" : "ポップデスコ(EX)",
                "song" : "popdod",
                "pf_rate" : 0.27184466019417475,
                "fc_rate" : 0.4854368932038835,
                "clear_rate" : 0.9805825242718447
            },
            {
                "lv" : 45,
                "genre" : "ポップン体操(EX)",
                "song" : "ヒデオ体操第一",
                "pf_rate" : 0.05759162303664921,
                "fc_rate" : 0.3036649214659686,
                "clear_rate" : 0.9842931937172775
            },
            {
                "lv" : 45,
                "genre" : "マダーロック(EX)",
                "song" : "Treasure Hoard",
                "pf_rate" : 0.4034090909090909,
                "fc_rate" : 0.5965909090909091,
                "clear_rate" : 0.9886363636363636
            },
            {
                "lv" : 45,
                "genre" : "ミクスチャー(EX)",
                "song" : "Jack",
                "pf_rate" : 0.5454545454545454,
                "fc_rate" : 0.7033492822966507,
                "clear_rate" : 0.9904306220095693
            },
            {
                "lv" : 45,
                "genre" : "ミッドナイト☆WAR(EX)",
                "song" : "ミッドナイト☆WAR",
                "pf_rate" : 0.4797979797979798,
                "fc_rate" : 0.6565656565656566,
                "clear_rate" : 0.9848484848484849
            },
            {
                "lv" : 45,
                "genre" : "メカニカルジャズ(EX)",
                "song" : "Apple Butter",
                "pf_rate" : 0.35514018691588783,
                "fc_rate" : 0.5514018691588785,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "メガネロック(EX)",
                "song" : "ポップミュージック論",
                "pf_rate" : 0.4311111111111111,
                "fc_rate" : 0.56,
                "clear_rate" : 0.9955555555555555
            },
            {
                "lv" : 45,
                "genre" : "メタリックサーガ(EX)",
                "song" : "OVER THE LIMIT!",
                "pf_rate" : 0.40669856459330145,
                "fc_rate" : 0.583732057416268,
                "clear_rate" : 0.9856459330143541
            },
            {
                "lv" : 45,
                "genre" : "メッセージソング(EX)",
                "song" : "MY",
                "pf_rate" : 0.15763546798029557,
                "fc_rate" : 0.45320197044334976,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "メロディックスピード(EX)",
                "song" : "TRINITY ARROW",
                "pf_rate" : 0.4449760765550239,
                "fc_rate" : 0.6985645933014354,
                "clear_rate" : 0.9808612440191388
            },
            {
                "lv" : 45,
                "genre" : "モフポップ　ポプコネ(EX)",
                "song" : "アルパカ☆Boooing",
                "pf_rate" : 0.37037037037037035,
                "fc_rate" : 0.5079365079365079,
                "clear_rate" : 0.9947089947089947
            },
            {
                "lv" : 45,
                "genre" : "モフロック(EX)",
                "song" : "moffing",
                "pf_rate" : 0.3632075471698113,
                "fc_rate" : 0.5849056603773585,
                "clear_rate" : 0.9858490566037735
            },
            {
                "lv" : 45,
                "genre" : "ユーラシアロック(EX)",
                "song" : "Infinity Blue",
                "pf_rate" : 0.5807860262008734,
                "fc_rate" : 0.7074235807860262,
                "clear_rate" : 0.9912663755458515
            },
            {
                "lv" : 45,
                "genre" : "ラフロック(EX)",
                "song" : "LOL！",
                "pf_rate" : 0.4034090909090909,
                "fc_rate" : 0.5852272727272727,
                "clear_rate" : 0.9943181818181818
            },
            {
                "lv" : 45,
                "genre" : "ラブリーくのいちポップ(EX)",
                "song" : "くさびかたびら☆下克上! ～ 暗躍の樹海ＭＩＸ ",
                "pf_rate" : 0.33663366336633666,
                "fc_rate" : 0.599009900990099,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "リモーネ・ディ・マッキーナ(EX)",
                "song" : "リモーネ・ディ・マッキーナ",
                "pf_rate" : 0.632183908045977,
                "fc_rate" : 0.7471264367816092,
                "clear_rate" : 0.9942528735632183
            },
            {
                "lv" : 45,
                "genre" : "リンゴロジック(green apple rmx)(EX)",
                "song" : "リンゴロジック(green apple rmx)",
                "pf_rate" : 0.4093567251461988,
                "fc_rate" : 0.6374269005847953,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "レトロフューチャーREMIX(EX)",
                "song" : "Passacaglia（J-RAVE MIX）",
                "pf_rate" : 0.541871921182266,
                "fc_rate" : 0.7044334975369458,
                "clear_rate" : 0.9901477832512315
            },
            {
                "lv" : 45,
                "genre" : "ロシア２(EX)",
                "song" : "レトロ男爵の嘆き",
                "pf_rate" : 0.3160621761658031,
                "fc_rate" : 0.616580310880829,
                "clear_rate" : 0.9844559585492227
            },
            {
                "lv" : 45,
                "genre" : "ロッテルダムテクノ(EX)",
                "song" : "rottel-da-sun",
                "pf_rate" : 0.21359223300970873,
                "fc_rate" : 0.5242718446601942,
                "clear_rate" : 0.9951456310679612
            },
            {
                "lv" : 45,
                "genre" : "ロンロンへ　ライライライ！(EX)",
                "song" : "ロンロンへ　ライライライ！",
                "pf_rate" : 0.3088235294117647,
                "fc_rate" : 0.45098039215686275,
                "clear_rate" : 0.9950980392156863
            },
            {
                "lv" : 45,
                "genre" : "ロービットサンプリング(EX)",
                "song" : "HEAT-BIT-HIT-BEAT",
                "pf_rate" : 0.1926605504587156,
                "fc_rate" : 0.3577981651376147,
                "clear_rate" : 0.9908256880733946
            },
            {
                "lv" : 45,
                "genre" : "ヴィジュアル３(EX)",
                "song" : "Late Riser",
                "pf_rate" : 0.6166666666666667,
                "fc_rate" : 0.7333333333333333,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "乾坤一擲(EX)",
                "song" : "乾坤一擲",
                "pf_rate" : 0.45664739884393063,
                "fc_rate" : 0.630057803468208,
                "clear_rate" : 0.9884393063583815
            },
            {
                "lv" : 45,
                "genre" : "交響的物語(EX)",
                "song" : "駕篭の鳥",
                "pf_rate" : 0.35602094240837695,
                "fc_rate" : 0.5130890052356021,
                "clear_rate" : 0.9947643979057592
            },
            {
                "lv" : 45,
                "genre" : "君の音とAuftakt(EX)",
                "song" : "君の音とAuftakt",
                "pf_rate" : 0.2028985507246377,
                "fc_rate" : 0.4396135265700483,
                "clear_rate" : 0.966183574879227
            },
            {
                "lv" : 45,
                "genre" : "哀愁スカ(EX)",
                "song" : "流",
                "pf_rate" : 0.3130841121495327,
                "fc_rate" : 0.49065420560747663,
                "clear_rate" : 0.9906542056074766
            },
            {
                "lv" : 45,
                "genre" : "大正吸血鬼奇譚(EX)",
                "song" : "大正吸血鬼奇譚",
                "pf_rate" : 0.36065573770491804,
                "fc_rate" : 0.5737704918032787,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "大河REMIX(EX)",
                "song" : "ANAHONIKUY -雪の華PuzzLeMix-",
                "pf_rate" : 0.25133689839572193,
                "fc_rate" : 0.42245989304812837,
                "clear_rate" : 0.983957219251337
            },
            {
                "lv" : 45,
                "genre" : "天鈴少女(EX)",
                "song" : "天鈴少女",
                "pf_rate" : 0.44692737430167595,
                "fc_rate" : 0.5977653631284916,
                "clear_rate" : 0.9888268156424581
            },
            {
                "lv" : 45,
                "genre" : "太極拳(EX)",
                "song" : "個胃X光",
                "pf_rate" : 0.32608695652173914,
                "fc_rate" : 0.625,
                "clear_rate" : 0.9836956521739131
            },
            {
                "lv" : 45,
                "genre" : "妖隠し -あやかしかくし-(EX)",
                "song" : "妖隠し -あやかしかくし-",
                "pf_rate" : 0.3568281938325991,
                "fc_rate" : 0.5506607929515418,
                "clear_rate" : 0.9779735682819384
            },
            {
                "lv" : 45,
                "genre" : "年号ロック(EX)",
                "song" : "すわひでおのゴロゴロ年号覚え唄決定版",
                "pf_rate" : 0.40476190476190477,
                "fc_rate" : 0.5523809523809524,
                "clear_rate" : 0.9904761904761905
            },
            {
                "lv" : 45,
                "genre" : "悪魔城ドラキュラ(EX)",
                "song" : "悪魔城ドラキュラメドレー～ハイブリッド・ヴァージョン～",
                "pf_rate" : 0.3541666666666667,
                "fc_rate" : 0.6041666666666666,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "春風ブローインウィンド(EX)",
                "song" : "春風ブローインウィンド",
                "pf_rate" : 0.4158415841584158,
                "fc_rate" : 0.6485148514851485,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "暗黒サイケデリック(EX)",
                "song" : "暗黒サイケデリック",
                "pf_rate" : 0.4080717488789238,
                "fc_rate" : 0.5874439461883408,
                "clear_rate" : 0.9910313901345291
            },
            {
                "lv" : 45,
                "genre" : "桃ヴィジュアル(EX)",
                "song" : "紅ノ桃",
                "pf_rate" : 0.5243243243243243,
                "fc_rate" : 0.6810810810810811,
                "clear_rate" : 0.9945945945945946
            },
            {
                "lv" : 45,
                "genre" : "歌劇 月夜のアラビア(EX)",
                "song" : "歌劇 月夜のアラビア",
                "pf_rate" : 0.3769633507853403,
                "fc_rate" : 0.5497382198952879,
                "clear_rate" : 0.9895287958115183
            },
            {
                "lv" : 45,
                "genre" : "浅見文彦の事件簿～迷宮荘のワンピース(EX)",
                "song" : "浅見文彦の事件簿～迷宮荘のワンピース",
                "pf_rate" : 0.05454545454545454,
                "fc_rate" : 0.21818181818181817,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "浪速っ子ブギ(EX)",
                "song" : "こなもん屋人情歌",
                "pf_rate" : 0.4647887323943662,
                "fc_rate" : 0.6009389671361502,
                "clear_rate" : 0.9953051643192489
            },
            {
                "lv" : 45,
                "genre" : "滅亡天使 † にこきゅっぴん(EX)",
                "song" : "滅亡天使 † にこきゅっぴん",
                "pf_rate" : 0.4954128440366973,
                "fc_rate" : 0.6788990825688074,
                "clear_rate" : 0.9908256880733946
            },
            {
                "lv" : 45,
                "genre" : "爆臨！！イナカイザー！！(EX)",
                "song" : "爆臨！！イナカイザー！！",
                "pf_rate" : 0.4723926380368098,
                "fc_rate" : 0.6993865030674846,
                "clear_rate" : 0.9938650306748467
            },
            {
                "lv" : 45,
                "genre" : "爆裂再生！フィーバー戦士ポップン14(EX)",
                "song" : "爆裂再生！フィーバー戦士ポップン14",
                "pf_rate" : 0.39705882352941174,
                "fc_rate" : 0.6029411764705882,
                "clear_rate" : 0.9926470588235294
            },
            {
                "lv" : 45,
                "genre" : "琴フュージョン(EX)",
                "song" : "琴古都",
                "pf_rate" : 0.15894039735099338,
                "fc_rate" : 0.609271523178808,
                "clear_rate" : 0.9933774834437086
            },
            {
                "lv" : 45,
                "genre" : "辿る君を超えて(H)",
                "song" : "辿る君を超えて",
                "pf_rate" : 0.08496732026143791,
                "fc_rate" : 0.3137254901960784,
                "clear_rate" : 0.9673202614379085
            },
            {
                "lv" : 45,
                "genre" : "防人想歌(EX)",
                "song" : "防人想歌",
                "pf_rate" : 0.413953488372093,
                "fc_rate" : 0.6139534883720931,
                "clear_rate" : 0.986046511627907
            },
            {
                "lv" : 45,
                "genre" : "雪夜の森のプリャースカ(EX)",
                "song" : "雪夜の森のプリャースカ",
                "pf_rate" : 0.22950819672131148,
                "fc_rate" : 0.5081967213114754,
                "clear_rate" : 0.9890710382513661
            },
            {
                "lv" : 45,
                "genre" : "零の位相(EX)",
                "song" : "零の位相",
                "pf_rate" : 0.38323353293413176,
                "fc_rate" : 0.5209580838323353,
                "clear_rate" : 0.9880239520958084
            },
            {
                "lv" : 45,
                "genre" : "魔理沙は大変なものを盗んでいきました(EX)",
                "song" : "魔理沙は大変なものを盗んでいきました",
                "pf_rate" : 0.2966507177033493,
                "fc_rate" : 0.4688995215311005,
                "clear_rate" : 0.9904306220095693
            },
            {
                "lv" : 45,
                "genre" : "Ｊ‐ポップ(EX)",
                "song" : "Destiny Lovers",
                "pf_rate" : 0.10945273631840796,
                "fc_rate" : 0.5621890547263682,
                "clear_rate" : 1
            },
            {
                "lv" : 45,
                "genre" : "Ｊ‐ロックΦ(EX)",
                "song" : "Looking for...",
                "pf_rate" : 0.06598984771573604,
                "fc_rate" : 0.4873096446700508,
                "clear_rate" : 0.9949238578680203
            },
            {
                "lv" : 45,
                "genre" : "ＵＫヒットチャート(EX)",
                "song" : "MY GIFTS",
                "pf_rate" : 0.5656108597285068,
                "fc_rate" : 0.751131221719457,
                "clear_rate" : 0.9864253393665159
            },
            {
                "lv" : 44,
                "genre" : "Another Texture(EX)",
                "song" : "Another Texture",
                "pf_rate" : 0.31547619047619047,
                "fc_rate" : 0.5119047619047619,
                "clear_rate" : 0.9523809523809523
            },
            {
                "lv" : 44,
                "genre" : "Arcanum Arcanorum(EX)",
                "song" : "Arcanum Arcanorum",
                "pf_rate" : 0.203125,
                "fc_rate" : 0.40625,
                "clear_rate" : 0.984375
            },
            {
                "lv" : 44,
                "genre" : "Baby Sherry(EX)",
                "song" : "Baby Sherry",
                "pf_rate" : 0.39156626506024095,
                "fc_rate" : 0.608433734939759,
                "clear_rate" : 0.9939759036144579
            },
            {
                "lv" : 44,
                "genre" : "Burning Love(EX)",
                "song" : "Burning Love",
                "pf_rate" : 0.1564245810055866,
                "fc_rate" : 0.4022346368715084,
                "clear_rate" : 0.9664804469273743
            },
            {
                "lv" : 44,
                "genre" : "CRAZY WORLD(EX)",
                "song" : "CRAZY WORLD",
                "pf_rate" : 0.30625,
                "fc_rate" : 0.5125,
                "clear_rate" : 0.99375
            },
            {
                "lv" : 44,
                "genre" : "Doo-Wah×Chu!Chu!(EX)",
                "song" : "Doo-Wah×Chu!Chu!",
                "pf_rate" : 0.3614457831325301,
                "fc_rate" : 0.5542168674698795,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "Endless Moon -LUNA-(EX)",
                "song" : "Endless Moon -LUNA-",
                "pf_rate" : 0.3942857142857143,
                "fc_rate" : 0.6228571428571429,
                "clear_rate" : 0.9885714285714285
            },
            {
                "lv" : 44,
                "genre" : "Grave Strike(EX)",
                "song" : "Grave Strike",
                "pf_rate" : 0.4583333333333333,
                "fc_rate" : 0.6547619047619048,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "Harmonia(EX)",
                "song" : "Harmonia",
                "pf_rate" : 0.48523206751054854,
                "fc_rate" : 0.6962025316455697,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "Howling(EX)",
                "song" : "Howling",
                "pf_rate" : 0.4918918918918919,
                "fc_rate" : 0.7027027027027027,
                "clear_rate" : 0.9891891891891892
            },
            {
                "lv" : 44,
                "genre" : "Into the Wind(EX)",
                "song" : "Into the Wind",
                "pf_rate" : 0.42073170731707316,
                "fc_rate" : 0.676829268292683,
                "clear_rate" : 0.9817073170731707
            },
            {
                "lv" : 44,
                "genre" : "KARAKARA(EX)",
                "song" : "KARAKARA",
                "pf_rate" : 0.39,
                "fc_rate" : 0.575,
                "clear_rate" : 0.995
            },
            {
                "lv" : 44,
                "genre" : "K∀MUY(H)",
                "song" : "K∀MUY",
                "pf_rate" : 0.19014084507042253,
                "fc_rate" : 0.39436619718309857,
                "clear_rate" : 0.971830985915493
            },
            {
                "lv" : 44,
                "genre" : "ME-GA-NE-HA-ZU-SE(EX)",
                "song" : "ME-GA-NE-HA-ZU-SE",
                "pf_rate" : 0.4774193548387097,
                "fc_rate" : 0.6387096774193548,
                "clear_rate" : 0.9870967741935484
            },
            {
                "lv" : 44,
                "genre" : "Pｆ ポップ(EX)",
                "song" : "風と自転車",
                "pf_rate" : 0.47,
                "fc_rate" : 0.7,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "RINИE(H)",
                "song" : "RINИE",
                "pf_rate" : 0.23684210526315788,
                "fc_rate" : 0.40789473684210525,
                "clear_rate" : 0.9802631578947368
            },
            {
                "lv" : 44,
                "genre" : "Scars of FAUNA(EX)",
                "song" : "Scars of FAUNA",
                "pf_rate" : 0.37799043062200954,
                "fc_rate" : 0.5885167464114832,
                "clear_rate" : 0.9952153110047847
            },
            {
                "lv" : 44,
                "genre" : "StrayedCatz(H)",
                "song" : "StrayedCatz",
                "pf_rate" : 0.1506849315068493,
                "fc_rate" : 0.410958904109589,
                "clear_rate" : 0.9794520547945206
            },
            {
                "lv" : 44,
                "genre" : "Voices(EX)",
                "song" : "Voices",
                "pf_rate" : 0.3333333333333333,
                "fc_rate" : 0.5660377358490566,
                "clear_rate" : 0.9874213836477987
            },
            {
                "lv" : 44,
                "genre" : "o†o(H)",
                "song" : "o†o",
                "pf_rate" : 0.16149068322981366,
                "fc_rate" : 0.35403726708074534,
                "clear_rate" : 0.9627329192546584
            },
            {
                "lv" : 44,
                "genre" : "おねがいダーリン(EX)",
                "song" : "おねがいダーリン",
                "pf_rate" : 0.5686274509803921,
                "fc_rate" : 0.7254901960784313,
                "clear_rate" : 0.9950980392156863
            },
            {
                "lv" : 44,
                "genre" : "てくのほそみち(EX)",
                "song" : "五七五",
                "pf_rate" : 0.22093023255813954,
                "fc_rate" : 0.5406976744186046,
                "clear_rate" : 0.9767441860465116
            },
            {
                "lv" : 44,
                "genre" : "なごりさえ(EX)",
                "song" : "なごりさえ",
                "pf_rate" : 0.1864406779661017,
                "fc_rate" : 0.3559322033898305,
                "clear_rate" : 0.9717514124293786
            },
            {
                "lv" : 44,
                "genre" : "なぞなぞ☆くりぷとからぁず ～勇者メンマの大冒険～(EX)",
                "song" : "なぞなぞ☆くりぷとからぁず ～勇者メンマの大冒険～",
                "pf_rate" : 0.13559322033898305,
                "fc_rate" : 0.2711864406779661,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "ほしふり　Re:pray(EX)",
                "song" : "ほしふり　Re:pray",
                "pf_rate" : 0.38181818181818183,
                "fc_rate" : 0.5636363636363636,
                "clear_rate" : 0.9863636363636363
            },
            {
                "lv" : 44,
                "genre" : "ぽかぽかレトロード(EX)",
                "song" : "ぽかぽかレトロード",
                "pf_rate" : 0.39893617021276595,
                "fc_rate" : 0.5851063829787234,
                "clear_rate" : 0.9893617021276596
            },
            {
                "lv" : 44,
                "genre" : "アシッディドラムン(EX)",
                "song" : "Happy Life",
                "pf_rate" : 0.2727272727272727,
                "fc_rate" : 0.47474747474747475,
                "clear_rate" : 0.9848484848484849
            },
            {
                "lv" : 44,
                "genre" : "アジアンミクスチャー(EX)",
                "song" : "桃源絵巻",
                "pf_rate" : 0.37948717948717947,
                "fc_rate" : 0.5897435897435898,
                "clear_rate" : 0.9897435897435898
            },
            {
                "lv" : 44,
                "genre" : "アジアンレイヴ(EX)",
                "song" : "HAGOROMO",
                "pf_rate" : 0.5527638190954773,
                "fc_rate" : 0.678391959798995,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "アマイヒミツ(EX)",
                "song" : "アマイヒミツ",
                "pf_rate" : 0.42574257425742573,
                "fc_rate" : 0.6584158415841584,
                "clear_rate" : 0.995049504950495
            },
            {
                "lv" : 44,
                "genre" : "イノセントバイブル(EX)",
                "song" : "イノセントバイブル",
                "pf_rate" : 0.2037037037037037,
                "fc_rate" : 0.5,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "インボルク(UPPER)(H)",
                "song" : "生命の焔纏いて",
                "pf_rate" : 0.1111111111111111,
                "fc_rate" : 0.2222222222222222,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "ウィザウチュナイ-トロワ-(EX)",
                "song" : "Far Away",
                "pf_rate" : 0.4533333333333333,
                "fc_rate" : 0.6133333333333333,
                "clear_rate" : 0.9933333333333333
            },
            {
                "lv" : 44,
                "genre" : "ウィザウチュナイ-ペンデ-(EX)",
                "song" : "Chu☆Chu☆Tonight",
                "pf_rate" : 0.4857142857142857,
                "fc_rate" : 0.6285714285714286,
                "clear_rate" : 0.9928571428571429
            },
            {
                "lv" : 44,
                "genre" : "エピックトランス(EX)",
                "song" : "EPIC",
                "pf_rate" : 0.46296296296296297,
                "fc_rate" : 0.6435185185185185,
                "clear_rate" : 0.9861111111111112
            },
            {
                "lv" : 44,
                "genre" : "エモ(EX)",
                "song" : "Sorrows",
                "pf_rate" : 0.6995884773662552,
                "fc_rate" : 0.8189300411522634,
                "clear_rate" : 0.9958847736625515
            },
            {
                "lv" : 44,
                "genre" : "エモーショナル(EX)",
                "song" : "Loveholic",
                "pf_rate" : 0.6830357142857143,
                "fc_rate" : 0.7455357142857143,
                "clear_rate" : 0.9821428571428571
            },
            {
                "lv" : 44,
                "genre" : "エレキ族(EX)",
                "song" : "純愛ロマンス -- PART 2 --",
                "pf_rate" : 0.3118279569892473,
                "fc_rate" : 0.5591397849462365,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "エレゴスREMIX(EX)",
                "song" : "the keel (Nu-Style Gabba mix)",
                "pf_rate" : 0.28431372549019607,
                "fc_rate" : 0.5441176470588235,
                "clear_rate" : 0.9852941176470589
            },
            {
                "lv" : 44,
                "genre" : "オラトリオ(EX)",
                "song" : "Apocalypse～memento mori～",
                "pf_rate" : 0.5219298245614035,
                "fc_rate" : 0.6885964912280702,
                "clear_rate" : 0.9912280701754386
            },
            {
                "lv" : 44,
                "genre" : "カウガールソング(EX)",
                "song" : "コヨーテの行方（ゆくえ）",
                "pf_rate" : 0.5757575757575758,
                "fc_rate" : 0.7474747474747475,
                "clear_rate" : 0.9949494949494949
            },
            {
                "lv" : 44,
                "genre" : "ガバ(EX)",
                "song" : "disable dA STACK",
                "pf_rate" : 0.5098039215686274,
                "fc_rate" : 0.7009803921568627,
                "clear_rate" : 0.9901960784313726
            },
            {
                "lv" : 44,
                "genre" : "ガールズオルタナティブコア(EX)",
                "song" : "Make my way",
                "pf_rate" : 0.5989847715736041,
                "fc_rate" : 0.6954314720812182,
                "clear_rate" : 0.9949238578680203
            },
            {
                "lv" : 44,
                "genre" : "ガールズロマンスポップ(EX)",
                "song" : "カタテ読書",
                "pf_rate" : 0.5373831775700935,
                "fc_rate" : 0.7102803738317757,
                "clear_rate" : 0.9953271028037384
            },
            {
                "lv" : 44,
                "genre" : "キネマ(EX)",
                "song" : "映画「SICILLIANA」のテーマ",
                "pf_rate" : 0.13071895424836602,
                "fc_rate" : 0.49019607843137253,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "キャンディポップ(EX)",
                "song" : "CANDY♥",
                "pf_rate" : 0.6210045662100456,
                "fc_rate" : 0.7397260273972602,
                "clear_rate" : 0.9908675799086758
            },
            {
                "lv" : 44,
                "genre" : "キューティーエレポップ(EX)",
                "song" : "Blow Me Up",
                "pf_rate" : 0.335,
                "fc_rate" : 0.795,
                "clear_rate" : 0.995
            },
            {
                "lv" : 44,
                "genre" : "クラウンパンク(EX)",
                "song" : "ピエロのままで",
                "pf_rate" : 0.3956043956043956,
                "fc_rate" : 0.5439560439560439,
                "clear_rate" : 0.9945054945054945
            },
            {
                "lv" : 44,
                "genre" : "グラウンドテクノ(EX)",
                "song" : "QUICK RESULT",
                "pf_rate" : 0.4864864864864865,
                "fc_rate" : 0.7135135135135136,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "グラヴィオール(H)",
                "song" : "STULTI",
                "pf_rate" : 0.15458937198067632,
                "fc_rate" : 0.3140096618357488,
                "clear_rate" : 0.9758454106280193
            },
            {
                "lv" : 44,
                "genre" : "ケルティックウインド(EX)",
                "song" : "Caring Dance",
                "pf_rate" : 0.7634854771784232,
                "fc_rate" : 0.8257261410788381,
                "clear_rate" : 0.9875518672199171
            },
            {
                "lv" : 44,
                "genre" : "ケルト(EX)",
                "song" : "水中家族のテーマ",
                "pf_rate" : 0.495,
                "fc_rate" : 0.64,
                "clear_rate" : 0.985
            },
            {
                "lv" : 44,
                "genre" : "コウシンキョク(EX)",
                "song" : "ワンダーアイランド",
                "pf_rate" : 0.5026737967914439,
                "fc_rate" : 0.6256684491978609,
                "clear_rate" : 0.9946524064171123
            },
            {
                "lv" : 44,
                "genre" : "コスモドライブ(EX)",
                "song" : "Cosmic Hurricane",
                "pf_rate" : 0.40384615384615385,
                "fc_rate" : 0.6394230769230769,
                "clear_rate" : 0.9807692307692307
            },
            {
                "lv" : 44,
                "genre" : "ゴスインダストリアル(EX)",
                "song" : "PACEM",
                "pf_rate" : 0.39195979899497485,
                "fc_rate" : 0.6834170854271356,
                "clear_rate" : 0.9949748743718593
            },
            {
                "lv" : 44,
                "genre" : "サイケ(EX)",
                "song" : "L.A.N.",
                "pf_rate" : 0.45751633986928103,
                "fc_rate" : 0.5816993464052288,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "サイバーガガク(H)",
                "song" : "Vairocana",
                "pf_rate" : 0.16292134831460675,
                "fc_rate" : 0.42696629213483145,
                "clear_rate" : 0.9887640449438202
            },
            {
                "lv" : 44,
                "genre" : "サイバーシンフォニックポップ(EX)",
                "song" : "メイメツ、フラグメンツ",
                "pf_rate" : 0.4492753623188406,
                "fc_rate" : 0.6521739130434783,
                "clear_rate" : 0.9951690821256038
            },
            {
                "lv" : 44,
                "genre" : "シュプールフュージョン(EX)",
                "song" : "Snowfield Express",
                "pf_rate" : 0.43564356435643564,
                "fc_rate" : 0.6683168316831684,
                "clear_rate" : 0.9900990099009901
            },
            {
                "lv" : 44,
                "genre" : "ションボリ(EX)",
                "song" : "純勉夏",
                "pf_rate" : 0.4642857142857143,
                "fc_rate" : 0.5306122448979592,
                "clear_rate" : 0.9897959183673469
            },
            {
                "lv" : 44,
                "genre" : "ジャッジメント(H)",
                "song" : "終末を追う者",
                "pf_rate" : 0.3065326633165829,
                "fc_rate" : 0.5477386934673367,
                "clear_rate" : 0.964824120603015
            },
            {
                "lv" : 44,
                "genre" : "スピットロック(EX)",
                "song" : "Throat",
                "pf_rate" : 0.40804597701149425,
                "fc_rate" : 0.603448275862069,
                "clear_rate" : 0.9885057471264368
            },
            {
                "lv" : 44,
                "genre" : "スーパースプラッシュチューン(EX)",
                "song" : "MANA",
                "pf_rate" : 0.44635193133047213,
                "fc_rate" : 0.6008583690987125,
                "clear_rate" : 0.9828326180257511
            },
            {
                "lv" : 44,
                "genre" : "セツナトリップ(EX)",
                "song" : "セツナトリップ",
                "pf_rate" : 0.5569620253164557,
                "fc_rate" : 0.729957805907173,
                "clear_rate" : 0.9915611814345991
            },
            {
                "lv" : 44,
                "genre" : "ソフトロックＬＯＮＧ(EX)",
                "song" : "Homesick Pt.2&3",
                "pf_rate" : 0.4574468085106383,
                "fc_rate" : 0.6329787234042553,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "タブランベースREMIX(EX)",
                "song" : "ナタラディーン(Raja Maharaja mix)",
                "pf_rate" : 0.4711111111111111,
                "fc_rate" : 0.64,
                "clear_rate" : 0.9955555555555555
            },
            {
                "lv" : 44,
                "genre" : "ダークネス(EX)",
                "song" : "電気人形",
                "pf_rate" : 0.38190954773869346,
                "fc_rate" : 0.7135678391959799,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "ダークネス３(EX)",
                "song" : "Quiet",
                "pf_rate" : 0.5167464114832536,
                "fc_rate" : 0.6842105263157895,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "ダージュ(H)",
                "song" : "ピアノ協奏曲第１番”蠍火”",
                "pf_rate" : 0.22072072072072071,
                "fc_rate" : 0.49099099099099097,
                "clear_rate" : 0.9864864864864865
            },
            {
                "lv" : 44,
                "genre" : "チキンハート(EX)",
                "song" : "ニワトリなのだ",
                "pf_rate" : 0.453125,
                "fc_rate" : 0.6145833333333334,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "チッピンレイヴ(EX)",
                "song" : "Bleep Beep Bop",
                "pf_rate" : 0.41743119266055045,
                "fc_rate" : 0.555045871559633,
                "clear_rate" : 0.9954128440366973
            },
            {
                "lv" : 44,
                "genre" : "チョコレートスマイル(EX)",
                "song" : "チョコレートスマイル",
                "pf_rate" : 0.5829596412556054,
                "fc_rate" : 0.7130044843049327,
                "clear_rate" : 0.9820627802690582
            },
            {
                "lv" : 44,
                "genre" : "テックトランス(EX)",
                "song" : "yellow head joe",
                "pf_rate" : 0.4131455399061033,
                "fc_rate" : 0.5915492957746479,
                "clear_rate" : 0.9953051643192489
            },
            {
                "lv" : 44,
                "genre" : "テツドウ(EX)",
                "song" : "Train",
                "pf_rate" : 0.5612244897959183,
                "fc_rate" : 0.6632653061224489,
                "clear_rate" : 0.9846938775510204
            },
            {
                "lv" : 44,
                "genre" : "デジタルロック(EX)",
                "song" : "X-Plan",
                "pf_rate" : 0.38495575221238937,
                "fc_rate" : 0.6415929203539823,
                "clear_rate" : 0.9911504424778761
            },
            {
                "lv" : 44,
                "genre" : "デジテクノ(EX)",
                "song" : "A change of probability ",
                "pf_rate" : 0.4585365853658537,
                "fc_rate" : 0.5853658536585366,
                "clear_rate" : 0.9902439024390244
            },
            {
                "lv" : 44,
                "genre" : "デスナワ(EX)",
                "song" : "夢添うてぃ（desmix2010）",
                "pf_rate" : 0.39080459770114945,
                "fc_rate" : 0.632183908045977,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "デスレゲエ(H)",
                "song" : "夜間行",
                "pf_rate" : 0.0375,
                "fc_rate" : 0.43125,
                "clear_rate" : 0.9875
            },
            {
                "lv" : 44,
                "genre" : "トウキョウ・ドリーム・ポップ(EX)",
                "song" : "トウキョウ・ドリーム・ポップ",
                "pf_rate" : 0.3393939393939394,
                "fc_rate" : 0.509090909090909,
                "clear_rate" : 0.9696969696969697
            },
            {
                "lv" : 44,
                "genre" : "トランスユーロREMIX(EX)",
                "song" : "Foundation of You (DJ Command mix)",
                "pf_rate" : 0.4427083333333333,
                "fc_rate" : 0.6666666666666666,
                "clear_rate" : 0.9791666666666666
            },
            {
                "lv" : 44,
                "genre" : "ドッペルゲンガー(EX)",
                "song" : "ドッペルゲンガー",
                "pf_rate" : 0.39572192513368987,
                "fc_rate" : 0.5828877005347594,
                "clear_rate" : 0.9893048128342246
            },
            {
                "lv" : 44,
                "genre" : "ドラムンベース(EX)",
                "song" : "Far east nightbird",
                "pf_rate" : 0.4336283185840708,
                "fc_rate" : 0.6991150442477876,
                "clear_rate" : 0.9867256637168141
            },
            {
                "lv" : 44,
                "genre" : "ニンジャ卍ヒロイン(EX)",
                "song" : "忍びアン子は恋の呪文",
                "pf_rate" : 0.08695652173913043,
                "fc_rate" : 0.40096618357487923,
                "clear_rate" : 0.9903381642512077
            },
            {
                "lv" : 44,
                "genre" : "ニンジャ卍ヒーロー(EX)",
                "song" : "ニンジャヒーローシノビアン",
                "pf_rate" : 0.22777777777777777,
                "fc_rate" : 0.5166666666666667,
                "clear_rate" : 0.9944444444444445
            },
            {
                "lv" : 44,
                "genre" : "ハイパージャパネスク(EX)",
                "song" : "夢幻ノ光",
                "pf_rate" : 0.2643171806167401,
                "fc_rate" : 0.5154185022026432,
                "clear_rate" : 0.9823788546255506
            },
            {
                "lv" : 44,
                "genre" : "ハイパージャパネスク２(EX)",
                "song" : "華爛漫 -Flowers-",
                "pf_rate" : 0.12863070539419086,
                "fc_rate" : 0.5933609958506224,
                "clear_rate" : 0.991701244813278
            },
            {
                "lv" : 44,
                "genre" : "ハイパーＪパーティーロック(EX)",
                "song" : "MIRACLE FLYER!!",
                "pf_rate" : 0.5380952380952381,
                "fc_rate" : 0.6904761904761905,
                "clear_rate" : 0.9952380952380953
            },
            {
                "lv" : 44,
                "genre" : "ハイパーＪポップ２(EX)",
                "song" : "North Wind",
                "pf_rate" : 0.46153846153846156,
                "fc_rate" : 0.6442307692307693,
                "clear_rate" : 0.9951923076923077
            },
            {
                "lv" : 44,
                "genre" : "ハッピーハードコア(EX)",
                "song" : "BE LOVIN",
                "pf_rate" : 0.5902439024390244,
                "fc_rate" : 0.7268292682926829,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "ハッピーハードコア(EX)",
                "song" : "Sakura Sunrise",
                "pf_rate" : 0.4829059829059829,
                "fc_rate" : 0.6111111111111112,
                "clear_rate" : 0.9914529914529915
            },
            {
                "lv" : 44,
                "genre" : "ハッピーラブゲイザー(EX)",
                "song" : "恋愛観測",
                "pf_rate" : 0.542016806722689,
                "fc_rate" : 0.7521008403361344,
                "clear_rate" : 0.9957983193277311
            },
            {
                "lv" : 44,
                "genre" : "ハニートリック！！(EX)",
                "song" : "ハニートリック！！",
                "pf_rate" : 0.09230769230769231,
                "fc_rate" : 0.2923076923076923,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "ハードPf+(H)",
                "song" : "fffff op.2",
                "pf_rate" : 0.13227513227513227,
                "fc_rate" : 0.2857142857142857,
                "clear_rate" : 0.9788359788359788
            },
            {
                "lv" : 44,
                "genre" : "ハードルネッサンス(H)",
                "song" : "Elemental Creation",
                "pf_rate" : 0.1592920353982301,
                "fc_rate" : 0.33185840707964603,
                "clear_rate" : 0.9778761061946902
            },
            {
                "lv" : 44,
                "genre" : "バトルシンフォニー(EX)",
                "song" : "最期の決断",
                "pf_rate" : 0.4739583333333333,
                "fc_rate" : 0.6041666666666666,
                "clear_rate" : 0.9947916666666666
            },
            {
                "lv" : 44,
                "genre" : "ヒップロックREMIX(EX)",
                "song" : "大見解の新見解",
                "pf_rate" : 0.4166666666666667,
                "fc_rate" : 0.6555555555555556,
                "clear_rate" : 0.9888888888888889
            },
            {
                "lv" : 44,
                "genre" : "ヒップロック５(H)",
                "song" : "一激必翔",
                "pf_rate" : 0.225,
                "fc_rate" : 0.49375,
                "clear_rate" : 0.9875
            },
            {
                "lv" : 44,
                "genre" : "ピコパンク(EX)",
                "song" : "マスカレード・ア・ゴーゴー",
                "pf_rate" : 0.2994011976047904,
                "fc_rate" : 0.562874251497006,
                "clear_rate" : 0.9880239520958084
            },
            {
                "lv" : 44,
                "genre" : "ファルシオン(EX)",
                "song" : "THE FIRST SPACE FIGHT from FALSION",
                "pf_rate" : 0.7009803921568627,
                "fc_rate" : 0.8137254901960784,
                "clear_rate" : 0.9901960784313726
            },
            {
                "lv" : 44,
                "genre" : "ファンタジーテック(EX)",
                "song" : "双子のフェレット",
                "pf_rate" : 0.28865979381443296,
                "fc_rate" : 0.5309278350515464,
                "clear_rate" : 0.9948453608247423
            },
            {
                "lv" : 44,
                "genre" : "フィーバーヒーロー(EX)",
                "song" : "フィーバー戦士ポップン14のテーマ",
                "pf_rate" : 0.19540229885057472,
                "fc_rate" : 0.3563218390804598,
                "clear_rate" : 0.9597701149425287
            },
            {
                "lv" : 44,
                "genre" : "フォークロック(EX)",
                "song" : "面影橋",
                "pf_rate" : 0.46190476190476193,
                "fc_rate" : 0.6857142857142857,
                "clear_rate" : 0.9809523809523809
            },
            {
                "lv" : 44,
                "genre" : "フォーチュン・テイルビート(EX)",
                "song" : "ＧＡＤＡＲＩＮＡ",
                "pf_rate" : 0.7077625570776256,
                "fc_rate" : 0.7488584474885844,
                "clear_rate" : 0.9954337899543378
            },
            {
                "lv" : 44,
                "genre" : "フォールスメルヘン(EX)",
                "song" : "みずうみの記憶",
                "pf_rate" : 0.4835680751173709,
                "fc_rate" : 0.6807511737089202,
                "clear_rate" : 0.9812206572769953
            },
            {
                "lv" : 44,
                "genre" : "ブーケトス戦争(EX)",
                "song" : "ブーケトス戦争",
                "pf_rate" : 0.46798029556650245,
                "fc_rate" : 0.6650246305418719,
                "clear_rate" : 0.9901477832512315
            },
            {
                "lv" : 44,
                "genre" : "プラチナムジャパネスク(EX)",
                "song" : "ЁVOLUTIΦN",
                "pf_rate" : 0.5826086956521739,
                "fc_rate" : 0.7652173913043478,
                "clear_rate" : 0.991304347826087
            },
            {
                "lv" : 44,
                "genre" : "ホウノウダイコ(EX)",
                "song" : "男盛～おとこざかり",
                "pf_rate" : 0.41304347826086957,
                "fc_rate" : 0.532608695652174,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "ホンコンユーロ(EX)",
                "song" : "Hong kong magic",
                "pf_rate" : 0.4948453608247423,
                "fc_rate" : 0.6494845360824743,
                "clear_rate" : 0.9948453608247423
            },
            {
                "lv" : 44,
                "genre" : "マキシマム(EX)",
                "song" : "Mighty Guy",
                "pf_rate" : 0.43434343434343436,
                "fc_rate" : 0.6717171717171717,
                "clear_rate" : 0.9949494949494949
            },
            {
                "lv" : 44,
                "genre" : "マサラ(EX)",
                "song" : "すてきなタブーラ",
                "pf_rate" : 0.4869109947643979,
                "fc_rate" : 0.643979057591623,
                "clear_rate" : 0.9842931937172775
            },
            {
                "lv" : 44,
                "genre" : "ミッドナイトドラムン(EX)",
                "song" : "Searching...",
                "pf_rate" : 0.4639175257731959,
                "fc_rate" : 0.7371134020618557,
                "clear_rate" : 0.9896907216494846
            },
            {
                "lv" : 44,
                "genre" : "ムラクモ(H)",
                "song" : "少年は空を辿る",
                "pf_rate" : 0.3407079646017699,
                "fc_rate" : 0.6106194690265486,
                "clear_rate" : 0.9867256637168141
            },
            {
                "lv" : 44,
                "genre" : "ムーンコア(EX)",
                "song" : "HEAVENLY MOON",
                "pf_rate" : 0.4009009009009009,
                "fc_rate" : 0.5675675675675675,
                "clear_rate" : 0.9684684684684685
            },
            {
                "lv" : 44,
                "genre" : "メタルフロウ(EX)",
                "song" : "CURUS-Ｍ（ditty）",
                "pf_rate" : 0.47641509433962265,
                "fc_rate" : 0.6981132075471698,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "メロコアG(EX)",
                "song" : "＠n　H＠ppy　Choice",
                "pf_rate" : 0.40298507462686567,
                "fc_rate" : 0.5970149253731343,
                "clear_rate" : 0.9900497512437811
            },
            {
                "lv" : 44,
                "genre" : "ユーロビート(EX)",
                "song" : "♥LOVE² シュガ→♥",
                "pf_rate" : 0.20361990950226244,
                "fc_rate" : 0.7104072398190046,
                "clear_rate" : 0.995475113122172
            },
            {
                "lv" : 44,
                "genre" : "ライトビジュアルポップ(EX)",
                "song" : "虹色の花",
                "pf_rate" : 0.34523809523809523,
                "fc_rate" : 0.5,
                "clear_rate" : 0.9940476190476191
            },
            {
                "lv" : 44,
                "genre" : "ラウドビーチ(EX)",
                "song" : "NAMIノリ//www.",
                "pf_rate" : 0.38095238095238093,
                "fc_rate" : 0.5892857142857143,
                "clear_rate" : 0.9880952380952381
            },
            {
                "lv" : 44,
                "genre" : "ラグタイム(EX)",
                "song" : "RADICAL RAGTIME TOUR",
                "pf_rate" : 0.35714285714285715,
                "fc_rate" : 0.5969387755102041,
                "clear_rate" : 0.9948979591836735
            },
            {
                "lv" : 44,
                "genre" : "ラベンダー最終定理(EX)",
                "song" : "ラベンダー最終定理",
                "pf_rate" : 0.3782051282051282,
                "fc_rate" : 0.5448717948717948,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "リンセイ(H)",
                "song" : "カゲロウ",
                "pf_rate" : 0.327683615819209,
                "fc_rate" : 0.5480225988700564,
                "clear_rate" : 0.9943502824858758
            },
            {
                "lv" : 44,
                "genre" : "ルナティックリール(EX)",
                "song" : "moon dance",
                "pf_rate" : 0.4306930693069307,
                "fc_rate" : 0.6534653465346535,
                "clear_rate" : 0.995049504950495
            },
            {
                "lv" : 44,
                "genre" : "ロマスウィング(EX)",
                "song" : "Tears In The Light",
                "pf_rate" : 0.48677248677248675,
                "fc_rate" : 0.6349206349206349,
                "clear_rate" : 0.9894179894179894
            },
            {
                "lv" : 44,
                "genre" : "創聖のアクエリオン(UPPER)(EX)",
                "song" : "創聖のアクエリオン",
                "pf_rate" : 0.1891891891891892,
                "fc_rate" : 0.3918918918918919,
                "clear_rate" : 0.9864864864864865
            },
            {
                "lv" : 44,
                "genre" : "吟ロック(EX)",
                "song" : "O・KU・NI",
                "pf_rate" : 0.5409836065573771,
                "fc_rate" : 0.6775956284153005,
                "clear_rate" : 0.994535519125683
            },
            {
                "lv" : 44,
                "genre" : "幻想系世界修復少女(EX)",
                "song" : "幻想系世界修復少女",
                "pf_rate" : 0.3870967741935484,
                "fc_rate" : 0.6175115207373272,
                "clear_rate" : 0.9815668202764977
            },
            {
                "lv" : 44,
                "genre" : "御伽噺に幕切れを(EX)",
                "song" : "御伽噺に幕切れを",
                "pf_rate" : 0.44808743169398907,
                "fc_rate" : 0.7103825136612022,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "恋愛観測 -VENUS Mix-(EX)",
                "song" : "恋愛観測 -VENUS Mix-",
                "pf_rate" : 0.3111111111111111,
                "fc_rate" : 0.4777777777777778,
                "clear_rate" : 0.9944444444444445
            },
            {
                "lv" : 44,
                "genre" : "恋活ミュージカル(EX)",
                "song" : "不思議の国のキングダム彼氏",
                "pf_rate" : 0.32682926829268294,
                "fc_rate" : 0.4634146341463415,
                "clear_rate" : 0.9902439024390244
            },
            {
                "lv" : 44,
                "genre" : "悪魔城ドラキュラSLOT(EX)",
                "song" : "trezire de spirit",
                "pf_rate" : 0.35602094240837695,
                "fc_rate" : 0.5863874345549738,
                "clear_rate" : 0.9947643979057592
            },
            {
                "lv" : 44,
                "genre" : "情念歌謡(EX)",
                "song" : "紅蓮の焔",
                "pf_rate" : 0.5236051502145923,
                "fc_rate" : 0.7296137339055794,
                "clear_rate" : 0.9871244635193133
            },
            {
                "lv" : 44,
                "genre" : "愛と誠(EX)",
                "song" : "愛と誠",
                "pf_rate" : 0.5541666666666667,
                "fc_rate" : 0.7541666666666667,
                "clear_rate" : 0.9958333333333333
            },
            {
                "lv" : 44,
                "genre" : "戦場のアップデート(EX)",
                "song" : "戦場のアップデート",
                "pf_rate" : 0.4497354497354497,
                "fc_rate" : 0.6984126984126984,
                "clear_rate" : 0.9894179894179894
            },
            {
                "lv" : 44,
                "genre" : "敬老パンク(H)",
                "song" : "進め！爺ちゃん！",
                "pf_rate" : 0,
                "fc_rate" : 0.3353658536585366,
                "clear_rate" : 0.9634146341463414
            },
            {
                "lv" : 44,
                "genre" : "星座が恋した瞬間を。(EX)",
                "song" : "星座が恋した瞬間を。",
                "pf_rate" : 0.4166666666666667,
                "fc_rate" : 0.6166666666666667,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "月風魔伝(EX)",
                "song" : "月風魔伝",
                "pf_rate" : 0.5177664974619289,
                "fc_rate" : 0.649746192893401,
                "clear_rate" : 0.9847715736040609
            },
            {
                "lv" : 44,
                "genre" : "朝までワンモアラブリー（onemore 90's lovery）(EX)",
                "song" : "朝までワンモアラブリー（onemore 90's lovery）",
                "pf_rate" : 0.38857142857142857,
                "fc_rate" : 0.5942857142857143,
                "clear_rate" : 0.9428571428571428
            },
            {
                "lv" : 44,
                "genre" : "激アツ☆マジヤバ☆チアガール(EX)",
                "song" : "激アツ☆マジヤバ☆チアガール",
                "pf_rate" : 0.5463414634146342,
                "fc_rate" : 0.751219512195122,
                "clear_rate" : 0.9853658536585366
            },
            {
                "lv" : 44,
                "genre" : "熱湯泡テクノ(EX)",
                "song" : "クライマックス銭湯",
                "pf_rate" : 0.4527363184079602,
                "fc_rate" : 0.6368159203980099,
                "clear_rate" : 0.9850746268656716
            },
            {
                "lv" : 44,
                "genre" : "華恋ロック(EX)",
                "song" : "恋閃繚乱",
                "pf_rate" : 0.5330396475770925,
                "fc_rate" : 0.7092511013215859,
                "clear_rate" : 0.986784140969163
            },
            {
                "lv" : 44,
                "genre" : "透明はまだらに世界を告げて(EX)",
                "song" : "透明はまだらに世界を告げて",
                "pf_rate" : 0.3081395348837209,
                "fc_rate" : 0.5523255813953488,
                "clear_rate" : 0.9883720930232558
            },
            {
                "lv" : 44,
                "genre" : "野球のことがよくわかる(EX)",
                "song" : "野球の遊び方　そしてその歴史　～決定版～",
                "pf_rate" : 0.37735849056603776,
                "fc_rate" : 0.6289308176100629,
                "clear_rate" : 0.9937106918238994
            },
            {
                "lv" : 44,
                "genre" : "麻雀格闘倶楽部(EX)",
                "song" : "麻雀格闘倶楽部特別接続曲",
                "pf_rate" : 0.20540540540540542,
                "fc_rate" : 0.5027027027027027,
                "clear_rate" : 0.9783783783783784
            },
            {
                "lv" : 44,
                "genre" : "＠you(EX)",
                "song" : "＠you",
                "pf_rate" : 0.47337278106508873,
                "fc_rate" : 0.6923076923076923,
                "clear_rate" : 0.9940828402366864
            },
            {
                "lv" : 44,
                "genre" : "ＦＭポップ(EX)",
                "song" : "Save you",
                "pf_rate" : 0.5049019607843137,
                "fc_rate" : 0.7107843137254902,
                "clear_rate" : 1
            },
            {
                "lv" : 44,
                "genre" : "Ｊ‐ハードダンス(EX)",
                "song" : "透明なエモーション",
                "pf_rate" : 0.5775862068965517,
                "fc_rate" : 0.7887931034482759,
                "clear_rate" : 0.9956896551724138
            },
            {
                "lv" : 43,
                "genre" : "25 o'clock the WORLD(H)",
                "song" : "25 o'clock the WORLD",
                "pf_rate" : 0.13333333333333333,
                "fc_rate" : 0.3238095238095238,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "Bitter Myself(EX)",
                "song" : "Bitter Myself",
                "pf_rate" : 0.44,
                "fc_rate" : 0.6514285714285715,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "Bloody Mary(EX)",
                "song" : "Bloody Mary",
                "pf_rate" : 0.49714285714285716,
                "fc_rate" : 0.7371428571428571,
                "clear_rate" : 0.9942857142857143
            },
            {
                "lv" : 43,
                "genre" : "Chronoxia(H)",
                "song" : "Chronoxia",
                "pf_rate" : 0.29850746268656714,
                "fc_rate" : 0.4253731343283582,
                "clear_rate" : 0.9850746268656716
            },
            {
                "lv" : 43,
                "genre" : "EDM(EX)",
                "song" : "Into UR Heart",
                "pf_rate" : 0.4411764705882353,
                "fc_rate" : 0.6235294117647059,
                "clear_rate" : 0.9882352941176471
            },
            {
                "lv" : 43,
                "genre" : "Help me, ERINNNNNN!! -VENUS mix-(EX)",
                "song" : "Help me, ERINNNNNN!! -VENUS mix-",
                "pf_rate" : 0.31875,
                "fc_rate" : 0.60625,
                "clear_rate" : 0.9875
            },
            {
                "lv" : 43,
                "genre" : "I believe what you said(EX)",
                "song" : "I believe what you said",
                "pf_rate" : 0.3125,
                "fc_rate" : 0.5,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "Idola(H)",
                "song" : "Idola",
                "pf_rate" : 0.2532467532467532,
                "fc_rate" : 0.43506493506493504,
                "clear_rate" : 0.9675324675324676
            },
            {
                "lv" : 43,
                "genre" : "In The Breeze(EX)",
                "song" : "In The Breeze",
                "pf_rate" : 0.4021164021164021,
                "fc_rate" : 0.6296296296296297,
                "clear_rate" : 0.9947089947089947
            },
            {
                "lv" : 43,
                "genre" : "Link of Chain(EX)",
                "song" : "Link of Chain",
                "pf_rate" : 0.6167664670658682,
                "fc_rate" : 0.7544910179640718,
                "clear_rate" : 0.9820359281437125
            },
            {
                "lv" : 43,
                "genre" : "Ophelia(EX)",
                "song" : "Ophelia",
                "pf_rate" : 0.5,
                "fc_rate" : 0.6666666666666666,
                "clear_rate" : 0.9930555555555556
            },
            {
                "lv" : 43,
                "genre" : "PM is Here！(EX)",
                "song" : "PM is Here！",
                "pf_rate" : 0.47191011235955055,
                "fc_rate" : 0.6123595505617978,
                "clear_rate" : 0.9887640449438202
            },
            {
                "lv" : 43,
                "genre" : "POP TEAM EPIC(EX)",
                "song" : "POP TEAM EPIC",
                "pf_rate" : 0.5958549222797928,
                "fc_rate" : 0.7564766839378239,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "Realize Maze(EX)",
                "song" : "Realize Maze",
                "pf_rate" : 0.6222222222222222,
                "fc_rate" : 0.7822222222222223,
                "clear_rate" : 0.9911111111111112
            },
            {
                "lv" : 43,
                "genre" : "SYMPHONY FROM ZERO(H)",
                "song" : "SYMPHONY FROM ZERO",
                "pf_rate" : 0.23423423423423423,
                "fc_rate" : 0.42342342342342343,
                "clear_rate" : 0.9819819819819819
            },
            {
                "lv" : 43,
                "genre" : "The Sign Of Collapse(EX)",
                "song" : "The Sign Of Collapse",
                "pf_rate" : 0.48314606741573035,
                "fc_rate" : 0.6910112359550562,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "Trixxxter(H)",
                "song" : "Trixxxter",
                "pf_rate" : 0.20168067226890757,
                "fc_rate" : 0.3445378151260504,
                "clear_rate" : 0.9831932773109243
            },
            {
                "lv" : 43,
                "genre" : "albedo(EX)",
                "song" : "albedo",
                "pf_rate" : 0.5547945205479452,
                "fc_rate" : 0.7671232876712328,
                "clear_rate" : 0.9931506849315068
            },
            {
                "lv" : 43,
                "genre" : "le mal du pays, numéro 1(EX)",
                "song" : "le mal du pays, numéro 1",
                "pf_rate" : 0.47305389221556887,
                "fc_rate" : 0.718562874251497,
                "clear_rate" : 0.9940119760479041
            },
            {
                "lv" : 43,
                "genre" : "station CRUX(EX)",
                "song" : "station CRUX",
                "pf_rate" : 0.4557823129251701,
                "fc_rate" : 0.5918367346938775,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "white night story(EX)",
                "song" : "white night story",
                "pf_rate" : 0.5700483091787439,
                "fc_rate" : 0.6859903381642513,
                "clear_rate" : 0.9855072463768116
            },
            {
                "lv" : 43,
                "genre" : "いつまでやったって、別にいいじゃない！？(EX)",
                "song" : "いつまでやったって、別にいいじゃない！？",
                "pf_rate" : 0.3374233128834356,
                "fc_rate" : 0.5030674846625767,
                "clear_rate" : 0.9938650306748467
            },
            {
                "lv" : 43,
                "genre" : "うさぬこぬんぬんファンタジー！(EX)",
                "song" : "うさぬこぬんぬんファンタジー！",
                "pf_rate" : 0.5351351351351351,
                "fc_rate" : 0.7243243243243244,
                "clear_rate" : 0.972972972972973
            },
            {
                "lv" : 43,
                "genre" : "おめでとう！おたんじょうび(EX)",
                "song" : "おめでとう！おたんじょうび",
                "pf_rate" : 0.48717948717948717,
                "fc_rate" : 0.6871794871794872,
                "clear_rate" : 0.9794871794871794
            },
            {
                "lv" : 43,
                "genre" : "くりむ童話２(EX)",
                "song" : "去る金合戦",
                "pf_rate" : 0.5609756097560976,
                "fc_rate" : 0.7609756097560976,
                "clear_rate" : 0.9951219512195122
            },
            {
                "lv" : 43,
                "genre" : "じょんがらスピリチュアル(EX)",
                "song" : "TSUGARU",
                "pf_rate" : 0.47802197802197804,
                "fc_rate" : 0.6483516483516484,
                "clear_rate" : 0.989010989010989
            },
            {
                "lv" : 43,
                "genre" : "つぼみ(EX)",
                "song" : "つぼみ",
                "pf_rate" : 0.5575221238938053,
                "fc_rate" : 0.7345132743362832,
                "clear_rate" : 0.995575221238938
            },
            {
                "lv" : 43,
                "genre" : "アシッドジャズ(EX)",
                "song" : "Reaching for the Stars　",
                "pf_rate" : 0.4486486486486487,
                "fc_rate" : 0.6648648648648648,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "アニメヒロイン(EX)",
                "song" : "魔法の扉(スペース●マコのテーマ)",
                "pf_rate" : 0.49743589743589745,
                "fc_rate" : 0.6205128205128205,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "アメポップ(EX)",
                "song" : "Last of  “I Love You”",
                "pf_rate" : 0.5217391304347826,
                "fc_rate" : 0.7010869565217391,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "アンビション　ポプコネ(EX)",
                "song" : "existence（エレクトロポップン！MIX）",
                "pf_rate" : 0.5333333333333333,
                "fc_rate" : 0.7846153846153846,
                "clear_rate" : 0.9948717948717949
            },
            {
                "lv" : 43,
                "genre" : "アートコア(H)",
                "song" : "Valanga",
                "pf_rate" : 0.3076923076923077,
                "fc_rate" : 0.47115384615384615,
                "clear_rate" : 0.9423076923076923
            },
            {
                "lv" : 43,
                "genre" : "イズモ(EX)",
                "song" : "E-TEN-RAKU",
                "pf_rate" : 0.18274111675126903,
                "fc_rate" : 0.4365482233502538,
                "clear_rate" : 0.9949238578680203
            },
            {
                "lv" : 43,
                "genre" : "イーラップ２(EX)",
                "song" : "Pinky Nick",
                "pf_rate" : 0.21476510067114093,
                "fc_rate" : 0.6308724832214765,
                "clear_rate" : 0.9932885906040269
            },
            {
                "lv" : 43,
                "genre" : "ウィザウチュナイ(EX)",
                "song" : "Brand New World",
                "pf_rate" : 0.46706586826347307,
                "fc_rate" : 0.6946107784431138,
                "clear_rate" : 0.9880239520958084
            },
            {
                "lv" : 43,
                "genre" : "ウィザウチュナイ-クアトロ-(EX)",
                "song" : "Wow Wow VENUS",
                "pf_rate" : 0.4585987261146497,
                "fc_rate" : 0.5796178343949044,
                "clear_rate" : 0.9872611464968153
            },
            {
                "lv" : 43,
                "genre" : "ウィザウチュナイ-ツヴァイ-(EX)",
                "song" : "Survival Games",
                "pf_rate" : 0.4935064935064935,
                "fc_rate" : 0.6168831168831169,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ウィンターダンス(EX)",
                "song" : "White Eve",
                "pf_rate" : 0.05092592592592592,
                "fc_rate" : 0.6574074074074074,
                "clear_rate" : 0.9953703703703703
            },
            {
                "lv" : 43,
                "genre" : "ウォートラントゥルーパーズ(EX)",
                "song" : "ウォートラン・メインテーマ",
                "pf_rate" : 0.4782608695652174,
                "fc_rate" : 0.6358695652173914,
                "clear_rate" : 0.9891304347826086
            },
            {
                "lv" : 43,
                "genre" : "ウルトラ 90's(EX)",
                "song" : "ノー! ノー! Way",
                "pf_rate" : 0.6149425287356322,
                "fc_rate" : 0.7471264367816092,
                "clear_rate" : 0.9885057471264368
            },
            {
                "lv" : 43,
                "genre" : "エクスペリメントラップ(EX)",
                "song" : "old\"O\"",
                "pf_rate" : 0.45569620253164556,
                "fc_rate" : 0.6708860759493671,
                "clear_rate" : 0.9936708860759493
            },
            {
                "lv" : 43,
                "genre" : "エピローグ(EX)",
                "song" : "そして世界は音楽に満ちた",
                "pf_rate" : 0.29411764705882354,
                "fc_rate" : 0.6274509803921569,
                "clear_rate" : 0.9950980392156863
            },
            {
                "lv" : 43,
                "genre" : "エレゴシックサバト(EX)",
                "song" : "Dar[k]wish",
                "pf_rate" : 0.5076923076923077,
                "fc_rate" : 0.7128205128205128,
                "clear_rate" : 0.9846153846153847
            },
            {
                "lv" : 43,
                "genre" : "エンジェリオン(H)",
                "song" : "生命の環を紡いで",
                "pf_rate" : 0.2048780487804878,
                "fc_rate" : 0.45365853658536587,
                "clear_rate" : 0.975609756097561
            },
            {
                "lv" : 43,
                "genre" : "オイパンク０(H)",
                "song" : "ブタパンチのテーマ",
                "pf_rate" : 0.10588235294117647,
                "fc_rate" : 0.5705882352941176,
                "clear_rate" : 0.9764705882352941
            },
            {
                "lv" : 43,
                "genre" : "オトメ聖戦タクティクス(EX)",
                "song" : "オトメ聖戦タクティクス",
                "pf_rate" : 0.45751633986928103,
                "fc_rate" : 0.6666666666666666,
                "clear_rate" : 0.9934640522875817
            },
            {
                "lv" : 43,
                "genre" : "オリエンタルコア(EX)",
                "song" : "The Wind of Gold",
                "pf_rate" : 0.47715736040609136,
                "fc_rate" : 0.6345177664974619,
                "clear_rate" : 0.9898477157360406
            },
            {
                "lv" : 43,
                "genre" : "オリエンタルミソロジー(H)",
                "song" : "蛇神",
                "pf_rate" : 0.329608938547486,
                "fc_rate" : 0.5810055865921788,
                "clear_rate" : 0.9832402234636871
            },
            {
                "lv" : 43,
                "genre" : "カグランジ(H)",
                "song" : "生きてこそ～特別版～",
                "pf_rate" : 0.35,
                "fc_rate" : 0.5714285714285714,
                "clear_rate" : 0.9857142857142858
            },
            {
                "lv" : 43,
                "genre" : "カドルコア(EX)",
                "song" : "murmur twins(guitar pop ver.)",
                "pf_rate" : 0.136986301369863,
                "fc_rate" : 0.4977168949771689,
                "clear_rate" : 0.9863013698630136
            },
            {
                "lv" : 43,
                "genre" : "カラフルポップ(EX)",
                "song" : "Raspberry ♥ Heart",
                "pf_rate" : 0.3316062176165803,
                "fc_rate" : 0.5803108808290155,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "カントリービーツ(EX)",
                "song" : "今日は今日でえがったなゃ",
                "pf_rate" : 0.4883720930232558,
                "fc_rate" : 0.6744186046511628,
                "clear_rate" : 0.9941860465116279
            },
            {
                "lv" : 43,
                "genre" : "カーニバル(EX)",
                "song" : "ポップンカーニバルマーチ",
                "pf_rate" : 0.4368932038834951,
                "fc_rate" : 0.6796116504854369,
                "clear_rate" : 0.9951456310679612
            },
            {
                "lv" : 43,
                "genre" : "ガァバホップ(EX)",
                "song" : "説",
                "pf_rate" : 0.1881720430107527,
                "fc_rate" : 0.3924731182795699,
                "clear_rate" : 0.989247311827957
            },
            {
                "lv" : 43,
                "genre" : "ガールズオルタナティブ(EX)",
                "song" : "証",
                "pf_rate" : 0.6954545454545454,
                "fc_rate" : 0.8318181818181818,
                "clear_rate" : 0.990909090909091
            },
            {
                "lv" : 43,
                "genre" : "ガールフッド(EX)",
                "song" : "ロクブテ",
                "pf_rate" : 0.5953488372093023,
                "fc_rate" : 0.7767441860465116,
                "clear_rate" : 0.9953488372093023
            },
            {
                "lv" : 43,
                "genre" : "キッズマーチ(EX)",
                "song" : "space merry-go-round",
                "pf_rate" : 0.4666666666666667,
                "fc_rate" : 0.7025641025641025,
                "clear_rate" : 0.9897435897435898
            },
            {
                "lv" : 43,
                "genre" : "キネマ２(EX)",
                "song" : "映画「ジェノヴァの空の下」のテーマ",
                "pf_rate" : 0.3063583815028902,
                "fc_rate" : 0.5606936416184971,
                "clear_rate" : 0.9942196531791907
            },
            {
                "lv" : 43,
                "genre" : "キャバレー(EX)",
                "song" : "マッシュな部屋",
                "pf_rate" : 0.35542168674698793,
                "fc_rate" : 0.572289156626506,
                "clear_rate" : 0.9879518072289156
            },
            {
                "lv" : 43,
                "genre" : "キャンディレイヴ(EX)",
                "song" : "smooooch・∀・",
                "pf_rate" : 0.5311203319502075,
                "fc_rate" : 0.7427385892116183,
                "clear_rate" : 0.991701244813278
            },
            {
                "lv" : 43,
                "genre" : "キョウゲキ(EX)",
                "song" : "加油！元気猿！",
                "pf_rate" : 0.12643678160919541,
                "fc_rate" : 0.6839080459770115,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ギャラクシヴロック(EX)",
                "song" : "Polaris",
                "pf_rate" : 0.2780487804878049,
                "fc_rate" : 0.4975609756097561,
                "clear_rate" : 0.9951219512195122
            },
            {
                "lv" : 43,
                "genre" : "グラディウスII(EX)",
                "song" : "A SHOOTING STAR",
                "pf_rate" : 0.43103448275862066,
                "fc_rate" : 0.6839080459770115,
                "clear_rate" : 0.9827586206896551
            },
            {
                "lv" : 43,
                "genre" : "グランヂデス(H)",
                "song" : "ULTRA BUTTERFLY(坤剛力)",
                "pf_rate" : 0.27388535031847133,
                "fc_rate" : 0.5414012738853503,
                "clear_rate" : 0.9936305732484076
            },
            {
                "lv" : 43,
                "genre" : "ゴエモン(EX)",
                "song" : "がんばれゴエモンメドレー",
                "pf_rate" : 0.19886363636363635,
                "fc_rate" : 0.4772727272727273,
                "clear_rate" : 0.9829545454545454
            },
            {
                "lv" : 43,
                "genre" : "サイバーデジビート(EX)",
                "song" : "UNLIMITED",
                "pf_rate" : 0.5434782608695652,
                "fc_rate" : 0.7554347826086957,
                "clear_rate" : 0.9945652173913043
            },
            {
                "lv" : 43,
                "genre" : "シューゲイザー(H)",
                "song" : "chilblain",
                "pf_rate" : 0.2823529411764706,
                "fc_rate" : 0.48823529411764705,
                "clear_rate" : 0.9823529411764705
            },
            {
                "lv" : 43,
                "genre" : "シューティングフュージョン(EX)",
                "song" : "El Dorado",
                "pf_rate" : 0.46596858638743455,
                "fc_rate" : 0.680628272251309,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "シンフォニックメタルop.２(H)",
                "song" : "Sanctum Crusade",
                "pf_rate" : 0.2827586206896552,
                "fc_rate" : 0.496551724137931,
                "clear_rate" : 0.9862068965517241
            },
            {
                "lv" : 43,
                "genre" : "ジグREMIX(EX)",
                "song" : "Tir na n'Og (Europa GT Remix)",
                "pf_rate" : 0.6218905472636815,
                "fc_rate" : 0.7562189054726368,
                "clear_rate" : 0.9950248756218906
            },
            {
                "lv" : 43,
                "genre" : "ジャングル・ゴーゴー(EX)",
                "song" : "キングモンキー",
                "pf_rate" : 0.4074074074074074,
                "fc_rate" : 0.5617283950617284,
                "clear_rate" : 0.9938271604938271
            },
            {
                "lv" : 43,
                "genre" : "ジュエリーロック(EX)",
                "song" : "jewelry girl*",
                "pf_rate" : 0.5963302752293578,
                "fc_rate" : 0.6743119266055045,
                "clear_rate" : 0.9954128440366973
            },
            {
                "lv" : 43,
                "genre" : "スウィング歌謡(EX)",
                "song" : "花見で一杯",
                "pf_rate" : 0.32044198895027626,
                "fc_rate" : 0.574585635359116,
                "clear_rate" : 0.9834254143646409
            },
            {
                "lv" : 43,
                "genre" : "スウェディッシュ(EX)",
                "song" : "カモミール・バスルーム",
                "pf_rate" : 0.5733333333333334,
                "fc_rate" : 0.7133333333333334,
                "clear_rate" : 0.9933333333333333
            },
            {
                "lv" : 43,
                "genre" : "スターヒーロー(EX)",
                "song" : "ボクモ、ワタシモ、ムービースター☆",
                "pf_rate" : 0.8161434977578476,
                "fc_rate" : 0.9147982062780269,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ストリートチューン(EX)",
                "song" : "探検ノート（Street style）",
                "pf_rate" : 0.5808080808080808,
                "fc_rate" : 0.7626262626262627,
                "clear_rate" : 0.9848484848484849
            },
            {
                "lv" : 43,
                "genre" : "スピードダンス(H)",
                "song" : "GAIA",
                "pf_rate" : 0.2087378640776699,
                "fc_rate" : 0.4077669902912621,
                "clear_rate" : 0.9951456310679612
            },
            {
                "lv" : 43,
                "genre" : "スプリングテクノ(EX)",
                "song" : "spring pony",
                "pf_rate" : 0.44607843137254904,
                "fc_rate" : 0.6029411764705882,
                "clear_rate" : 0.9950980392156863
            },
            {
                "lv" : 43,
                "genre" : "スムース(EX)",
                "song" : "ATTITUDE",
                "pf_rate" : 0.36046511627906974,
                "fc_rate" : 0.5581395348837209,
                "clear_rate" : 0.9941860465116279
            },
            {
                "lv" : 43,
                "genre" : "セツブン(EX)",
                "song" : "お豆の哀歌",
                "pf_rate" : 0.6464646464646465,
                "fc_rate" : 0.6818181818181818,
                "clear_rate" : 0.9949494949494949
            },
            {
                "lv" : 43,
                "genre" : "チアパラ(EX)",
                "song" : "3・2・1→Smile！",
                "pf_rate" : 0.5120772946859904,
                "fc_rate" : 0.6763285024154589,
                "clear_rate" : 0.9903381642512077
            },
            {
                "lv" : 43,
                "genre" : "チップンロール(EX)",
                "song" : "青春ピコピコRock'n Roll",
                "pf_rate" : 0.5957446808510638,
                "fc_rate" : 0.75,
                "clear_rate" : 0.9946808510638298
            },
            {
                "lv" : 43,
                "genre" : "チュリースユーロ(EX)",
                "song" : "マジヤバ最強伝説",
                "pf_rate" : 0.5555555555555556,
                "fc_rate" : 0.708994708994709,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "テクノちゃいるど(EX)",
                "song" : "わたしのパパはのうむだいじん",
                "pf_rate" : 0.572972972972973,
                "fc_rate" : 0.7351351351351352,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "テクノカヨウREMIX(EX)",
                "song" : "うるとら★ボーイ NAUGHTY BOY remix",
                "pf_rate" : 0.43820224719101125,
                "fc_rate" : 0.6348314606741573,
                "clear_rate" : 0.9887640449438202
            },
            {
                "lv" : 43,
                "genre" : "ディーヴァポップ(EX)",
                "song" : "LUV×REVO",
                "pf_rate" : 0.5588235294117647,
                "fc_rate" : 0.7254901960784313,
                "clear_rate" : 0.9852941176470589
            },
            {
                "lv" : 43,
                "genre" : "デスコラップ(EX)",
                "song" : "Nick RING",
                "pf_rate" : 0.30718954248366015,
                "fc_rate" : 0.6274509803921569,
                "clear_rate" : 0.9934640522875817
            },
            {
                "lv" : 43,
                "genre" : "トイブレークコア(EX)",
                "song" : "MARS WAR 3",
                "pf_rate" : 0.49122807017543857,
                "fc_rate" : 0.6257309941520468,
                "clear_rate" : 0.9941520467836257
            },
            {
                "lv" : 43,
                "genre" : "トゥインクルポップ(EX)",
                "song" : "Twinkle Wonderland",
                "pf_rate" : 0.5258215962441315,
                "fc_rate" : 0.7464788732394366,
                "clear_rate" : 0.9906103286384976
            },
            {
                "lv" : 43,
                "genre" : "トゥイート(EX)",
                "song" : "うぐいす",
                "pf_rate" : 0.5794871794871795,
                "fc_rate" : 0.6666666666666666,
                "clear_rate" : 0.9794871794871794
            },
            {
                "lv" : 43,
                "genre" : "トラディショナルルーツ(EX)",
                "song" : "荒城メランコリー",
                "pf_rate" : 0.37948717948717947,
                "fc_rate" : 0.5692307692307692,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ナンキョク(EX)",
                "song" : "クラゲータ",
                "pf_rate" : 0.4497354497354497,
                "fc_rate" : 0.671957671957672,
                "clear_rate" : 0.9894179894179894
            },
            {
                "lv" : 43,
                "genre" : "ネオアコ(EX)",
                "song" : "(fly higher than)the stars",
                "pf_rate" : 0.2484472049689441,
                "fc_rate" : 0.546583850931677,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ネオクラシカル・ヘヴィメタル(EX)",
                "song" : "Aithon",
                "pf_rate" : 0.40540540540540543,
                "fc_rate" : 0.5675675675675675,
                "clear_rate" : 0.9891891891891892
            },
            {
                "lv" : 43,
                "genre" : "ノマディックネイション(H)",
                "song" : "カラルの月",
                "pf_rate" : 0.17177914110429449,
                "fc_rate" : 0.36809815950920244,
                "clear_rate" : 0.950920245398773
            },
            {
                "lv" : 43,
                "genre" : "ノンストップ☆イレーション(EX)",
                "song" : "ノンストップ☆イレーション",
                "pf_rate" : 0.5763888888888888,
                "fc_rate" : 0.7291666666666666,
                "clear_rate" : 0.9930555555555556
            },
            {
                "lv" : 43,
                "genre" : "ハイパーマスカレード(EX)",
                "song" : "masquerade",
                "pf_rate" : 0.5566037735849056,
                "fc_rate" : 0.7594339622641509,
                "clear_rate" : 0.9858490566037735
            },
            {
                "lv" : 43,
                "genre" : "ハードアクション(EX)",
                "song" : "COMMANDO",
                "pf_rate" : 0.39285714285714285,
                "fc_rate" : 0.5595238095238095,
                "clear_rate" : 0.9940476190476191
            },
            {
                "lv" : 43,
                "genre" : "ハードルネッサンス３(H)",
                "song" : "JOMANDA",
                "pf_rate" : 0.08152173913043478,
                "fc_rate" : 0.42391304347826086,
                "clear_rate" : 0.9402173913043478
            },
            {
                "lv" : 43,
                "genre" : "パーカッシヴ(EX)",
                "song" : "西新宿清掃曲",
                "pf_rate" : 0.06521739130434782,
                "fc_rate" : 0.5,
                "clear_rate" : 0.9891304347826086
            },
            {
                "lv" : 43,
                "genre" : "ヒカリユリイカ(EX)",
                "song" : "ヒカリユリイカ",
                "pf_rate" : 0.6111111111111112,
                "fc_rate" : 0.7716049382716049,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ヒップロック３(H)",
                "song" : "雪上断火",
                "pf_rate" : 0.17222222222222222,
                "fc_rate" : 0.5111111111111111,
                "clear_rate" : 0.9833333333333333
            },
            {
                "lv" : 43,
                "genre" : "ビートロック(EX)",
                "song" : "memories",
                "pf_rate" : 0.3872832369942196,
                "fc_rate" : 0.6416184971098265,
                "clear_rate" : 0.9884393063583815
            },
            {
                "lv" : 43,
                "genre" : "フィーバーロボ(H)",
                "song" : "踊るフィーバーロボ",
                "pf_rate" : 0.23417721518987342,
                "fc_rate" : 0.43670886075949367,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ブラスロック(EX)",
                "song" : "三毛猫ロック",
                "pf_rate" : 0.13089005235602094,
                "fc_rate" : 0.5235602094240838,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ブラッドメタル(H)",
                "song" : "IX",
                "pf_rate" : 0.26455026455026454,
                "fc_rate" : 0.4603174603174603,
                "clear_rate" : 0.9735449735449735
            },
            {
                "lv" : 43,
                "genre" : "プログレ(EX)",
                "song" : "子供の落書き帳",
                "pf_rate" : 0.0821256038647343,
                "fc_rate" : 0.4975845410628019,
                "clear_rate" : 0.9903381642512077
            },
            {
                "lv" : 43,
                "genre" : "プログレッシブ(H)",
                "song" : "V",
                "pf_rate" : 0.271356783919598,
                "fc_rate" : 0.5025125628140703,
                "clear_rate" : 0.9698492462311558
            },
            {
                "lv" : 43,
                "genre" : "プログレッシブバロック(H)",
                "song" : "Ubertreffen",
                "pf_rate" : 0.3282051282051282,
                "fc_rate" : 0.5897435897435898,
                "clear_rate" : 0.9846153846153847
            },
            {
                "lv" : 43,
                "genre" : "プロポーズREMIX(EX)",
                "song" : "ふたりのマニフェスト(Circle of the afternoon MIX)",
                "pf_rate" : 0.23976608187134502,
                "fc_rate" : 0.4444444444444444,
                "clear_rate" : 0.9649122807017544
            },
            {
                "lv" : 43,
                "genre" : "ヘビーメタル(H)",
                "song" : "I'm on Fire",
                "pf_rate" : 0.017094017094017096,
                "fc_rate" : 0.23931623931623933,
                "clear_rate" : 0.9658119658119658
            },
            {
                "lv" : 43,
                "genre" : "ヘヴィロック(EX)",
                "song" : "INNOVATION",
                "pf_rate" : 0.16666666666666666,
                "fc_rate" : 0.6428571428571429,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ホロウダンス(EX)",
                "song" : "ホロウダンス",
                "pf_rate" : 0.6305732484076433,
                "fc_rate" : 0.7643312101910829,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ボーイズポップ(EX)",
                "song" : "mind",
                "pf_rate" : 0.5251396648044693,
                "fc_rate" : 0.7206703910614525,
                "clear_rate" : 0.994413407821229
            },
            {
                "lv" : 43,
                "genre" : "メタリックオペラ(H)",
                "song" : "Geiselhaus",
                "pf_rate" : 0.17834394904458598,
                "fc_rate" : 0.3821656050955414,
                "clear_rate" : 0.9872611464968153
            },
            {
                "lv" : 43,
                "genre" : "メルト(EX)",
                "song" : "メルト",
                "pf_rate" : 0.5598086124401914,
                "fc_rate" : 0.7799043062200957,
                "clear_rate" : 0.9952153110047847
            },
            {
                "lv" : 43,
                "genre" : "メロパンク２(EX)",
                "song" : "lime-light",
                "pf_rate" : 0.5736842105263158,
                "fc_rate" : 0.6736842105263158,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "モダンパンク(H)",
                "song" : "夢について　TYPE C",
                "pf_rate" : 0.3660130718954248,
                "fc_rate" : 0.5751633986928104,
                "clear_rate" : 0.9738562091503268
            },
            {
                "lv" : 43,
                "genre" : "モンドロック(EX)",
                "song" : "CODENAME:APRIL",
                "pf_rate" : 0.639344262295082,
                "fc_rate" : 0.7650273224043715,
                "clear_rate" : 0.994535519125683
            },
            {
                "lv" : 43,
                "genre" : "ヤキュウロック(EX)",
                "song" : "恋のキャッチボール",
                "pf_rate" : 0.5112359550561798,
                "fc_rate" : 0.6629213483146067,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ラウンジポップ(H)",
                "song" : "Linus",
                "pf_rate" : 0.13736263736263737,
                "fc_rate" : 0.5824175824175825,
                "clear_rate" : 0.989010989010989
            },
            {
                "lv" : 43,
                "genre" : "ラッキーテクノ(EX)",
                "song" : "ラキラキ",
                "pf_rate" : 0.36318407960199006,
                "fc_rate" : 0.5174129353233831,
                "clear_rate" : 0.9751243781094527
            },
            {
                "lv" : 43,
                "genre" : "ラブリートランスポップ(EX)",
                "song" : "虹色",
                "pf_rate" : 0.35960591133004927,
                "fc_rate" : 0.5960591133004927,
                "clear_rate" : 0.9950738916256158
            },
            {
                "lv" : 43,
                "genre" : "リトルロック(EX)",
                "song" : "Little Rock Overture",
                "pf_rate" : 0.463768115942029,
                "fc_rate" : 0.6376811594202898,
                "clear_rate" : 0.9903381642512077
            },
            {
                "lv" : 43,
                "genre" : "リンク(EX)",
                "song" : "空澄みの鵯と",
                "pf_rate" : 0.5687203791469194,
                "fc_rate" : 0.7251184834123223,
                "clear_rate" : 0.990521327014218
            },
            {
                "lv" : 43,
                "genre" : "レクリスレイヴ(EX)",
                "song" : "GOLD RUSH （pop'n GOLD MOUNTAIN rush）",
                "pf_rate" : 0.4312796208530806,
                "fc_rate" : 0.6350710900473934,
                "clear_rate" : 0.995260663507109
            },
            {
                "lv" : 43,
                "genre" : "レディメタル(EX)",
                "song" : "Over the night",
                "pf_rate" : 0.5319148936170213,
                "fc_rate" : 0.7127659574468085,
                "clear_rate" : 0.9840425531914894
            },
            {
                "lv" : 43,
                "genre" : "ロンリーフィール(EX)",
                "song" : "fragments",
                "pf_rate" : 0.6513761467889908,
                "fc_rate" : 0.7798165137614679,
                "clear_rate" : 0.9954128440366973
            },
            {
                "lv" : 43,
                "genre" : "ロープレバトル(EX)",
                "song" : "バトル XIII",
                "pf_rate" : 0.37222222222222223,
                "fc_rate" : 0.5666666666666667,
                "clear_rate" : 0.9944444444444445
            },
            {
                "lv" : 43,
                "genre" : "ワラベステップ(H)",
                "song" : "コドモライブ",
                "pf_rate" : 0.31213872832369943,
                "fc_rate" : 0.4797687861271676,
                "clear_rate" : 0.976878612716763
            },
            {
                "lv" : 43,
                "genre" : "万葉歌(EX)",
                "song" : "防人恋歌",
                "pf_rate" : 0.6428571428571429,
                "fc_rate" : 0.8445378151260504,
                "clear_rate" : 0.9957983193277311
            },
            {
                "lv" : 43,
                "genre" : "人妖絵巻其の一「狐」～ 紅楼ノ夢 ～(EX)",
                "song" : "人妖絵巻其の一「狐」～ 紅楼ノ夢 ～",
                "pf_rate" : 0.3674698795180723,
                "fc_rate" : 0.572289156626506,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "和算テクノ(EX)",
                "song" : "ZIN-DEN-GO",
                "pf_rate" : 0.32065217391304346,
                "fc_rate" : 0.5434782608695652,
                "clear_rate" : 0.9836956521739131
            },
            {
                "lv" : 43,
                "genre" : "夏休み(EX)",
                "song" : "なつやすみのぼうけん",
                "pf_rate" : 0.3967391304347826,
                "fc_rate" : 0.6793478260869565,
                "clear_rate" : 0.9891304347826086
            },
            {
                "lv" : 43,
                "genre" : "夏祭り(UPPER)(EX)",
                "song" : "夏祭り",
                "pf_rate" : 0.48148148148148145,
                "fc_rate" : 0.6419753086419753,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "大江戸カヨウ(EX)",
                "song" : "林檎夫人",
                "pf_rate" : 0.44692737430167595,
                "fc_rate" : 0.6368715083798883,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "天ノ弱(EX)",
                "song" : "天ノ弱",
                "pf_rate" : 0.44036697247706424,
                "fc_rate" : 0.6100917431192661,
                "clear_rate" : 0.9770642201834863
            },
            {
                "lv" : 43,
                "genre" : "天体カレイドスコープ(EX)",
                "song" : "天体カレイドスコープ",
                "pf_rate" : 0.4878048780487805,
                "fc_rate" : 0.6402439024390244,
                "clear_rate" : 0.9695121951219512
            },
            {
                "lv" : 43,
                "genre" : "天才少女が解けない問題(EX)",
                "song" : "天才少女が解けない問題",
                "pf_rate" : 0.532258064516129,
                "fc_rate" : 0.7634408602150538,
                "clear_rate" : 0.9838709677419355
            },
            {
                "lv" : 43,
                "genre" : "彗星RAVE(EX)",
                "song" : "BI-BUN-SEKI-BUn",
                "pf_rate" : 0.6971153846153846,
                "fc_rate" : 0.8413461538461539,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "必殺スパイ(EX)",
                "song" : "お仕置き忍のテーマ",
                "pf_rate" : 0.3780487804878049,
                "fc_rate" : 0.6463414634146342,
                "clear_rate" : 0.9878048780487805
            },
            {
                "lv" : 43,
                "genre" : "忍者メタル(H)",
                "song" : "背水之陣",
                "pf_rate" : 0.25925925925925924,
                "fc_rate" : 0.5123456790123457,
                "clear_rate" : 0.9814814814814815
            },
            {
                "lv" : 43,
                "genre" : "恋愛勇者(EX)",
                "song" : "恋愛勇者",
                "pf_rate" : 0.5568181818181818,
                "fc_rate" : 0.7045454545454546,
                "clear_rate" : 0.9715909090909091
            },
            {
                "lv" : 43,
                "genre" : "想歌 梅(EX)",
                "song" : "梅雪夜",
                "pf_rate" : 0.4838709677419355,
                "fc_rate" : 0.6405529953917051,
                "clear_rate" : 0.9861751152073732
            },
            {
                "lv" : 43,
                "genre" : "打打打打打打打打打打(EX)",
                "song" : "打打打打打打打打打打",
                "pf_rate" : 0.2974137931034483,
                "fc_rate" : 0.5431034482758621,
                "clear_rate" : 0.978448275862069
            },
            {
                "lv" : 43,
                "genre" : "桜色のメロディー(EX)",
                "song" : "桜色のメロディー",
                "pf_rate" : 0.3575418994413408,
                "fc_rate" : 0.547486033519553,
                "clear_rate" : 0.994413407821229
            },
            {
                "lv" : 43,
                "genre" : "祭(EX)",
                "song" : "祭 JAPAN",
                "pf_rate" : 0.06417112299465241,
                "fc_rate" : 0.6737967914438503,
                "clear_rate" : 0.9893048128342246
            },
            {
                "lv" : 43,
                "genre" : "胸キュン☆マレット(EX)",
                "song" : "キセキはじまり☆",
                "pf_rate" : 0.6,
                "fc_rate" : 0.7863636363636364,
                "clear_rate" : 0.9954545454545455
            },
            {
                "lv" : 43,
                "genre" : "荒波演歌(EX)",
                "song" : "しまなみ海道　男道",
                "pf_rate" : 0.20496894409937888,
                "fc_rate" : 0.453416149068323,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "超中華流行歌曲(EX)",
                "song" : "桃花恋情",
                "pf_rate" : 0.5275229357798165,
                "fc_rate" : 0.7522935779816514,
                "clear_rate" : 0.9954128440366973
            },
            {
                "lv" : 43,
                "genre" : "飛べないぼくと鳴かない黒猫(EX)",
                "song" : "飛べないぼくと鳴かない黒猫",
                "pf_rate" : 0.4883720930232558,
                "fc_rate" : 0.627906976744186,
                "clear_rate" : 0.9883720930232558
            },
            {
                "lv" : 43,
                "genre" : "Ａ．Ｉ．デイトポップ(EX)",
                "song" : "隅田川夏恋歌",
                "pf_rate" : 0.5523012552301255,
                "fc_rate" : 0.7656903765690377,
                "clear_rate" : 0.99581589958159
            },
            {
                "lv" : 43,
                "genre" : "ＤＤＲ(H)",
                "song" : "DDR MEGAMIX",
                "pf_rate" : 0.050955414012738856,
                "fc_rate" : 0.42038216560509556,
                "clear_rate" : 0.9872611464968153
            },
            {
                "lv" : 43,
                "genre" : "Ｊ‐テクノトランスREMIX(EX)",
                "song" : "Quick Master -Naked Trance Mix-",
                "pf_rate" : 0.3850267379679144,
                "fc_rate" : 0.5401069518716578,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "Ｊ‐ネクストポップ(EX)",
                "song" : "～Timeless～",
                "pf_rate" : 0.47368421052631576,
                "fc_rate" : 0.6789473684210526,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "Ｊ‐ハウスポップ(EX)",
                "song" : "太陽とバトル",
                "pf_rate" : 0.4942528735632184,
                "fc_rate" : 0.7126436781609196,
                "clear_rate" : 1
            },
            {
                "lv" : 43,
                "genre" : "ＮＵスタイルロカビリー(EX)",
                "song" : "Electronic or Treat!",
                "pf_rate" : 0.5142857142857142,
                "fc_rate" : 0.6914285714285714,
                "clear_rate" : 0.9771428571428571
            },
            {
                "lv" : 43,
                "genre" : "ＳＦポップ(EX)",
                "song" : "DAWN",
                "pf_rate" : 0.5333333333333333,
                "fc_rate" : 0.717948717948718,
                "clear_rate" : 0.9897435897435898
            },
            {
                "lv" : 42,
                "genre" : "*ハロー、プラネット。(EX)",
                "song" : "*ハロー、プラネット。",
                "pf_rate" : 0.3968253968253968,
                "fc_rate" : 0.582010582010582,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "BARRIER(EX)",
                "song" : "BARRIER",
                "pf_rate" : 0.610062893081761,
                "fc_rate" : 0.7924528301886793,
                "clear_rate" : 0.9937106918238994
            },
            {
                "lv" : 42,
                "genre" : "Be blossom!!(EX)",
                "song" : "Be blossom!!",
                "pf_rate" : 0.5459770114942529,
                "fc_rate" : 0.7701149425287356,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "CHERNOBOG(H)",
                "song" : "CHERNOBOG",
                "pf_rate" : 0.18627450980392157,
                "fc_rate" : 0.38235294117647056,
                "clear_rate" : 0.9705882352941176
            },
            {
                "lv" : 42,
                "genre" : "DIAVOLO(H)",
                "song" : "DIAVOLO",
                "pf_rate" : 0.2645161290322581,
                "fc_rate" : 0.5483870967741935,
                "clear_rate" : 0.9870967741935484
            },
            {
                "lv" : 42,
                "genre" : "El venenciador(H)",
                "song" : "El venenciador",
                "pf_rate" : 0.2987012987012987,
                "fc_rate" : 0.4805194805194805,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "Element of SPADA(EX)",
                "song" : "Element of SPADA",
                "pf_rate" : 0.6533333333333333,
                "fc_rate" : 0.8444444444444444,
                "clear_rate" : 0.9911111111111112
            },
            {
                "lv" : 42,
                "genre" : "Engagement(EX)",
                "song" : "Engagement",
                "pf_rate" : 0.6,
                "fc_rate" : 0.788235294117647,
                "clear_rate" : 0.9941176470588236
            },
            {
                "lv" : 42,
                "genre" : "FuturePANIC!(EX)",
                "song" : "FuturePANIC!",
                "pf_rate" : 0.5,
                "fc_rate" : 0.7054794520547946,
                "clear_rate" : 0.9794520547945206
            },
            {
                "lv" : 42,
                "genre" : "Grand Chariot(H)",
                "song" : "Grand Chariot",
                "pf_rate" : 0.3333333333333333,
                "fc_rate" : 0.4583333333333333,
                "clear_rate" : 0.9895833333333334
            },
            {
                "lv" : 42,
                "genre" : "Innocence(H)",
                "song" : "Innocence",
                "pf_rate" : 0.20149253731343283,
                "fc_rate" : 0.35074626865671643,
                "clear_rate" : 0.9626865671641791
            },
            {
                "lv" : 42,
                "genre" : "Kaleidoscopic(EX)",
                "song" : "Kaleidoscopic",
                "pf_rate" : 0.5144508670520231,
                "fc_rate" : 0.7341040462427746,
                "clear_rate" : 0.9942196531791907
            },
            {
                "lv" : 42,
                "genre" : "MADSPEED狂信道(H)",
                "song" : "MADSPEED狂信道",
                "pf_rate" : 0.19318181818181818,
                "fc_rate" : 0.45454545454545453,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "Metamorphose(H)",
                "song" : "Metamorphose",
                "pf_rate" : 0.2711864406779661,
                "fc_rate" : 0.4491525423728814,
                "clear_rate" : 0.9830508474576272
            },
            {
                "lv" : 42,
                "genre" : "ON-DO(H)",
                "song" : "ON-DO",
                "pf_rate" : 0.3333333333333333,
                "fc_rate" : 0.5507246376811594,
                "clear_rate" : 0.9710144927536232
            },
            {
                "lv" : 42,
                "genre" : "Re:Unite the Night(EX)",
                "song" : "Re:Unite the Night",
                "pf_rate" : 0.46825396825396826,
                "fc_rate" : 0.6349206349206349,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "Rhythm in Pocket(EX)",
                "song" : "Rhythm in Pocket",
                "pf_rate" : 0.5040650406504065,
                "fc_rate" : 0.7479674796747967,
                "clear_rate" : 0.991869918699187
            },
            {
                "lv" : 42,
                "genre" : "Russian Caravan Rhapsody(UPPER)(H)",
                "song" : "Russian Caravan Rhapsody",
                "pf_rate" : 0.625,
                "fc_rate" : 0.75,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "Subdued Color Pop(EX)",
                "song" : "Subdued Color Pop",
                "pf_rate" : 0.43478260869565216,
                "fc_rate" : 0.5942028985507246,
                "clear_rate" : 0.9855072463768116
            },
            {
                "lv" : 42,
                "genre" : "Sugar Coaster Girl(EX)",
                "song" : "Sugar Coaster Girl",
                "pf_rate" : 0.45,
                "fc_rate" : 0.65625,
                "clear_rate" : 0.99375
            },
            {
                "lv" : 42,
                "genre" : "Swinging Skulls(H)",
                "song" : "Swinging Skulls",
                "pf_rate" : 0.3333333333333333,
                "fc_rate" : 0.4444444444444444,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "Triple Counter(H)",
                "song" : "Triple Counter",
                "pf_rate" : 0.32432432432432434,
                "fc_rate" : 0.5225225225225225,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ZADAMGA(H)",
                "song" : "ZADAMGA",
                "pf_rate" : 0.20833333333333334,
                "fc_rate" : 0.375,
                "clear_rate" : 0.9916666666666667
            },
            {
                "lv" : 42,
                "genre" : "luck(EX)",
                "song" : "luck",
                "pf_rate" : 0.3352941176470588,
                "fc_rate" : 0.5941176470588235,
                "clear_rate" : 0.9588235294117647
            },
            {
                "lv" : 42,
                "genre" : "neko＊neko(EX)",
                "song" : "neko＊neko",
                "pf_rate" : 0.449438202247191,
                "fc_rate" : 0.6573033707865169,
                "clear_rate" : 0.9887640449438202
            },
            {
                "lv" : 42,
                "genre" : "only my railgun(EX)",
                "song" : "only my railgun",
                "pf_rate" : 0.49107142857142855,
                "fc_rate" : 0.6741071428571429,
                "clear_rate" : 0.9910714285714286
            },
            {
                "lv" : 42,
                "genre" : "trideca(H)",
                "song" : "trideca",
                "pf_rate" : 0.2708333333333333,
                "fc_rate" : 0.4791666666666667,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "おーまい！らぶりー！すうぃーてぃ！だーりん！（DANCERUSH Style）(EX)",
                "song" : "おーまい！らぶりー！すうぃーてぃ！だーりん！（DANCERUSH Style）",
                "pf_rate" : 0.5510204081632653,
                "fc_rate" : 0.7346938775510204,
                "clear_rate" : 0.9863945578231292
            },
            {
                "lv" : 42,
                "genre" : "そこに或るヒカリ(EX)",
                "song" : "そこに或るヒカリ",
                "pf_rate" : 0.5527950310559007,
                "fc_rate" : 0.6770186335403726,
                "clear_rate" : 0.9813664596273292
            },
            {
                "lv" : 42,
                "genre" : "たぶん、キスくらいしてる(EX)",
                "song" : "たぶん、キスくらいしてる",
                "pf_rate" : 0.42038216560509556,
                "fc_rate" : 0.6687898089171974,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "たまごの物理科学的 及び調理特性に関しての調査、そしてその考察(H)",
                "song" : "たまごの物理科学的 及び調理特性に関しての調査、そしてその考察",
                "pf_rate" : 0.2571428571428571,
                "fc_rate" : 0.5428571428571428,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ちびっこアイドルREMIX(EX)",
                "song" : "オトメルンバ♪ L.E.D.-G STYLE MIX",
                "pf_rate" : 0.4228855721393035,
                "fc_rate" : 0.6666666666666666,
                "clear_rate" : 0.9701492537313433
            },
            {
                "lv" : 42,
                "genre" : "アドレッセンス(EX)",
                "song" : "ピンク",
                "pf_rate" : 0.7348837209302326,
                "fc_rate" : 0.8790697674418605,
                "clear_rate" : 0.9953488372093023
            },
            {
                "lv" : 42,
                "genre" : "アリスサイド・キャスリング(EX)",
                "song" : "アリスサイド・キャスリング",
                "pf_rate" : 0.4305555555555556,
                "fc_rate" : 0.6875,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "アンセム(H)",
                "song" : "天空の夜明け",
                "pf_rate" : 0.271889400921659,
                "fc_rate" : 0.4470046082949309,
                "clear_rate" : 0.9815668202764977
            },
            {
                "lv" : 42,
                "genre" : "インボルク(H)",
                "song" : "生命の焔纏いて",
                "pf_rate" : 0.2887700534759358,
                "fc_rate" : 0.47593582887700536,
                "clear_rate" : 0.9893048128342246
            },
            {
                "lv" : 42,
                "genre" : "イークリニック(EX)",
                "song" : "Be☆Happy！",
                "pf_rate" : 0.6341463414634146,
                "fc_rate" : 0.824390243902439,
                "clear_rate" : 0.9951219512195122
            },
            {
                "lv" : 42,
                "genre" : "ウィッシュ(EX)",
                "song" : "アミュレット",
                "pf_rate" : 0.6431924882629108,
                "fc_rate" : 0.8309859154929577,
                "clear_rate" : 0.9906103286384976
            },
            {
                "lv" : 42,
                "genre" : "エッセンシャリー(H)",
                "song" : "True Blue",
                "pf_rate" : 0.29444444444444445,
                "fc_rate" : 0.5,
                "clear_rate" : 0.9777777777777777
            },
            {
                "lv" : 42,
                "genre" : "エレクトロバロック(H)",
                "song" : "Amalgamation",
                "pf_rate" : 0.31693989071038253,
                "fc_rate" : 0.5245901639344263,
                "clear_rate" : 0.9781420765027322
            },
            {
                "lv" : 42,
                "genre" : "エレフラッドウェイヴ(H)",
                "song" : "Aqua",
                "pf_rate" : 0.28378378378378377,
                "fc_rate" : 0.5202702702702703,
                "clear_rate" : 0.9932432432432432
            },
            {
                "lv" : 42,
                "genre" : "オオサカ(H)",
                "song" : "最強おばちゃん伝説",
                "pf_rate" : 0.1696969696969697,
                "fc_rate" : 0.593939393939394,
                "clear_rate" : 0.9939393939393939
            },
            {
                "lv" : 42,
                "genre" : "カラオケREMIX(EX)",
                "song" : "愛言葉～アイコトバ～CYBER VIP ECHO MIX～",
                "pf_rate" : 0.32085561497326204,
                "fc_rate" : 0.5775401069518716,
                "clear_rate" : 0.9786096256684492
            },
            {
                "lv" : 42,
                "genre" : "ガラージハウス(EX)",
                "song" : "together 4ever",
                "pf_rate" : 0.3867403314917127,
                "fc_rate" : 0.6353591160220995,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ガールズパンクスタイル(EX)",
                "song" : "旅立ちの唄",
                "pf_rate" : 0.5125628140703518,
                "fc_rate" : 0.6582914572864321,
                "clear_rate" : 0.9798994974874372
            },
            {
                "lv" : 42,
                "genre" : "キモチコネクト(EX)",
                "song" : "キモチコネクト",
                "pf_rate" : 0.6633165829145728,
                "fc_rate" : 0.8241206030150754,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "キャンディレイヴ(EX)",
                "song" : "Wuv U",
                "pf_rate" : 0.6355140186915887,
                "fc_rate" : 0.7757009345794392,
                "clear_rate" : 0.9953271028037384
            },
            {
                "lv" : 42,
                "genre" : "キューバングルーブ(EX)",
                "song" : "サナ・モレッテ・ネ・エンテ",
                "pf_rate" : 0.12105263157894737,
                "fc_rate" : 0.531578947368421,
                "clear_rate" : 0.9947368421052631
            },
            {
                "lv" : 42,
                "genre" : "クッキーファンタジー(EX)",
                "song" : "Hearty Party",
                "pf_rate" : 0.3028571428571429,
                "fc_rate" : 0.49714285714285716,
                "clear_rate" : 0.9885714285714285
            },
            {
                "lv" : 42,
                "genre" : "クラシック７(H)",
                "song" : "The tyro's reverie",
                "pf_rate" : 0.07142857142857142,
                "fc_rate" : 0.2714285714285714,
                "clear_rate" : 0.9857142857142858
            },
            {
                "lv" : 42,
                "genre" : "クリエイター(H)",
                "song" : "創世ノート",
                "pf_rate" : 0.1890547263681592,
                "fc_rate" : 0.4079601990049751,
                "clear_rate" : 0.9900497512437811
            },
            {
                "lv" : 42,
                "genre" : "クロスオーバー(EX)",
                "song" : "Waza",
                "pf_rate" : 0.14942528735632185,
                "fc_rate" : 0.6264367816091954,
                "clear_rate" : 0.9942528735632183
            },
            {
                "lv" : 42,
                "genre" : "コアダストビート(H)",
                "song" : "真超深ＴＩＯＮ",
                "pf_rate" : 0.2222222222222222,
                "fc_rate" : 0.5208333333333334,
                "clear_rate" : 0.9930555555555556
            },
            {
                "lv" : 42,
                "genre" : "コアロック(H)",
                "song" : "へんたいトリロジー",
                "pf_rate" : 0.4482758620689655,
                "fc_rate" : 0.5862068965517241,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "コルトーン(H)",
                "song" : "コルトーン",
                "pf_rate" : 0.2087912087912088,
                "fc_rate" : 0.4835164835164835,
                "clear_rate" : 0.967032967032967
            },
            {
                "lv" : 42,
                "genre" : "ゴアトランス(H)",
                "song" : "IMPLANTATION",
                "pf_rate" : 0.30952380952380953,
                "fc_rate" : 0.5396825396825397,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "サイバーフラメンコ(H)",
                "song" : "hora de verdad",
                "pf_rate" : 0.19078947368421054,
                "fc_rate" : 0.42105263157894735,
                "clear_rate" : 0.9868421052631579
            },
            {
                "lv" : 42,
                "genre" : "サウンドトラック(EX)",
                "song" : "宇宙船Q-Mex",
                "pf_rate" : 0.291005291005291,
                "fc_rate" : 0.6243386243386243,
                "clear_rate" : 0.9947089947089947
            },
            {
                "lv" : 42,
                "genre" : "シンパシー３(EX)",
                "song" : "memories... ",
                "pf_rate" : 0.5812807881773399,
                "fc_rate" : 0.7832512315270936,
                "clear_rate" : 0.9852216748768473
            },
            {
                "lv" : 42,
                "genre" : "シンフォニックテクノ(EX)",
                "song" : "乱",
                "pf_rate" : 0.5876288659793815,
                "fc_rate" : 0.6804123711340206,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "シンフォニックメタル(H)",
                "song" : "Holy Forest",
                "pf_rate" : 0.3356164383561644,
                "fc_rate" : 0.5753424657534246,
                "clear_rate" : 0.9931506849315068
            },
            {
                "lv" : 42,
                "genre" : "シンフォニック陣楽(EX)",
                "song" : "天の峠",
                "pf_rate" : 0.47368421052631576,
                "fc_rate" : 0.6608187134502924,
                "clear_rate" : 0.9883040935672515
            },
            {
                "lv" : 42,
                "genre" : "スペシャルクッキング(H)",
                "song" : "100sec. Kitchen Battle!!",
                "pf_rate" : 0.5047619047619047,
                "fc_rate" : 0.7380952380952381,
                "clear_rate" : 0.9952380952380953
            },
            {
                "lv" : 42,
                "genre" : "スマイルスマッシュ(EX)",
                "song" : "MILK・CROWN",
                "pf_rate" : 0.6,
                "fc_rate" : 0.7028571428571428,
                "clear_rate" : 0.9942857142857143
            },
            {
                "lv" : 42,
                "genre" : "スライ(EX)",
                "song" : "Tokyo Traffic Report",
                "pf_rate" : 0.3184713375796178,
                "fc_rate" : 0.5286624203821656,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ソニックブーム(EX)",
                "song" : "Break on Through",
                "pf_rate" : 0.3672316384180791,
                "fc_rate" : 0.576271186440678,
                "clear_rate" : 0.9887005649717514
            },
            {
                "lv" : 42,
                "genre" : "ゾディアックオラクル7(H)",
                "song" : "アストライアの双皿",
                "pf_rate" : 0.19248826291079812,
                "fc_rate" : 0.3568075117370892,
                "clear_rate" : 0.9906103286384976
            },
            {
                "lv" : 42,
                "genre" : "タッキュウブギ(EX)",
                "song" : "Ping Pong Boogie",
                "pf_rate" : 0.3081761006289308,
                "fc_rate" : 0.48427672955974843,
                "clear_rate" : 0.9937106918238994
            },
            {
                "lv" : 42,
                "genre" : "ダブステ列島恋物語(EX)",
                "song" : "ダブステ列島恋物語",
                "pf_rate" : 0.10559006211180125,
                "fc_rate" : 0.2981366459627329,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "チャイナプログレッシヴ(EX)",
                "song" : "変幻自在",
                "pf_rate" : 0.49732620320855614,
                "fc_rate" : 0.7005347593582888,
                "clear_rate" : 0.983957219251337
            },
            {
                "lv" : 42,
                "genre" : "チャイニーズマインド(EX)",
                "song" : "悠久神話録-遥かなる山脈に流れる大河の畔にて-",
                "pf_rate" : 0.4074074074074074,
                "fc_rate" : 0.6172839506172839,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "チンドンダンス(EX)",
                "song" : "TIN-DON-DANCE",
                "pf_rate" : 0.3551912568306011,
                "fc_rate" : 0.5846994535519126,
                "clear_rate" : 0.994535519125683
            },
            {
                "lv" : 42,
                "genre" : "ツーマンライブ(EX)",
                "song" : "ツーマンライブ",
                "pf_rate" : 0.729064039408867,
                "fc_rate" : 0.7931034482758621,
                "clear_rate" : 0.9852216748768473
            },
            {
                "lv" : 42,
                "genre" : "ディーヴァメタル(EX)",
                "song" : "幻想花",
                "pf_rate" : 0.46798029556650245,
                "fc_rate" : 0.6551724137931034,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "トイボックス(EX)",
                "song" : "redraw lots",
                "pf_rate" : 0.49444444444444446,
                "fc_rate" : 0.6222222222222222,
                "clear_rate" : 0.9888888888888889
            },
            {
                "lv" : 42,
                "genre" : "トランスコア(H)",
                "song" : "FLOWER",
                "pf_rate" : 0.1712707182320442,
                "fc_rate" : 0.39226519337016574,
                "clear_rate" : 0.988950276243094
            },
            {
                "lv" : 42,
                "genre" : "トランスランス(H)",
                "song" : "full-consciousness green",
                "pf_rate" : 0.3695652173913043,
                "fc_rate" : 0.5869565217391305,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "トリックポップ(EX)",
                "song" : "Smiling",
                "pf_rate" : 0.45625,
                "fc_rate" : 0.64375,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ドリームゲイザー(H)",
                "song" : "Little prayer",
                "pf_rate" : 0.3253968253968254,
                "fc_rate" : 0.4365079365079365,
                "clear_rate" : 0.9920634920634921
            },
            {
                "lv" : 42,
                "genre" : "ニエンテ(H)",
                "song" : "neu",
                "pf_rate" : 0.4439252336448598,
                "fc_rate" : 0.677570093457944,
                "clear_rate" : 0.9813084112149533
            },
            {
                "lv" : 42,
                "genre" : "ニューファンクロック(EX)",
                "song" : "KARISOME",
                "pf_rate" : 0.5771812080536913,
                "fc_rate" : 0.7449664429530202,
                "clear_rate" : 0.9932885906040269
            },
            {
                "lv" : 42,
                "genre" : "ニューレイヴポップ(EX)",
                "song" : "Run To You",
                "pf_rate" : 0.5389221556886228,
                "fc_rate" : 0.6766467065868264,
                "clear_rate" : 0.9940119760479041
            },
            {
                "lv" : 42,
                "genre" : "ネオヴィジュアル(EX)",
                "song" : "In my story",
                "pf_rate" : 0.6402116402116402,
                "fc_rate" : 0.7619047619047619,
                "clear_rate" : 0.9947089947089947
            },
            {
                "lv" : 42,
                "genre" : "ネバーデッド(EX)",
                "song" : "Pharaoh★Love",
                "pf_rate" : 0.5652173913043478,
                "fc_rate" : 0.7246376811594203,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ノマディックネイション２(H)",
                "song" : "Esperanza",
                "pf_rate" : 0.15789473684210525,
                "fc_rate" : 0.40350877192982454,
                "clear_rate" : 0.9941520467836257
            },
            {
                "lv" : 42,
                "genre" : "ハイパンク(EX)",
                "song" : "cobalt",
                "pf_rate" : 0.40404040404040403,
                "fc_rate" : 0.6818181818181818,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ハッピーキュートロック(EX)",
                "song" : "starmine -swallowtail mix-",
                "pf_rate" : 0.694300518134715,
                "fc_rate" : 0.8393782383419689,
                "clear_rate" : 0.9948186528497409
            },
            {
                "lv" : 42,
                "genre" : "ハッピーハードコア(EX)",
                "song" : "STAR SHIP☆HERO",
                "pf_rate" : 0.4752475247524752,
                "fc_rate" : 0.7326732673267327,
                "clear_rate" : 0.9801980198019802
            },
            {
                "lv" : 42,
                "genre" : "ハッピーハードコア(H)",
                "song" : "Sweet Sweet ♥ Magic",
                "pf_rate" : 0.10948905109489052,
                "fc_rate" : 0.46715328467153283,
                "clear_rate" : 0.9854014598540146
            },
            {
                "lv" : 42,
                "genre" : "ハッピーＪユーロ(EX)",
                "song" : "frost",
                "pf_rate" : 0.5786516853932584,
                "fc_rate" : 0.7640449438202247,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ハッピーＪヴォーグREMIX(EX)",
                "song" : "Spring Comes Around (In Like a Lion)",
                "pf_rate" : 0.4720812182741117,
                "fc_rate" : 0.6903553299492385,
                "clear_rate" : 0.9949238578680203
            },
            {
                "lv" : 42,
                "genre" : "ハラショー！おにぎりサーカス団☆(H)",
                "song" : "ハラショー！おにぎりサーカス団☆",
                "pf_rate" : 0.3333333333333333,
                "fc_rate" : 0.6666666666666666,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "バブルガムダンス(EX)",
                "song" : "Mermaid girl",
                "pf_rate" : 0.4230769230769231,
                "fc_rate" : 0.7692307692307693,
                "clear_rate" : 0.9871794871794872
            },
            {
                "lv" : 42,
                "genre" : "パ→ピ→プ→Yeah!(EX)",
                "song" : "パ→ピ→プ→Yeah!",
                "pf_rate" : 0.4788732394366197,
                "fc_rate" : 0.7511737089201878,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "パッショネイトサンバ(EX)",
                "song" : "SAMBA de ASPEL",
                "pf_rate" : 0.5819209039548022,
                "fc_rate" : 0.7627118644067796,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "パティスリーポップ(EX)",
                "song" : "スイーツ・ドリーム",
                "pf_rate" : 0.5056179775280899,
                "fc_rate" : 0.6741573033707865,
                "clear_rate" : 0.9943820224719101
            },
            {
                "lv" : 42,
                "genre" : "パンク(EX)",
                "song" : "そっと。",
                "pf_rate" : 0.44623655913978494,
                "fc_rate" : 0.6559139784946236,
                "clear_rate" : 0.9946236559139785
            },
            {
                "lv" : 42,
                "genre" : "ヒップロック２(H)",
                "song" : "男々道",
                "pf_rate" : 0.014814814814814815,
                "fc_rate" : 0.37777777777777777,
                "clear_rate" : 0.9629629629629629
            },
            {
                "lv" : 42,
                "genre" : "ヒップロック４(H)",
                "song" : "路男",
                "pf_rate" : 0.3197278911564626,
                "fc_rate" : 0.5102040816326531,
                "clear_rate" : 0.9795918367346939
            },
            {
                "lv" : 42,
                "genre" : "ヒーリングフュージョン(EX)",
                "song" : "Atlantic Spotted Dolphin",
                "pf_rate" : 0.4418604651162791,
                "fc_rate" : 0.5581395348837209,
                "clear_rate" : 0.9922480620155039
            },
            {
                "lv" : 42,
                "genre" : "ビートロック(EX)",
                "song" : "LAZY GIRL",
                "pf_rate" : 0.6842105263157895,
                "fc_rate" : 0.7134502923976608,
                "clear_rate" : 0.9941520467836257
            },
            {
                "lv" : 42,
                "genre" : "ピラミッドREMIX(H)",
                "song" : "永遠という名の媚薬 ～Pyramid Power・Death Match ver.～",
                "pf_rate" : 0.18823529411764706,
                "fc_rate" : 0.4117647058823529,
                "clear_rate" : 0.9882352941176471
            },
            {
                "lv" : 42,
                "genre" : "フィーバーヒーローエンディング(EX)",
                "song" : "わたしのフォーティーン（フィーバー戦士ポップン14 EDテーマ）",
                "pf_rate" : 0.3869047619047619,
                "fc_rate" : 0.6130952380952381,
                "clear_rate" : 0.9940476190476191
            },
            {
                "lv" : 42,
                "genre" : "フューチャーフュージョン(EX)",
                "song" : "∞space",
                "pf_rate" : 0.48,
                "fc_rate" : 0.6571428571428571,
                "clear_rate" : 0.9942857142857143
            },
            {
                "lv" : 42,
                "genre" : "フライングデュオ(EX)",
                "song" : "キボウノタネ",
                "pf_rate" : 0.6377551020408163,
                "fc_rate" : 0.8010204081632653,
                "clear_rate" : 0.9948979591836735
            },
            {
                "lv" : 42,
                "genre" : "フロウビート(H)",
                "song" : "CURUS",
                "pf_rate" : 0.38095238095238093,
                "fc_rate" : 0.5595238095238095,
                "clear_rate" : 0.9880952380952381
            },
            {
                "lv" : 42,
                "genre" : "ブラックアルバム(H)",
                "song" : "OVERHEAT -Type P-",
                "pf_rate" : 0.30714285714285716,
                "fc_rate" : 0.5857142857142857,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "プリズムユーロ(EX)",
                "song" : "7 Colors",
                "pf_rate" : 0.6238095238095238,
                "fc_rate" : 0.8095238095238095,
                "clear_rate" : 0.9904761904761905
            },
            {
                "lv" : 42,
                "genre" : "プログレタンゴ(H)",
                "song" : "Red Roses",
                "pf_rate" : 0.2565789473684211,
                "fc_rate" : 0.4342105263157895,
                "clear_rate" : 0.9868421052631579
            },
            {
                "lv" : 42,
                "genre" : "プログレッシブ(H)",
                "song" : "Concertino In Blue",
                "pf_rate" : 0.27380952380952384,
                "fc_rate" : 0.5773809523809523,
                "clear_rate" : 0.9940476190476191
            },
            {
                "lv" : 42,
                "genre" : "ヘイ！ヘイ！Bay～ボクらの夏にサマー☆ウェイヴ～(EX)",
                "song" : "ヘイ！ヘイ！Bay～ボクらの夏にサマー☆ウェイヴ～",
                "pf_rate" : 0.3176470588235294,
                "fc_rate" : 0.5882352941176471,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ホピタスコピラ(H)",
                "song" : "ホピタスコピラ",
                "pf_rate" : 0.4444444444444444,
                "fc_rate" : 0.7777777777777778,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ボーイズＲ＆Ｂ(EX)",
                "song" : "Always",
                "pf_rate" : 0.5517241379310345,
                "fc_rate" : 0.735632183908046,
                "clear_rate" : 0.9942528735632183
            },
            {
                "lv" : 42,
                "genre" : "ボールヅアウトロック(H)",
                "song" : "プリンシプル",
                "pf_rate" : 0.34,
                "fc_rate" : 0.5866666666666667,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ポップスアンコール(H)",
                "song" : "I REALLY WANT TO HURT YOU",
                "pf_rate" : 0.20710059171597633,
                "fc_rate" : 0.650887573964497,
                "clear_rate" : 0.9881656804733728
            },
            {
                "lv" : 42,
                "genre" : "マキナ(EX)",
                "song" : "SigSig",
                "pf_rate" : 0.5948275862068966,
                "fc_rate" : 0.75,
                "clear_rate" : 0.9956896551724138
            },
            {
                "lv" : 42,
                "genre" : "マジカルヒロイン(EX)",
                "song" : "ラブ☆ゲッター～ピュアクル♥リップ～",
                "pf_rate" : 0.545,
                "fc_rate" : 0.785,
                "clear_rate" : 0.99
            },
            {
                "lv" : 42,
                "genre" : "マンボカヨウ(EX)",
                "song" : "HOTな夜の秘ドリンク",
                "pf_rate" : 0.44654088050314467,
                "fc_rate" : 0.6037735849056604,
                "clear_rate" : 0.9874213836477987
            },
            {
                "lv" : 42,
                "genre" : "ミクスチャンポン(EX)",
                "song" : "GIRIGILI門前雀羅",
                "pf_rate" : 0.4470588235294118,
                "fc_rate" : 0.6058823529411764,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "メガネ歌謡(EX)",
                "song" : "ポップミュージック続論",
                "pf_rate" : 0.5491329479768786,
                "fc_rate" : 0.7572254335260116,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "メサリミ(EX)",
                "song" : "D-groove　REQ",
                "pf_rate" : 0.4032258064516129,
                "fc_rate" : 0.6344086021505376,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "メトロポリタン飛行(EX)",
                "song" : "メトロポリタン飛行",
                "pf_rate" : 0.5099337748344371,
                "fc_rate" : 0.6490066225165563,
                "clear_rate" : 0.9668874172185431
            },
            {
                "lv" : 42,
                "genre" : "メロパンク(H)",
                "song" : "pure",
                "pf_rate" : 0.4166666666666667,
                "fc_rate" : 0.6388888888888888,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "モッズ(H)",
                "song" : "2tone",
                "pf_rate" : 0.3269230769230769,
                "fc_rate" : 0.5384615384615384,
                "clear_rate" : 0.9935897435897436
            },
            {
                "lv" : 42,
                "genre" : "ラテンREMIX(EX)",
                "song" : "El pais del sol(GIVE ME MORE SALSA MIX)",
                "pf_rate" : 0.48427672955974843,
                "fc_rate" : 0.6729559748427673,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ラブフォーチュン(EX)",
                "song" : "Sabrina",
                "pf_rate" : 0.4502923976608187,
                "fc_rate" : 0.6842105263157895,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ラブラドライト(EX)",
                "song" : "ラブラドライト",
                "pf_rate" : 0.5248618784530387,
                "fc_rate" : 0.6574585635359116,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ラブリーキャットポップ(EX)",
                "song" : "Chat! Chat! Chat!",
                "pf_rate" : 0.5631578947368421,
                "fc_rate" : 0.8,
                "clear_rate" : 0.9789473684210527
            },
            {
                "lv" : 42,
                "genre" : "ラメント(H)",
                "song" : "雫",
                "pf_rate" : 0.39037433155080214,
                "fc_rate" : 0.6042780748663101,
                "clear_rate" : 0.9732620320855615
            },
            {
                "lv" : 42,
                "genre" : "ランブルローズ(EX)",
                "song" : "ランブルメドレー",
                "pf_rate" : 0.3375,
                "fc_rate" : 0.63125,
                "clear_rate" : 0.9875
            },
            {
                "lv" : 42,
                "genre" : "ラヴリーパラダイスチューン(EX)",
                "song" : "LOVE☆BA☆ZOOKA！",
                "pf_rate" : 0.7714285714285715,
                "fc_rate" : 0.8523809523809524,
                "clear_rate" : 0.9904761904761905
            },
            {
                "lv" : 42,
                "genre" : "リグレッツフィーリング(EX)",
                "song" : "スマイル・リプレイ",
                "pf_rate" : 0.6802030456852792,
                "fc_rate" : 0.8375634517766497,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "リナシタ(H)",
                "song" : "uen",
                "pf_rate" : 0.23958333333333334,
                "fc_rate" : 0.5,
                "clear_rate" : 0.9791666666666666
            },
            {
                "lv" : 42,
                "genre" : "ヴィジュアルREMIX(EX)",
                "song" : "WHITE BIRDS (Mirage Mix)",
                "pf_rate" : 0.4467005076142132,
                "fc_rate" : 0.700507614213198,
                "clear_rate" : 0.9898477157360406
            },
            {
                "lv" : 42,
                "genre" : "ヴェネツィアーニ(EX)",
                "song" : "Canal Grande",
                "pf_rate" : 0.6122448979591837,
                "fc_rate" : 0.8061224489795918,
                "clear_rate" : 0.9897959183673469
            },
            {
                "lv" : 42,
                "genre" : "ヴェラム(H)",
                "song" : "Eine Haube ～聖地の果てにあるもの～",
                "pf_rate" : 0.33125,
                "fc_rate" : 0.525,
                "clear_rate" : 0.9875
            },
            {
                "lv" : 42,
                "genre" : "亜空間ジャズ(H)",
                "song" : "Ergosphere",
                "pf_rate" : 0.29775280898876405,
                "fc_rate" : 0.5224719101123596,
                "clear_rate" : 0.9887640449438202
            },
            {
                "lv" : 42,
                "genre" : "十面相(EX)",
                "song" : "十面相",
                "pf_rate" : 0.5,
                "fc_rate" : 0.6573033707865169,
                "clear_rate" : 0.9887640449438202
            },
            {
                "lv" : 42,
                "genre" : "只要有你在(EX)",
                "song" : "只要有你在",
                "pf_rate" : 0.60431654676259,
                "fc_rate" : 0.7841726618705036,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "呪エモ？(H)",
                "song" : "ミサコの日記（見ちゃダメ！）",
                "pf_rate" : 0.2,
                "fc_rate" : 0.4,
                "clear_rate" : 0.984
            },
            {
                "lv" : 42,
                "genre" : "夢を絆ぐ亜麻色(EX)",
                "song" : "夢を絆ぐ亜麻色",
                "pf_rate" : 0.4540540540540541,
                "fc_rate" : 0.6864864864864865,
                "clear_rate" : 0.9945945945945946
            },
            {
                "lv" : 42,
                "genre" : "姫コア(H)",
                "song" : "KIMONO♥PRINCESS",
                "pf_rate" : 0.18354430379746836,
                "fc_rate" : 0.3670886075949367,
                "clear_rate" : 0.9810126582278481
            },
            {
                "lv" : 42,
                "genre" : "待チ人ハ来ズ。(EX)",
                "song" : "待チ人ハ来ズ。",
                "pf_rate" : 0.5,
                "fc_rate" : 0.6833333333333333,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "徹頭徹尾Thrive at Perfect Fourth(H)",
                "song" : "徹頭徹尾Thrive at Perfect Fourth",
                "pf_rate" : 0.4574468085106383,
                "fc_rate" : 0.7127659574468085,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "忍者メタル　ポプコネ(H)",
                "song" : "背水之陣 (Kagutsuchi Remix)",
                "pf_rate" : 0.2789115646258503,
                "fc_rate" : 0.564625850340136,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "恋歌疾風！かるたクイーンいろは(H)",
                "song" : "恋歌疾風！かるたクイーンいろは",
                "pf_rate" : 0.3087248322147651,
                "fc_rate" : 0.6241610738255033,
                "clear_rate" : 0.9664429530201343
            },
            {
                "lv" : 42,
                "genre" : "撫子メタル(H)",
                "song" : "黒髪乱れし修羅となりて",
                "pf_rate" : 0.29743589743589743,
                "fc_rate" : 0.49230769230769234,
                "clear_rate" : 0.9897435897435898
            },
            {
                "lv" : 42,
                "genre" : "昭和ノワール(H)",
                "song" : "誰がために陽はのぼる",
                "pf_rate" : 0.2789115646258503,
                "fc_rate" : 0.5510204081632653,
                "clear_rate" : 0.9795918367346939
            },
            {
                "lv" : 42,
                "genre" : "暴レ焔(H)",
                "song" : "暴レ焔",
                "pf_rate" : 0.3302752293577982,
                "fc_rate" : 0.44036697247706424,
                "clear_rate" : 0.9908256880733946
            },
            {
                "lv" : 42,
                "genre" : "曇天(EX)",
                "song" : "曇天",
                "pf_rate" : 0.521978021978022,
                "fc_rate" : 0.6703296703296703,
                "clear_rate" : 0.9835164835164835
            },
            {
                "lv" : 42,
                "genre" : "朧月覆う雲をも裂きぬ(H)",
                "song" : "朧月覆う雲をも裂きぬ",
                "pf_rate" : 0.21428571428571427,
                "fc_rate" : 0.2857142857142857,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "格ゲー(EX)",
                "song" : "Majestic Fire",
                "pf_rate" : 0.5766871165644172,
                "fc_rate" : 0.7300613496932515,
                "clear_rate" : 0.9877300613496932
            },
            {
                "lv" : 42,
                "genre" : "海神(H)",
                "song" : "海神",
                "pf_rate" : 0.36153846153846153,
                "fc_rate" : 0.5538461538461539,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "演説(H)",
                "song" : "猿の経",
                "pf_rate" : 0.2,
                "fc_rate" : 0.4266666666666667,
                "clear_rate" : 0.9933333333333333
            },
            {
                "lv" : 42,
                "genre" : "激走！！ヤング☆ダンプ！(H)",
                "song" : "激走！！ヤング☆ダンプ！",
                "pf_rate" : 0.2558139534883721,
                "fc_rate" : 0.4186046511627907,
                "clear_rate" : 0.9612403100775194
            },
            {
                "lv" : 42,
                "genre" : "火風陸空(H)",
                "song" : "火風陸空",
                "pf_rate" : 0.38095238095238093,
                "fc_rate" : 0.5523809523809524,
                "clear_rate" : 0.9809523809523809
            },
            {
                "lv" : 42,
                "genre" : "禅ジャズ(H)",
                "song" : "明鏡止水",
                "pf_rate" : 0.16556291390728478,
                "fc_rate" : 0.3708609271523179,
                "clear_rate" : 0.9867549668874173
            },
            {
                "lv" : 42,
                "genre" : "空に抗い堕つるとも(EX)",
                "song" : "空に抗い堕つるとも",
                "pf_rate" : 0.4906832298136646,
                "fc_rate" : 0.7018633540372671,
                "clear_rate" : 0.9937888198757764
            },
            {
                "lv" : 42,
                "genre" : "紅焔(Live Version)(EX)",
                "song" : "紅焔(Live Version)",
                "pf_rate" : 0.36363636363636365,
                "fc_rate" : 0.5874125874125874,
                "clear_rate" : 0.972027972027972
            },
            {
                "lv" : 42,
                "genre" : "終末の序曲～オワリノハジマリ～(EX)",
                "song" : "終末の序曲～オワリノハジマリ～",
                "pf_rate" : 0.6111111111111112,
                "fc_rate" : 0.7654320987654321,
                "clear_rate" : 0.9938271604938271
            },
            {
                "lv" : 42,
                "genre" : "脳漿炸裂ガール(EX)",
                "song" : "脳漿炸裂ガール",
                "pf_rate" : 0.48554913294797686,
                "fc_rate" : 0.6820809248554913,
                "clear_rate" : 0.9884393063583815
            },
            {
                "lv" : 42,
                "genre" : "謀叛トランス(H)",
                "song" : "NOBUNAGA",
                "pf_rate" : 0.3790849673202614,
                "fc_rate" : 0.6339869281045751,
                "clear_rate" : 0.9803921568627451
            },
            {
                "lv" : 42,
                "genre" : "運命のパラドックス(EX)",
                "song" : "運命のパラドックス",
                "pf_rate" : 0.42196531791907516,
                "fc_rate" : 0.6358381502890174,
                "clear_rate" : 0.9884393063583815
            },
            {
                "lv" : 42,
                "genre" : "都会征服Girls☆(EX)",
                "song" : "都会征服Girls☆",
                "pf_rate" : 0.3425414364640884,
                "fc_rate" : 0.5027624309392266,
                "clear_rate" : 0.988950276243094
            },
            {
                "lv" : 42,
                "genre" : "陣旗プログレッシブ(H)",
                "song" : "風林火山",
                "pf_rate" : 0.23648648648648649,
                "fc_rate" : 0.5,
                "clear_rate" : 0.972972972972973
            },
            {
                "lv" : 42,
                "genre" : "霊魂爆砕 -SOUL EXPLOSION-(H)",
                "song" : "霊魂爆砕 -SOUL EXPLOSION-",
                "pf_rate" : 0.5392156862745098,
                "fc_rate" : 0.6862745098039216,
                "clear_rate" : 0.9803921568627451
            },
            {
                "lv" : 42,
                "genre" : "願いのカケラ(EX)",
                "song" : "願いのカケラ",
                "pf_rate" : 0.5602409638554217,
                "fc_rate" : 0.7289156626506024,
                "clear_rate" : 0.9879518072289156
            },
            {
                "lv" : 42,
                "genre" : "風鈴花火(EX)",
                "song" : "風鈴花火",
                "pf_rate" : 0.679144385026738,
                "fc_rate" : 0.8235294117647058,
                "clear_rate" : 0.9946524064171123
            },
            {
                "lv" : 42,
                "genre" : "黒髪乱れし修羅となりて～凛 edition～(H)",
                "song" : "黒髪乱れし修羅となりて～凛 edition～",
                "pf_rate" : 0.32673267326732675,
                "fc_rate" : 0.49504950495049505,
                "clear_rate" : 0.9405940594059405
            },
            {
                "lv" : 42,
                "genre" : "７７７ -chip sambass arrange-(EX)",
                "song" : "７７７ -chip sambass arrange-",
                "pf_rate" : 0.28,
                "fc_rate" : 0.4266666666666667,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ＪＡＭ(H)",
                "song" : "HypArcSin(x)",
                "pf_rate" : 0.2803030303030303,
                "fc_rate" : 0.5984848484848485,
                "clear_rate" : 1
            },
            {
                "lv" : 42,
                "genre" : "ＪＶ‐ＲＯＣＫ(H)",
                "song" : "洟・月・奇蹟",
                "pf_rate" : 0.22137404580152673,
                "fc_rate" : 0.42748091603053434,
                "clear_rate" : 0.9923664122137404
            }
        ]
    }
});
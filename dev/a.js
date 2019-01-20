let chart = echarts.init(document.getElementById('container'));
let startFilter = document.getElementById('star');
let elementFilter = document.getElementById('element');
let jobFilter = document.getElementById('job');
document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', update);
});
//var advIcons = {
//    'default': '/pic/1.png',
//};

var itemStyle = {
    normal: {
    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

var describe = {'Mikoto':'!'};
var plain_name = {'!':'Mikoto'};
var option = {
    legend: {
        data: ['DPS', 'Buff/s', 'conditional DPS','conditional Buff/s','test'],
        top: '2%',
    },
    grid: {
        containLabel: true,
        left: '5%',
        right: '5%',
        top: '10%',
        bottom: '5%',
    },
    dataZoom: [{
        type: 'slider',
        right: '5%',
        yAxisIndex: [0],
        maxValueSpan: 15,
        showDetail: false,
    }, ],
    xAxis: { 
    },
    yAxis: {
        type:'category',
        axisTick : {
            alignWithLabel: true,
        },
        axisLabel: {
            interval: 0,
            formatter: function(value){
                return '{value|' + value + '}{' + plain_name[value] + '| }';
                //return '{value|' + value + '}{' + value + '| }';
            },
            margin: 5,
            rich: {
            },
        },
        data: [],
    },
    series: [
       // {
       //     name: 'DPS',
       //     type: 'bar',
       //     //barWidth : 30,
       //     animation: false,
       //     stack: 'total_dps',
       //     itemStyle: itemStyle,
       //     label: {
       //         normal: {
       //             show: true,
       //             position: 'insideRight',
       //         },
       //     },
       //     data: [],
       // },
       // {
       //     name: 'Buff/s',
       //     type: 'bar',
       //     //barWidth : 30,
       //     animation: false,
       //     stack: 'total_dps',
       //     itemStyle: itemStyle,
       //     data: [],
       // },
       // {
       //     name: 'conditional DPS',
       //     type: 'bar',
       //     //barWidth : 30,
       //     animation: false,
       //     stack: 'total_dps',
       //     itemStyle: itemStyle,
       //     data: [],
       // },
       // {
       //     name: 'conditional Buff/s',
       //     type: 'bar',
       //     //barWidth : 30,
       //     animation: false,
       //     stack: 'total_dps',
       //     itemStyle: itemStyle,
       //     data: [],
       // },
       // {
       //     name: 'sum',
       //     type: 'bar',
       //     //barWidth : 30,
       //     animation: false,
       //     stack: 'total_dps',
       //     itemStyle: itemStyle,
       //     label: {
       //         normal: {
       //             show: true,
       //             position: 'right',
       //             formatter: params => {
       //                 let total = 0;
       //                 console.log(option)
       //                 option.series.forEach(serie => {
       //                     total += parseInt(serie.data[params.dataIndex]);
       //                 });
       //                 return total;
       //             },
       //         },
       //     },
       //     data: [],
       // },
       // {
       //     name: 'test',
       //     type: 'bar',
       //     //barWidth : 30,
       //     animation: false,
       //     stack: 'condition',
       //     itemStyle: itemStyle,
       //     data: [0,0,0,0,0,0,0,0,0,0,0,0],
       // },
    ]
}
let characters = [];

function setData(data) {
    data.forEach(character => {
        character.total_dps = character.solo_dps+character.team_bps+character.c_solo_dps+character.c_team_bps;
    });
    if (0){
        data.sort((character1, character2) => {
            if (character1.solo_dps > character2.solo_dps) {
                return 1;
            }
            if (character1.solo_dps < character2.solo_dps) {
                return -1;
            }
            return character1.total_dps >= character2.total_dps ? 1 : -1;
        });
    }else{
        data.sort((character1, character2) => {
            if (character1.total_dps > character2.total_dps) {
                return 1;
            }
            if (character1.total_dps < character2.total_dps) {
                return -1;
            }
            return character1.solo_dps >= character2.solo_dps ? 1 : -1;
        });
    }
    characters = data;
}

function update() {
    let filtered = characters.filter(character => {
        if (startFilter.value && startFilter.value != character.star) {
            return false;
        }
        if (elementFilter.value && elementFilter.value != character.element) {
            return false;
        }
        if (jobFilter.value && jobFilter.value != character.job) {
            return false;
        }
        return true;
    });
    let names = [];
    let describes = [];
    let data = {};
    let c_data = {};
    let _sum = [];

    //let solo_dps = [];
    //let team_bps = [];
    //let c_solo_dps = [];
    //let c_team_bps = [];
    let rich = {
        value: {
            lineHeight: 0,
            //align: 'center'
        },
    };
    filtered.forEach(character => {
        var if_c = 0;
        if(character.name.slice(0,3)=='_c_'){
            name = character.name.slice(3);
            if_c = 1;
        }
        else{
            name = character.name;
        }
        describe = name + '（' + character.star + character.element + character.job + '）' + character.comment;
        describes.push(describe);
        plain_name[describe] = name;
        advIcons[name] = picfolder+name+'.png';

        for(var key in character){
            if(!if_c){
                if(data[key]){
                    data[key].push(character[key]);
                }else{
                    data[key] = [character[key]];
                }
            }
        }

        for(var key in character){
            if(if_c){
                if(c_data[key]){
                    c_data[key].push(character[key]);
                }else{
                    c_data[key] = [character[key]];
                }
            }
        }
        var tmp_data = {};
        var idx = 0;
        for(var c in data.name){
            if(c in c_data.name){
                console.log(c);
            }
            idx+=1;
        }


        _sum.push(0);
        rich[name] = {
            lineHeight: 0,
            height: 35,
            //align: 'center',
            backgroundColor:{
                image: advIcons[character.name]
            }
        };
    });

    option.yAxis.data = describes;
    option.yAxis.axisLabel.rich = rich;

    var idx = 0;
    for(var key in c_data){
        option.series[idx] = {};
        option.series[idx].name = key.slice(3,);
        option.series[idx].type = 'bar';
        option.series[idx].animation = false;
        //option.series[idx].barWidth = 30;
        option.series[idx].stack = 'c_data';
        option.series[idx].itemStyle = itemStyle;
        option.series[idx].data = c_data[key];
        idx += 2;
    }
    var idx = 1;
    for(var key in data){
        option.series[idx] = {};
        option.series[idx].name = key;
        option.series[idx].type = 'bar';
        option.series[idx].animation = false;
        //option.series[idx].barWidth = 30;
        option.series[idx].stack = 'data';
        option.series[idx].itemStyle = itemStyle;
        option.series[idx].data = data[key];
        option.series[idx].barGap = 0;
        idx += 2;
    }

    let slider = option.dataZoom[0];
    slider.endValue = filtered.length - 1;
    slider.startValue = Math.max(slider.endValue - slider.maxValueSpan, 0);
    chart.setOption(option);
}

fetch('data.csv').then(response => response.text()).then(text => {
    let csv = Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
    });
    setData(csv.data);
    update();
});

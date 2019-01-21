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
        data: [],
        top: '2%',
    },
    tooltip:{},
    grid: {
        containLabel: true,
        left: '5%',
        right: '5%',
        top: '10%',
        bottom: '5%',
    },
    //dataZoom: [{
    //    type: 'slider',
    //    right: '5%',
    //    yAxisIndex: [0],
    //    maxValueSpan: 15,
    //    showDetail: false,
    //}, ],
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
        //data: [],
    },
    dataset:{
        //dimensions: [],
        source: [
            {'advdps': 'Addis', 'x': 43.3, 's': 85.8, 'b': 93.7},
            {'advdps': 'b', 'x': 83.1, 's': 73.4, 'b': 55.1},
            {'advdps': 'c', 'x': 86.4, 's': 65.2, 'b': 82.5},
            {'advdps': 'd', 'x': 72.4, 's': 53.9, 'b': 39.1}
        ],
    },
    series: [
       // {type:'bar',name:'1',stack:'1',encode:{x:'x',y:'advdps'}},
       // {type:'bar',name:'1',stack:'2',encode:{x:'x',y:'advdps'}},
       // {type:'bar',name:'2',stack:'1',encode:{x:'s',y:'advdps'}},
       // {type:'bar',name:'2',stack:'2',encode:{x:'s',y:'advdps'}},
       // {type:'bar',name:'3',stack:'1',encode:{x:'b',y:'advdps'}},
       // {type:'bar',name:'3',stack:'2',encode:{x:'b',y:'advdps'}},
       // {type:'bar',name:'4',stack:'1',encode:{x:'c',y:'advdps'}},
       // {type:'bar',name:'4',stack:'2',encode:{x:'c',y:'advdps'}},
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
        character.name = character[0];
        character.star = character[1];
        character.element = character[2];
        character.job = character[3];
        delete(character[0]);
        delete(character[1]);
        delete(character[2]);
        delete(character[3]);
    });
    if (1){
        data.sort((character1, character2) => {
            if (character1.x > character2.x) {
                return 1;
            }
            if (character1.x <= character2.x) {
                return -1;
            }
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

function update2() {
    let filtered = characters.filter(character => {
        //if(character.name.slice(0,3) == '_c_'){
        //    return false;
        //}
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
    var tmp_data = {};
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
    for(var key in characters[0]){
        data[key] = [];
        c_data[key] = [];
        tmp_data[key] = [];
    }
    filtered.forEach(character => {
        var if_c = 0;
        if(character.name.slice(0,3)=='_c_'){
            if_c = 1;
        }
        if(if_c){
            name = character.name.slice(3);
            for(var key in character){
                c_data[key].push(character[key]);
            }
        }else{ //!_c_
            name = character.name;
            describe = name + '（' + character.star + character.element + character.job + '）' + character.comment;
            describes.push(describe);
            plain_name[describe] = name;
            advIcons[name] = picfolder+name+'.png';
            for(var key in character){
                data[key].push(character[key]);
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
        }
    });

    idx = 0;
    for(var c in data.name){
        n = data.name[c];
        found = -1;
        loc = 0;
        for(var c in c_data.name){
            describe = c_data.name[c].slice(3) + '（' + c_data.star[c] + c_data.element[c] + c_data.job[c] + '）' + c_data.comment[c];
            if(describe == describes[idx]){
                found = loc;
            }
            loc += 1;
        }
        if(found>=0){
            for(var k in c_data){
                tmp_data[k].push(c_data[k][found]);
            }
        }else{
            for(var k in data){
                tmp_data[k].push(null);
            }
        }
        idx += 1;
    }
    c_data = tmp_data;

    option.yAxis.data = describes;
    option.yAxis.axisLabel.rich = rich;

    var idx = 0;
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
    var idx = 1;
    for(var key in c_data){
        option.series[idx] = {};
        option.series[idx].name = key;
        option.series[idx].type = 'bar';
        option.series[idx].animation = false;
        //option.series[idx].barWidth = 30;
        option.series[idx].stack = 'c_data';
        option.series[idx].itemStyle = itemStyle;
        option.series[idx].data = c_data[key];
        option.series[idx].barGap = -0.05;
        idx += 2;
    }

    let slider = option.dataZoom[0];
    slider.endValue = describes.length - 1;
    slider.startValue = Math.max(slider.endValue - slider.maxValueSpan, 0);
    chart.setOption(option);
}

fetch('data.csv').then(response => response.text()).then(text => {
    let csv = Papa.parse(text, {
        //header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
    });

    setData(csv.data);
    update();
});


var _dimensions = {};
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
    var o_data = filtered;
    var c_data = [];
    var datasrc = {};
    var a = [];
    var sp_slash = '\\'.charCodeAt()+128;
    var sp_cap = ':'.charCodeAt()+128;
    sp_slash = String.fromCharCode(sp_slash);
    sp_cap = String.fromCharCode(sp_cap);
    for(var i in o_data){
        l = o_data[i];
        var line = {};
        if(l.name.slice(0,3)=='_c_'){c_data.push(l);continue;}
        for(var j in l){
            unit = l[j];
            if(!unit){continue;}
            unit = unit.replace('\\\\',sp_slash).replace('\\:',sp_cap);
            if(unit.search(':')!=-1){
                a = unit.split(':',2);
                a[0] = a[0].replace(sp_cap, ':').replace(sp_slash, '\\');
                a[1] = a[1].replace(sp_cap, ':').replace(sp_slash, '\\');
                line[a[0]] = a[1];
                line['_c_'+a[0]] = 0;
                _dimensions[a[0]] = 1;
            }else{
                //unit = unit.replace(sp_cap, ':').replace(sp_slash, '\\');
                //line[j] = unit;
            }
        }
        line.advdps = l.name;
        datasrc[l.name] = line;
    }
    console.log(c_data);
    for(var i in c_data){
        l = c_data[i];
        var line = {};
        for(var j in l){
            unit = l[j];
            if(!unit){continue;}
            unit = unit.replace('\\\\',sp_slash).replace('\\:',sp_cap);
            if(unit.search(':')!=-1){
                a = unit.split(':',2);
                a[0] = a[0].replace(sp_cap, ':').replace(sp_slash, '\\');
                a[1] = a[1].replace(sp_cap, ':').replace(sp_slash, '\\');
                line['_c_'+a[0]] = a[1];
            }
        }
        name = l.name.slice(3);
        line.advdps = name;
        for(var i in line){
            datasrc[name][i] = line[i];
        }
    }

    for(var i in _dimensions){
        for(var l in datasrc){
            if(!datasrc[l][i]){
                datasrc[l][i] = null;
                datasrc[l]['_c_'+i] = null;
            }
        }
    }

    option.dataset.source = []
    for(var i in datasrc){
        option.dataset.source.push(datasrc[i]);
    }

    option.series = [];
    console.log(_dimensions);

    for(var i in _dimensions){
        s1 = {type:'bar',name:i,stack:'dps',encode:{x:i,y:'advdps'}};
        s2 = {type:'bar',name:i,stack:'c_dps',encode:{x:'_c_'+i,y:'advdps'}};
        s1.animation = false;
        s1.itemStyle = itemStyle;
        s1.barGap = 0;
        s2.animation = false;
        s2.itemStyle = itemStyle;
        s2.barGap = 0;
        option.series.push(s1);
        option.series.push(s2);
    }
    console.log(option);
    chart.setOption(option);
}

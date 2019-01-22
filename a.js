let chart = echarts.init(document.getElementById('container'));
let starFilter = document.getElementById('star');
let elementFilter = document.getElementById('element');
let weaponFilter = document.getElementById('weapon');
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

var adv_data = {};
var option = {
    legend: {
        //data: ['attack','force_strike','skill_1','skill_2','skill_3','team_buff'],
        data:[],
        selectedMode:false,
        top: '5%',
    },
    tooltip: {
        //trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function(value){
            r = adv_data[value.name].name;
            if(value.data.condition){
                if(value.seriesIndex%2==0){
                    r+=' &lt;'+value.data.condition.slice(2,-1)+'&gt;';
                }
            }
            r += '<br>';

            sname = value.seriesName;
            if(value.seriesIndex%2==0){
                for(var i in value.data){
                    v = value.data[i];
                    if(v){
                        if(v==0)continue;
                        if(i.slice(0,3)=='_c_')continue;
                        if(i == 'advdps')continue;
                        if(i == 'total')continue;
                        if(i == 'condition')continue;
                        if(i == sname)r+='->';
                        r += i+': '+v+'<br>';
                    }
                }
            }
            if(value.seriesIndex%2==1){
                for(var i in value.data){
                    v = value.data[i];
                    if(v){
                        if(v==0)continue;
                        if(i.slice(0,3)!='_c_')continue;
                        if(i == '_c_'+sname)r+='->';
                        r += i.slice(3) +': '+v+'<br>';
                    }
                }
            }
            v = value.data[i];
            return r;
        }
    },
    grid: {
        containLabel: true,
        left: '5%',
        right: '5%',
        top: '15%',
        bottom: '5%',
    },
    dataZoom: [{
        type: 'slider',
        right: '5%',
        top:'15%',
        yAxisIndex: [0],
        maxValueSpan: 12,
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
                a = adv_data[value];
                label = a.name + '(' + a.star + a.element + a.weapon + ')' ;
                stre = '(str: ' + a.stre + ')';
                condition = ''
                comment = ''
                if(a.comment){
                    comment = a.comment;
                }
                if(a.condition){
                    condition = a.condition
                }
            //    return '{value|' + label + stre + a.condition + '}{' + a.name + '| }\n{value|'+ comment +'}';
                return '{value|' + label + stre + condition + comment + '}{' + a.name + '| }';
            },
            margin: 5,
            rich: {
            },
        },
    },
    dataset:{
        source: [
            {'advdps': 'Addis', 'x': 43.3, 's': 85.8, 'b': 93.7},
            {'advdps': 'b', 'x': 83.1, 's': 73.4, 'b': 55.1},
            {'advdps': 'c', 'x': 86.4, 's': 65.2, 'b': 82.5},
            {'advdps': 'd', 'x': 72.4, 's': 53.9, 'b': 39.1}
        ],
    },
    series: [
    ]
}
let characters = [];

function setData(data) {
    tmpdata = [];
    for(var i in data){
        if(data[i][0]=='name'){ continue; }
        character = data[i]
        character.name      = character[0];
        character.star      = character[1];
        character.element   = character[2];
        character.weapon    = character[3];
        character.stre      = character[4];
        character.condition = character[5];
        character.comment   = character[6];
        character.dps       = character[7];
        delete(character[0]);
        delete(character[1]);
        delete(character[2]);
        delete(character[3]);
        delete(character[4]);
        delete(character[5]);
        delete(character[6]);
        delete(character[7]);
        tmpdata.push(character);
    }

    tmpdata.sort((character1, character2) => {
        if (character1.dps > character2.dps) {
            return 1;
        }
        if (character1.dps <= character2.dps) {
            return -1;
        }
    });
    characters = tmpdata;
}



function create_describe(name, l){
    return name + '(' + l.star + l.element + l.weapon + ')' + l.comment;
}

//var _dimensions = {__1:1,__2:2};
var _dimensions = {};
var datasrc = {};
var o_data = [];
var c_data = [];
function update() {
    let filtered = characters.filter(character => {
        if (starFilter.value && starFilter.value != character.star) {
            return false;
        }
        if (elementFilter.value && elementFilter.value != character.element) {
            return false;
        }
        if (weaponFilter.value && weaponFilter.value != character.weapon) {
            return false;
        }
        return true;
    });
    o_data = filtered;
    datasrc = {};
    c_data = [];
    var a = [];
    var lines = {};
    var line = {};
    var sp_slash = '\\'.charCodeAt()+128;
    var sp_cap = ':'.charCodeAt()+128;
    var describe = '';
    var rich = {
        value: {
            lineHeight: 25,
            //align: 'center'
        },
    };
    sp_slash = String.fromCharCode(sp_slash);
    sp_cap = String.fromCharCode(sp_cap);
    console.log(o_data);
    for(var i in o_data){
        l = o_data[i];
        lines[i] = {};
        line = lines[i];
        if(l.name.slice(0,3)=='_c_'){c_data.push(l);continue;}
        for(var j in l){
            unit = l[j];
            if(!unit){continue;}
            if(typeof(unit)!='string'){continue;}
            unit = unit.replace('\\\\',sp_slash).replace('\\:',sp_cap);
            if(unit.search(':')!=-1){
                a = unit.split(':',2);
                a[0] = a[0].replace(sp_cap, ':').replace(sp_slash, '\\');
                a[1] = a[1].replace(sp_cap, ':').replace(sp_slash, '\\');
                line[a[0]] = a[1];
                //line['_c_'+a[0]] = 0;
                line['_c_'+a[0]] = a[1];
                _dimensions[a[0]] = 1;
            }else{
                o_data[i][j] = unit.replace(sp_cap, ':').replace(sp_slash, '\\');
            }
        }
        name = l.name;
        describe = create_describe(name, l);
        line.advdps = describe;
        line.total = 1;
        datasrc[describe] = line;

        adv_data[describe] = l;
        //adv_data['_c_'+describe] = l;
        advIcons[name] = picfolder+name+'.png';
        rich[l.name] = {
            lineHeight: 0,
            height: 40,
            //align: 'center',
            backgroundColor:{
                image: advIcons[name]
            }
        };
    }

    for(var i in c_data){
        l = c_data[i];
        line = {};
        for(var j in l){
            unit = l[j];
            if(!unit){continue;}
            if(typeof(unit)!='string'){continue;}
            if(unit.slice(0,3)=='_c_'){continue;}
            if(unit=='advdps'){continue;}
            unit = unit.replace('\\\\',sp_slash).replace('\\:',sp_cap);
            if(unit.search(':')!=-1){
                a = unit.split(':',2);
                a[0] = a[0].replace(sp_cap, ':').replace(sp_slash, '\\');
                a[1] = a[1].replace(sp_cap, ':').replace(sp_slash, '\\');
                //line['_c_'+a[0]] = a[1];
                line[a[0]] = a[1];
                _dimensions[a[0]] = 1;
            }else{
                c_data[i][j] = unit.replace(sp_cap, ':').replace(sp_slash, '\\');
            }
        }
        name = l.name.slice(3);
        describe = create_describe(name, l);
        //if(line!={}){
        //    for(var i in datasrc[describe]){
        //        if(i!='advdps' && i.slice(0,3)!='_c_'){
        //            datasrc[describe]['_c_'+i] = datasrc[describe][i];
        //            datasrc[describe][i] = 0;
        //        }
        //    }
        //}
        //for(var i in line){
        //    datasrc[describe][i] = line[i];
        //}
        for(var i in datasrc[describe]){
            if(i.slice(0,3) == '_c_'){
                datasrc[describe][i] = 0;
            }
        }
        for(var i in line){
            datasrc[describe]['_c_'+i] = line[i];
        }
        if(!datasrc[describe].condition){
            datasrc[describe].condition = l.condition
        }
        adv_data['_c_'+describe] = l;
        if(!adv_data[describe].condition){
            adv_data[describe].condition = l.condition;
        }
    }

    for(var i in _dimensions){
        if(i.slice(0,2)!='__')
            option.legend.data.push(i);
        for(var l in datasrc){
            if(!datasrc[l][i]){
                datasrc[l][i] = null;
            }
            if(!datasrc[l]['_c_'+i]){
                datasrc[l]['_c_'+i] = null;
            }
        }
    }

    option.dataset.source = []
    for(var i in datasrc){
        option.dataset.source.push(datasrc[i]);
    }

    option.series = [];

    for(var i in _dimensions){
        s1 = {type:'bar',name:i,stack:'dps',encode:{x:i,y:'advdps'}};
        s2 = {type:'bar',name:i,stack:'c_dps',encode:{x:'_c_'+i,y:'advdps'}};
        s1.animation = false;
        s1.itemStyle = itemStyle;
        s1.barGap = 0;
        //s1.barWidth = 30;
        s2.animation = false;
        s2.itemStyle = itemStyle;
        s2.barGap = -0.05;
        //s1.barWidth = 30;
        option.series.push(s1);
        option.series.push(s2);
    }
    
    t1 = {
        type:'bar',
        name:'total',
        stack:'dps',
        encode:{x:'total',y:'advdps'},
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: params => {
                    a = adv_data[params.name];
                    console.log(a.dps);
                    return a.dps;
                },
            },
        },
    }
    t2 = {
        type:'bar',
        name:'total',
        stack:'c_dps',
        encode:{x:'total',y:'advdps'},
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: params => {
                    a = adv_data['_c_'+params.name];
                    if(a)
                        return a.dps;
                    return '';
                },
            },
        },
    }
    option.series.push(t1);
    option.series.push(t2);


    option.yAxis.axisLabel.rich = rich;

    var slider = option.dataZoom[0];
    len = Object.keys(datasrc).length;
    slider.endValue = len - 1;
    slider.startValue = Math.max(slider.endValue - slider.maxValueSpan, 0);

    console.log(option);
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


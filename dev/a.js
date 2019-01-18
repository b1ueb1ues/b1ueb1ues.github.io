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
        data: ['DPS', 'Buff/s', 'conditional DPS','conditional Buff/s'],
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
    series: [{
            name: 'DPS',
            type: 'bar',
            //barWidth : 30,
            animation: false,
            stack: 'total_dps',
            itemStyle: itemStyle,
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                },
            },
            data: [],
        },
        {
            name: 'Buff/s',
            type: 'bar',
            //barWidth : 30,
            animation: false,
            stack: 'total_dps',
            itemStyle: itemStyle,
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: params => {
                        let total = 0;
                        option.series.forEach(serie => {
                            total += parseInt(serie.data[params.dataIndex]);
                        });
                        return total;
                    },
                },
            },
            data: [],
        },
        {
            name: 'conditional DPS',
            type: 'bar',
            //barWidth : 30,
            animation: false,
            stack: 'total_dps',
            itemStyle: itemStyle,
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: params => {
                        let total = 0;
                        option.series.forEach(serie => {
                            total += parseInt(serie.data[params.dataIndex]);
                        });
                        return total;
                    },
                },
            },
            data: [],
        },
        {
            name: 'conditional Buff/s',
            type: 'bar',
            //barWidth : 30,
            animation: false,
            stack: 'total_dps',
            itemStyle: itemStyle,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: params => {
                        let total = 0;
                        option.series.forEach(serie => {
                            total += parseInt(serie.data[params.dataIndex]);
                        });
                        return total;
                    },
                },
            },
            data: [],
        },
        {
            name: 'sum',
            type: 'bar',
            //barWidth : 30,
            animation: false,
            stack: 'total_dps',
            itemStyle: itemStyle,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: params => {
                        let total = 0;
                        option.series.forEach(serie => {
                                if(serie.name!='sum'){
                                        if(option.legend.selected[serie.name]){
                                            total += parseInt(serie.data[params.dataIndex]);
                                        }
                                }
                        });
                        return total;
                    },
                },
            },
            data: [],
        },
    ]
}
let characters = [];

function setData(data) {
    data.forEach(character => {
        //character.total_dps = character.total_dps || character.solo_dps;
        //character.total_dps = 0;
        //if(option.legend.selected['DPS']){
        //     character.total_dps += character.solo_dps
        //}
        //if(option.legend.selected['Buff/s']){
        //     character.total_dps += character.team_bps
        //}
        //if(option.legend.selected['conditional DPS']){
        //     character.total_dps += character.c_solo_dps
        //}
        //if(option.legend.selected['conditional Buff/s']){
        //     character.total_dps += character.c_team_bps
        //}
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
    update();
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
    let solo_dps = [];
    let team_bps = [];
    let c_solo_dps = [];
    let c_team_bps = [];
    let _sum = [];
    let rich = {
        value: {
            lineHeight: 0,
            //align: 'center'
        },
    };
    filtered.forEach(character => {
        describe = character.name + '（' + character.star + character.element + character.job + '）' + character.comment;
        plain_name[describe] = character.name
        advIcons[character.name] = picfolder+character.name+'.png'
        //names.push(describe);
        describes.push(describe);
        solo_dps.push(character.solo_dps);
        team_bps.push(character.team_bps);
        //team_bps.push(character.c_solo_dps);
        c_solo_dps.push(character.c_solo_dps);
        c_team_bps.push(character.c_team_bps);
        _sum.push(0)
        rich[character.name] = {
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
    option.series[0].data = solo_dps;
    option.series[1].data = team_bps;
    option.series[2].data = c_solo_dps;
    option.series[3].data = c_team_bps;
    option.series[4].data = _sum;
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
});

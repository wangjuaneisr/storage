
var columnEchart = echarts.init(document.getElementById('barChart'));

var grayBar = [1, 1, 1, 1, 1, 1,1,1,1,1];
var zongjine = [2000, 3000, 4000, 5000, 6000, 7000,8000,9000,10000,20000];
var xingm = ['仓库10', '仓库9', '仓库8', '仓库7', '仓库6', '仓库5','仓库4','仓库3','仓库2','石家庄医药'];

option = {
    color: ['#61A8FF'], //进度条颜色
     grid: {
         left: '20%',  //如果离左边太远就用这个......
         right: '12%',
         bottom: '5%',
         top: '5%',
         // containLabel: true
     },
    xAxis: [{
        show: false,
    },
        //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
        {
            show: false,
        }
    ],
    yAxis:[{
        show: true,
        data: xingm,
        inverse: true,
        offset:30,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            align:'center',
            textStyle:{
                fontSize:10,
            },
            position:[0,0],
            interval:0,
            formatter: function(value, index) {
                return [
                    '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                ].join('\n')
            },
            rich: {
                lg: {
                    display:'inline-block',
                    backgroundColor: '#1C3190',
                    color: '#fff',
                    fontSize:8,
                    borderRadius: 12,
                    align: 'center',
                    width: 12,
                    height: 12
                },
            }
        },


    }, {
        show: true,
        inverse: true,
        data: zongjine,
        axisLabel: {
            textStyle: {
                fontSize: 8,
                color: '#fff',
            },
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }
        ],
    series: [
        //背景色--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    color: '#0F2461'
                },
            },
            z: 1,
            data: grayBar,
        },
        //蓝条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度
            itemStyle: {
                normal: {
                    type: 'bar',
                    colorStops: [{
                        offset: 0,
                        color: '#43C1FF' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: '#24A8FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#1F57FF' // 100% 处的颜色
                    }],
                    globalCoord: false, // 缺省为 false
                },
            },
            labelLine: {
                show: false,
            },
            z: 2,
            data: [0.09,0.123,0.234,0.333, 0.444, 0.555, 0.777, 0.888, 0.922,{
                value:'1.000',
                barCategoryGap:'20'
            }],
        },
        //数据条----------------------------------------//
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 200,
                    color: 'rgba(22,203,115,0.05)'
                },
            },
            data: zongjine
        }

    ]
};
columnEchart.setOption(option);
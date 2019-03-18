var columnEchart = echarts.init(document.getElementById('columnChart'));

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '8%',
        top: '15%',
        bottom: '5%',
        containLabel: true
    },
    xAxis : [
        {
            name:'城市',
            nameLocation:'end',
            nameTextStyle:{
                color:'#29B0ff',
                fontSize:8
            },
            nameGap:'8',
            splitLine:{
                show:false
            },
            type : 'category',
            data : ['广州', '武汉', '青岛', '石家庄','南京'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel:{
                textStyle: {
                    color: '#29B0ff',
                    fontSize: 8
                },
                interval:0
            },
            axisLine:{
                show:false
            }
        }
    ],
    yAxis : [
        {
            name:'订单',
            nameLocation:'end',
            nameTextStyle:{
                color:'#29B0ff',
                fontSize:10,
                formatter: '{value}',
                rich:{
                    value:{
                        verticalAlign:'bottom',
                        align:'left'
                    }

                }
            },
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            },
            nameGap:'20',
            splitLine:{show: false},//去除网格线
            type : 'value',
            axisLabel : {
                formatter: '{value}',
                textStyle: {
                    color: '#29B0ff',
                    fontSize: 8
                }
            }
        },
    ],
    series : [
        {
            type:'bar',
            barWidth: '30%',
            data:[ 652, 200, 334, 390, 330],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#24A8FF'},
                            {offset: 1, color: '#1F57FF'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#24A8FF'},
                            {offset: 1, color: '#1F57FF'}
                        ]
                    )
                }
            },
        }
    ]
};

columnEchart.setOption(option);

var circleChart = echarts.init(document.getElementById('circleEchart1'));
var circleChart2 = echarts.init(document.getElementById('circleEchart2'));

var option = {
    tooltip: {
        show:false,
        trigger: 'item',
        // formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    grid: {
        left: '3%',
        right: '30%',
        top: 'top',
        // bottom: '5%',
        containLabel: false
    },
     legend: {
         icon:'circle',
         orient: 'vertical',
         show: true,
         right: '0',
         top:'65%',
         bottom: '0',
         itemGap:1,
         itemWidth:4,
         itemHeight:4,
         width:'auto',
         height:'auto',
         padding:2,
         textStyle: {
             fontSize: 6,
             color: '#29B0ff'
         },
         formatter: function (name) {
             return (name.length > 8 ? (name.slice(0,8)+"...") : name );
         },

    },

    color:['#9200DD','#E57B00','#304FFF','#F84D4D','#30FF8C','#FF3075','#009FF0'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            center:['50%','38%'],
            radius: ['50%', '55%'],
            avoidLabelOverlap: false,
            data:[
                {value:28, name:'XX 28%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:22, name:'XXX 22%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:14, name:'XXX 14%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:13, name:'XXXX 13%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:10, name:'XXX 10%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:8, name:'XXXX 8%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:5, name:'XXX 5%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true}
            ],
            label:{            //饼图图形上的文本标签
                normal:{
                    show:true,
                    // position:'inner', //标签的位置
                    textStyle : {
                        fontSize : 5   //文字的字体大小
                    }
                }
            },
            z:3
        },
        // 圆圈
        {
            radius: ['47%', '50%'],
            center: ['50%', '38%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            tooltip: {
                show: false
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                         color: '#3d3d6b',
                    }
                }
            }],
        },
        // 圆圈
        {
            radius: ['55%', '58%'],
            center: ['50%', '38%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            tooltip: {
                show: false
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#3d3d6b',
                    }
                }
            }],
        }
    ]
};


circleChart.setOption(option);

circleChart2.setOption(option);



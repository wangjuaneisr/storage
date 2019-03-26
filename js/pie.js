
var circleChart = echarts.init(document.getElementById('circleEchart1'));
var circleChart2 = echarts.init(document.getElementById('circleEchart2'));

var option = {
    title: {
        text:'电商业务',
        x: 'center',
        y: '34%',
        textStyle: {
            color: '#29B0ff',
            fontSize: 14,
        }
    },
    tooltip: {
        show:false,
        // trigger: 'item',
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
         left: '20',
         top:'70%',
         // bottom:'50',
         itemGap:5,
         itemWidth:4,
         itemHeight:4,
         width:'auto',
         height:'25%',
         padding:2,
         textStyle: {
             fontSize: 10,
             color: '#29B0ff'
         },
         formatter: function (name) {
             return  name;
         },

    },

    color:['#9200DD','#E57B00','#F84D4D','#30FF8C','#FF3075','#009FF0','#304FFF'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            center:['50%','38%'],
            radius: ['40%', '50%'],
            avoidLabelOverlap: false,
            data:[
                {value:28, name:'XXX 28%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:22, name:'XXXXXX 22%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:14, name:'XXX 14%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:13, name:'XXX 13%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:10, name:'X 10%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:8, name:'XXX 8%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true},
                {value:5, name:'XX 5%',labelLine:{length:5,length2:5},hoverAnimation:false,clockwise:true}
            ],
            label:{            //饼图图形上的文本标签
                normal:{
                    show:true,
                    // position:'inner', //标签的位置
                    formatter:'{c}%',
                    textStyle : {
                        fontSize : 10   //文字的字体大小
                    }
                }
            },
            z:3
        },
        // 圆圈
        // {
        //     radius: ['47%', '50%'],
        //     center: ['50%', '38%'],
        //     type: 'pie',
        //     label: {
        //         normal: {
        //             show: false
        //         },
        //         emphasis: {
        //             show: false
        //         }
        //     },
        //     labelLine: {
        //         normal: {
        //             show: false
        //         },
        //         emphasis: {
        //             show: false
        //         }
        //     },
        //     tooltip: {
        //         show: false
        //     },
        //     data: [{
        //         value: 100,
        //         itemStyle: {
        //             normal: {
        //                  color: '#3d3d6b',
        //             }
        //         }
        //     }],
        // },
        // // 圆圈
        // {
        //     radius: ['55%', '58%'],
        //     center: ['50%', '38%'],
        //     type: 'pie',
        //     label: {
        //         normal: {
        //             show: false
        //         },
        //         emphasis: {
        //             show: false
        //         }
        //     },
        //     labelLine: {
        //         normal: {
        //             show: false
        //         },
        //         emphasis: {
        //             show: false
        //         }
        //     },
        //     tooltip: {
        //         show: false
        //     },
        //     data: [{
        //         value: 100,
        //         itemStyle: {
        //             normal: {
        //                 color: '#3d3d6b',
        //             }
        //         }
        //     }],
        // }
    ]
};


circleChart.setOption(option);

circleChart2.setOption(option);



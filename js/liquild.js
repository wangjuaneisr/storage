//
// var value = 0.25
// var data = []
// data.push(value)
// data.push(value)
// data.push(value)
// data.push(value)
// data.push(value)
var liquild1 = echarts.init(document.getElementById('liquild1'));
var liquild2 = echarts.init(document.getElementById('liquild2'));

var option1 =  {
    grid:{
        top:'10'
    },
    title:{
        text:'昨日完成率',
        bottom:15,
        right:'center',
        textStyle:{
            color:'#29B0FF',
            fontSize:12
        },
    },
    series: [{
        type: 'liquidFill',
        data: [
            {
                value:0.6,
                itemStyle:{
                    color:'#3600b2',
                    opacity:'0.6'
                }
            },{
                value:0.45,
                itemStyle:{
                    color:'#4b02bd',
                    opacity:'0.6'
                }
            },{
                value:0.35,
                itemStyle:{
                    color:'#6900ca',
                    opacity:'0.6'
                }
            },{
                value:0.2,
                itemStyle:{
                    color:'#8000ca',
                    opacity:'0.6'
                }
            }],
        center:['50%','40%'],
        radius: '60%',
        backgroundStyle: {
            borderWidth: 6,
            borderColor: '#1e3d79',
            color: 'rgb(255,0,255,0.01)'
        },
        outline: {
            show: false
        },
        label:{
            fontSize:24
        }
    }]
};

var option2 =  {
    grid:{
        top:'10'
    },
    title:{
        text:'今日完成率',
        bottom:15,
        right:'center',
        textStyle:{
            color:'#29B0FF',
            width:'100%',
            align:'center',
            fontSize:12
        },
    },
    series: [{
        type: 'liquidFill',
        data: [
            {
                value:0.75,
                itemStyle:{
                    opacity:'0.6'
                }
            },
            {
                value:0.60,
                itemStyle:{
                    opacity:'0.6'
                }
            },
            {
                value:0.40,
                itemStyle:{
                    opacity:'0.6'
                }
            },
            {
                value:0.2,
                itemStyle:{
                    opacity:'0.6'
                }
            },
        ],
        radius: '60%',
        outline: {
            show: false
        },
        label:{
            fontSize:24
        },
        center:['50%','40%'],
        backgroundStyle: {
            borderWidth: 6,
            borderColor: '#1e3d79',
            color: 'rgb(255,0,255,0.01)'
        },
    }]
};


liquild1.setOption(option1);

for(var i in option2.data){
    option2.series[0].data[i].itemStyle.push("opacity",'0.6')
}
console.log(option2);
liquild2.setOption(option2);








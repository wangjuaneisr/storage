var liPie = echarts.init(document.getElementById('liPie'));

var jsonData={
    data:[{
        value: 50,name: '5天妥投率 30.99%'
    }, {
        value: 55,name: '6天妥投率 35.88%'
    }, {
        value: 25,name: "7天妥投率 15.44%"
    }, {
        value: 25,name: "超7天妥投率 15.77%"
    }],
}

var config={
    title:{
        text:'上报材料统计'
    }
}
//  颜色集合
var colorList = [
    '#7B0FF7', '#147CFF', '#18C8DD', '#F6A736', '#42FF9B', '#5d9eff', '#ffdb5d', '#ee82ed', '#8fca5f', '#b995f5'
];
echarts.util.each(jsonData.data, function(item, index) {
    item.itemStyle = {
        normal: {
            color: colorList[index],
            opacity:1
        }
    };
});

var option = {
    legend: {
        top: 'center',
        right:0,
        // x: 'center',
        icon: 'circle',
        width:'20%',
        itemGap:20,
        textStyle:{
            color:'#fff',
            fontSize:8
        },

    },
    series: [{
        type: 'pie',
        name: 'pie',
        radius: ['70%', '90%'],
        center:['30%','52%'],
        hoverAnimation: false, //设置饼图默认的展开样式
        hoverOffset:0,
        label: {
            show:false
        },
        labelLine: {
            show: false
        },
        itemStyle: {
            normal: {
                borderWidth: 10,
                borderColor: "#0f338b"
            },
            emphasis: {
                borderWidth: 0
            }
        },
        data: jsonData.data
    }]
};

liPie.setOption(option);

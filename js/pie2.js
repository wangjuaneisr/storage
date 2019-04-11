
var color = ['#0CFFB8','#FF8526','#DC26FF','#16A6FF','#16A6FF','#16A6FF','#16A6FF','#16A6FF','#16A6FF','#16A6FF'];
var data = ['0.2605','0.0009','0.0014','0.0009','0.0087','0.0209','0.5821','0.1263'];
var data2 = ['26.05','0.09','0.14','0.09','0.87','2.09','58.21','12.63'];



var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};

var option;

function setOptionFun(index){
    return option = {
        title: {
            text:data2[index]+'%',
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#ffffff',
                fontSize: 9,
            }
        },
        grid: {
            left: '3%',
            right: '1%',
            top: 'top',
            bottom: '5%',
            containLabel: false
        },
        series: [{
            name: 'loading',
            type: 'pie',
            radius: ['67%', '75%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: color[index],
                        opacity:0.6
                        // shadowBlur: 10,
                        //     shadowColor: '#fb358a'
                    }
                }
            }],
        },{
            name: 'loading',
            type: 'pie',
            radius: ['63%', '79%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                value: data[index],
                radius:[0,'75%'],
                itemStyle: {
                    normal: {
                        color: color[index],
                        // shadowBlur: 10,
                        // borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        //     offset: 0,
                        //     color: '#FF8526'
                        // }, {
                        //     offset: 1,
                        //     color: '#FF8526'
                        // }]),
                        // shadowColor: '#FF8526'
                    }
                }
            }, {
                value: 1-data[index],
                name: '',
                itemStyle: placeHolderStyle
            }
            ],
        }]
    };
}

for(var i=0;i<data.length;i++){
    if(document.getElementById('pieChart'+(parseInt(i)+1))){
        echarts.init(document.getElementById('pieChart'+(parseInt(i)+1))).setOption(setOptionFun(i));
    }


}









var color = ['#0CFFB8','#FF8526','#DC26FF','#16A6FF','#16A6FF','#16A6FF','#16A6FF','#16A6FF','#16A6FF','#16A6FF'];
var data = ['0.75','0.68','0.5','0.75','0.75','0.75','0.75','0.75','0.75','0.75'];



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
            text:data[index]*100+'%',
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
            radius: ['64%', '68%'],
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
                        // shadowBlur: 10,
                        //     shadowColor: '#fb358a'
                    }
                }
            }],
        },{
            name: 'loading',
            type: 'pie',
            radius: ['58%', '74%'],
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
                value: (1-data[index]),
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








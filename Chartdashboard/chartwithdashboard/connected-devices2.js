Keen.ready(function(){


	
//donut chart	
 window.addEventListener("load", getData(genFunction));

    function getData(callbackIN) {
      var ref = firebase.database().ref("data");
      ref.once('value').then(function (snapshot) {
        callbackIN(snapshot.val())
      });
    }
	
	

    function genFunction(data) {
      var cdata = [];
      var len = data.length;
      for(var i=1; i<len; i++) {
        cdata.push({
          label: data[i]['label'],
          value: data[i]['value']
        });
      }
	  



    var firebaseChart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'chart-container',
        width: '650',
        height: '600',
        dataFormat: 'json',
        dataSource: {
            "chart": {
    "caption": "Graph Statistics2",
    "subcaption": "2012-2018",
    "xaxisname": "Years2",
    "yaxisname": "Total number of correct answers2",
    "formatnumberscale": "0.1",
    "plottooltext": "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
    "theme": "fusion",
    "drawcrossline": "1"
            },
			"categories": [
    {
      "category": [
        {
          "label": "2012"
        },
        {
          "label": "2013"
        },
        {
          "label": "2014"
        },
        {
          "label": "2015"
        },
        {
          "label": "2016"
        },
        {
          "label": "2017"
        },
        {
          "label": "2018"
        }
      ]
    }
  ],
          
			 "data": cdata
        }
    });
	

firebaseChart.render();


    }

//multiple chart
 window.addEventListener("load", getData2(genFunction2));

    function getData2(callbackIN) {
      var ref = firebase.database().ref("data2");
      ref.once('value').then(function (snapshot) {
        callbackIN(snapshot.val())
      });
    }
	
	

    function genFunction2(data) {
      var cdata = [];
	  var kdata = [];
	  var zdata = [];
      var len = data.length;
      for(var i=1; i<len; i++) {
        cdata.push({
          label: data[i][1]['label'],
          value: data[i][1]['value']
        }),
		kdata.push({
          label: data[i][2]['label'],
          value: data[i][2]['value']
        }),
		zdata.push({
          label: data[i][3]['label'],
          value: data[i][3]['value']
        });
      }
	  



    var firebaseChart2 = new FusionCharts({
        type: 'mscolumn2d',
        renderAt: 'chart-container2',
        width: '650',
        height: '600',
        dataFormat: 'json',
        dataSource: {
            "chart": {
    "caption": "Graph Statistics",
    "subcaption": "2012-2018",
    "xaxisname": "Years",
    "yaxisname": "Total number of correct answers",
    "formatnumberscale": "0.1",
    "plottooltext": "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
    "theme": "fusion",
    "drawcrossline": "1"
            },
			"categories": [
    {
      "category": [
        {
          "label": "2012"
        },
        {
          "label": "2013"
        },
        {
          "label": "2014"
        },
        {
          "label": "2015"
        },
        {
          "label": "2016"
        },
        {
          "label": "2017"
        },
        {
          "label": "2018"
        }
      ]
    }
  ],
          
			 "dataset": [
    {
      "seriesname": "android",
      "data": cdata
    },
	{
      "seriesname": "apple",
      "data": kdata
    },
	{
      "seriesname": "chrome",
      "data": zdata
    },
	{
      "seriesname": "IE",
      "data": zdata
    },
	{
      "seriesname": "firefox",
      "data": cdata
    },
	{
      "seriesname": "opera",
      "data": zdata
    },
	{
      "seriesname": "orange",
      "data": cdata
    }
	

	
	
	]
        }
    });

    firebaseChart2.render();

	
	
	
 var firebaseChart3 = new FusionCharts({
        type: 'stackedarea2d',
        renderAt: 'chart-container3',
        width: '650',
        height: '600',
        dataFormat: 'json',
        dataSource: {
            "chart": {
    "caption": "Graph Statistics",
    "subcaption": "2012-2018",
    "xaxisname": "Years",
    "yaxisname": "Total number of correct answers",
    "formatnumberscale": "0.1",
    "plottooltext": "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
    "theme": "fusion",
    "drawcrossline": "1"
            },
			"categories": [
    {
      "category": [
        {
          "label": "2012"
        },
        {
          "label": "2013"
        },
        {
          "label": "2014"
        },
        {
          "label": "2015"
        },
        {
          "label": "2016"
        },
        {
          "label": "2017"
        },
        {
          "label": "2018"
        }
      ]
    }
  ],
          
			 "dataset": [
    {
      "seriesname": "android",
      "data": cdata
    },
	{
      "seriesname": "apple",
      "data": kdata
    },
	{
      "seriesname": "chrome",
      "data": zdata
    },
	{
      "seriesname": "IE",
      "data": zdata
    },
	{
      "seriesname": "Firefox",
      "data": cdata
    },
	{
      "seriesname": "opera",
      "data": zdata
    },
	{
      "seriesname": "orange",
      "data": cdata
    }
	

	
	
	]
        }
    });

    firebaseChart3.render();	
	
	
var firebaseChart4 = new FusionCharts({
        type: 'stackedcolumn2d',
        renderAt: 'chart-container4',
        width: '650',
        height: '600',
        dataFormat: 'json',
        dataSource: {
            "chart": {
    "caption": "Graph Statistics",
    "subcaption": "2012-2018",
    "xaxisname": "Years",
    "yaxisname": "Total number of correct answers",
    "formatnumberscale": "0.1",
    "plottooltext": "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
    "theme": "fusion",
    "drawcrossline": "1"
            },
			"categories": [
    {
      "category": [
        {
          "label": "2012"
        },
        {
          "label": "2013"
        },
        {
          "label": "2014"
        },
        {
          "label": "2015"
        },
        {
          "label": "2016"
        },
        {
          "label": "2017"
        },
        {
          "label": "2018"
        }
      ]
    }
  ],
          
			 "dataset": [
    {
      "seriesname": "android",
      "data": cdata
    },
	{
      "seriesname": "apple",
      "data": kdata
    },
	{
      "seriesname": "chrome",
      "data": zdata
    },
	{
      "seriesname": "IE",
      "data": zdata
    },
	{
      "seriesname": "firefox",
      "data": cdata
    },
	{
      "seriesname": "opera",
      "data": zdata
    },
	{
      "seriesname": "orange",
      "data": cdata
    }

	
	
	]
        }
    });

    firebaseChart4.render();	
	

	
    }



initialize();
});

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

HC_exporting(Highcharts);
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
    totop=false;
chartOptions:{};
chartOptions2:{};
chartOptions3:{};
chartOptions4:{};
Highcharts = Highcharts;
chartspin=false;
  constructor() { document.addEventListener('scroll',()=>{
    if(window.scrollY>350){
   console.log("TEST");
   this.totop=true
    }
    else{
      this.totop=false
    }
  })}

  ngOnInit(): void {
      this.chartspin=true
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: 'nombre de bénéficiaires par avantage'
      },
      subtitle: {
          text: 'Source: CNSS database 2021'
      },
      credits:{
        enabled:false
      },
      xAxis: {
          categories: ['01/01', '15/01', '01/02', '15/02', '01/03', '15/03', '01/04'],
          tickmarkPlacement: 'on',
          title: {
              enabled:false
          }
      },
      yAxis: {
          title: {
              text: 'milliers'
          },
          labels: {
              formatter: function () {
                  return this.value / 1000;
              }
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ' milliers'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'KARAMA',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'CIVP',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'SCV',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Startup-ACT',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }]
  };
  HC_exporting(Highcharts);
  setTimeout(()=>{
    window.dispatchEvent(new Event('resize'));
  },300);

/////////// CHART 2 

this.chartOptions2=  {
  chart: {
      type: 'bar'
  },
  title: {
      text: 'salariés masculin et féminin'
  },
  subtitle: {
    text: 'source: CNSS database'
},
  xAxis: {
      categories: ['KARAMA', 'CIVP', 'SCV', 'STARTUP-ACT']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Total '
      }
  },
  
  credits:{
        enabled:false
      },
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
  colors: [ '#50C878','rgb(124,181,236)'],

  series: [{
      name: 'masculin',
      data: [5000, 4000, 4500, 1000]
  }, {
      name: 'féminin',
      data: [4200, 3000, 4000, 800]
  }]
}
HC_exporting(Highcharts);
setTimeout(()=>{
window.dispatchEvent(new Event('resize'));
},300);

/////////// CHART 3 
this.chartOptions3= {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'nomber de beneficiaires  en janvier, 2021'
  },
  subtitle: {
    text: 'source: CNSS database'
},
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  credits:{
    enabled:false
  },
  series: [{
      name: 'beneficiaires',
      colorByPoint: true,
      data: [{
          name: 'KARAMA',
          y: 62.3,
          
      }, {
          name: 'CIVP',
          y: 20.2
      }, {
          name: 'SCV',
          y: 11.8
      }, {
          name: 'STARTUP-ACT',
          y: 5.7
      }]
  }]
}
///////// CHART 4 
this.chartOptions4 ={

  chart: {
      type: 'column'
  },

  title: {
      text: "l'âge moyen des hommes et des femmes"
  },

  subtitle: {
      text: 'source: CNSS database'
  },

  legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
  },

  xAxis: {
      categories: ['KARAMA', 'CIVP', 'SCV','STARTUP-ACT'],
      labels: {
          x: 0
      }
  },

  yAxis: {
      allowDecimals: false,
      title: {
          text: 'Age'
      }
  },
  credits:{
    enabled:false
  },
  colors: [ 'rgb(124,181,236)','#50C878'],

  series: [{
      name: 'masculin',
      data: [25, 28, 26,32]
  }, {
      name: 'féminin',
      data: [23, 24, 23.5,30]
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              },
              yAxis: {
                  labels: {
                      align: 'left',
                      x: 0,
                      y: -5
                  },
                  title: {
                      text: null
                  }
              },
              subtitle: {
                  text:null
              },
              credits: {
                  enabled: false
              }
          }
      }]
  }
}
  this.chartspin=false
  }
chart(chart:string){
    let diag = document.getElementById(chart);
    diag.scrollIntoView({behavior:'smooth',block:"center"});
}
backtotop(){
    let top=document.getElementById('chart1');
    
    top.scrollIntoView({behavior:'smooth',block:'center'});
}

}

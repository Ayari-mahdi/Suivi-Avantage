import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { piechart } from '../chartmodel';
import { KaramaService } from '../karama.service';

HC_exporting(Highcharts);
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
myDate = new Date();
totop=false;
private piechart1:piechart;
x1=0;
x2:number;
x3:number;
x4:number
chartOptions:{};
chartOptions2:{};
chartOptions3:{};
chartOptions4:{};
Highcharts = Highcharts;
chartspin=false;
private monthNames=["Janvier","Fevrir","Mars","Avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"];
  constructor(
      private svkarama:KaramaService,
      private _snackBar: MatSnackBar,
      ) 
  { document.addEventListener('scroll',()=>{
    if(window.scrollY>350){
   
   this.totop=true
    }
    else{
      this.totop=false
    }
  })
  }

  ngOnInit(): void {
this.chartspin=true;   
//get first chart data
this.svkarama.chart1().subscribe(
    (data) =>{  
        this.chartspin=false
      this.piechart1 = data  ;        
      this.x1=this.piechart1.civppercentage;
      this.x2=this.piechart1.karpercentage;
      this.x3=this.piechart1.scvpercentage;
      this.x4=this.piechart1.startuppercentage;
      this.chartOptions3= {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'pourcentage des avantages  en '+this.monthNames[this.myDate.getMonth()]+", "+this.myDate.getFullYear()
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
        colors: [    {linearGradient: [0,1],
          stops: [
              [0, 'white'],
              [0.6, '#176BA0']
          ]
      }
      ,'#19AADE',"#1AC9E6","#1DE4BD"],
      
        series: [{
            name: 'beneficiaires',
            colorByPoint: true,
            data: [{
                name: 'CIVP',
                y:this.x1,
                
            }, {
                name: 'KARAMA',
                y: this.x2
            }, {
                name: 'SCV',
                y: this.x3
            }, {
                name: 'STARTUP-ACT',
                y: this.x4
            }]
        }]
      }
    
     },
    (error) => {          
      this.chartspin=false;
      this._snackBar.open('access failed , check your connection please','dismiss' ,{
        duration: 10000,panelClass:'red-snackbar'
         });
      }

  );


    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: 'nombre des bénéficiaires par avantage'
      },
      subtitle: {
          text: 'Source: CNSS database 2021'
      },
      credits:{
        enabled:false
      },
      xAxis: {
          categories: ['01/12','01/01', '15/01', '01/02', '15/02', '01/03', '15/03', '01/04'],
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
          valueSuffix: ' personne'
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
      colors: ['#176BA0','#19AADE',"#1AC9E6","#1DE4BD" ],
      series: [{
          name: 'CIVP',
          data: [0,202, 635, 809, 1947, 2202, 4234, 9268]
      }, {
          name: 'KARAMA',
          data: [0,106, 107, 111, 133, 221, 1567, 3266]
      }, {
          name: 'SCV',
          data: [0,163, 203, 276, 408, 547, 1029, 2828]
      }, {
          name: 'Startup-ACT',
          data: [0,18, 31, 54, 156, 339, 818, 1801]
      }]
  };
  HC_exporting(Highcharts);
  setTimeout(()=>{
    window.dispatchEvent(new Event('resize'));
  },300);

/////////// CHART 2 

this.chartOptions2=  {
  chart: {
      type: 'bar',
      
  },
  title: {
      text: 'salariés masculin et féminin'
  },
  subtitle: {
    text: 'source: CNSS database'
},
  xAxis: {
      categories: ['CIVP', 'KARAMA', 'SCV', 'STARTUP-ACT']
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
  colors: [ '#176BA0'  , "#1DE4BD"],
  //colors: [ '#50C878','rgb(124,181,236)'],

  series: [{
      name: 'masculin',
      data: [5000, 4000, 1500, 1000]
  }, {
      name: 'féminin',
      data: [4200, 3000, 1000, 800]
  }]
}
HC_exporting(Highcharts);
setTimeout(()=>{
window.dispatchEvent(new Event('resize'));
},300);

/////////// CHART 3 

///////// CHART 4 
this.chartOptions4 = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'pourcentage des avantages  en '+this.monthNames[this.myDate.getMonth()]+", "+this.myDate.getFullYear()
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
    colors: [    {linearGradient: [0,1],
      stops: [
          [0, 'white'],
          [0.6, '#176BA0']
      ]
  }
  ,'#19AADE',"#1AC9E6","#1DE4BD"],
  
    series: [{
        name: 'beneficiaires',
        colorByPoint: true,
        data: [{
            name: 'created files',
            y:50,
            
        }, {
            name: 'not yet registered',
            y: 12
        }, {
            name: 'faulty',
            y: 20
        }]
    }]
  }

 // this.chartspin=false
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

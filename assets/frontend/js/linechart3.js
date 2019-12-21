
Vue.component('line-chart', {
  extends: VueChartJs.HorizontalBar,
  // extends: VueChartJs.Line,
  // props: {
  //
  //   currency: {
  //     type: String,
  //     default: '$'
  //   }
  // },
  data: () => ({
     message: 'Hellow',
     gradient: null
  }),
  computed: {
    options () {
      return {
        responsive: true,
        maintainAspectRatios: false,
        legend: {
          position:"bottom",
            labels: {
                fontColor: "white",
                fontSize: 12
            }
        },
        xAxis: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],

        scales: {
          yAxes: [{
            ticks: {
              fontColor:"#ffffff",
              stacked: true
            },
            gridLines: {
            display: true,
            color: "#32364b"

          },
          scaleLabel: {
            display: false,
            // labelString: "Time in Seconds",
            fontColor: "red"
          }
          }],
          xAxes: [{
            ticks: {
              fontColor:"#ffffff",
              stacked: true

            },
              gridLines: {
              display: true,
              color: "#32364b"
            },
            scaleLabel: {
              display: false,
              // labelString: "Time in Seconds",
              fontColor: "red"
            }
          }]
        },
        // tooltips: {
        //   enabled: true,
        //   callbacks: {
        //     label: ((tooltipItems, data) => {
        //       console.log(this)
        //       return tooltipItems.yLabel + '£' + this.message
        //     })
        //   }
        // }
      }
    }
  },
  mixins: [VueChartJs.mixins.reactiveProp],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }

})

var vm = new Vue({
  el: '.app',
  data() {
    return{
      show: false,
      xlabel:[],
      xdata:[],
      url: 'http://localhost/bps/',
      message: {}

    }
  },

  mounted () {
      this.getLabel()
      this.fillData()
      // this.getLabel();
  },
  methods: {
      fillData () {

       // this.getLabel();
      // console.log(this.xdata);
      // console.log(this.xlabel);
      this.message = {
        // labels: ['January' + this.getRandomInt(),
        //          'February', 'March', 'April', 'May', 'June',
        //          'July', 'August', 'September', 'October', 'November', 'December'],
        labels:this.xlabel,
        datasets: [
          {
            label: 'Index Pendidikan',
            backgroundColor: "#17ead9",
            borderColor: "#17ead9",
            barPercentage: 1.0 ,
            data:this.xdata,
            // data:["25","25","58","25","25","58","25","25","58","87"]
            // data: [this.getRandomInt(), this.getRandomInt(),
            //        this.getRandomInt(), this.getRandomInt(),
            //        this.getRandomInt(), this.getRandomInt(),
            //        this.getRandomInt(), this.getRandomInt(),
            //        this.getRandomInt(), this.getRandomInt(),
            //        this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },

    // getRandomInt () {
    //   return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    // },
    getLabel(){
      var listlabel = [];
      axios.get(this.url + "Home/getData").then(function(response) {
        if (response.data == null) {
                    // app.noResult()
                    console.log(err);
                  }
        else{
           //console.log("data berhasil diambil11");
                      let h = response.data;
                       let i = response.data.var;
                       let j = response.data.turvar;
                       let k = response.data.vervar;
                       let dataku = response.data.datacontent;
                       let m = response.data.tahun;
                       let n = response.data.turtahun;
                       let arraydata = [];
                       arraydata.push(dataku)
                       var labelsku= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                       m.forEach(function(datalabel) {
                                     listlabel.push("tahun: "+datalabel['label'].toString());
                                      // vm.datacollection.labels.push(listlabel);

                                      // console.log(datalabel['label']);
                                     // return datalabel['label']
                                     this.vm.xlabel.push(datalabel['label']);
                                   })
                                   k.forEach(function(datalabel) {
                                     if (datalabel['label'] == 'Indeks Pendidikan') {
                                       // console.log("label:"+datalabel['val']);
                                       // app.labels1.push(datalabel['label']);
                                       i.forEach(function(datavariabel) {
                                         // console.log("variabel:"+datavariabel['val']);
                                         j.forEach(function(dataturvar) {
                                           // console.log("turvar:"+dataturvar['val']);
                                           m.forEach(function(datatahun) {
                                             // let last=datatahun[datatahun.length-1];
                                               // console.log("tahun:"+datatahun['val']);
                                               n.forEach(function(dataturtahun) {
                                                 // console.log("turtahun:"+dataturtahun['val']);
                                                 // var hasil = datalabel['val'].toString();
                                                 // console.log("hasil"+hasil+2);
                                                 var hasilkey = datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString();
                                                 // console.log(datalabel['val'].toString()+datavariabel['val'].toString()+dataturvar['val'].toString()+datatahun['val'].toString()+dataturtahun['val'].toString());
                                                 arraydata.forEach(function(hasildata) {
                                                   // console.log(hasildata[hasilkey]);
                                                   // vm.series1.push(hasildata[hasilkey]);
                                                   this.vm.xdata.push(hasildata[hasilkey].toString());
                                                 })
                                               })


                                           })
                                         })
                                       })
                                     }
                                   })
        }
      })
    }
  }
})


Vue.component('line-chart-ratalamasekolah', {
  extends: VueChartJs.HorizontalBar,
  // extends: VueChartJs.Line,
  // props: {
  //
  //   currency: {
  //     type: String,
  //     default: '$'
  //   }
  // },
  data: () => ({
     datasekolah: 'Hellow',
     gradient: null
  }),
  computed: {
    options () {
      return {
        responsive: true,
        maintainAspectRatios: false,
        legend: {
          position:"bottom",
            labels: {
                fontColor: "white",
                fontSize: 12
            }
        },
        xAxis: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],

        scales: {
          yAxes: [{
            ticks: {
              fontColor:"#ffffff",
              stacked: true
            },
            gridLines: {
            display: true,
            color: "#32364b"

          },
          scaleLabel: {
            display: false,
            // labelString: "Time in Seconds",
            fontColor: "red"
          }
          }],
          xAxes: [{
            ticks: {
              fontColor:"#ffffff",
              stacked: true

            },
              gridLines: {
              display: true,
              color: "#32364b"
            },
            scaleLabel: {
              display: false,
              // labelString: "Time in Seconds",
              fontColor: "red"
            }
          }]
        },
        // tooltips: {
        //   enabled: true,
        //   callbacks: {
        //     label: ((tooltipItems, data) => {
        //       console.log(this)
        //       return tooltipItems.yLabel + '£' + this.message
        //     })
        //   }
        // }
      }
    }
  },
  mixins: [VueChartJs.mixins.reactiveProp],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }

})

var sk = new Vue({
  el: '.ratalamasekolah',
  data() {
    return{
            show: false,
            labeldatasekolah:[],
            datadatasekolah:[],
            url: 'http://localhost/bps/',
            datasekolah: {}
    }
  },

  mounted () {
      // this.getLabelsekolah()
      this.fillDatasekolah()
      // this.getLabel();
  },
  methods: {
      fillDatasekolah () {
      this.getLabelsekolah()

      this.datasekolah = {
        labels:this.labeldatasekolah,
        datasets: [
          {
            label: 'Rata-rata Lama Sekolah (tahun)',
            backgroundColor: "#17ead9",
            borderColor: "#17ead9",
            barPercentage: 1.0 ,
            data:this.datadatasekolah,
          }
        ]
      }
      // console.log(this.datasekolah);
    },

    getLabelsekolah(){
      var listlabel = [];
      axios.get(this.url + "Home/getData").then(function(response) {
        if (response.data == null) {
                    // app.noResult()
                    console.log(err);
                  }
        else{
           // //console.log("data berhasil diambil11");
                      let h = response.data;
                       let i = response.data.var;
                       let j = response.data.turvar;
                       let k = response.data.vervar;
                       let dataku = response.data.datacontent;
                       let m = response.data.tahun;
                       let n = response.data.turtahun;
                       let arraydata = [];
                       arraydata.push(dataku)
                       var labelsku= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                       m.forEach(function(datalabel) {
                                     listlabel.push("tahun: "+datalabel['label'].toString());
                                      // vm.datacollection.labels.push(listlabel);

                                      // console.log(datalabel['label']);
                                     // return datalabel['label']
                                     this.sk.labeldatasekolah.push(datalabel['label']);
                                   })
                                   k.forEach(function(datalabel) {
                                     if (datalabel['label'] == 'Rata-rata Lama Sekolah (tahun)') {
                                       // console.log("label:"+datalabel['val']);
                                       // app.labels1.push(datalabel['label']);
                                       i.forEach(function(datavariabel) {
                                         // console.log("variabel:"+datavariabel['val']);
                                         j.forEach(function(dataturvar) {
                                           // console.log("turvar:"+dataturvar['val']);
                                           m.forEach(function(datatahun) {
                                             // let last=datatahun[datatahun.length-1];
                                               // console.log("tahun:"+datatahun['val']);
                                               n.forEach(function(dataturtahun) {
                                                 // console.log("turtahun:"+dataturtahun['val']);
                                                 // var hasil = datalabel['val'].toString();
                                                 // console.log("hasil"+hasil+2);
                                                 var hasilkey = datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString();
                                                 // console.log(datalabel['val'].toString()+datavariabel['val'].toString()+dataturvar['val'].toString()+datatahun['val'].toString()+dataturtahun['val'].toString());
                                                 arraydata.forEach(function(hasildata) {
                                                   // console.log(hasildata[hasilkey]);
                                                   // vm.series1.push(hasildata[hasilkey]);
                                                   this.sk.datadatasekolah.push(hasildata[hasilkey].toString());
                                                 })
                                               })


                                           })
                                         })
                                       })
                                     }
                                   })
        }
      })
    }
  }
})









Vue.component('line-chart-kesehatan', {
  extends: VueChartJs.HorizontalBar,
  // extends: VueChartJs.Line,
  // props: {
  //
  //   currency: {
  //     type: String,
  //     default: '$'
  //   }
  // },
  data: () => ({
     datasekolah: 'Hellow',
     gradient: null
  }),
  computed: {
    options () {
      return {
        responsive: true,
        maintainAspectRatios: false,
        legend: {
          position:"bottom",
            labels: {
                fontColor: "white",
                fontSize: 12
            }
        },
        xAxis: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],

        scales: {
          yAxes: [{
            ticks: {
              fontColor:"#ffffff",
              stacked: true
            },
            gridLines: {
            display: true,
            color: "#32364b"

          },
          scaleLabel: {
            display: false,
            // labelString: "Time in Seconds",
            fontColor: "red"
          }
          }],
          xAxes: [{
            ticks: {
              fontColor:"#ffffff",
              stacked: true

            },
              gridLines: {
              display: true,
              color: "#32364b"
            },
            scaleLabel: {
              display: false,
              // labelString: "Time in Seconds",
              fontColor: "red"
            }
          }]
        },
        // tooltips: {
        //   enabled: true,
        //   callbacks: {
        //     label: ((tooltipItems, data) => {
        //       console.log(this)
        //       return tooltipItems.yLabel + '£' + this.message
        //     })
        //   }
        // }
      }
    }
  },
  mixins: [VueChartJs.mixins.reactiveProp],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }

})

var ks = new Vue({
  el: '.appkesehatan',
  data() {
    return{
            show: false,
            labeldatakesehatan:[],
            xdatakesehatan:[],
            url: 'http://localhost/bps/',
            datakesehatan: {}
    }
  },

  mounted () {
      // this.getLabelsekolah()
      this.fillDatakesehatan()
      // this.getLabel();
  },
  methods: {
      fillDatakesehatan () {
      this.getLabelkesehatan()

      this.datakesehatan = {
        labels:this.labeldatakesehatan,
        datasets: [
          {
            label: 'Index Kesehatan',
            backgroundColor: "#ff45c5 ",
            borderColor: "#ff00cf",
            barPercentage: 1.0 ,
            data:this.xdatakesehatan,
          }
        ]
      }
      // console.log(this.datasekolah);
    },

    getLabelkesehatan(){
      var listlabel = [];
      axios.get(this.url + "Home/getData").then(function(response) {
        if (response.data == null) {
                    // app.noResult()
                    console.log(err);
                  }
        else{
           //console.log("data berhasil diambil11");
                      let h = response.data;
                       let i = response.data.var;
                       let j = response.data.turvar;
                       let k = response.data.vervar;
                       let dataku = response.data.datacontent;
                       let m = response.data.tahun;
                       let n = response.data.turtahun;
                       let arraydata = [];
                       arraydata.push(dataku)
                       var labelsku= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                       m.forEach(function(datalabel) {
                                     listlabel.push("tahun: "+datalabel['label'].toString());
                                      // vm.datacollection.labels.push(listlabel);

                                      // console.log(datalabel['label']);
                                     // return datalabel['label']
                                     this.ks.labeldatakesehatan.push(datalabel['label']);
                                   })
                                   k.forEach(function(datalabel) {
                                     if (datalabel['label'] == 'Indeks Kesehatan') {
                                       // console.log("label:"+datalabel['val']);
                                       // app.labels1.push(datalabel['label']);
                                       i.forEach(function(datavariabel) {
                                         // console.log("variabel:"+datavariabel['val']);
                                         j.forEach(function(dataturvar) {
                                           // console.log("turvar:"+dataturvar['val']);
                                           m.forEach(function(datatahun) {
                                             // let last=datatahun[datatahun.length-1];
                                               // console.log("tahun:"+datatahun['val']);
                                               n.forEach(function(dataturtahun) {
                                                 // console.log("turtahun:"+dataturtahun['val']);
                                                 // var hasil = datalabel['val'].toString();
                                                 // console.log("hasil"+hasil+2);
                                                 var hasilkey = datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString();
                                                 // console.log(datalabel['val'].toString()+datavariabel['val'].toString()+dataturvar['val'].toString()+datatahun['val'].toString()+dataturtahun['val'].toString());
                                                 arraydata.forEach(function(hasildata) {
                                                   // console.log(hasildata[hasilkey]);
                                                   // vm.series1.push(hasildata[hasilkey]);
                                                   this.ks.xdatakesehatan.push(hasildata[hasilkey].toString());
                                                 })
                                               })


                                           })
                                         })
                                       })
                                     }
                                   })
        }
      })
    }
  }
})




Vue.use(VueApexCharts);
var appAHH = new Vue({
  el: '#AngkaHarapanHidup',
    components: {
      apexchartsahh: VueApexCharts,
    },
    data: function() {
      return {
        url: 'http://localhost/bps/',

        chartOptions: {

                                                chart: {
                                                  id: 'vuechart-example'
                                                },
                                                  xaxis: {

                                                  labels: {
                                                          style: {
                                                              colors: "#ffffff",
                                                              fontSize: '12px',
                                                              fontFamily: 'Helvetica, Arial, sans-serif',
                                                              cssClass: 'apexcharts-xaxis-label',
                                                          },
                                                      },

                                                },
                                                colors: ['#ffed00', '#f079b6'],
                                                fill: {
                                                type: 'gradient',
                                                    gradient: {
                                                      gradientToColors: ['#DDB51C', '#c3116c']
                                                      // inverseColors: true,
                                                      // shadeIntensity: 1,
                                                      // opacityFrom: 0.5,
                                                      // opacityTo: 1,
                                                      // stops: [0, 90, 100]
                                                    }
                                              },
                                                plotOptions: {
                                                  bar: {
                                                      horizontal: true,
                                                      endingShape: 'flat',
                                                      columnWidth: '70%',
                                                      barHeight: '70%',
                                                      distributed: false,
                                                  }
                                              },
                                                yaxis: {
                                                        labels: {
                                                            show: true,
                                                            align: 'right',
                                                            minWidth: 0,
                                                            maxWidth: 160,
                                                            style: {
                                                                color: "#ffffff",
                                                                fontSize: '12px',
                                                                fontFamily: 'Helvetica, Arial, sans-serif',
                                                                cssClass: 'apexcharts-yaxis-label',
                                                            },
                                                        },
                                                    },
                                                    grid: {
                                                      position: 'back',
                                                      borderColor: '#282c3d',
                                                      xaxis: {
                                                        lines: {
                                                          show: true
                                                        }
                                                      },
                                                      yaxis: {
                                                        lines: {
                                                          show: true
                                                        }
                                                      }
                                                    },
                                                    legend: {
                                                      show: true,
                                                      // color:"#ffffff",
                                                      position: 'bottom',
                                                       showForSingleSeries: false,
                                                       showForNullSeries: true,
                                                       showForZeroSeries: true,
                                                      onItemHover: {
                                                        highlightDataSeries: true
                                                    },
                                                    labels: {
                                                     colors: "#ffffff",
                                                     useSeriesColors: false
                                                 },
                                                  }
        },
        aku1:[],
        series: [{

          // data: [30, 40, 45, 50, 49, 60, 70, 91, 70, 91]
        }]
      }
    },
    mounted: function() {
                this.getdataahh()
    },
      methods: {
        getdataahh(){

                    // var aku1=[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                      axios.get(this.url + "Home/getData").then(function(response) {
                          var sini=[]
                        if (response.data == null) {
                                    // app.noResult()
                                    console.log(err);
                                  }
                        else{
                          // console.log("data AHH");
                          let h = response.data;
                           let i = response.data.var;
                           let j = response.data.turvar;
                           let k = response.data.vervar;
                           let dataku = response.data.datacontent;
                           let m = response.data.tahun;
                           let n = response.data.turtahun;
                           let arraydata = [];
                           arraydata.push(dataku)

                           let lebelahh=[]
                           let dataahh=[];
                           let dataindexkes=[];
                           var labelsku= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                           m.forEach(function(datalabel) {
                              // lebelahh.push(parseInt(datalabel['label']));
                              lebelahh.push(datalabel['label']);
                           })
                           k.forEach(function(datalabel) {

                               // console.log("label:"+datalabel['val']);
                               // app.labels1.push(datalabel['label']);
                               i.forEach(function(datavariabel) {
                                 // console.log("variabel:"+datavariabel['val']);
                                 j.forEach(function(dataturvar) {
                                   // console.log("turvar:"+dataturvar['val']);
                                   m.forEach(function(datatahun) {
                                     // let last=datatahun[datatahun.length-1];
                                       // console.log("tahun:"+datatahun['val']);
                                       n.forEach(function(dataturtahun) {
                                         // console.log("turtahun:"+dataturtahun['val']);
                                         // var hasil = datalabel['val'].toString();
                                         // console.log("hasil"+hasil+2);
                                         var hasilkey = datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString();
                                         // console.log(datalabel['val'].toString()+datavariabel['val'].toString()+dataturvar['val'].toString()+datatahun['val'].toString()+dataturtahun['val'].toString());
                                         arraydata.forEach(function(hasildata) {
                                           // console.log(hasildata[hasilkey]);
                                            if (datalabel['label'] == 'Angka Harapan Hidup (Tahun)') {
                                           dataahh.push(hasildata[hasilkey].toString());
                                           }
                                           if (datalabel['label'] == 'Indeks Kesehatan') {
                                          dataindexkes.push(hasildata[hasilkey].toString());
                                          }
                                           // this.ks.xdatakesehatan.push(hasildata[hasilkey].toString());
                                         })
                                       })


                                   })
                                 })
                               })

                           })

                           // console.log(dataahh);
                          this.appAHH.chartOptions = {
                            xaxis:{
                              categories:lebelahh,
                                }
                            };
                          this.appAHH.series = [{
                              name: 'Angka Harapan Hidup (Tahun)',
                                data: dataahh
                          },
                          {
                              name: 'Indeks Kesehatan',
                                data: dataindexkes
                          }
                        ]
                        }
                      })
        }
      }
});

Vue.use(VueApexCharts);
var alldata2013=new Vue({
  el: '#data2013',
  components: {
    apexchartdata2013: VueApexCharts,
  },
  data: {
    url: 'http://localhost/bps/',
    keydata2:[],
    series: [{
      data: []
    }],

    chartOptions: {
      chart: {
       stackType: '100%'
     },
      plotOptions: {
        bar: {
          barHeight: '100%',
           columnWidth: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
             maxItems: 100,
            position: 'bottom'
          },
        }
      },
      colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
        '#f48024', '#69d2e7'
      ],
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          fontSize: '10px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          colors: ['#fff']

        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },

      stroke: {
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        // categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        //   'United States', 'China', 'India'
        // ],
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      title: {
          text: 'IPM',
          align: 'center',
          floating: true,
          style: {
                color:  '#ffffff'
              }
      },
      // subtitle: {
      //     text: 'Category Names as DataLabels inside bars',
      //     align: 'center',
      //     style: {
      //           color:  '#ffffff'
      //         }
      // },
      tooltip: {
        theme: 'dark',
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function () {
              return ''
            }
          }
        }
      }

    },


  },
  mounted: function() {
		// console.log('mounted()..');
		this.getdata2013()
		// console.log(label2);
	},
  methods:{
    getdata2013() {
      axios.get(this.url + "Home/getData").then(function(response) {
        if (response.data == null) {
          // app.noResult()
          console.log(err);
        } else {
          // console.log("data berhasil diambil all");
          let lebelall2013=[]
          let dataall2013=[];
          let h = response.data;
          let i = response.data.var;
          let j = response.data.turvar;
          let k = response.data.vervar;
          let dataku = response.data.datacontent;
          let m = response.data.tahun;
          let n = response.data.turtahun;
          let warna_bar=[];
          let letters = '0123456789ABCDEF';
          let color = '#';
          let awal;
          for (awal = 0; awal < 6; awal++) {
            color += letters[Math.floor(Math.random() * 16)];
            warna_bar.push(color);
          }
          // app3.label2 = k;
          // if (app3.label2 != null) {
          // console.log(k);
          // } else {
          // 	console.log("salah");
          // }
          // console.log(k);
          let arraydata = [];
          arraydata.push(dataku)
          k.forEach(function(datalabel) {
            if (datalabel['label'] == 'IPM') {
            // lebelall2013.push(datalabel['label']);
            // console.log("label:" + datalabel['val']);
            // app3.label2.push(datalabel);
            // app3.label2 = datalabel;
            i.forEach(function(datavariabel) {
              // console.log("variabel:"+datavariabel['val']);
              j.forEach(function(dataturvar) {
                // console.log("turvar:"+dataturvar['val']);
                m.forEach(function(datatahun) {
                  // let last=datatahun[datatahun.length-1];
                  lebelall2013.push(datatahun['label']);
                    // console.log("tahun:"+datatahun['val']);
                    n.forEach(function(dataturtahun) {
                      // console.log("turtahun:"+dataturtahun['val']);
                      // var hasil = datalabel['val'].toString();
                      // console.log("hasil"+hasil+2);
                      var hasilkey = datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString();
                      // console.log(datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString());
                      // alldata2013.keydata2.push(hasilkey)
                      arraydata.forEach(function(hasildata) {
                         dataall2013.push(parseFloat(hasildata[hasilkey]));
                        // color += letters[Math.floor(Math.random() * 16)];
                        // console.log(warna_bar);
                        // console.log(hasilkey + ":" + hasildata[hasilkey]);
                        // app3.dataseries2.push({namalabel:datalabel['label'],
                        //                       nilai:hasildata[hasilkey],
                        //                       width:Math.ceil(hasildata[hasilkey]),
                        //                       color_bar:warna_bar});
                      })
                    })


                })
              })
            })
}
          });
          // var sortvalue=dataall2013.sort(function(a, b){return a - b});
          // console.log(dataall2013);
          this.alldata2013.chartOptions = {
            xaxis:{
              categories:lebelall2013,
                }
            };
            this.alldata2013.series = [{
                data: dataall2013
            }]
          // console.log(lebelall2013);
        }
      })
    }
  }
})


var all = new Vue({
	el: '#alldataipm',
	data() {
			return {
				labelall: [],
				dataseriesall: [],
        dataipm:["IPM"],
        dataahh:["Angka Harapan Hidup (Tahun)"],
        datainkes:["Indeks Kesehatan"],
        dataamh:["Angka Melek Huruf ( Persen)"],
        datarls:["Rata-rata Lama Sekolah (tahun)"],
        datainpe:["Indeks Pendidikan"],
        dataipp:['Indeks PPP (Daya Beli)'],
        datars:['Reduksi Shortfall'],
        datappk:['Pengeluaran Per Kapita Riil Disesuaikan (Rp.000)'],
        tahun:[],
				url: 'http://localhost/bps/',
      	// keydata2:[],
        message:"hallo Vue!"

		}
	},
	mounted: function() {
		console.log(this.dataipm);
		this.showdataall()
		// console.log(label2);
	},
	methods: {
		showdataall() {
			axios.get(this.url + "Home/getData").then(function(response) {
				if (response.data == null) {
					// app.noResult()
					console.log(err);
				} else {
					console.log("data berhasil diambil all");

					let h = response.data;
					let i = response.data.var;
					let j = response.data.turvar;
					let k = response.data.vervar;
					let dataku = response.data.datacontent;
					let m = response.data.tahun;
					let n = response.data.turtahun;
					let warna_bar=[];
					let letters = '0123456789ABCDEF';
				  let color = '#';
					let awal;
				  for (awal = 0; awal < 6; awal++) {
				    color += letters[Math.floor(Math.random() * 16)];
						warna_bar.push(color);
				  }
					// app3.label2 = k;
					// if (app3.label2 != null) {
					// console.log(k);
					// } else {
					// 	console.log("salah");
					// }
					let arraydata = [];
					arraydata.push(dataku)
          // console.log(arraydata);
          m.forEach(function(datatahun) {
            this.all.tahun.push(datatahun['label']);
          })
					k.forEach(function(datalabel) {
            // arr.unique();
            console.log("label:" + datalabel['label']);
						this.all.labelall.push(datalabel['label']);
						// app3.label2 = datalabel;
						i.forEach(function(datavariabel) {
							// console.log("variabel:"+datavariabel['val']);
							j.forEach(function(dataturvar) {
								// console.log("turvar:"+dataturvar['val']);
								m.forEach(function(datatahun) {
									// let last=datatahun[datatahun.length-1];
                  	// this.all.tahun.push(datatahun['label']);
										// console.log("tahun:"+datatahun['val']);
										n.forEach(function(dataturtahun) {
											// console.log("turtahun:"+dataturtahun['val']);
											// var hasil = datalabel['val'].toString();
											// console.log("hasil"+hasil+2);
											var hasilkey = datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString();
											// console.log(datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString());
                      // all.keydata2.push(hasilkey)
                      arraydata.forEach(function(hasildata) {
												// color += letters[Math.floor(Math.random() * 16)];
												// console.log({hasildata[hasilkey].toString():	hasildata[hasilkey]});
												// console.log(hasilkey + ":" + hasildata[hasilkey]);
                        // if (hasilkey.slice(0,1)==1) {
                        //   // console.log(hasilkey);
                        //   this.all.dataseriesall.push(
  											// 												"IPM":hasildata[hasilkey],
                        //                       );
                        // }
                        if (datalabel['label']=="IPM") {
                          this.all.dataipm.push(
                                                // namalabel:datalabel['label'],
                                                hasildata[hasilkey],
  																							// width:Math.ceil(hasildata[hasilkey]),
  																							// color_bar:warna_bar
                                              );
                        }
                        if (datalabel['label']=="Angka Harapan Hidup (Tahun)") {
                          this.all.dataahh.push(
                                                // namalabel:datalabel['label'],
                                                hasildata[hasilkey],
  																							// width:Math.ceil(hasildata[hasilkey]),
  																							// color_bar:warna_bar
                                              );
                        }
                        if (datalabel['label']=="Indeks Kesehatan") {
                          this.all.datainkes.push(
                                                // namalabel:datalabel['label'],
                                                hasildata[hasilkey],
  																							// width:Math.ceil(hasildata[hasilkey]),
  																							// color_bar:warna_bar
                                              );
                        }
                        if (datalabel['label']=="Angka Melek Huruf ( Persen)") {
                          this.all.dataamh.push(
                                                // namalabel:datalabel['label'],
                                                hasildata[hasilkey],
  																							// width:Math.ceil(hasildata[hasilkey]),
  																							// color_bar:warna_bar
                                              );
                        }
                        if (datalabel['label']=="Rata-rata Lama Sekolah (tahun)") {
                          this.all.datarls.push(
                                                // namalabel:datalabel['label'],
                                                hasildata[hasilkey],
  																							// width:Math.ceil(hasildata[hasilkey]),
  																							// color_bar:warna_bar
                                              );
                        }
                        if (datalabel['label']=="Indeks Pendidikan") {
                        this.all.datainpe.push(
                                              // namalabel:datalabel['label'],
                                              hasildata[hasilkey],
                                              // width:Math.ceil(hasildata[hasilkey]),
                                              // color_bar:warna_bar
                                            );
                        }
                        if (datalabel['label']=="Indeks PPP (Daya Beli)") {
                        this.all.dataipp.push(
                                              // namalabel:datalabel['label'],
                                              hasildata[hasilkey],
                                              // width:Math.ceil(hasildata[hasilkey]),
                                              // color_bar:warna_bar
                                            );
                        }
                        if (datalabel['label']=="Reduksi Shortfall") {
                        this.all.datars.push(
                                              // namalabel:datalabel['label'],
                                              hasildata[hasilkey],
                                              // width:Math.ceil(hasildata[hasilkey]),
                                              // color_bar:warna_bar
                                            );
                        }
                        if (datalabel['label']=="Pengeluaran Per Kapita Riil Disesuaikan (Rp.000)") {
                        this.all.datappk.push(
                                              // namalabel:datalabel['label'],
                                              hasildata[hasilkey],
                                              // width:Math.ceil(hasildata[hasilkey]),
                                              // color_bar:warna_bar
                                            );
                        }
												this.all.dataseriesall.push(
                                              // namalabel:datalabel['label'],
																							hasildata[hasilkey],
																							// width:Math.ceil(hasildata[hasilkey]),
																							// color_bar:warna_bar
                                            );
											})
										})


								})
							})
						})

					});

				}
			})
		}
	}
})

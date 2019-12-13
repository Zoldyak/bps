
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
                          console.log("data AHH");
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

                           console.log(dataahh);
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

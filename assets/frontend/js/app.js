Vue.use(VueApexCharts);
var app = new Vue({
  el: '#appl',
    components: {
      apexcharts: VueApexCharts,
    },
    data: function() {
      return {
        index:0,
        url: 'http://localhost/bps/',
        Seriesdata:[],
        // series1: [20,20,20,40],
        series1: [],
        labels1: [],
      }
    },
    computed: {
      chartOptions: function() {
        return {
          labels: this.labels1,
          colors: ['#FCCF31', '#f079b6', '#65ed62','#63bbec'],
          fill: {
            type: 'gradient',
            gradient: {
              gradientToColors: ['#F55555', '#c3116c', '#5ec111','#04679e']
            },
          },
              plotOptions: {
                pie: {
                  donut: {
                    size: '60%'
                  }
                }
              },
              // dataLabels: {
              //           formatter: function (val, opts) {
              //               return opts.w.config.series[opts.seriesIndex]
              //           },
              //         },
          legend: {
                  show: true,
                  showForSingleSeries: false,
                  showForNullSeries: true,
                  showForZeroSeries: true,
                  position: 'bottom',
                  horizontalAlign: 'center',
                  floating: false,
                  fontSize: '12px',
                  fontFamily: 'Helvetica, Arial',
                  formatter: undefined,
                  inverseOrder: false,
                  width: undefined,
                  height: undefined,
                  tooltipHoverFormatter: undefined,
                  offsetX: 0,
                  offsetY: 0,
                  labels: {
                      colors: '#ffffff',
                      useSeriesColors: false
                  },
                  itemMargin: {
                      horizontal: 20,
                      vertical: 5
                  },
                  onItemClick: {
                      toggleDataSeries: true
                  },
                  onItemHover: {
                      highlightDataSeries: true
                  },
              }
        }
      }
    },
    // this.url + "/Home/getData"

    mounted: function() {
                console.log('mounted()..');
                this.showAll()
                // console.log(this.users);
    },
    methods:{
      showAll() {
			axios.get(this.url + "Home/getData").then(function(response) {
				if (response.data== null) {
					// app.noResult()
          console.log(err);
				} else {
					// v.getData(response.data.users);
					// console.log(response.data.vervar)
          let h=response.data;
          let i=response.data.var;
          let j=response.data.turvar;
          let k=response.data.vervar;
          let dataku=response.data.datacontent;
          let m=response.data.tahun;
          let n=response.data.turtahun;

          let arraydata=[];
          arraydata.push(dataku)
          console.log(arraydata)
          // console.log(n)
            k.forEach(function(datalabel){
            if (datalabel['label']=='IPM'||datalabel['label']=='Indeks Kesehatan'||datalabel['label']=='Indeks Pendidikan'||datalabel['label']=='Pengeluaran Per Kapita Riil Disesuaikan (Rp.000)') {
              // console.log("label:"+datalabel['val']);
              app.labels1.push(datalabel['label']);
              i.forEach(function(datavariabel){
                // console.log("variabel:"+datavariabel['val']);
                j.forEach(function (dataturvar) {
                    // console.log("turvar:"+dataturvar['val']);
                  m.forEach(function(datatahun) {
                    // let last=datatahun[datatahun.length-1];
                    if (datatahun['label']==2013) {
                      // console.log("tahun:"+datatahun['val']);
                      n.forEach(function(dataturtahun) {
                        // console.log("turtahun:"+dataturtahun['val']);
                        // var hasil = datalabel['val'].toString();
                        // console.log("hasil"+hasil+2);
                        var hasilkey=datalabel['val'].toString()+datavariabel['val'].toString()+dataturvar['val'].toString()+datatahun['val'].toString()+dataturtahun['val'].toString();
                        // console.log(datalabel['val'].toString()+datavariabel['val'].toString()+dataturvar['val'].toString()+datatahun['val'].toString()+dataturtahun['val'].toString());
                        arraydata.forEach(function(hasildata) {
                          console.log(hasilkey+":"+hasildata[hasilkey]);
                            app.series1.push(hasildata[hasilkey]);
                        })
                      })
                    }

                  })
                })
              })
            }
          });


				}
			})
		},
    }
});

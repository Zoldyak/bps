Vue.component('reactive', {
	extends: VueChartJs.Bar,
	mixins: [VueChartJs.mixins.reactiveProp],
	data: function () {
		return {
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					enabled: true,
					mode: 'single',
					callbacks: {
						label: function(tooltipItems, data) {
							return '$' + tooltipItems.yLabel;
						}
					}
				},
				responsive: true,
				maintainAspectRatio: false,
				height: 200
			}
		}
	},
	mounted () {
		// this.chartData is created in the mixin
		this.renderChart(this.chartData, this.options)
	}
})

var vm = new Vue({
	el: '.app',
	data () {
		return {
      url: 'http://localhost/bps/',
    	datacollection: {
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        // labels: ['January'],
        labels:null,
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            // data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            data:[25,25,58,25,25,58,25,25,58,87]
          }
        ],
      }
    }
	},
	created () {
		this.fillData()
    this.getRandomInt()
	},
	methods: {
		fillData () {


        // this.datacollection = {
        //   // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        //   labels:[],
        //   datasets: [
        //     {
        //       label: 'Data One',
        //       backgroundColor: '#f87979',
        //       // data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
        //       data:[20,10,25,32,20,10,25,32,20,10,25,32]
        //     }
        //   ],
        // }
      },
    getRandomInt () {

            axios.get(this.url + "Home/getData").then(function(response) {
              if (response.data == null) {
                // app.noResult()
                console.log(err);
              } else {
                console.log("data berhasil diambil");

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
                let listlabel = [];
                let listdata =[]
                arraydata.push(dataku)
                m.forEach(function(datalabel) {
                  listlabel.push(datalabel['label'].toString());
                   vm.datacollection.labels.push(listlabel);
                  	// console.log(datalabel['label']);
                  // return datalabel['label']
                })
                // return listlabel;
                console.log(listlabel);
                k.forEach(function(datalabel) {
										if (datalabel['label'] == 'IPM' ) {
                  // console.log("label:" + datalabel['val']);
                  app3.label2.push(datalabel);
                  // app3.label2 = datalabel;
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
                            // console.log(datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString());
                            app3.keydata2.push(hasilkey)
                            arraydata.forEach(function(hasildata) {
                              // color += letters[Math.floor(Math.random() * 16)];
                              // console.log(warna_bar);
                              console.log(hasilkey + ":" + hasildata[hasilkey]);
                              listdata.push(hasildata[hasilkey]);
															console.log(hasildata[hasilkey]);
                               vm.datacollection[0].datasets[0].data.push(listdata);
                              // app3.dataseries2.push({namalabel:datalabel['label'],
                              //                       nilai:hasildata[hasilkey],
                              //                       width:Math.ceil(hasildata[hasilkey]),
                              //                       color_bar:warna_bar});
                            })
														console.log(listdata);
                          })


                      })
                    })
                  })

                }});

              }
            })
      }
	}
})

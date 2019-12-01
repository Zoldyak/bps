Vue.use(VueApexCharts);
var app = new Vue({
	el: '#appl',
	components: {
		apexcharts: VueApexCharts,
	},
	data: function() {
		return {
			index: 0,
			url: 'http://localhost/bps/',
			Seriesdata: [],
			// series1: [20,20,20,40],
			series1: [],
			labels1: [],
		}
	},
	computed: {
		chartOptions: function() {
			return {
				labels: this.labels1,
				colors: ['#FCCF31', '#f079b6', '#65ed62', '#63bbec'],
				fill: {
					type: 'gradient',
					gradient: {
						gradientToColors: ['#F55555', '#c3116c', '#5ec111', '#04679e']
					},
				},
				plotOptions: {
					pie: {
						donut: {
							size: '60%'
						}
					}
				},
				tooltip: {
					theme: 'dark',
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
	methods: {
		showAll() {
			axios.get(this.url + "Home/getData").then(function(response) {
				if (response.data == null) {
					// app.noResult()
					console.log(err);
				} else {
					// v.getData(response.data.users);
					// console.log(response.data.vervar)
					let h = response.data;
					let i = response.data.var;
					let j = response.data.turvar;
					let k = response.data.vervar;
					let dataku = response.data.datacontent;
					let m = response.data.tahun;
					let n = response.data.turtahun;

					let arraydata = [];
					arraydata.push(dataku)
					// console.log(arraydata)
					// console.log(n)
					k.forEach(function(datalabel) {
						if (datalabel['label'] == 'IPM' || datalabel['label'] == 'Indeks Kesehatan' || datalabel['label'] == 'Indeks Pendidikan' || datalabel['label'] == 'Pengeluaran Per Kapita Riil Disesuaikan (Rp.000)') {
							// console.log("label:"+datalabel['val']);
							app.labels1.push(datalabel['label']);
							i.forEach(function(datavariabel) {
								// console.log("variabel:"+datavariabel['val']);
								j.forEach(function(dataturvar) {
									// console.log("turvar:"+dataturvar['val']);
									m.forEach(function(datatahun) {
										// let last=datatahun[datatahun.length-1];
										if (datatahun['label'] == 2013) {
											// console.log("tahun:"+datatahun['val']);
											n.forEach(function(dataturtahun) {
												// console.log("turtahun:"+dataturtahun['val']);
												// var hasil = datalabel['val'].toString();
												// console.log("hasil"+hasil+2);
												var hasilkey = datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString();
												// console.log(datalabel['val'].toString()+datavariabel['val'].toString()+dataturvar['val'].toString()+datatahun['val'].toString()+dataturtahun['val'].toString());
												arraydata.forEach(function(hasildata) {
													// console.log(hasilkey + ":" + hasildata[hasilkey]);
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
//
//
//
//
//
//
//
// var lastDate = 0;
// var data = []
//
// function getDayWiseTimeSeries(baseval, count, yrange) {
// 	var i = 0;
// 	// console.log("baseval:" + baseval);
// 	while (i < count) {
// 		// console.log("count:" + count);
// 		var x = baseval;
// 		var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
// 		data.push({
// 			x,
// 			y
// 		});
// 		lastDate = baseval
// 		baseval += 86400000;
// 		i++;
//
// 	}
// }
// getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
// 	min: 10,
// 	max: 90
// })
//
// function getNewSeries(baseval, yrange) {
// 	var newDate = baseval + 86400000;
// 	lastDate = newDate
// 	data.push({
// 		x: newDate,
// 		y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
// 	})
// }
//
// function resetData() {
// 	data = data.slice(data.length - 10, data.length);
// }
// new Vue({
// 	el: '#chart2',
// 	components: {
// 		apexchart: VueApexCharts,
// 	},
// 	data: {
// 		series: [{
// 			data: data.slice()
// 		}],
// 		chartOptions: {
// 			chart: {
// 				animations: {
// 					enabled: true,
// 					easing: 'linear',
// 					dynamicAnimation: {
// 						speed: 1000
// 					}
// 				},
// 				foreColor: '#fff',
// 				toolbar: {
// 					show: false
// 				},
// 				zoom: {
// 					enabled: false
// 				}
// 			},
// 			colors: ['#FCCF31', '#17ead9', '#f02fc2'],
// 			fill: {
// 				type: 'gradient',
// 				gradient: {
// 					gradientToColors: ['#F55555', '#6078ea', '#6094ea']
// 				},
// 			},
// 			grid: {
// 				borderColor: "#40475D",
// 			},
// 			dataLabels: {
// 				enabled: false
// 			},
// 			stroke: {
// 				curve: 'smooth'
// 			},
// 			title: {
// 				text: 'Dynamic Updating Chart',
// 				align: 'left'
// 			},
// 			markers: {
// 				size: 0
// 			},
// 			xaxis: {
// 				type: 'datetime',
// 				range: 777600000,
// 			},
// 			yaxis: {
// 				max: 100
// 			},
// 			legend: {
// 				show: false
// 			}
// 		}
// 	},
// 	mounted: function() {
// 		this.intervals()
// 	},
// 	methods: {
// 		intervals: function() {
// 			var me = this
// 			window.setInterval(function() {
// 				getNewSeries(lastDate, {
// 					min: 10,
// 					max: 90
// 				})
//
// 				me.$refs.realtimeChart.updateSeries([{
// 					data: data
// 				}])
// 			}, 1000)
// 			// every 60 seconds, we reset the data to prevent memory leaks
// 			window.setInterval(function() {
// 				resetData()
// 				me.$refs.realtimeChart.updateSeries([{
// 					data
// 				}], false, true)
// 			}, 60000)
// 		}
// 	}
// })


var app3 = new Vue({
	el: '#app3',
	// data: {
	// 	label2: [],
	// 	dataseries2: [],
	// 	url: 'http://localhost/bps/',
	// },
	data() {
		return {
			label2: [],
			dataseries2: [],
			url: 'http://localhost/bps/',
		}
	},
	mounted: function() {
		console.log('mounted()..');
		this.showdata2013()
		// console.log(label2);
	},
	methods: {
		showdata2013() {
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
					// app3.label2 = k;
					// if (app3.label2 != null) {
					// console.log(k);
					// } else {
					// 	console.log("salah");
					// }
					// console.log(k);
					let arraydata = [];
					// arraydata.push(dataku)
					k.forEach(function(datalabel) {
						// console.log("label:" + datalabel['val']);
						app3.label2.push(datalabel);
						// app3.label2 = datalabel;
						i.forEach(function(datavariabel) {
							// console.log("variabel:"+datavariabel['val']);
							j.forEach(function(dataturvar) {
								// console.log("turvar:"+dataturvar['val']);
								m.forEach(function(datatahun) {
									// let last=datatahun[datatahun.length-1];
									if (datatahun['label'] == 2013) {
										// console.log("tahun:"+datatahun['val']);
										n.forEach(function(dataturtahun) {
											// console.log("turtahun:"+dataturtahun['val']);
											// var hasil = datalabel['val'].toString();
											// console.log("hasil"+hasil+2);
											var hasilkey = datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString();
											// console.log(datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString());
											arraydata.forEach(function(hasildata) {
												// console.log(hasilkey + ":" + hasildata[hasilkey]);
												app3.dataseries2.push(hasildata[hasilkey]);
											})
										})
									}

								})
							})
						})

					});

				}
			})
		}
	}
})
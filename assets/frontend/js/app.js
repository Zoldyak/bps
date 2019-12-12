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
		// console.log('mounted()..');
		// console.log("url nya adalah"+ this.url);
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
													// console.log(hasildata[hasilkey]);
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
      	keydata2:[]

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
					// console.log("data berhasil diambil");

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
                      app3.keydata2.push(hasilkey)
                      arraydata.forEach(function(hasildata) {
												// color += letters[Math.floor(Math.random() * 16)];
												// console.log(warna_bar);
												// console.log(hasilkey + ":" + hasildata[hasilkey]);
												app3.dataseries2.push({namalabel:datalabel['label'],
																							nilai:hasildata[hasilkey],
																							width:Math.ceil(hasildata[hasilkey]),
																							color_bar:warna_bar});
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


var app4=new Vue({
	el: '#chart4',
	components: {
		apexchart: VueApexCharts,
	},
	data: function() {
    return {
			url: 'http://localhost/bps/',
			chart: {
            id: 'vuechart-example',
          },
			series: [
				{
					name: "High - 2013",
					data: [28, 29, 33, 36, 32, 32, 33],
					// categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
				},
				{
					name: "Low - 2013",
					data: [12, 11, 14, 18, 17, 13, 13],
					// categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
				}
			],

    }
  },
	computed: {
		chartOptions: function() {
			return {
				chart: {
					shadow: {
						enabled: true,
						color: '#000000',
						top: 18,
						left: 7,
						// blur: 10,
						opacity: 1
					},
						foreColor: '#ffffff',
					toolbar: {
						show: false
					}
				},

				colors: ['#FCCF31', '#f079b6'],
				fill: {
									type: 'gradient',
									gradient: {
											shade: 'dark',
											gradientToColors: ['#F55555', '#c3116c'],
											shadeIntensity: 1,
											type: 'horizontal',
											opacityFrom: 1,
											// opacityTo: 1,
											stops: [0, 100, 100, 100]
									},
							},
				dataLabels: {
					enabled: true,
					color:'#000'
				},
				stroke: {
					curve: 'smooth'
				},
				title: {
					text: 'Average High & Low Temperature',
					align: 'left',
				color: '#fff',
				},
				grid: {
					borderColor: '#e7e7e7',
					row: {
						colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
						opacity: 0.5
					},
				},
				markers: {

					size: 6
				},
				xaxis: {
				        // type: 'category',
				        // categories: [],


				        labels: {
				            show: true,
				            rotate: -45,
				            rotateAlways: false,
				            hideOverlappingLabels: true,
				            showDuplicates: true,
				            trim: true,
				            minHeight: undefined,
				            maxHeight: 120,
				            style: {
				                colors: [],
				                fontSize: '12px',
				                fontFamily: 'Helvetica, Arial, sans-serif',
				                cssClass: 'apexcharts-xaxis-label',
				            },
				            offsetX: 0,
				            offsetY: 0,
				            format: undefined,
				            formatter: undefined,
				            datetimeFormatter: {
				                year: 'yyyy',
				                month: "MMM 'yy",
				                day: 'dd MMM',
				                hour: 'HH:mm',
				            },
				        },
				        axisBorder: {
				            show: true,
				            color: '#78909C',
				            height: 1,
				            width: '100%',
				            offsetX: 0,
				            offsetY: 0
				        },
				        axisTicks: {
				            show: true,
				            borderType: 'solid',
				            color: '#78909C',
				            height: 6,
				            offsetX: 0,
				            offsetY: 0
				        },
				        tickAmount: undefined,
				        tickPlacement: 'between',
				        min: undefined,
				        max: undefined,
				        range: undefined,
				        floating: false,
				        position: 'bottom',
				        title: {
				            text: undefined,
				            offsetX: 0,
				            offsetY: 0,
				            style: {
				                color: undefined,
				                fontSize: '12px',
				                fontFamily: 'Helvetica, Arial, sans-serif',
				                cssClass: 'apexcharts-xaxis-title',
				            },
				        },
				        crosshairs: {
				            show: true,
				            width: 1,
				            position: 'back',
				            opacity: 0.9,
				            stroke: {
				                color: '#b6b6b6',
				                width: 0,
				                dashArray: 0,
				            },
				            fill: {
				                type: 'solid',
				                color: '#B1B9C4',
				                gradient: {
				                    colorFrom: '#D8E3F0',
				                    colorTo: '#BED1E6',
				                    stops: [0, 100],
				                    opacityFrom: 0.4,
				                    opacityTo: 0.5,
				                },
				            },
				            dropShadow: {
				                enabled: false,
				                top: 0,
				                left: 0,
				                blur: 1,
				                opacity: 0.4,
				            },
				        },
				        tooltip: {
				            enabled: true,
				            formatter: undefined,
				            offsetY: 0,
				            style: {
				              fontSize: 0,
				              fontFamily: 0,
				            },
				        },
				    },
				yaxis: {
					title: {
						text: 'Temperature'
					},
					color: '#fff',
					min: 5,
					max: 40
				},
				legend: {
					position: 'top',
					horizontalAlign: 'right',
					floating: true,
					offsetY: -25,
					offsetX: -5,
					labels: {
						colors: '#ffffff',
						useSeriesColors: false
					}
				}
			}
		}
	},
	mounted: function() {
		// console.log('mounted()..');
		this.showdatakonten()
		// console.log(label2);
		// console.log(options.xaxis.categories)
	},
	methods: {
		showdatakonten() {

			axios.get(this.url + "Home/getData").then(function(response) {
				if (response.data == null) {
					// app.noResult()
					console.log(err);
				} else {
					console.log("app4");

					// v.getData(response.data.users);
					// console.log(response.data.vervar)
					let h = response.data;
					let i = response.data.var;
					let j = response.data.turvar;
					let k = response.data.vervar;
					let dataku = response.data.datacontent;
					let m = response.data.tahun;
					let n = response.data.turtahun;
					let datatahun=['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30']
					let arraydata = [];
					let data=[];
					arraydata.push(dataku)
					// console.log(arraydata)
					// console.log(n)
					k.forEach(function(datalabel) {
						if (datalabel['label'] == 'IPM' || datalabel['label'] == 'Indeks Kesehatan' || datalabel['label'] == 'Indeks Pendidikan' || datalabel['label'] == 'Pengeluaran Per Kapita Riil Disesuaikan (Rp.000)') {
							// console.log("label:"+datalabel['val']);
							// app4.chartOptions.xaxis.categories.push(datalabel['label']);

							i.forEach(function(datavariabel) {
								// console.log("variabel:"+datavariabel['val']);
								j.forEach(function(dataturvar) {
									// console.log("turvar:"+dataturvar['val']);
									m.forEach(function(datatahun) {
									// 	let nilaitahun=datatahun['label']
									// 	let stringtahun=nilaitahun.toString()
									// 	ApexCharts.exec('vuechart-example', 'updateSeries', [{
									//   data: [32, 44, 31, 41, 22]
									// }], false);
									// 	// app4.chartOptions = {
										// 	   xaxis: {
										// 	     categories: datatahun['label']
										// 	   }
										// 	 },
										// 	 this.chartOptions = {...this.chartOptions, ...{
										// 	     xaxis: {
										// 				 	type: 'category',
										// 	         categories: datatahun
										// 	     }
										// 	 }}
											n.forEach(function(dataturtahun) {
												// console.log("turtahun:"+dataturtahun['val']);
												// var hasil = datalabel['val'].toString();
												// console.log("hasil"+hasil+2);
												var hasilkey = datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString();
												// console.log(datalabel['val'].toString()+datavariabel['val'].toString()+dataturvar['val'].toString()+datatahun['val'].toString()+dataturtahun['val'].toString());
												arraydata.forEach(function(hasildata) {
													// console.log(hasilkey + ":" + hasildata[hasilkey]);
													// app.series1.push(hasildata[hasilkey]);
													// data.push({x:datatahun['label'],
													// 											y:hasildata[hasilkey],
													// 											})
													// app4.series.push(data);
													// app4.series.push([{
													//   data:
													//     categories: hasildata[hasilkey]
													// }])
												})
											})


									})
								})
							})
						}
					});

				}
			})
		},
	}

})

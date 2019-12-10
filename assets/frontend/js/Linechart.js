
Vue.component('line-chart', {
  extends: VueChartJs.Line,
   // mixins: [VueChartJs.mixins.reactiveProp],
   props: ['labels', 'row'],
  data(){
    return{
      chartData: {
        url: 'http://localhost/bps/',
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        labels:[],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      }
    }
  },
  mounted () {
     this.renderChart(this.chartData,this.options)
    // this.renderChart({
    //
    // }, {responsive: true, maintainAspectRatio: false})
  },
  created(){
    let  url= 'http://localhost/bps/';
    axios.get(url + "Home/getData").then(function(response) {
      if (response.data == null) {
        // app.noResult()
        console.log(err);
      } else {
        // console.log("data berhasil diambil chart js");

        let h = response.data;
        let i = response.data.var;
        let j = response.data.turvar;
        let k = response.data.vervar;
        let dataku = response.data.datacontent;
        let m = response.data.tahun;
        let n = response.data.turtahun;
        // let warna_bar=[];
        // let letters = '0123456789ABCDEF';
        // let color = '#';
        // let awal;
        // for (awal = 0; awal < 6; awal++) {
        //   color += letters[Math.floor(Math.random() * 16)];
        //   warna_bar.push(color);
        // }
        // app3.label2 = k;
        // if (app3.label2 != null) {
        // console.log(k);
        // } else {
        // 	console.log("salah");
        // }
        // console.log(k);
        // labels = m['label']
        // console.log(response.data.tahunlabel);
        let arraydata = [];
        arraydata.push(dataku)
        m.forEach(function(datalabel) {
          labels.push(datalabel['label']);
          console.log(datalabel['label']);
        })
        k.forEach(function(datalabel) {
          // console.log("label:" + datalabel['val']);
          // app3.label2.push(datalabel);
          // app3.label2 = datalabel;
          i.forEach(function(datavariabel) {
            // console.log("variabel:"+datavariabel['val']);
            j.forEach(function(dataturvar) {
              // console.log("turvar:"+dataturvar['val']);
              m.forEach(function(datatahun) {
                	 // labels.push(datatahun[label]);
                  // console.log(datatahun['label']);

                // let last=datatahun[datatahun.length-1];
                  // console.log("tahun:"+datatahun['val']);
                  n.forEach(function(dataturtahun) {
                    // console.log("turtahun:"+dataturtahun['val']);
                    // var hasil = datalabel['val'].toString();
                    // console.log("hasil"+hasil+2);
                    var hasilkey = datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString();
                    // console.log(datalabel['val'].toString() + datavariabel['val'].toString() + dataturvar['val'].toString() + datatahun['val'].toString() + dataturtahun['val'].toString());
                    // app3.keydata2.push(hasilkey)
                    arraydata.forEach(function(hasildata) {
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

        });

        //disini

      }
    })
  }

})

var vm = new Vue({
  el: '.chartjs',
  data: {
    message: 'Hello World'
  }
})

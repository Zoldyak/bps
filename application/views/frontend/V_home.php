<style media="screen">
code {
background: #1b2021;;
color: #666;
font: 14px/24px "Source Code Pro", Inconsolata, "Lucida Console", Terminal, "Courier New", Courier;
display: inline-block;
height: 70px;
line-height: 70px;
margin: 0 14px;
text-align: center;
width: 70px;
font-size: 22px
}
.border-rounded {
border-radius: 5px;
}
.border-circle {
border-radius: 50%;
}
.border-football {
border-radius: 15px 75px;
}

</style>
<!-- <div class="jumbotron jumbotron-fluid" style="background-color: #262b2d !important">
  <div class="container">
    <h1 class="display-4" style="color: #ffffff;">Fluid jumbotron</h1>
    <p class="lead" style="color: #888888;">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div> -->
<div class="row">
  <div class="col-md-12" style="background-color: #1b213b !important;">
          <p class="display-4 font-weight-bold text-center font-italic" style="color: #fff;font-family:'dubielitalic',Arial, sans-serif; font-size: 1.9em;">Apa itu</p>
          <p class="display-4  text-center" style="color: #ffffff; text-transform: uppercase; font-size: 1.9em;">IPM ?</p>
  </div>
    <div class="col-md-12" style="background-color: #1b213b !important;">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <!-- <div id="appl">
              <div id="chart" ref="chart">
                <apexcharts type="donut" width="100%" :height="480" :options="chartOptions" :series="series1"></apexcharts>
              </div>
            </div> -->
            <div class="" id="data2013">
               <apexchartdata2013 type=bar height=350 :options="chartOptions" :series="series" />
            </div>
            <!-- <p class="font-weight-normal  font-italic" style="color: #ffffff;font-family:'dubielitalic',Arial, sans-serif; font-size: 1.9em;">
              IPM
            </p>
            <p class="text-justify" style="color: #888888;font-family:'dubielitalic',Arial, sans-serif; font-size: 1em;">
              Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
            </p> -->
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-2">
                <code class="border-circle" style="color:#fff;">
                  <i class="fa fa-male fa-lg" aria-hidden="true"></i>
                </code>
              </div>
              <div class="col-md-10">
                <p class="text-justify" style="color: #fff;font-family:'dubielitalic',Arial, sans-serif; font-size: 1em;">
                Indeks Pembangunan Manusia (IPM) merupakan indikator penting untuk mengukur keberhasilan dalam upaya membangun kualitas hidup manusia (masyarakat/penduduk). IPM dapat menentukan peringkat atau level pembangunan suatu wilayah/negara.
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-2">
                <code class="border-circle" style="color:#fff;">
                  <i class="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>
              </code>
              </div>
              <div class="col-md-10">
                <p class="text-justify" style="color: #fff;font-family:'dubielitalic',Arial, sans-serif; font-size: 1em;">
                  Indeks Pendidikan  merupakan pengetahuan dalam hal ini tingkat pendidikan juga diakui secara luas sebagai unsur mendasar dari pembangunan manusia.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2">
                <code class="border-circle" style="color:#fff;">
                  <i class="fa fa-heartbeat fa-lg" aria-hidden="true"></i>

                </code>
              </div>
              <div class="col-md-10">
                <p class="text-justify" style="color: #fff;font-family:'dubielitalic',Arial, sans-serif; font-size: 1em;">
                Indeks Kesehatan merupakan cerminan usia maksimum yang diharapkan seseorang untuk dapat bertahan hidup. Pembangunan manusia harus lebih mengupayakan agar penduduk dapat mencapai usia harapan hidup yang panjang
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-2">
                <code class="border-circle" style="color:#fff;">
                  <i class="fa fa-money fa-lg" aria-hidden="true"></i>

                </code>
              </div>
              <div class="col-md-10">
                <p class="text-justify" style="color: #fff;font-family:'dubielitalic',Arial, sans-serif; font-size: 1em;">
                Pengeluaran Per Kapita merupakan standar hidup layak Indikator standar hidup layak bisa dilihat dari daya beli masyarakat yang meliputi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-12" style="background: #1b213b;">
      <br>
    <div class="row">

      <div class="col-md-12">
        <div class="container-fluid">
            <br>
          <div class="row">
            <div class="col-md-4">
              <div class="card" style=";background: #ffffff21;border-radius: 5px;">

                <div class="card-header" style="color:#fff">
                  Indeks PPP (Daya Beli)
                </div>
                <div class="" id="indexppp">
                   <indexppp type=bar height=350 :options="chartOptions" :series="series" />
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card" style=";background: #ffffff21;border-radius: 5px;">
                <div class="card-header" style="color:#fff">
                All  Data
                </div>
                <div class="card-body">
                  <div class="" id="alldataipm">
                    <div class="table-responsive" style="position: relative;height: 320px;overflow: auto;">
                      <table class="table table-striped table-dark table-bordered" style="background-color: #1b213b !important;">
                        <thead>
                          <tr>
                            <th>Indikator</th>

                            <th v-for="listtahun in tahun">
                              {{listtahun}}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr >
                            <td v-for="listipm in dataipm">
                              {{listipm}}
                            </td>

                          </tr>
                          <tr>
                            <td v-for="listahh in dataahh">
                              {{listahh}}
                            </td>
                          </tr>
                          <tr>
                            <td v-for="listinkes in datainkes">
                              {{listinkes}}
                            </td>
                          </tr>
                          <tr>
                            <td v-for="listaamh in dataamh">
                              {{listaamh}}
                            </td>
                          </tr>
                          <tr>
                            <td v-for="listrls in datarls">
                              {{listrls}}
                            </td>
                          </tr>
                          <tr>
                            <td v-for="listinpe in datainpe">
                              {{listinpe}}
                            </td>
                          </tr>
                          <tr>
                            <td v-for="listipp in dataipp">
                              {{listipp}}
                            </td>
                          </tr>
                          <tr>
                            <td v-for="listrs in datars">
                              {{listrs}}
                            </td>
                          </tr>
                          <tr>
                            <td v-for="listppk in datappk">
                              {{listppk}}
                            </td>
                          </tr>
                          <!-- <tr v-for="listdata in dataseriesall">
                            <td >
                              {{listdata}}
                            </td>
                          </tr> -->
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="container-fluid">
          <br>
          <div class="row">
            <div class="col-md-8">
              <div class="card" style=";background: #ffffff21;border-radius: 5px;">

                <div class="card-header" style="color:#fff">
                  Angka Harapan Hidup - Index Kesehatan
                </div>
                <div id="AngkaHarapanHidup">
                 <div>
                   <apexchartsahh width="100%" type="area" height="400" :options="chartOptions" :series="series"></apexchartsahh>
                 </div>
               </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style=";background: #ffffff21;border-radius: 5px;">

                <div class="card-header" style="color:#fff">
                  Angka Reduksi Shortfall
                </div>
                <div id="AngkaReduksiShortfall">
                 <div>
                   <apexchartredux width="100%" type="bar" height="400" :options="chartOptions" :series="series"></apexchartredux>
                 </div>
               </div>
              </div>
            </div>

            <div class="col-md-6">
              <br>
              <div class="card" style=";background: #ffffff21;border-radius: 5px;">

                <div class="card-header" style="color:#fff">
              Rata-rata Lama Sekolah (tahun)
                </div>
                <div id="lamasekolah">
                 <div>
                   <lamasekolah width="100%" type="bar" height="400" :options="chartOptions" :series="series"></lamasekolah>
                 </div>
               </div>
              </div>
            </div>
            <div class="col-md-6">
              <br>
              <div class="card" style=";background: #ffffff21;border-radius: 5px;">

                <div class="card-header" style="color:#fff">
                Angka Melek Huruf - Indeks Pendidikan
                </div>
                <div id="lamasekolahpendidikan">
                 <div>
                   <lamasekolahpendidikan width="100%" type="area" height="400" :options="chartOptions" :series="series"></lamasekolahpendidikan>
                 </div>
               </div>
              </div>
            </div>
            <div class="col-md-12">
              <br>
              <div class="card" style=";background: #ffffff21;border-radius: 5px;">

                <div class="card-header" style="color:#fff">
                Pengeluaran Per Kapita Riil Disesuaikan (Rp.000)
                </div>
                <div id="pengeluaran">
                 <div>
                   <pengeluaran width="100%" type="bar" height="400" :options="chartOptions" :series="series"></pengeluaran>
                 </div>
               </div
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>
</div>

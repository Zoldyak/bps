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
  <div class="col-md-12" style="background-color: #262b2d !important">
          <p class="display-4 font-weight-bold text-center font-italic" style="color: #888888;font-family:'dubielitalic',Arial, sans-serif; font-size: 1.9em;">Apa itu</p>
          <p class="display-4  text-center" style="color: #ffffff; text-transform: uppercase; font-size: 1.9em;">IPM ?</p>
  </div>
    <div class="col-md-12" style="background-color: #262b2d !important">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div id="appl">
              <div id="chart" ref="chart">
                <apexcharts type="donut" :width="480" :height="480" :options="chartOptions" :series="series1"></apexcharts>
              </div>
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
                <code class="border-circle">IPM</code>
              </div>
              <div class="col-md-10">
                <p class="text-justify" style="color: #888888;font-family:'dubielitalic',Arial, sans-serif; font-size: 1em;">
                  Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-2">
                <code class="border-circle">IPD</code>
              </div>
              <div class="col-md-10">
                <p class="text-justify" style="color: #888888;font-family:'dubielitalic',Arial, sans-serif; font-size: 1em;">
                  Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2">
                <code class="border-circle">IKS</code>
              </div>
              <div class="col-md-10">
                <p class="text-justify" style="color: #888888;font-family:'dubielitalic',Arial, sans-serif; font-size: 1em;">
                  Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12" style="background: #1b213b;">
      <div class="container" >
        <br>
        <div class="row">

          <div class="col-md-3" style="color: #fff;background: #ffffff21;border-radius: 5px;">
            <div class="" id="app3">
              <h4>Data Tahun 2013</h4>
              <hr style="background: #fff;">
              <div class="" v-for="listdata in dataseries2">
                   <span>{{ listdata.namalabel }} : {{ listdata.nilai }}</span><br>
                   <div class="progress">
                      <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  :style = "{ 'width':listdata.width+'%'}"></div>
                  </div>
              </div>
            </div>
            <br>
          </div>

          <div class="col-md-8" style=";background: #ffffff21;border-radius: 5px;margin-left: 10px;">
            <!-- <div id="chart2" ref="chart">
                <apexchart ref="realtimeChart" type=line height=350 :options="chartOptions" :series="series" />
            </div> -->
            <div class="row">
              <div class="col-md-12" >
                <!-- <div class="app">
                	<h1>Line Chart</h1>
                	<line-chart></line-chart>
                </div> -->

                <div id="chart4">
                  <apexchart ref="chart4" type=line height=350 :options="chartOptions" :series="series" />
                </div>
              </div>
              <div class="col-md-12" style="color:#fff">
                <div class="app">
                  	<h1>Bar Chart</h1>
                  	<reactive :chart-data="datacollection"></reactive>
                  	<!-- <button class="button is-primary" @click="fillData()">Randomize</button> -->
                  </div>
                <!-- <div class="chartjs">
                    {{ message }} -->
                  <!-- <line-chart ></line-chart> -->
                  <!-- <reactive :chart-data="datacollection"></reactive> -->
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12" style="background: #1b213b;">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
              <!-- <div id="chart2" ref="chart">
                  <apexchart ref="realtimeChart" type=line height=350 :options="chartOptions" :series="series" />
              </div> -->
          </div>
        </div>
      </div>
    </div>


  </div>
</div>

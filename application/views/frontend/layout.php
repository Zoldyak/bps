<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
      Include 'inc/metacss.php';
    ?>
  </head>
  <body >

      <?php
        include $halaman
      ?>
  <!-- loader -->
<!-- <script src="https://unpkg.com/vue-chartjs@2.8.7/dist/vue-chartjs.full.min.js"></script> -->
  <script src="<?php echo $this->config->item('frontend') ?>/js/jquery.min.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/bootstrap.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/apexchart.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/vue-apexcharts.js"></script>
<script src="<?php echo $this->config->item('frontend') ?>/js/vue-simple-progress.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>

  <script src="<?php echo $this->config->item('frontend') ?>/js/vue.min.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/axios.min.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/app.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/Linechart.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/Linechart2.js"></script>

  </body>
</html>

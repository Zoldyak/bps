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
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.min.js" charset="utf-8"></script> -->

  <script src="<?php echo $this->config->item('frontend') ?>/js/vue.min.js"></script>
  <!-- <script src="" charset="utf-8"></script> -->
  <script src="<?php echo $this->config->item('frontend') ?>/js/Chart.min.js"></script>
<script src="<?php echo $this->config->item('frontend') ?>/js/vue-chartjs.min.js"></script>
  <!-- <script src="https://unpkg.com/vue-chartjs@2.8.5" charset="utf-8"></script> -->
  <script src="<?php echo $this->config->item('frontend') ?>/js/axios.min.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/app.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/Linechart.js"></script>
  <!-- <script src="<?php echo $this->config->item('frontend') ?>/js/Linechart2.js"></script> -->
  <script src="<?php echo $this->config->item('frontend') ?>/js/Linechart3.js"></script>
  <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js" charset="utf-8"></script>
  <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" charset="utf-8"></script>
  <script>
    $(document).ready(function() {
      $('#example').DataTable({
        scrollY:     300,
        "scrollX": true,
        scroller:    true
      });
    } );
  </script>

  </body>
</html>

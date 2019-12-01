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

  <script src="<?php echo $this->config->item('frontend') ?>/js/jquery.min.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/bootstrap.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/apexchart.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/vue-apexcharts.js"></script>

  <script src="<?php echo $this->config->item('frontend') ?>/js/vue.min.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/axios.min.js"></script>
  <script src="<?php echo $this->config->item('frontend') ?>/js/app.js"></script>


  </body>
</html>

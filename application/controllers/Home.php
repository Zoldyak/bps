<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller{

  public function __construct()
  {
    parent::__construct();
     $this->load->model('user_model','user');
    //Codeigniter : Write Less Do More
  }

  function index()
  {
    $load=$this->load;
    // $listdata= $this->MA_home->list_foto()->result_array();
    $data = array('halaman' => 'V_home.php',
                  );
    $load->view('frontend/layout',$data);
  }
  public function getData()
  {
    $file = file_get_contents('assets/frontend/json/ipm.json'); // put the contents of the file into a variable
		 $data = json_decode($file,true);
	   $result = $data;

     echo json_encode($result,JSON_PRETTY_PRINT);
     // echo $result;
		 // return $result;
  }

  public function showAll(){
       $query=  $this->user->showAll();
             if($query){
                   $result['users']  = $this->user->showAll();
             }

        echo json_encode($result,JSON_PRETTY_PRINT);
    }

}

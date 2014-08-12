<?php
	function curl_get_contents($url)
	{
	  $curl = curl_init($url);	  
      
	  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	  curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
	  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
	  curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
	  curl_setopt($curl, CURLOPT_CONNECTTIMEOUT ,0);  
	  curl_setopt($curl, CURLOPT_TIMEOUT, 30); //timeout in seconds
	  $data = curl_exec($curl);
	  
	  curl_close($curl);
	  return $data;
	}

    header('Content-type: text/xml');
    header('Access-Control-Allow-Origin: *');

    $restURI = $_POST['rest'];
    $db=$_POST['db'];
    $context=$_POST['context'];
    $target = $_POST['target'];
    $limit = $_POST['limit'];
    
    $baseQ = $restURI ."?query=";

    $forQ  = urlencode('for $x in db:open("'.$db.'")'.$context) ;
    $returnQ = urlencode(' return (if($c <='.$limit.') then $x else "" )');
    
    $arr= array();

    for( $i = 0;$i < 3;$i++){
    	switch($i){
    		case 0: $condition = ' where count($x/'.$target.')=0 count $c ' ;break;
    		case 1: $condition = ' where count($x/'.$target.')=1 count $c ' ;break;
    		case 2: $condition = ' where count($x/'.$target.')>=2 count $c ' ;break;
    	}
    	$condQuery = $baseQ.$forQ.urlencode($condition).$returnQ;    			
    	$result = curl_get_contents($condQuery);    	    			
		$arr['g'.$i] = trim($result);	        
    }	
	print_r(json_encode($arr)); 
?>
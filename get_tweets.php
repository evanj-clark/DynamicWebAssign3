<?php

	require_once('TwitterAPIExchange.php');
	 
	// Set access tokens: https://dev.twitter.com/apps/
	$settings = array(
	    'oauth_access_token' => "1084000340549152768-RYZygxLgzLsjC4VZZb58pAZV1MdFc4",
	    'oauth_access_token_secret' => "zWVKMj5zVd94ap47HtnA5JdMGWjYOXI9S98nZdgBaEXXJ",
	    'consumer_key' => "K1CbjUOlwma0PeXtwx98ryyI5",
	    'consumer_secret' => "R94xkhHD2pOotk5DJxM60SPtLOQnHz1OmSMykckxpbXXlfsWFD"
	);

	// Choose URL and Request Method
	$url = "https://api.twitter.com/1.1/search/tweets.json";
	$getfield = '?q=#gamedev&lang=en&count=50'; // queries start with ? and are strung together with &
	$requestMethod = "GET";
	
	//Perform the request!
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();

?>


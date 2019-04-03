window.onload = init;

function init() {

	var xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_tweets.php', true); //this changes the state of xmlhttp
    xhr.send(null);
    xhr.onload = function() {
        
    	if(xhr.status == 200){

            var tweets = JSON.parse(xhr.responseText);
            
            console.log(tweets);
           
            var tweet1 = tweets.statuses[48].text;
            var tweet2 = tweets.statuses[49].text;
            var tweet1img = tweets.statuses[48].user.profile_image_url;
            var tweet2img = tweets.statuses[49].user.profile_image_url;
            var tweet1name = tweets.statuses[48].user.screen_name;
            var tweet2name = tweets.statuses[49].user.screen_name;
            var tweet1retweets = tweets.statuses[48].retweet_count;
            var tweet2retweets = tweets.statuses[49].retweet_count;
            var tweet1followers = tweets.statuses[48].user.followers_count;
            var tweet2followers = tweets.statuses[49].user.followers_count;
            var tweet1favorites = tweets.statuses[48].favorite_count;
            var tweet2favorites = tweets.statuses[49].favorite_count;


    		document.getElementById("user1").innerHTML ='<img src='+tweet1img+'>'+'<br>'+"<h1>"+tweet1name+"</h1>"+"<br>"+"<hr>"+"<h2>Tweet:</h2>"+"<p>"+tweet1+"</p>"+"<hr>"+"<h2>Retweets:<br>"+tweet1retweets+"</h2><hr>"+"<h2>Followers:<br>"+tweet1followers+"</h2><hr>"+"<h2>Favorites:<br>"+tweet1favorites+"</h2>";
            document.getElementById("user2").innerHTML ='<img src='+tweet2img+'>'+'<br>'+"<h1>"+tweet2name+"</h1>"+"<br>"+"<hr>"+"<h2>Tweet:</h2>"+"<p>"+tweet2+"</p>"+"<hr>"+"<h2>Retweets:<br>"+tweet2retweets+"</h2><hr>"+"<h2>Followers:<br>"+tweet2followers+"</h2><hr>"+"<h2>Favorites:<br>"+tweet2favorites+"</h2>";
    		
    	} else {
            document.getElementById("results").innerHTML = help;

        }
    }

}
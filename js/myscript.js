$(document).ready(function(){
	$('.btnLike0').click(function() {
	    $('.count0').html(function(i, val) { 
	    	return val*1+1 ;
	    });
	});

	$('.btnLike1').click(function() {
	    $('.count1').html(function(i, val) { 
	    	return val*1+1 ;
	    });
	});

	$('.btnLike2').click(function() {
	    $('.count2').html(function(i, val) { 
	    	return val*1+1 ;
	    });
	});

	$('.btnLike3').click(function() {
	    $('.count3').html(function(i, val) { 
	    	return val*1+1 ;
	    });
	});

	$('.btnLike4').click(function() {
	    $('.count4').html(function(i, val) { 
	    	return val*1+1 ;
	    });
	});


	$('.btnLike5').click(function() {
	    $('.count5').html(function(i, val) { 
	    	return val*1+1 ;
	    });
	});

	var mydata = JSON.parse(json);
	/*for(var i = 0; i<mydata.length ; i++) {
      var obj = mydata[i];
      var movieName = "movieName" + i;
      document.getElementById(movieName).innerHTML=obj.movieName;

      var shortD = "shortD" + i;
      document.getElementById(shortD).innerHTML=obj.shortDescription;

 	}*/



 	var info = mydata[0];
 	document.getElementById("movieName0").innerHTML=info.movieName;
 	document.getElementById("shortD0").innerHTML=info.shortDescription;
 
 	info = mydata[1];
 	document.getElementById("movieName1").innerHTML=info.movieName;
 	document.getElementById("shortD1").innerHTML=info.shortDescription;
 	
 	info = mydata[2];
 	document.getElementById("movieName2").innerHTML=info.movieName;
 	document.getElementById("shortD2").innerHTML=info.shortDescription;
 
 	info = mydata[3];
 	document.getElementById("movieName3").innerHTML=info.movieName;
 	document.getElementById("shortD3").innerHTML=info.shortDescription;
 	
 	info = mydata[4];
 	document.getElementById("movieName4").innerHTML=info.movieName;
 	document.getElementById("shortD4").innerHTML=info.shortDescription;

 	info = mydata[5];
 	document.getElementById("movieName5").innerHTML=info.movieName;
 	document.getElementById("shortD5").innerHTML=info.shortDescription;
 
});



function sort() {


	var count = [];

	var value = document.getElementById("count0").innerText;
		count.push(value);
		value = document.getElementById("count1").innerText;
		count.push(value);
		value = document.getElementById("count2").innerText;
		count.push(value);
		value = document.getElementById("count3").innerText;
		count.push(value);
		value = document.getElementById("count4").innerText;
		count.push(value);
		value = document.getElementById("count5").innerText;
		count.push(value);


  for(var i =0 ; i < count.length; i++){

		count.sort(function(a, b){return b-a});
	};
	

  for(var i =0 ; i < count.length; i++){

		for(var m =0 ; m < count.length; m++){

			var rePlace = "count" + m;
     		var order = document.getElementById(rePlace).innerText;

			if(count[i] == order){

				var mydata = JSON.parse(json);

	
      			var obj = mydata[m];
      			var movieName = "movieName" + i;
      			document.getElementById(movieName).innerHTML=obj.movieName;

      			var shortD = "shortD" + i;
      			document.getElementById(shortD).innerHTML=obj.shortDescription;

 	  			var image = "img" +i;
 	  			document.getElementById(image).src =obj.imgTitel;

				break;
			}
		};

	};

	for(var i =0 ; i < count.length; i++){
		var result ="count" +i;
 	  	document.getElementById(result).innerHTML = count[i];
	};	
};
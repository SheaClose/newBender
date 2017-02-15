angular.module("app")
.factory("beerFactory", function(){
	return {
		getBeerStyles: function() {
	    var httpRequest = new XMLHttpRequest();
	    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            console.log(JSON.parse(httpRequest.responseText));
          } else {
            alert('There was a problem with the request.');
          }
        }
			};
	    httpRequest.open('GET', "./styles");
	    httpRequest.send();
	  }
	}
})

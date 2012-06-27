REST Webservice
===

REST Webservice is a jQuery plugin that allows you to easily send get, post, put and delete requests to a REST API.

Download
---

[Download Alert Shake] (https://github.com/adrazich/rest-webservice-jquery/downloads)

How to Use
---

###Javascript
```html
<script type="text/javascript">
  $(document).ready(function(){
	
	// Send a GET request to get a user
    $.webservice('get', '/api/user/adrazich', '', function(data){
	  // there is a callback function you can use to get your data back
	  console.log(data);
	  
	  // data should be in JSON format, because it's super easy to use, like so...
	  console.log(data.message);
	});
  
	// update a user sending a PUT request
	$.webservice('put', '/api/user', { id: adrazich, name: 'Anna Drazich' }, function(data){
	  console.log(data);
	});
  });
</script>
```

###Required Files

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
<script src="rest-webservice/js/jquery.rest-webservice.js" type="text/javascript"></script>
```

Browser Support
---
Internet Explorer 7+, Firefox, Chrome, Safari

License
---

Copyright (c) 2012 Anna Drazich

Dual licensed under the [MIT] (https://github.com/adrazich/rest-webservice-jquery/blob/master/MIT-License.txt) and [GPL] (https://github.com/adrazich/rest-webservice-jquery/blob/master/GPL-License.txt) licenses.

###More information about these licenses
  - [MIT License Wiki] (http://en.wikipedia.org/wiki/MIT_License) 
  - [GPL License Wiki] (http://en.wikipedia.org/wiki/GNU_General_Public_License)
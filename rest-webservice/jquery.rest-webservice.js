/**
* REST Webservice is a jQuery plugin that allows you to easily send get, post, put and delete requests to a REST API.
* \version 1.0
* \author Anna Drazich
* \copyright (c) 2012 Anna Drazich
* Dual licensed under the MIT and GPL licenses.
* MIT License: https://github.com/adrazich/rest-webservice-jquery/blob/master/MIT-License.txt
* GPL License: https://github.com/adrazich/rest-webservice-jquery/blob/master/GPL-License.txt
* Github: https://github.com/adrazich/rest-webservice-jquery
*/
;(function($, window, document, undefined){
  
  var methods = {
    init: function(){
    },
    get: function(url, data, callback){
      return methods.request('get', url, data, callback);
    },
    post: function(url, data, callback){
      return methods.request('post', url, data, callback);
    },
    put: function(url, data, callback){
      return methods.request('put', url, data, callback);
    },
    del: function(url, data, callback){
      return methods.request('del', url, data, callback);
    },
    request: function(type, url, data, callback){
      if (!/get|post|put|del/.test(type)) return false;
      type = type == 'del' ? 'delete' : type;
      data = (data === undefined || data === null) ? '' : data;
      
      var useCache = /msie/.test(navigator.userAgent.toLowerCase()) ? false : true;
  
      $.ajax({
        type: type,
        url: url,
        data: data,
        dataType: 'json',
        cache: useCache,
        complete: function(response){
          callback($.parseJSON(response.responseText));
        }
      });
      
      return true;
    }
  };
  
  $.webservice = function(method){
    if (methods[method]){
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method){
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method '+method+' does not exist on jQuery.webservice');
    }
    
    return false;
  };
  
})(jQuery, window, document);

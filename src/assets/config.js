(function () {
	var config = function () {}
	  
	config.json_demo_url = 'https://liudonghua.net/download/test/json-demo.php'
	
	config.toString = function () {
		var str = '{' +
				  + 'json_demo_url: ' + this.json_demo_url
				  + '}'
		return str
	}
	
	config.show = function () {
	  console.log('config.show(): ' + this.toString())
	  //return this
	}
	
	window.gconfig = config
}())

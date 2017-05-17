
// $.getJSON("js/index.json", function(data) {
	
// 	console.log(data[0].Result)
// 	var listData = data[0].Result;
// })
//var res = require("vue-resource/dist/vue-resource.js")
require("../css/ba.min.css");
var app = new Vue({
	el: "#app",
	data: {
		shuju : "listData "
	},
//	created : function(){
//		this.$http.jsonp("js/index.json").then(function(data){
//			console.log(data)
//		},function(err){
//			console.log(err)
//		})
//	}

})
console.log(app.shuju)
Vue.component("hot-list", {
	props: [],
	template: `<li>
							<a href="javascript:;">
								<div class="hot-list-tupian">
									<img src="http://img.createwit.com/0cd51906-71a5-413a-ac4f-a754003030dc.jpg?imageView2%2F2%2Fw%2F720%2Fh%2F720%2Fq%2F75%7Cimageslim" />
								</div>
								<div class="hot-list-maioshu">
									<p class="p1"><span>115.00</span><s>145.00</s></p>
									<p class="p2">华美烫染专用人发14寸</p>
								</div>
							</a>
						</li>`
})

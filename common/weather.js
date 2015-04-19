// Generated by CoffeeScript 1.4.0
(function(){var e,t,n,r;r=typeof module!="undefined"&&module.exports,r&&(require("sugar"),n=require("http"),e=require("url")),t=function(){function t(){}return t.VERSION="0.0.2",t.kelvinToFahrenheit=function(e){return this.kelvinToCelsius(e)*1.8+32},t.kelvinToCelsius=function(e){return e-273.15},t.getCurrent=function(e,n){var r=this;return this._getJSON("http://api.openweathermap.org/data/2.5/weather?q="+encodeURIComponent(e)+"&cnt=1",function(e){return n(new t.Current(e))})},t.getForecast=function(e,n){var r=this;return this._getJSON("http://openweathermap.org/data/2.1/forecast/city?q="+encodeURIComponent(e)+"&cnt=1",function(e){return n(new t.Forecast(e))})},t._getJSON=function(t,i){return r?n.get(e.parse(t),function(e){return i(e.body)}):$.ajax({url:t,dataType:"jsonp",success:i})},t}(),t.Forecast=function(){function e(e){this.data=e}return e.prototype.startAt=function(){return new Date(this.data.list.min("dt").dt*1e3)},e.prototype.endAt=function(){return new Date(this.data.list.max("dt").dt*1e3)},e.prototype.day=function(e){return new t.Forecast(this._filter(e))},e.prototype.low=function(){var e;return this.data.list.length>0?(e=this.data.list.min(function(e){return e.main.temp_min}),e.main.temp_min):void 0},e.prototype.high=function(){var e;return this.data.list.length>0?(e=this.data.list.max(function(e){return e.main.temp_max}),e.main.temp_max):void 0},e.prototype._filter=function(e){var t,n,r;return e instanceof Date&&(e=e.getTime()),n=Object.clone(this.data),t=Date.create(e).beginningOfDay(),r=Date.create(e).endOfDay(),n.list=n.list.findAll(function(e){var n;n=e.dt*1e3;if(n>=t.getTime()&&n<=r.getTime())return e}),n},e}(),t.Current=function(){function e(e){this.data=e}return e.prototype.temperature=function(){var e;return e=this.data.list[0].main.temp},e.prototype.conditions=function(){return this.data.list[0].weather[0].description},e}(),r?module.exports=t:window.Weather=t}).call(this);
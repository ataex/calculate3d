!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=3)}([function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.time=0,this.speed=0,this.x0=0,this.y0=0,this.z0=0,this.e0=0,t.split(/\r\n|\n/).forEach(function(e){i.parseLine(e)})}var t,i,r;return t=e,(i=[{key:"parseLine",value:function(e){e.startsWith("G92")?this.g92(e):e.startsWith("G1")?this.g1(e):e.startsWith("; filament used")?this.parseFilamentUsedSlic3r(e):e.startsWith(";   Plastic weight")?this.parseWeight(e):e.startsWith(";   Plastic volume")?this.parseVolume(e):e.startsWith(";   Filament length")?this.parseFilamentLenght(e):e.startsWith(";   Build time")&&this.parseBuildTime(e)}},{key:"parseBuildTime",value:function(e){var t=e.indexOf(":")+1;this.formattedTime=e.substring(t),console.log("calculated time: "+this.time),this.time=0;for(var i=this.getValues(e),n=0;n<i.length;n+=2){var r=parseFloat(i[n]),a=i[n+1];"hours"==a||"hour"==a?this.time+=60*r:"minutes"!=a&&"minute"!=a||(this.time+=r)}console.log("simplify time: "+this.time)}},{key:"g1",value:function(e){for(var t=e.split(" "),i=0,n=0,r=0,a=1;a<t.length;a++){var s=t[a][0],o=parseInt(t[a].substring(1));switch(s){case"E":i=o-this.e0;break;case"F":this.speed=o;break;case"X":n=o-this.x0,this.x0=o;break;case"Y":var u=o-this.y0;this.y0=o,r=Math.sqrt(Math.pow(n,2)+Math.pow(u,2));break;case"Z":var l=o-this.z0;this.z0=o,r=l}}if(r=Math.max(r,i),0!=this.speed){var h=r/this.speed;this.time+=h}}},{key:"g92",value:function(e){switch(e.split(" ")[1][0]){case"E":this.e0=0;break;case"X":this.x0=0;break;case"Y":this.y0=0;break;case"Z":this.z0=0}}},{key:"parseFilamentLenght",value:function(e){this.length=parseFloat(this.getValues(e)[0])}},{key:"parseFilamentUsedSlic3r",value:function(e){var t=e.indexOf("=")+1,i=e.substring(t).trim().split(" ");i[0].endsWith("g")?this.weight=parseFloat(i[0].replace("g","")):i[0].endsWith("mm")&&(this.length=parseFloat(i[0].replace("mm","")),this.volume=parseFloat(i[1].replace("(","").replace("cm3)","")))}},{key:"parseVolume",value:function(e){this.volume=parseFloat(this.getValues(e)[0])}},{key:"parseWeight",value:function(e){this.weight=parseFloat(this.getValues(e)[0])}},{key:"getValues",value:function(e){var t=e.indexOf(":")+1;return e.substring(t).trim().split(" ")}}])&&n(t.prototype,i),r&&n(t,r),e}();t.default=r},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Text=t.Input=t.Print=void 0;var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n(this,e),this.name=t,this.weight=0,this.time=0,this.formattedTime="",this.filamentCost=0,this.energyCost=0,this.additionalCost=0,this.failureMargin=0,this.totalCost=0,this.roi=0,this.markup=0,this.sellPrice=0}return a(e,[{key:"add",value:function(e){this.time+=e.time,this.weight+=e.weight,this.filamentCost+=e.filamentCost,this.energyCost+=e.energyCost,this.additionalCost+=e.additionalCost,this.failureMargin+=e.failureMargin,this.totalCost+=e.totalCost,this.roi+=e.roi,this.markup+=e.markup,this.sellPrice+=e.sellPrice}},{key:"render",value:function(){this.fields=[new u("name",this.name),new u("weight",this.weight.toFixed(2)),new u("time",this.formattedTime?this.formattedTime:this.time),new u("filament_cost",this.filamentCost.toFixed(2)),new u("energy_cost",this.energyCost.toFixed(2)),new u("additional_cost",this.additionalCost.toFixed(2)),new u("failure_margin",this.failureMargin.toFixed(2)),new u("total_cost",this.totalCost.toFixed(2)),new u("roi",this.roi.toFixed(2)),new u("markup",this.markup.toFixed(2)),new u("sell_price",this.sellPrice.toFixed(2))];var e=document.createElement("tr");return e.setAttribute("id",this.name),this.fields.forEach(function(t){return e.appendChild(t.render())}),e}}]),e}();t.Print=s;var o=function(){function e(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",a=arguments.length>3?arguments[3]:void 0;n(this,e),this.name=t,this.value=i,this.type=r,this.step=a}return a(e,[{key:"render",value:function(){var e=document.createElement("input");e.setAttribute("name",this.name),e.setAttribute("value",this.value),e.setAttribute("type",this.type),e.setAttribute("class","form-control"),e.setAttribute("step",this.step);var t=document.createElement("td");return t.appendChild(e),t}}]),e}();t.Input=o;var u=function(){function e(t,i){n(this,e),this.name=t,this.value=i}return a(e,[{key:"render",value:function(){var e=document.createElement("text");e.textContent=this.value;var t=document.createElement("td");return t.appendChild(e),t}}]),e}();t.Text=u;var l=s;t.default=l},function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Parameters=void 0;var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.inputs=document.querySelectorAll("#parameters input"),this.onChangeListeners=[],this.load(),this.registerOnInputChange()}var t,i,r;return t=e,(i=[{key:"addOnChangeListeners",value:function(e){this.onChangeListeners.push(e)}},{key:"notifyOnChangeListeners",value:function(){this.onChangeListeners.forEach(function(e){return e()})}},{key:"load",value:function(){this.inputs.forEach(function(e){var t=localStorage.getItem(e.getAttribute("id"));t&&(e.value=t)})}},{key:"getValue",value:function(e){return localStorage.getItem(e)}},{key:"registerOnInputChange",value:function(){var e=this;this.inputs.forEach(function(t){return t.onchange=function(){e.store(),e.notifyOnChangeListeners()}})}},{key:"store",value:function(){this.inputs.forEach(function(e){return localStorage.setItem(e.getAttribute("id"),e.value)})}}])&&n(t.prototype,i),r&&n(t,r),e}();t.Parameters=r;var a=r;t.default=a},function(e,t,i){"use strict";var n=s(i(2)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};n.get||n.set?Object.defineProperty(t,i,n):t[i]=e[i]}return t.default=e,t}(i(1)),a=s(i(0));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}new(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parameters=new n.default,this.parameters.addOnChangeListeners(function(){return t.render()}),this.prints=[],this.bindUI(),this.render()}var t,i,s;return t=e,(i=[{key:"bindUI",value:function(){var e=this;this.printsTable=document.getElementById("prints_table"),this.printsTable.style.display="none",this.printsBody=document.getElementById("prints_body"),this.fileInput=document.getElementById("file"),this.fileInput.onchange=function(t){return e.readFiles(t.target.files)}}},{key:"readFiles",value:function(e){var t=this;Object.values(e).forEach(function(e){var i=new FileReader;i.onload=function(){return t.parseGCode(e,i.result)},i.readAsText(e)}),this.fileInput.value=""}},{key:"parseGCode",value:function(e,t){var i=new r.default(e.name),n=new a.default(t);i.weight=n.weight,i.time=parseInt(n.time),i.formattedTime=n.formattedTime,this.prints.push(i),this.render()}},{key:"render",value:function(){var e=this;if(0!=this.prints.length){this.printsTable.style.display="block",this.printsBody.innerHTML="";var t=new r.default("TOTAL"),i=this.calculateROI();this.prints.forEach(function(n){n.filamentCost=n.weight*e.parameters.getValue("filament_cost")/1e3,n.energyCost=n.time*e.parameters.getValue("power_rating")*e.parameters.getValue("energy_cost")/6e4,n.additionalCost=parseFloat(e.parameters.getValue("additional_cost")),n.totalCost=n.filamentCost+n.energyCost+n.additionalCost,n.failureMargin=n.totalCost*e.parameters.getValue("failure_margin")/100,n.markup=n.totalCost*e.parameters.getValue("markup")/100,n.roi=n.time*i,n.sellPrice=n.totalCost+n.failureMargin+n.roi+n.markup,t.add(n),e.printsBody.appendChild(n.render())}),this.printsBody.appendChild(t.render())}}},{key:"calculateROI",value:function(){return this.parameters.getValue("investment")/this.parameters.getValue("desired_time")/30/this.parameters.getValue("work_hours")/60}}])&&o(t.prototype,i),s&&o(t,s),e}())}]);
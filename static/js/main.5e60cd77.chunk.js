(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=(a(14),a(7)),l=a(4),m=a(5),i=a(6),d=a(8),u=a(1),f=function(e){var t="info";return 0===e?t="success":1===e&&(t="danger"),"badge badge-pill badge-"+t+" mr-1"};var h=function(e){var t=e.pin;return r.a.createElement("span",{className:f(t.state)},t.pin)};var p=function(e){var t=e.board,a=e.num;return t=t||{mac:"DATA MISSING"},r.a.createElement("div",{className:"card border-primary"},r.a.createElement("h5",{className:"card-header text-white bg-primary"},r.a.createElement("small",{className:"float-right font-weight-normal mt-1"},"(",(t.t/1e3).toFixed(2)+"s",")"),"Board ",a),r.a.createElement("div",{className:"card-body"},r.a.createElement("dl",{className:"row"},r.a.createElement("dt",{className:"col-sm-4"},"MAC"),r.a.createElement("dd",{className:"col-sm-8"},t.mac),r.a.createElement("dt",{className:"col-sm-4"},"HOST"),r.a.createElement("dd",{className:"col-sm-8"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://"+t.ip+":"+t.port},t.ip,":",t.port)),r.a.createElement("dt",{className:"col-sm-4"},"WIFI"),r.a.createElement("dd",{className:"col-sm-8"},function(e){return 2*(e+100)+"%"}(t.rssi)),r.a.createElement("dt",{className:"col-sm-4"},"UPTIME"),r.a.createElement("dd",{className:"col-sm-8"},function(e){var t=Math.floor(e/86400),a=Math.floor(e%86400/3600),n=Math.floor(e%86400%3600/60),r=e%60,c="";return t>=1&&(c+=t+"d "),a>=1&&(c+=" "+a+"h "),n>=1&&(c+=" "+n+"m "),r>1&&(c+=" "+r+"s"),""===c&&(c="n/a"),c}(t.uptime)),r.a.createElement("dt",{className:"col-sm-4"},"FREE"),r.a.createElement("dd",{className:"col-sm-8"},function(e){return(e/1e3).toFixed(2)+"k"}(t.heap)))),r.a.createElement("div",{className:"card-footer"},function(e,t){e=e||[];var a={};return Object(u.a)(Array(t)).forEach((function(e,t){a[t+1]="?"})),e.forEach((function(e){a[e.pin]=e.state})),Object.keys(a).map((function(e){return{pin:e,state:a[e]}}))}(t.sensors,6).map((function(e,t){return r.a.createElement(h,{pin:e,key:t})}))))};var E=function(e){var t=e.boards;return r.a.createElement("div",{className:"row row-cols-1 row-cols-md-2 my-4 mx-2"},t.map((function(e,t){return r.a.createElement("div",{className:"col mb-4",key:t},r.a.createElement(p,{board:e,num:t+1}))})))},b=(a(15),function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={boards:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=(new Date).getTime();Promise.all(this.props.boardHosts.map((function(e){return fetch("http://"+e+"/status").then((function(e){return e.json()})).then((function(e){var a=(new Date).getTime();return Object(s.a)({},e,{t:a-t})})).catch(console.log)}))).then((function(t){e.setState({boards:t})}))}},{key:"render",value:function(){return r.a.createElement(E,{boards:this.state.boards})}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,{boardHosts:["10.0.0.122:13682","10.0.0.60:22291","10.0.0.197:13681","10.0.0.62:22261"]})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.5e60cd77.chunk.js.map
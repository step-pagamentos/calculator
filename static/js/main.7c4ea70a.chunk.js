(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{35:function(e,t,a){e.exports=a(45)},40:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=(a(40),a(27)),l=a(59),u=a(23),m=a(61),h=a(58),p=a(57),f=a(11),s=a(62),g="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",b=Object(f.a)((function(e){return{root:{color:"black",height:2,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:g,marginTop:-14,marginLeft:-14,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:g}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#e0e0e0"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}}}))(s.a),d=function(e){return"".concat(e,"%")},v=function(e){var t=Math.floor(e/12),a=e%12,n="";return 1===t?n=n.concat("1 ano"):t>1&&(n=n.concat("".concat(t," anos"))),0!==t&&0!==a&&(n=n.concat(" e ")),1===a?n=n.concat("1 m\xeas"):a>1&&(n=n.concat("".concat(a," meses"))),n},y=function(e){var t=e.defaultValue,a=e.min,n=e.max,o=e.onChange,c=e.step,i=e.type,l=e.value;return r.a.createElement(m.a,{mt:2,ml:2,mr:2},r.a.createElement(p.a,{variant:"h5"},function(e,t){switch(t){case"currency":return Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e);case"tax":return d(e);case"time":return v(e);default:return}}(l,i)),r.a.createElement(b,{"aria-label":"ios slider",max:n,min:a,step:c,onChange:o,defaultValue:t}))},E=function(){var e=Object(n.useState)(1e3),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(10),i=Object(u.a)(c,2),l=i[0],f=i[1],s=Object(n.useState)(360),g=Object(u.a)(s,2),b=g[0],d=g[1],v=function(){return a*(l/100)*[Math.pow(1.001856,b)-1]/.001856};return r.a.createElement(h.a,{maxWidth:!1},r.a.createElement(m.a,{p:2},r.a.createElement(p.a,{color:"primary",variant:"h2"},"Simule e planeje seus objetivos:")),r.a.createElement(m.a,{p:2},r.a.createElement(p.a,{variant:"h4"},"Quanto voc\xea gasta por m\xeas?")),r.a.createElement(y,{onChange:function(e,t){o(t)},min:500,max:5e4,step:500,type:"currency",value:a,defaultValue:1e3}),r.a.createElement(m.a,{p:2},r.a.createElement(p.a,{variant:"h4"},"Quanto gostaria de guardar por m\xeas?")),r.a.createElement(y,{onChange:function(e,t){f(t)},min:1,max:10,step:1,type:"tax",value:l,defaultValue:10}),r.a.createElement(m.a,{p:2},r.a.createElement(p.a,{variant:"h4"},"Por quanto tempo?")),r.a.createElement(y,{defaultValue:360,onChange:function(e,t){d(t)},min:1,max:360,type:"time",value:b}),r.a.createElement(m.a,{ml:2,mt:3,mb:2},r.a.createElement(p.a,{variant:"h4"},"Voc\xea ter\xe1",r.a.createElement(p.a,{variant:"span",color:"primary"}," ".concat(Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(v())," ")),"na Step")),r.a.createElement(m.a,{ml:2,mb:3},r.a.createElement(p.a,{variant:"h6"},"Seu $ parado ",Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(a*(l/100)*b),r.a.createElement(p.a,{variant:"caption",color:"error"}," (-".concat(Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(v()-a*(l/100)*b),")")))))},x=Object(i.a)({palette:{primary:{main:"#FFFFFF"}},typography:{fontFamily:"Montserrat",caption:{fontSize:18,fontWeight:600},h2:{fontSize:36,fontWeight:600},h3:{fontSize:32,fontWeight:600},h4:{fontSize:28,fontWeight:600},h5:{fontSize:24,fontWeight:600},h6:{fontSize:22,fontWeight:600},subtitle2:{fontSize:18,fontWeight:600}}}),S=function(){return r.a.createElement(l.a,{theme:x},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.7c4ea70a.chunk.js.map
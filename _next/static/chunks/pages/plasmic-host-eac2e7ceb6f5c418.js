(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{37218:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return c(51523)}])},51523:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return i}});var d=c(85893);c(67294);var e=c(4298),f=c.n(e),g=c(56983),h=c(96614);function i(){return h.p&&(0,d.jsxs)("div",{children:[(0,d.jsx)(f(),{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,d.jsx)(g.nh,{})]})}},96614:function(a,b,c){"use strict";c.d(b,{p:function(){return m}});var d=c(56983),e=c(47568),f=c(34051),g=c.n(f),h=c(85893),i=c(67294),j=c(68030),k=c(21321);function l(){return null}c(30290);var m=(0,d.fZ)({projects:[{id:"x8vPDyDdbQwzXMaAvvEbEA",token:"V0Rwy0NiHmXbu4wPXEjSErNHXInpnCS6FmB6eHTvUdeuczSv7cjEBQIvoQ4UzKUgvwjwte6UFLBkf4s5v1g"},],preview:!0}),n=[{name:"John Brown",age:19,address:"New York No. 1 Lake Park",tags:["student","developer"]},{name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["teacher"]},{name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]},];m.registerComponent(function(a){var b,c,d,e=a.className,f=a.columns,g=a.items,l=null!==(d=null===(b=f)|| void 0===b?void 0:null===(c=b.props)|| void 0===c?void 0:c.children)&& void 0!==d?d:f,m=i.useMemo(function(){return i.Children.map(l,function(a,b){var c=a.props,d=c.columnTemplate,e=c.title,f=c.dataIndex;return{columnIndex:b,title:e,dataIndex:f,key:b,render:function(a,b,c){return(0,h.jsx)(j.DataProvider,{name:"currentRow",data:b,children:(0,h.jsx)(j.DataProvider,{name:"currentRowIndex",data:c,children:(0,h.jsx)(j.DataProvider,{name:"currentColumn",data:a,children:(0,j.repeatedElement)(c,d)})})})}}})},[l]);return(0,h.jsx)(k.Z,{className:e||"",columns:m,dataSource:g})},{name:"DataTable",props:{items:{type:"array",defaultValue:n},columns:{type:"slot",allowedComponents:["TableColumn"],defaultValue:Object.keys(n[0]).map(function(a){var b;return{type:"component",name:"TableColumn",props:{title:(b=a).charAt(0).toUpperCase()+b.slice(1),dataIndex:a}}})}}}),m.registerComponent(l,{name:"TableColumn",parentComponentName:"DataTable",providesData:!0,props:{title:{type:"string",defaultValue:"Name"},dataIndex:{type:"string",defaultValue:"name"},columnTemplate:{type:"slot",defaultValue:{type:"vbox",styles:{padding:0},children:[{type:"component",name:"TableValue"},]}}}}),m.registerComponent(function(a){var b,c=(0,j.useSelector)("currentColumn");return(0,h.jsx)("div",{className:a.className,children:null!==(b=null==c?void 0:c.toString())&& void 0!==b?b:""})},{name:"TableValue",parentComponentName:"TableColumn",props:{}}),m.registerComponent(function(a){var b=a.className,c=a.children,d=a.url,f=a.body,k=a.method,l=void 0===k?"GET":k,m=(0,i.useState)(null),n=m[0],o=m[1];return(0,i.useEffect)(function(){(0,e.Z)(g().mark(function a(){var b,c;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!d){a.next=8;break}return a.next=3,fetch(d,{method:l,body:f});case 3:return b=a.sent,a.next=6,b.json();case 6:o(c=a.sent);case 8:case"end":return a.stop()}},a)}))()},[d,l]),(0,h.jsx)("div",{className:b,children:(0,h.jsx)(j.DataProvider,{name:"fetchedData",data:n,label:"Fetched data",children:c})})},{name:"RestQuery",providesData:!0,props:{url:{type:"string",defaultValue:"https://jsonplaceholder.typicode.com/posts"},method:{type:"choice",options:["GET","POST"],defaultValueHint:"GET"},children:{type:"slot",defaultValue:[{type:"vbox",children:[{type:"text",value:"Insert some contents here"},]},]}}}),m.registerComponent(function(a){var b=a.children,c=a.hideHeading,d=a.className;return(0,h.jsxs)("div",{style:{padding:64},className:d,children:[!c&&(0,h.jsx)("h1",{children:"My Hero"}),b]})},{name:"Section",props:{children:{type:"slot"},hideHeading:{type:"boolean"}}}),m.registerComponent(function(a){var b=a.title,c=a.children,d=a.previewShown,e=a.className,f=(0,i.useState)(!1),g=f[0],j=f[1];return(0,h.jsxs)("div",{className:e,children:[(0,h.jsx)("div",{style:{padding:16},onClick:function(){return j(!g)},children:b}),(g||d)&&(0,h.jsx)("div",{style:{padding:16},children:c})]})},{name:"Collapse",props:{title:{type:"slot",defaultValue:"This is the title"},children:{type:"slot",defaultValue:"This is the body"},previewShown:"boolean"}})},4298:function(a,b,c){a.exports=c(20699)}},function(a){a.O(0,[774,949,867,888,179],function(){var b;return a(a.s=37218)}),_N_E=a.O()}])
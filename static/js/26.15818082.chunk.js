(this.webpackJsonpyout3=this.webpackJsonpyout3||[]).push([[26],{1719:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(33),o=a(34),d=a(49),c=a(50),l=a(51),s=a(8),p=a(69),u=a(1450),g=function(e){function t(e){var a,r;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).onDragEnd=function(e){if(e.destination){var t=function(e,t,a){var r=Array.from(e),n=r.splice(t,1),i=Object(p.a)(n,1)[0];return r.splice(a,0,i),r}(a.state.items,e.source.index,e.destination.index);a.setState({items:t})}},a.state={items:(r=10,Array.from({length:r},(function(e,t){return t})).map((function(e){return{id:"item-".concat(e),content:"item ".concat(e)}})))},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(u.a,{onDragEnd:this.onDragEnd},n.a.createElement(u.c,{droppableId:"droppable"},(function(t,a){return n.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef,style:(r=a.isDraggingOver,{borderRadius:"4px",background:r?"rgba(0,0,0, .1)":"var(--bg-default)",padding:8,width:250})}),e.state.items.map((function(e,t){return n.a.createElement(u.b,{key:e.id,draggableId:e.id,index:t},(function(t,a){return n.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:(r=a.isDragging,i=t.draggableProps.style,Object(s.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),boxShadow:"var(--elevation-z4)",borderRadius:"4px",background:r?"var(--primary)":"var(--bg-paper)"},i))}),e.content);var r,i}))})),t.placeholder);var r})))}}]),t}(r.Component),b=a(337),m=a(125),f=function(e){function t(e){var a,r;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).state={items:(r=6,Array.from({length:r},(function(e,t){return t})).map((function(e){return{id:"item-".concat(e),content:"item ".concat(e)}})))},a.onDragEnd=a.onDragEnd.bind(Object(m.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"onDragEnd",value:function(e){if(e.destination){var t=function(e,t,a){var r=Array.from(e),n=r.splice(t,1),i=Object(p.a)(n,1)[0];return r.splice(a,0,i),r}(this.state.items,e.source.index,e.destination.index);this.setState({items:t})}}},{key:"render",value:function(){var e=this;return n.a.createElement(u.a,{onDragEnd:this.onDragEnd},n.a.createElement(u.c,{droppableId:"droppable",direction:"horizontal"},(function(t,a){return n.a.createElement("div",Object.assign({ref:t.innerRef,style:(r=a.isDraggingOver,{borderRadius:"4px",background:r?"rgba(0,0,0, .1)":"var(--bg-default)",display:"flex",padding:8,overflow:"auto"})},t.droppableProps),e.state.items.map((function(e,t){return n.a.createElement(u.b,{key:e.id,draggableId:e.id,index:t},(function(t,a){return n.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:(r=a.isDragging,i=t.draggableProps.style,Object(s.a)({userSelect:"none",padding:16,margin:"0 ".concat(8,"px 0 0"),boxShadow:"var(--elevation-z4)",borderRadius:"4px",background:r?"var(--primary)":"var(--bg-paper)"},i))}),e.content);var r,i}))})),t.placeholder);var r})))}}]),t}(r.Component),v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},(function(e,t){return t})).map((function(e){return{id:"item-".concat(e+t),content:"item ".concat(e+t)}}))},E=function(e,t,a){var r=Array.from(e),n=r.splice(t,1),i=Object(p.a)(n,1)[0];return r.splice(a,0,i),r},y=function(e,t,a,r){var n=Array.from(e),i=Array.from(t),o=n.splice(a.index,1),d=Object(p.a)(o,1)[0];i.splice(r.index,0,d);var c={};return c[a.droppableId]=n,c[r.droppableId]=i,c},h=function(e,t){return Object(s.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),boxShadow:"var(--elevation-z4)",borderRadius:"4px",background:e?"var(--primary)":"var(--bg-paper)"},t)},j=function(e){return{borderRadius:"4px",background:e?"rgba(0,0,0, .1)":"var(--bg-default)",padding:8,width:250}},O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={items:v(10),selected:v(5,10)},a.id2List={droppable:"items",droppable2:"selected"},a.getList=function(e){return a.state[a.id2List[e]]},a.onDragEnd=function(e){var t=e.source,r=e.destination;if(r)if(t.droppableId===r.droppableId){var n=E(a.getList(t.droppableId),t.index,r.index),i={items:n};"droppable2"===t.droppableId&&(i={selected:n}),a.setState(i)}else{var o=y(a.getList(t.droppableId),a.getList(r.droppableId),t,r);a.setState({items:o.droppable,selected:o.droppable2})}},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(u.a,{onDragEnd:this.onDragEnd},n.a.createElement("div",{className:"flex justify-around"},n.a.createElement(u.c,{droppableId:"droppable"},(function(t,a){return n.a.createElement("div",{ref:t.innerRef,style:j(a.isDraggingOver)},e.state.items.map((function(e,t){return n.a.createElement(u.b,{key:e.id,draggableId:e.id,index:t},(function(t,a){return n.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:h(a.isDragging,t.draggableProps.style)}),e.content)}))})),t.placeholder)})),n.a.createElement(u.c,{droppableId:"droppable2"},(function(t,a){return n.a.createElement("div",{ref:t.innerRef,style:j(a.isDraggingOver)},e.state.selected.map((function(e,t){return n.a.createElement(u.b,{key:e.id,draggableId:e.id,index:t},(function(t,a){return n.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:h(a.isDragging,t.draggableProps.style)}),e.content)}))})),t.placeholder)}))))}}]),t}(r.Component);t.default=function(){return n.a.createElement("div",{className:"m-sm-30"},n.a.createElement("div",{className:"mb-sm-30"},n.a.createElement(b.a,{routeSegments:[{name:"others",path:"/drag-and-drop"},{name:"Drag and Drop"}]})),n.a.createElement(b.j,{title:"Simple List Drag and Drop"},n.a.createElement(g,null)),n.a.createElement("div",{className:"py-3"}),n.a.createElement(b.j,{title:"Simple Horizontal List Drag and Drop"},n.a.createElement(f,null)),n.a.createElement("div",{className:"py-3"}),n.a.createElement(b.j,{title:"Simple Two List Drag and Drop"},n.a.createElement(O,null)))}}}]);
//# sourceMappingURL=26.15818082.chunk.js.map
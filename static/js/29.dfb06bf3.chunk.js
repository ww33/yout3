(this.webpackJsonpyout3=this.webpackJsonpyout3||[]).push([[29],{1722:function(e,a,t){"use strict";t.r(a);var n=t(33),l=t(34),r=t(49),o=t(50),c=t(51),i=t(0),s=t.n(i),m=t(337),p=t(1328),u=t(1411),h=t(1471),d=Object(u.compose)(Object(u.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:s.a.createElement("div",{className:"h-full"}),containerElement:s.a.createElement("div",{className:"h-400"}),mapElement:s.a.createElement("div",{className:"h-full"})}),h.withScriptjs,h.withGoogleMap)((function(e){return s.a.createElement(h.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}})})),E=t(1667),f=Object(u.compose)(Object(u.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:s.a.createElement("div",{className:"h-full"}),containerElement:s.a.createElement("div",{className:"h-400"}),mapElement:s.a.createElement("div",{className:"h-full"})}),h.withScriptjs,h.withGoogleMap)((function(e){return s.a.createElement(h.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}},s.a.createElement(h.Marker,{isMarkerShown:!1,position:{lat:-34.397,lng:150.644},onClick:e.onMarkerClick},s.a.createElement(E.InfoBox,{options:{closeBoxURL:"",enableEventPropagation:!0}},s.a.createElement(p.a,{className:"p-4"},s.a.createElement("p",{className:"whitespace-pre m-0"},"Hello World !!!")))))})),g=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={isMarkerShown:!1},t.delayedShowMarker=function(){t.timer=setTimeout((function(){t.setState({isMarkerShown:!0})}),3e3)},t.handleMarkerClick=function(){t.setState({isMarkerShown:!1}),t.delayedShowMarker()},t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.delayedShowMarker()}},{key:"componentWillUnmount",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"render",value:function(){return s.a.createElement(f,{isMarkerShown:this.state.isMarkerShown,onMarkerClick:this.handleMarkerClick})}}]),a}(s.a.PureComponent),k=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={},t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"m-sm-30"},s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(m.a,{routeSegments:[{name:"Map"}]})),s.a.createElement(p.a,null,s.a.createElement(d,null)),s.a.createElement("div",{className:"py-3"}),s.a.createElement(p.a,null,s.a.createElement(g,null)))}}]),a}(i.Component);a.default=k}}]);
//# sourceMappingURL=29.dfb06bf3.chunk.js.map
(this.webpackJsonpr3f_godrays_effect=this.webpackJsonpr3f_godrays_effect||[]).push([[0],{57:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);n(57);var s=n(1),c=n.n(s),a=n(27),r=n.n(a),i=n(79),o=n(78),j=n(18),u=n(9),b=n(6),l=n(30),f=n(45),d=n(16),O=function(){var e=h(),t=Object(s.useState)(),n=Object(b.a)(t,2),c=n[0],a=n[1],r=Object(j.f)().scene;return Object(s.useEffect)((function(){if(r.userData.refs&&r.userData.refs.lightMesh){var e=r.userData.refs.lightMesh;a(e)}}),[r.userData.refs]),Object(d.jsx)(f.a,{children:Object(d.jsx)(d.Fragment,{children:c&&e.enabled&&Object(d.jsx)(f.b,Object(u.a)({sun:c.current},e))})})},h=function(){return Object(l.a)("godray",{enabled:!0,samples:{value:100,min:10,max:200,step:10},density:{value:.96,min:0,max:1,step:.01},decay:{value:.98,min:0,max:1,step:.01},weight:{value:.3,min:0,max:1,step:.01},exposure:{value:1,min:0,max:1,step:.01},blur:{value:0,min:0,max:1,step:.01}})},x=n(0),g=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ambientLight",{intensity:.1}),Object(d.jsx)(m,{position:[0,3,-5]})]})},m=function(e){var t=e.position,n=p(),c=Object(s.useRef)(),a=Object(j.f)().scene;return Object(s.useEffect)((function(){a.userData.refs||(a.userData.refs={}),a.userData.refs.lightMesh=c}),[a.userData]),Object(s.useEffect)((function(){c.current.lookAt(0,0,0)}),[]),Object(d.jsxs)("mesh",{ref:c,position:t,children:[Object(d.jsx)("circleGeometry",{args:[n.size,64]}),Object(d.jsx)("meshBasicMaterial",{color:n.color,side:x.DoubleSide}),Object(d.jsx)("pointLight",{color:n.color,intensity:1})]})},p=function(){return Object(l.a)("light",{size:{value:4.5,min:.2,max:10,step:.1},color:"#525252"})},v=n(77),w="/r3f-godrays-effect/assets/fallen_angel.glb",y=function(e){var t=Object(l.a)("model",{rotate:!1}),n=Object(s.useRef)(),c=Object(v.a)(w),a=c.nodes,r=c.materials;return r["Low_chapeau1.001"].side=x.FrontSide,Object(j.d)((function(){t.rotate&&(n.current.rotation.y+=.002)})),Object(d.jsx)("group",Object(u.a)(Object(u.a)({ref:n},e),{},{dispose:null,children:Object(d.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Mesh_0001.geometry,material:r["Low_chapeau1.001"]})}))};v.a.preload(w);var D=function(){return Object(d.jsxs)(j.a,{camera:{position:[0,-1.5,3],fov:50,aspect:window.innerWidth/window.innerHeight,near:.1,far:2e3},dpr:window.devicePixelRatio,shadows:!0,children:[Object(d.jsx)("color",{attach:"background",args:["#000"]}),Object(d.jsx)(i.a,{}),Object(d.jsx)(o.a,{}),Object(d.jsx)(g,{}),Object(d.jsx)(s.Suspense,{fallback:null,children:Object(d.jsx)(y,{position:[0,.3,0]})}),Object(d.jsx)(O,{})]})},S=function(){return Object(d.jsx)("div",{style:{width:"100vw",height:"100vh",backgroundColor:"#000"},children:Object(d.jsx)(D,{})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),_()}},[[76,1,2]]]);
//# sourceMappingURL=main.86a142a9.chunk.js.map
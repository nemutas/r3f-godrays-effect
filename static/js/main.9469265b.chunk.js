(this.webpackJsonpr3f_godrays_effect=this.webpackJsonpr3f_godrays_effect||[]).push([[0],{58:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);n(58);var a=n(1),s=n.n(a),c=n(27),r=n.n(c),i=n(81),o=n(80),u=n(17),j=n(9),l=n(6),b=n(30),O=n(45),f=n(16),h=function(){var e=d(),t=Object(a.useState)(),n=Object(l.a)(t,2),s=n[0],c=n[1],r=Object(u.f)().scene;return Object(a.useEffect)((function(){if(r.userData.refs&&r.userData.refs.lightMesh){var e=r.userData.refs.lightMesh;c(e)}}),[r.userData.refs]),Object(f.jsx)(O.a,{children:Object(f.jsx)(f.Fragment,{children:s&&e.enabled&&Object(f.jsx)(O.b,Object(j.a)({sun:s.current},e))})})},d=function(){return Object(b.a)("GodRays",{enabled:!0,samples:{value:100,min:10,max:200,step:10},density:{value:.96,min:0,max:1,step:.01},decay:{value:.98,min:0,max:1,step:.01},weight:{value:.3,min:0,max:1,step:.01},exposure:{value:1,min:0,max:1,step:.01},clampMax:{value:1,min:0,max:1,step:.01},blur:{value:0,min:0,max:1,step:1},kernelSize:{options:{VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},value:1},blendFunction:{options:{SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18},value:16}})},p=n(56),x=n(0),m=n(78),g=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("ambientLight",{intensity:.05}),Object(f.jsx)(E,{position:[0,3,-5]})]})},E=function(e){var t=e.position,n=v(),s=Object(a.useRef)();Object(m.a)(s,x.PointLightHelper,[n.helper?1:0]);var c=Object(a.useRef)(),r=Object(u.f)().scene;return Object(a.useEffect)((function(){r.userData.refs||(r.userData.refs={}),r.userData.refs.lightMesh=c}),[r.userData]),Object(a.useEffect)((function(){c.current.lookAt(0,0,0)}),[]),Object(f.jsxs)("mesh",{ref:c,position:t,children:[Object(f.jsx)("circleGeometry",{args:[n.size,64]}),Object(f.jsx)("meshBasicMaterial",{color:n.color,side:x.DoubleSide}),Object(f.jsx)("pointLight",{ref:s,color:Object(p.a)(n.color).lighten(.5).toHexString(),intensity:1,"shadow-mapSize-width":512,"shadow-mapSize-height":512,castShadow:!0})]})},v=function(){return Object(b.a)("light",{size:{value:4.5,min:.2,max:10,step:.1},color:"#525252",helper:!1})},L=n(79),w="/r3f-godrays-effect/assets/fallen_angel.glb",R=function(e){var t=Object(b.a)("model",{rotate:!1}),n=Object(a.useRef)(),s=Object(L.a)(w),c=s.nodes,r=s.materials;return r["Low_chapeau1.001"].side=x.FrontSide,Object(u.d)((function(){t.rotate&&(n.current.rotation.y+=.002)})),Object(f.jsx)("group",Object(j.a)(Object(j.a)({ref:n},e),{},{dispose:null,children:Object(f.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.Mesh_0001.geometry,material:r["Low_chapeau1.001"]})}))};L.a.preload(w);var S=function(){return Object(f.jsxs)(u.a,{camera:{position:[0,-1.5,3],fov:50,aspect:window.innerWidth/window.innerHeight,near:.1,far:2e3},dpr:window.devicePixelRatio,shadows:!0,children:[Object(f.jsx)("color",{attach:"background",args:["#000"]}),Object(f.jsx)(i.a,{}),Object(f.jsx)(o.a,{}),Object(f.jsx)(g,{}),Object(f.jsx)(a.Suspense,{fallback:null,children:Object(f.jsx)(R,{position:[0,.3,0]})}),Object(f.jsx)(h,{})]})},D=function(){return Object(f.jsx)("div",{style:{width:"100vw",height:"100vh",backgroundColor:"#000"},children:Object(f.jsx)(S,{})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root")),A()}},[[77,1,2]]]);
//# sourceMappingURL=main.9469265b.chunk.js.map
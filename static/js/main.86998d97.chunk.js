(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(6),a=n.n(i),s=n(2),r=n(4),c=n(7),l=n(8),m=n(10),o=n(9),u=n(1),j=n.n(u),h=(n(15),n(5)),b=(n(16),n(0)),d=function(e){var t=e.images,n=e.itemWidth,i=e.frameSize,a=e.step,s=e.animationDuration,r=e.infinite,c=Object(u.useState)(0),l=Object(h.a)(c,2),m=l[0],o=l[1],j=Object(u.useState)(!1),d=Object(h.a)(j,2),p=d[0],g=d[1],O={width:i*n},x={transform:"translateX(".concat(m,"px)"),transition:"".concat(s,"ms")};return Object(b.jsxs)("div",{className:"Carousel",id:"Carousel",children:[Object(b.jsx)("button",{type:"button",className:"arrow",onClick:function(){o((function(e){var t=e+n*a;return g(!1),Math.min(t,0)}))},children:"Prev"}),Object(b.jsx)("button",{type:"button","data-cy":"Next",className:"arrow",onClick:function(){o((function(e){var i=e-n*a,s=-n*(t.length-a);return r&&i===-n*t.length?i=0:(r||g(s>=i),Math.max(i,s))}))},disabled:p,children:"Next"}),Object(b.jsx)("div",{id:"viewport",style:O,className:"viewport",children:Object(b.jsx)("ul",{className:"Carousel__list",children:t.map((function(e){return Object(b.jsx)("li",{className:"Carousel__item",children:Object(b.jsx)("img",{src:e,width:n,style:x,alt:"1"})},e)}))})})]})},p=function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1},e.handle=function(t){var n=t.target,i=n.name,a=n.value;e.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},i,a))}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.itemWidth,i=e.frameSize,a=e.step,s=e.animationDuration,r=e.infinite;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{"data-cy":"title",children:["Carousel width ",t.length," images"]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("label",{htmlFor:"itemWidth",children:"Please enter ItemWidth: "}),Object(b.jsx)("input",{className:"input",name:"itemWidth",min:100,max:200,type:"number",id:"itemWidth",value:n,onChange:this.handle}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"frameSize",children:"Please enter FrameSize: "}),Object(b.jsx)("input",{className:"input",name:"frameSize",type:"text",id:"frameSize",value:i,onChange:this.handle}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"step",children:"Please enter step: "}),Object(b.jsx)("input",{className:"input",name:"step",type:"text",id:"step",value:a,onChange:this.handle}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{htmlFor:"animationDuration",children:["Please enter animationDuration:"," "]}),Object(b.jsx)("input",{className:"input",name:"animationDuration",type:"text",id:"animationDuration",value:s,onChange:this.handle}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"animationDuration",children:"Infinite: "}),Object(b.jsx)("input",{className:"input",name:"infinite",type:"checkbox",id:"infinite",onChange:this.handle}),Object(b.jsx)(d,{images:t,itemWidth:n,frameSize:i,step:a,animationDuration:s,infinite:r})]})]})}}]),n}(j.a.Component),g=p;a.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.86998d97.chunk.js.map
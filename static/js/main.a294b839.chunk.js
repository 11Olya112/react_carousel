(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(3),a=n.n(i),r=n(4),s=n(5),c=n(8),o=n(6),l=n(1),m=n.n(l),u=(n(13),n(7)),j=(n(14),n(0)),h=function(t){var e=t.images,n=t.itemWidth,i=t.frameSize,a=t.step,r=t.animationDuration,s=t.infinite,c=Object(l.useState)(0),o=Object(u.a)(c,2),m=o[0],h=o[1],b={width:i*n},p={transform:"translateX(".concat(m,"px)"),transition:"".concat(r,"ms")};return Object(j.jsxs)("div",{className:"Carousel",id:"Carousel",children:[Object(j.jsx)("button",{type:"button",className:"arrow",onClick:function(){h((function(t){var i=t+n*a;return s&&0===i?i=-n*(e.length-1):Math.min(i,0)}))},children:"Prev"}),Object(j.jsx)("button",{type:"button","data-cy":"Next",className:"arrow",onClick:function(){h((function(t){var i=t-n*a,r=-n*(e.length-1);return s&&i===r?i=0:Math.max(i,r)}))},children:"Next"}),Object(j.jsx)("div",{id:"viewport",style:b,children:Object(j.jsx)("ul",{className:"Carousel__list",children:e.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)("img",{src:t,width:n,style:p,alt:"1"})},t)}))})})]})},b=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,i=e.itemWidth,a=e.frameSize,r=e.step,s=e.animationDuration,c=e.infinite;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{"data-cy":"title",children:["Carousel width ",n.length," images"]}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("label",{htmlFor:"itemWidth",children:"Please enter ItemWidth: "}),Object(j.jsx)("input",{min:100,max:200,step:10,type:"text",id:"itemWidth",value:i,onChange:function(e){t.setState({itemWidth:+e.target.value})}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"frameSize",children:"Please enter FrameSize: "}),Object(j.jsx)("input",{type:"text",id:"frameSize",value:a,onChange:function(e){t.setState({frameSize:+e.target.value})}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"step",children:"Please enter step: "}),Object(j.jsx)("input",{type:"text",id:"step",value:r,onChange:function(e){t.setState({step:+e.target.value})}}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{htmlFor:"animationDuration",children:["Please enter animationDuration:"," "]}),Object(j.jsx)("input",{type:"text",id:"animationDuration",value:s,onChange:function(e){t.setState({animationDuration:+e.target.value})}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"animationDuration",children:"Infinite: "}),Object(j.jsx)("input",{type:"checkbox",id:"infinite",onChange:function(){t.setState({infinite:!0})}}),Object(j.jsx)(h,{images:n,itemWidth:i,frameSize:a,step:r,animationDuration:s,infinite:c})]})]})}}]),n}(m.a.Component),p=b;a.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a294b839.chunk.js.map
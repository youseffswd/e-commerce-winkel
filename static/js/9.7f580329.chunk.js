(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[9],{54:function(e,t,a){"use strict";var n=a(1),l=a.n(n),c=a(5),r=a(55),s=a.n(r);t.a=function(e){var t=e.title,a=e.section;return l.a.createElement("div",{style:{backgroundImage:"url(".concat(s.a,")")},className:"header-img"},l.a.createElement("h6",null,l.a.createElement(c.a,{to:"/e-commerce-winkel"},"Home")," ",a," "),l.a.createElement("h2",null,t))}},55:function(e,t,a){e.exports=a.p+"static/media/bg_6.1c20997e.jpg"},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c}));var n=a(28),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.a.push("/cart"),{type:"ADD_TO_CART",payload:e}},c=function(e){return{type:"DELETE_ITEM",payload:e}}},90:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(24),r=a(25),s=a(27),m=a(26),o=a(54),i=a(17),u=a(49),g=a(50),p=a(51),d=a(70),E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{section:"Cart",title:"My Cart"}),l.a.createElement("div",{className:"cart-component"},l.a.createElement(u.a,null,l.a.createElement(g.a,{className:" cartNav mb-4 p-3 text-center"},l.a.createElement(p.a,{className:"d-none d-lg-block",lg:"1"}),l.a.createElement(p.a,{className:"d-none d-lg-block",lg:"2"}),l.a.createElement(p.a,{xs:"12",lg:"3"},"Product"),l.a.createElement(p.a,{className:"d-none d-lg-block",lg:"1"},"Price"),l.a.createElement(p.a,{className:"d-none d-lg-block",lg:"3"},"Pieces"),l.a.createElement(p.a,{className:"d-none d-lg-block",lg:"1"},"Total")),this.props.items.map((function(t){var a=t.id;return l.a.createElement(g.a,{key:a,className:"px-md-5 px-lg-0 flex-column flex-lg-row align-items-center cart-item mb-4 p-3 text-center"},l.a.createElement(p.a,{className:"mb-4",xs:"12",lg:"1"},l.a.createElement("button",{onClick:function(){console.log(a),e.props.deleteItem(a)},className:"close"},"\xd7")),l.a.createElement(p.a,{className:"mb-4 px-md-5 px-lg-3",xs:"12",lg:"2"},l.a.createElement("img",{alt:"cart",className:"img-fluid",src:t.img})),l.a.createElement(p.a,{className:"mb-4 product-info text-center",xs:"12",lg:"5"},l.a.createElement("h4",null,t.title),l.a.createElement("p",null,t.firstDesc)),l.a.createElement(p.a,{className:"mb-4",xs:"12",lg:"1"},t.price),l.a.createElement(p.a,{className:"mb-4",xs:"12",lg:"1"},t.pieces),l.a.createElement(p.a,{className:"mb-4",xs:"12",lg:"1"},"$",t.total))})))))}}]),a}(l.a.Component),b=Object(i.b)((function(e){return{items:e.data}}),{deleteItem:d.b})(E);t.default=function(){return console.clear(),l.a.createElement(b,null)}}}]);
//# sourceMappingURL=9.7f580329.chunk.js.map
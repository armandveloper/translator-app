(this["webpackJsonptranslate-app"]=this["webpackJsonptranslate-app"]||[]).push([[0],{23:function(t,n,e){"use strict";e.r(n);var r,c,i=e(1),o=e.n(i),a=e(8),s=e.n(a),l=e(2),d=e(3),b=Object(d.a)(r||(r=Object(l.a)(["\n  :root {\n    --color-bg: #121212;\n    --color-bg-3:#424242;\n    --color-text: #fff;\n    --color-primary: #5290f5;\n  }\n  html {\n    box-sizing: border-box;\n    font-size: 62.5%;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n  body {\n    background-color: var(--color-bg);\n    color: var(--color-text);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 1.6rem;\n    line-height: 1.4;\n    margin: 0;\n  }\n"]))),j=e(0),h=d.c.label(c||(c=Object(l.a)(["\n\tbackground-color: #525252;\n\tborder-radius: 1rem;\n\twidth: 6rem;\n\theight: 2rem;\n\tpadding: 0.2rem;\n\t.switch-thumb {\n\t\tbackground-color: #fff;\n\t\tborder-radius: 50%;\n\t\tdisplay: block;\n\t\theight: 1.6rem;\n\t\twidth: 1.6rem;\n\t\ttransition: transform 0.3s ease-in;\n\t}\n\tinput[type='checkbox'] {\n\t\tdisplay: none;\n\t}\n\tinput[type='checkbox']:checked ~ .switch-thumb {\n\t\ttransform: translate3d(4rem, 0, 0);\n\t}\n"])));var u,m,g,x=function(){return Object(j.jsxs)(h,{children:[Object(j.jsx)("input",{type:"checkbox"}),Object(j.jsx)("span",{className:"switch-thumb"})]})},p=d.c.div(u||(u=Object(l.a)(["\n\tmax-width: 124rem;\n\tmargin: 0 auto;\n\tpadding: 0 2rem;\n\twidth: 100%;\n"]))),O=d.c.h1(m||(m=Object(l.a)(["\n\tcursor: default;\n\tfont-size: 3rem;\n\tfont-weight: 500;\n"]))),f=d.c.div(g||(g=Object(l.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n"])));var v,y,w,k,S=function(){return Object(j.jsx)("header",{children:Object(j.jsx)(p,{children:Object(j.jsxs)(f,{children:[Object(j.jsx)(O,{children:"Translate"}),Object(j.jsx)(x,{})]})})})},z=e(13),F=d.c.div(v||(v=Object(l.a)(["\n\tgrid-column: 1 / -1;\n\tdisplay: flex;\n\tmargin-bottom: 3rem;\n\tpadding: 0 2rem;\n\tbox-shadow: 0 0 5px 2px #424242;\n\tborder-radius: 10rem;\n"]))),C=d.c.ul(y||(y=Object(l.a)(["\n\tflex: 1;\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: flex;\n\t&:last-of-type {\n\t\tjustify-content: flex-end;\n\t}\n"]))),L=d.c.li(w||(w=Object(l.a)(["\n\tcursor: pointer;\n\tpadding: 0.8rem 1.5rem;\n\ttext-align: center;\n\tuser-select: none;\n\ttransition: background-color 0.3s ease;\n\tdisplay: inline-flex;\n\talign-items: center;\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-bg-3);\n\t}\n\t&.selected {\n\t\tborder-bottom: 3px solid var(--color-primary);\n\t}\n"]))),B=d.c.button(k||(k=Object(l.a)(["\n\tbackground-color: var(--color-primary);\n\tborder: none;\n\tborder-radius: 50%;\n\tcolor: #fff;\n\tcursor: pointer;\n\theight: 5rem;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 5rem;\n\t/* position: relative;\n\ttop: -2rem; */\n"])));var E,I,N,T=function(){return Object(j.jsxs)(F,{children:[Object(j.jsxs)(C,{children:[Object(j.jsx)(L,{className:"selected",children:"Detect Language"}),Object(j.jsx)(L,{children:"English"}),Object(j.jsx)(L,{children:"Spanish"})]}),Object(j.jsx)(B,{title:"Swap Language",children:Object(j.jsx)(z.a,{color:"currentColor",size:"28"})}),Object(j.jsxs)(C,{children:[Object(j.jsx)(L,{children:"English"}),Object(j.jsx)(L,{children:"Spanish"})]})]})},D=e(12),H=Object(d.b)(E||(E=Object(l.a)(["\n\tborder-radius: 2.5rem;\n\tbox-shadow: 0 0 5px 2px #424242;\n\theight: auto;\n\tpadding: 2rem;\n"]))),J=d.c.div(I||(I=Object(l.a)(["\n\t",";\n"])),H),M=d.c.textarea(N||(N=Object(l.a)(["\n\tbackground: none;\n\tcolor: var(--color-text);\n\tdisplay: block;\n\tfont-family: inherit;\n\tfont-size: 1.6rem;\n\tline-height: 1.6;\n\tmin-height: 17rem;\n\theight: auto;\n\tresize: none;\n\toverflow: hidden;\n\tpadding-bottom: 2rem;\n\twidth: 100%;\n\t&:focus {\n\t\toutline: none;\n\t}\n"])));var P,R,U=function(){var t,n=Object(i.useState)(""),e=Object(D.a)(n,2),r=e[0],c=e[1],o=Object(i.useRef)(null);return Object(j.jsx)(J,{children:Object(j.jsx)(M,{value:r,onChange:function(t){var n=t.target;return c(n.value)},ref:o,style:{height:"".concat(null===(t=o.current)||void 0===t?void 0:t.scrollHeight,"px")}})})},q=d.c.main(P||(P=Object(l.a)(["\n\tmargin-top: 4em;\n"]))),A=d.c.div(R||(R=Object(l.a)(["\n\tdisplay: grid;\n\tgap: 2rem;\n\t@media (min-width: 56.25em) {\n\t\tgap: 0;\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n"])));var G=function(){return Object(j.jsx)(q,{children:Object(j.jsx)(p,{children:Object(j.jsxs)(A,{children:[Object(j.jsx)(T,{}),Object(j.jsx)(U,{}),Object(j.jsx)(U,{})]})})})};var K=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S,{}),Object(j.jsx)(G,{})]})};var Q=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(K,{})]})},V=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;e(t),r(t),c(t),i(t),o(t)}))};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root")),V()}},[[23,1,2]]]);
//# sourceMappingURL=main.ee65ef98.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(n(2)),r=y(n(67)),l=y(n(42)),o=(0,r.default)(["\n  height: 100px;\n  width: 100%;\n  border-radius: 2px 2px 0 0;\n  transition: all 0.1s ease;\n"],["\n  height: 100px;\n  width: 100%;\n  border-radius: 2px 2px 0 0;\n  transition: all 0.1s ease;\n"]),i=(0,r.default)(["\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  font-family: inherit;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  text-align: left;\n  background-color: transparent;\n  border: 0;\n  border-radius: 0;\n  appearance: none;\n  transition: all 0.125s ease;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);\n\n  &:hover {\n    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.08),\n      0 16px 16px 0 rgba(0, 0, 0, 0.08);\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n\n  & > span {\n    top: 0;\n    left: 0;\n    position: absolute;\n    font-size: 12px;\n    padding: 8px 0;\n    width: 100%;\n    color: #fff;\n    border-radius: 2px 2px 0 0;\n    background-color: #001833;\n    text-align: center;\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: 0.125s;\n    transition-timing-function: ease-out;\n  }\n\n  &:hover > span {\n    opacity: 1;\n  }\n"],["\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  font-family: inherit;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  text-align: left;\n  background-color: transparent;\n  border: 0;\n  border-radius: 0;\n  appearance: none;\n  transition: all 0.125s ease;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08);\n\n  &:hover {\n    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.08),\n      0 16px 16px 0 rgba(0, 0, 0, 0.08);\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n\n  & > span {\n    top: 0;\n    left: 0;\n    position: absolute;\n    font-size: 12px;\n    padding: 8px 0;\n    width: 100%;\n    color: #fff;\n    border-radius: 2px 2px 0 0;\n    background-color: #001833;\n    text-align: center;\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: 0.125s;\n    transition-timing-function: ease-out;\n  }\n\n  &:hover > span {\n    opacity: 1;\n  }\n"]),u=y(n(1)),d=y(n(4)),c=n(54),f=y(n(329)),s=y(n(331)),p=y(n(330)),m=y(n(580)),b=y(n(332));function y(e){return e&&e.__esModule?e:{default:e}}var x=(0,l.default)(c.theme.colors).filter(function(e){return!/[0-9]$/.test(e)}).map(function(e){return{name:e,value:c.theme.colors[e]}}).filter(function(e){return!Array.isArray(e.value)}),g=x.filter(function(e){return!/^(lightGray|gray|borderGray|darkGray)$/.test(e.name)}),h=x.filter(function(e){return/^(lightGray|gray|borderGray|darkGray)$/.test(e.name)}),v=(0,d.default)(c.Box)(o),E=d.default.button(i),_=function(e){var t=e.name,n=e.value;return u.default.createElement(c.Card,{borderWidth:0,m:0},u.default.createElement(m.default,{text:n},u.default.createElement(E,null,u.default.createElement(v,{bg:n}),u.default.createElement("span",null,"Press to copy"),u.default.createElement(c.Box,{p:2},u.default.createElement(c.Text,{fontSize:1,mb:1,align:"left"},t),u.default.createElement(p.default,{fontSize:1,align:"left",color:"gray"},n)))))},w=function(e){return u.default.createElement(c.Box,(0,a.default)({},e,{width:[.5,null,1/3,.25,1/6],mb:4,px:2}))},k=function(e){return e.colors.map(function(e){return u.default.createElement(w,{key:e.key},u.default.createElement(_,e))})};t.default=function(e){return u.default.createElement(c.Box,null,u.default.createElement(f.default,null,"Color"),u.default.createElement(s.default,null,"The design system includes a color palette of several primary colors, along with light and dark variations."),u.default.createElement(c.Flex,{wrap:!0,mx:-2,pt:4},u.default.createElement(k,{colors:g}),u.default.createElement(k,{colors:h})),u.default.createElement(b.default,e))}},329:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(2)),r=o(n(1)),l=n(54);function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(l.Heading.h1,(0,a.default)({fontSize:5,bold:!0,mt:[2,5],mb:3},e))}},330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(0,o(n(67)).default)(["\n  font-family: 'Roboto Mono', monospace;\n  "," ",";\n"],["\n  font-family: 'Roboto Mono', monospace;\n  "," ",";\n"]),r=o(n(4)),l=n(9);function o(e){return e&&e.__esModule?e:{default:e}}var i=r.default.code(a,l.color,l.fontSize);i.defaultProps={fontSize:2,color:"blue"},t.default=i},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(2)),r=o(n(1)),l=n(54);function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(l.Text,(0,a.default)({fontSize:[2,3],mb:3,color:"gray"},e))}},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(1)),r=n(54),l=o(n(333));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.index,n=e.pages,o=n[t-1],i=n[t+1];return a.default.createElement(r.Flex,{p:3,my:5,bg:"lightGray",style:{borderRadius:"2px"}},o&&a.default.createElement(l.default,{to:"/"+o.name},a.default.createElement(r.Icon,{name:"chevronLeft",size:48,color:"blue",legacy:!1,mr:2,style:{verticalAlign:"middle"}}),a.default.createElement(r.Text,{fontSize:3,color:"blue",style:{display:"inline-block",verticalAlign:"middle"}},a.default.createElement("b",null,"Previous:")," ",o.name)),a.default.createElement(r.Box,{ml:"auto"}),i&&a.default.createElement(l.default,{to:"/"+i.name},a.default.createElement(r.Text,{fontSize:3,color:"blue",style:{display:"inline-block",verticalAlign:"middle"}},a.default.createElement("b",null,"Next:")," ",i.name),a.default.createElement(r.Icon,{name:"chevronRight",size:48,color:"blue",legacy:!1,ml:2,style:{verticalAlign:"middle"}})))}},333:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(n(1));var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(54)),r=n(68);var l=a.Link.withComponent(r.Link);t.default=l},580:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(55)),r=c(n(7)),l=c(n(16)),o=c(n(5)),i=c(n(8)),u=c(n(1)),d=c(n(581));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){(0,r.default)(this,t);var e=(0,o.default)(this,(t.__proto__||(0,a.default)(t)).call(this));return e.handleClick=function(t){(0,d.default)(e.ghost),document.execCommand("copy")},e}return(0,i.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=u.default.Children.only(this.props.children);return[u.default.cloneElement(t,{onClick:this.handleClick}),u.default.createElement("div",{ref:function(t){return e.ghost=t},children:this.props.text,style:{position:"absolute",zIndex:-1,opacity:0}})]}}]),t}(u.default.Component);t.default=f},581:function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var a=window.getSelection(),r=document.createRange();r.selectNodeContents(e),a.removeAllRanges(),a.addRange(r),t=a.toString()}return t}}}]);
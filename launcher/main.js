(this["webpackJsonphello-react-native-custom-renderer"]=this["webpackJsonphello-react-native-custom-renderer"]||[]).push([[0],{13:function(t,e,n){t.exports=n(27)},27:function(t,e,n){"use strict";n.r(e);var i=n(2),a=n(3),o=n(5),r=n(0),u=n(9),s=n(6),l=n(4),c=n.n(l),h=n(7);function d(t){var e=t.item.name,n=t.selected;return c.a.createElement("text",null,"".concat(n?"[-]":"[ ]"," ").concat(e))}var p=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,u=new Array(a),s=0;s<a;s++)u[s]=arguments[s];return(n=Object(o.a)(this,(t=Object(r.a)(e)).call.apply(t,[this].concat(u)))).state={items:[],selected:0},n}return Object(s.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){var t=this;!function(){var t=this;fetch("https://raw.githubusercontent.com/ericlewis/braclet/master/apps.json").then((function(e){e.json?e.json().then((function(e){return t.setState(Object(h.a)({},t.state,{items:e}))})):t.setState(Object(h.a)({},t.state,{items:JSON.parse(e)}))}))}(),window.buttonPressed=function(e){switch(e){case 1:return t.setState(Object(h.a)({},t.state,{selected:Math.max(t.state.selected-1,0)}));case 2:return loadApp(items[t.state.selected].name);case 3:return t.setState(Object(h.a)({},t.state,{selected:Math.min(t.state.selected+1,Math.max(t.state.items.length-1,0))}))}}}},{key:"render",value:function(){var t=this;return c.a.createElement("view",null,0===this.state.items.length?c.a.createElement("text",null,"Loading..."):c.a.createElement("text",null,"App"),this.state.items.map((function(e,n){return c.a.createElement(d,{key:n,item:e,selected:n===t.state.selected})})))}}]),e}(c.a.Component),f=n(11),y=n.n(f),g=n(12),m=n(1),v=n.n(m),C=v.a.Config.create();C.setPointScaleFactor(0);var b=function(){function t(e){Object(i.a)(this,t),this.parent=null,this.children=[],this.computed=!1,this.layout=v.a.Node.createWithConfig(C),this.props=e,e&&e.style&&this.setStyle(e.style)}return Object(a.a)(t,[{key:"markDirty",value:function(){return this.layout.markDirty()}},{key:"setStyle",value:function(t){t.x&&this.layout.setPosition(v.a.EDGE_LEFT,t.x),t.y&&this.layout.setPosition(v.a.EDGE_TOP,t.y),t.height&&this.layout.setHeight(t.height),t.width&&this.layout.setWidth(t.width),t.paddingLeft&&this.layout.setPadding(v.a.EDGE_LEFT,t.paddingLeft),t.paddingRight&&this.layout.setPadding(v.a.EDGE_RIGHT,t.paddingRight),t.paddingTop&&this.layout.setPadding(v.a.EDGE_TOP,t.paddingTop),t.paddingBottom&&this.layout.setPadding(v.a.EDGE_BOTTOM,t.paddingBottom),t.flex&&this.layout.setFlex(t.flex),t.justifyContent&&this.layout.setJustifyContent(t.justifyContent),t.alignContent&&this.layout.setAlignContent(t.alignContent),t.alignItems&&this.layout.setAlignItems(t.alignItems),t.flexDirection&&this.layout.setFlexDirection(t.flexDirection)}},{key:"appendChild",value:function(t){t&&(t.parent=this,this.children.push(t),this.layout.insertChild(t.layout,this.layout.getChildCount()))}},{key:"appendChildBefore",value:function(t,e){var n=this.children.indexOf(e);-1!==n&&t&&(t.parent=this,this.children.splice(n,0,t),this.layout.insertChild(t.layout,n))}},{key:"removeChild",value:function(t){var e=this.children.indexOf(t);-1!==e&&(t.parent=null,this.children.splice(e,1),this.layout.removeChild(t.layout)),t.cleanup()}},{key:"removeAllChildren",value:function(){for(var t=Object(g.a)(this.children),e=0;e<t.length;e++)t[e].remove()}},{key:"remove",value:function(){this.parent.removeChild(this)}},{key:"cleanup",value:function(){this.children.forEach((function(t){return t.cleanup()})),this.layout.unsetMeasureFunc(),v.a.Node.destroy(this.layout)}},{key:"render",value:function(t){return this.children.flatMap((function(e){return e.render(t)})).join("")}},{key:"update",value:function(t){this.props=t,t&&t.style&&this.setStyle(t.style)}},{key:"getLayoutData",value:function(){var t=this.getAbsoluteLayout();return{type:this.name,top:t.top,left:t.left,width:t.width,style:this.style,height:t.height,children:this.children.map((function(t){return t.getLayoutData()}))}}},{key:"calculateLayout",value:function(){this.layout.calculateLayout(240,240,v.a.DIRECTION_LTR),this.computed=!0}},{key:"getAbsoluteLayout",value:function(){var t=this.parent,e=t&&t.getAbsoluteLayout?t.getAbsoluteLayout():{left:0,top:0};return{left:this.left+e.left,top:this.top+e.top,height:this.height,width:this.width}}},{key:"top",get:function(){return this.layout.getComputedTop()||0}},{key:"left",get:function(){return this.layout.getComputedLeft()||0}},{key:"right",get:function(){return this.layout.getComputedRight()||0}},{key:"bottom",get:function(){return this.layout.getComputedBottom()||0}},{key:"width",get:function(){return this.layout.getComputedWidth()}},{key:"minWidth",get:function(){return this.layout.getMinWidth().value}},{key:"maxWidth",get:function(){return this.layout.getMaxWidth().value}},{key:"height",get:function(){return this.layout.getComputedHeight()}},{key:"minHeight",get:function(){return this.layout.getMinHeight().value}},{key:"maxHeight",get:function(){return this.layout.getMaxHeight().value}}]),t}(),O=function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(t){this.calculateLayout();var n="";return this.props.style&&(this.props.style.font&&(n+=".f(`".concat(this.props.style.font,"`)")),this.props.style.color&&(n+=".c(`".concat(this.props.style.color,"`)"))),n+Object(u.a)(Object(r.a)(e.prototype),"render",this).call(this,t)}}]),e}(b),k=n(8),j=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(o.a)(this,Object(r.a)(e).call(this,t))).text=void 0,n.text=t.text,n.layout.setMeasureFunc(n.measureText.bind(Object(k.a)(n))),n}return Object(s.a)(e,t),Object(a.a)(e,[{key:"measureText",value:function(t,e,n,i){return{height:16,width:8*(this.text||this.props.children).length*2}}},{key:"update",value:function(t){var e=t.children;this.text=e}},{key:"appendChild",value:function(t){t&&(t.parent=this,this.children.push(t),this.markDirty())}},{key:"removeChild",value:function(t){var e=this.children.indexOf(t);-1!==e&&(t.parent=null,this.children.splice(e,1),this.markDirty(),t.cleanup())}},{key:"render",value:function(){return".s(`".concat(this.text||this.props.children,"`, ").concat(this.left,", ").concat(this.top,")")}}]),e}(b),x={},w={now:Date.now,getRootHostContext:function(){return x},getChildHostContext:function(){return x},createInstance:function(t,e,n,i,a){return"text"===t?new j(e):new O(e)},createTextInstance:function(t,e,n,i){return new j({text:t})},finalizeInitialChildren:function(t,e,n){return!1},prepareForCommit:function(){},prepareUpdate:function(t,e,n){return{}},resetAfterCommit:function(t){t.render()},shouldSetTextContent:function(t,e){return!1},supportsMutation:!0,appendInitialChild:function(t,e){t.appendChild(e)},appendChild:function(t,e){t.appendChild(e)},appendChildToContainer:function(t,e){t.appendChild(e)},insertBefore:function(t,e,n){t.appendChildBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},removeChildFromContainer:function(t,e){t.removeChild(e)},commitTextUpdate:function(t,e,n){t.update(n)},commitUpdate:function(t,e,n,i,a){t.update(a)}},E=y()(w),T=function(t,e,n){return e._rootContainer||(e._rootContainer=E.createContainer(e,!1)),E.updateContainer(t,e._rootContainer,null,n)},D=function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t='d=()=>{g.q().c(65535).f("6x8", 2)'.concat(Object(u.a)(Object(r.a)(e.prototype),"render",this).call(this),".flip()}p=(i)=>()=>{d()Bluetooth.println(E.toJS({b:i}))}cw()sw(p(1),BTN1,re)sw(p(2),BTN2,re)sw(p(3),BTN3,re)sw(p(4),BTN4,re)sw(p(5),BTN5,re)d()");console.log(t),UIManager.flush(t)}}]),e}(b);T(c.a.createElement(p,null),new D)}},[[13,1,2]]]);
//# sourceMappingURL=main.bc4ef309.chunk.js.map
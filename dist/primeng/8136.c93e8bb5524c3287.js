"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[8136],{1254:(C,u,l)=>{l.d(u,{s:()=>D,Q:()=>a});var t=l(3668),s=l(6019),e=l(3392),Z=l(5989),c=l(9814),f=l(1197);function r(i,o){if(1&i&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&i){const n=t.oxw(2);t.uIk("id",n.id+"_header"),t.xp6(1),t.Oqu(n.header)}}function d(i,o){1&i&&t.GkF(0)}function g(i,o){}function _(i,o){1&i&&t.YNc(0,g,0,0,"ng-template")}function T(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(m){return t.CHM(n),t.oxw(2).onIconClick(m)})("keydown.enter",function(m){return t.CHM(n),t.oxw(2).onIconClick(m)}),t._UZ(1,"span"),t.qZA()}if(2&i){const n=t.oxw(2);t.uIk("id",n.id+"-label")("aria-controls",n.id+"-content")("aria-expanded",!n.collapsed),t.xp6(1),t.Tol(n.collapsed?n.expandIcon:n.collapseIcon)}}function y(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(m){return t.CHM(n),t.oxw().onHeaderClick(m)}),t.YNc(1,r,2,2,"span",7),t.Hsn(2,1),t.YNc(3,d,1,0,"ng-container",4),t.TgZ(4,"div",8),t.YNc(5,_,1,0,void 0,4),t.YNc(6,T,2,5,"button",9),t.qZA(),t.qZA()}if(2&i){const n=t.oxw();t.uIk("id",n.id+"-titlebar"),t.xp6(1),t.Q6J("ngIf",n.header),t.xp6(2),t.Q6J("ngTemplateOutlet",n.headerTemplate),t.xp6(2),t.Q6J("ngTemplateOutlet",n.iconTemplate),t.xp6(1),t.Q6J("ngIf",n.toggleable)}}function b(i,o){1&i&&t.GkF(0)}function A(i,o){1&i&&t.GkF(0)}function v(i,o){if(1&i&&(t.TgZ(0,"div",12),t.Hsn(1,2),t.YNc(2,A,1,0,"ng-container",4),t.qZA()),2&i){const n=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",n.footerTemplate)}}const q=["*",[["p-header"]],[["p-footer"]]],U=function(i){return{"p-panel p-component":!0,"p-panel-toggleable":i}},x=function(i){return{transitionParams:i,height:"0",opacity:"0"}},w=function(i){return{value:"hidden",params:i}},I=function(i){return{transitionParams:i,height:"*",opacity:"1"}},P=function(i){return{value:"visible",params:i}},k=["*","p-header","p-footer"];let M=0,D=(()=>{class i{constructor(n){this.el=n,this.collapsed=!1,this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new t.vpe,this.onBeforeToggle=new t.vpe,this.onAfterToggle=new t.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+M++}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"header":this.headerTemplate=n.template;break;default:this.contentTemplate=n.template;break;case"footer":this.footerTemplate=n.template;break;case"icons":this.iconTemplate=n.template}})}onHeaderClick(n){"header"===this.toggler&&this.toggle(n)}onIconClick(n){"icon"===this.toggler&&this.toggle(n)}toggle(n){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:n,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(n):this.collapse(n)),n.preventDefault()}expand(n){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(n){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(n){this.animating=!1,this.onAfterToggle.emit({originalEvent:n,collapsed:this.collapsed})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(t.SBq))},i.\u0275cmp=t.Xpm({type:i,selectors:[["p-panel"]],contentQueries:function(n,p,m){if(1&n&&(t.Suo(m,e.$_,5),t.Suo(m,e.jx,4)),2&n){let h;t.iGM(h=t.CRH())&&(p.footerFacet=h.first),t.iGM(h=t.CRH())&&(p.templates=h)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:k,decls:7,vars:22,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],[1,"p-panel-icons"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(n,p){1&n&&(t.F$t(q),t.TgZ(0,"div",0),t.YNc(1,y,7,5,"div",1),t.TgZ(2,"div",2),t.NdJ("@panelContent.done",function(h){return p.onToggleDone(h)}),t.TgZ(3,"div",3),t.Hsn(4),t.YNc(5,b,1,0,"ng-container",4),t.qZA(),t.YNc(6,v,3,1,"div",5),t.qZA(),t.qZA()),2&n&&(t.Tol(p.styleClass),t.Q6J("ngClass",t.VKq(12,U,p.toggleable))("ngStyle",p.style),t.uIk("id",p.id),t.xp6(1),t.Q6J("ngIf",p.showHeader),t.xp6(1),t.Q6J("@panelContent",p.collapsed?t.VKq(16,w,t.VKq(14,x,p.animating?p.transitionOptions:"0ms")):t.VKq(20,P,t.VKq(18,I,p.animating?p.transitionOptions:"0ms"))),t.uIk("id",p.id+"-content")("aria-hidden",p.collapsed)("aria-labelledby",p.id+"-titlebar"),t.xp6(3),t.Q6J("ngTemplateOutlet",p.contentTemplate),t.xp6(1),t.Q6J("ngIf",p.footerFacet||p.footerTemplate))},directives:[s.mk,s.PC,s.O5,s.tP,f.H],styles:[".p-panel-header{display:flex;justify-content:space-between;align-items:center}.p-panel-title{line-height:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}\n"],encapsulation:2,data:{animation:[(0,c.X$)("panelContent",[(0,c.SB)("hidden",(0,c.oB)({height:"0",overflow:"hidden"})),(0,c.SB)("void",(0,c.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,c.SB)("visible",(0,c.oB)({height:"*"})),(0,c.eR)("visible <=> hidden",[(0,c.oB)({overflow:"hidden"}),(0,c.jt)("{{transitionParams}}")]),(0,c.eR)("void => hidden",(0,c.jt)("{{transitionParams}}")),(0,c.eR)("void => visible",(0,c.jt)("{{transitionParams}}"))])]},changeDetection:0}),i})(),a=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[s.ez,e.m8,Z.T],e.m8]}),i})()},2239:(C,u,l)=>{l.d(u,{Q:()=>t.Q});var t=l(1254)},7290:(C,u,l)=>{l.d(u,{h:()=>c,a:()=>f});var t=l(6019),s=l(3668);const e=["code"],Z=["*"];let c=(()=>{class r{constructor(g){this.el=g,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return r.\u0275fac=function(g){return new(g||r)(s.Y36(s.SBq))},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-code"]],viewQuery:function(g,_){if(1&g&&s.Gf(e,5),2&g){let T;s.iGM(T=s.CRH())&&(_.codeViewChild=T.first)}},inputs:{lang:"lang"},ngContentSelectors:Z,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(g,_){1&g&&(s.F$t(),s.TgZ(0,"pre",0),s.TgZ(1,"code",null,1),s.Hsn(3),s._uU(4,"\n"),s.qZA(),s.qZA()),2&g&&s.Q6J("ngClass","language-"+_.lang)},directives:[t.mk],encapsulation:2}),r})(),f=(()=>{class r{}return r.\u0275fac=function(g){return new(g||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[t.ez]]}),r})()},8136:(C,u,l)=>{l.r(u),l.d(u,{ChipDemoModule:()=>D});var t=l(6019),s=l(1120),e=l(3668),Z=l(2060);function c(a,i){if(1&a&&e._UZ(0,"img",6),2&a){const o=e.oxw(2);e.Q6J("src",o.image,e.LSH)}}function f(a,i){if(1&a&&e._UZ(0,"span",8),2&a){const o=e.oxw(3);e.Tol(o.icon),e.Q6J("ngClass","p-chip-icon")}}function r(a,i){if(1&a&&e.YNc(0,f,1,3,"span",7),2&a){const o=e.oxw(2);e.Q6J("ngIf",o.icon)}}function d(a,i){if(1&a&&(e.TgZ(0,"div",9),e._uU(1),e.qZA()),2&a){const o=e.oxw(2);e.xp6(1),e.Oqu(o.label)}}function g(a,i){if(1&a){const o=e.EpF();e.TgZ(0,"span",10),e.NdJ("click",function(p){return e.CHM(o),e.oxw(2).close(p)})("keydown.enter",function(p){return e.CHM(o),e.oxw(2).close(p)}),e.qZA()}if(2&a){const o=e.oxw(2);e.Tol(o.removeIcon),e.Q6J("ngClass","pi-chip-remove-icon")}}function _(a,i){if(1&a&&(e.TgZ(0,"div",1),e.Hsn(1),e.YNc(2,c,1,1,"img",2),e.YNc(3,r,1,1,"ng-template",null,3,e.W1O),e.YNc(5,d,2,1,"div",4),e.YNc(6,g,1,3,"span",5),e.qZA()),2&a){const o=e.MAs(4),n=e.oxw();e.Tol(n.styleClass),e.Q6J("ngClass",n.containerClass())("ngStyle",n.style),e.xp6(2),e.Q6J("ngIf",n.image)("ngIfElse",o),e.xp6(3),e.Q6J("ngIf",n.label),e.xp6(1),e.Q6J("ngIf",n.removable)}}const T=["*"];let y=(()=>{class a{constructor(){this.removeIcon="pi pi-times-circle",this.onRemove=new e.vpe,this.visible=!0}containerClass(){return{"p-chip p-component":!0,"p-chip-image":null!=this.image}}close(o){this.visible=!1,this.onRemove.emit(o)}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["p-chip"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",style:"style",styleClass:"styleClass",removable:"removable",removeIcon:"removeIcon"},outputs:{onRemove:"onRemove"},ngContentSelectors:T,decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"],[3,"src",4,"ngIf","ngIfElse"],["iconTemplate",""],["class","p-chip-text",4,"ngIf"],["tabindex","0",3,"class","ngClass","click","keydown.enter",4,"ngIf"],[3,"src"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-text"],["tabindex","0",3,"ngClass","click","keydown.enter"]],template:function(o,n){1&o&&(e.F$t(),e.YNc(0,_,7,8,"div",0)),2&o&&e.Q6J("ngIf",n.visible)},directives:[t.O5,t.mk,t.PC],styles:[".p-chip{display:inline-flex;align-items:center}.p-chip-text{line-height:1.5}.p-chip-icon.pi{line-height:1.5}.pi-chip-remove-icon{line-height:1.5;cursor:pointer}.p-chip img{border-radius:50%}\n"],encapsulation:2,changeDetection:0}),a})(),b=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[t.ez]]}),a})();var A=l(3622),v=l(7290),q=l(3362);function U(a,i){1&a&&e._UZ(0,"iframe",35)}const x=function(){return["/theming"]};let w=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["ng-component"]],decls:219,vars:6,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","chip","stackblitz","chip-demo"],[1,"content-section","implementation"],[1,"card"],[1,"p-d-flex","p-ai-center"],["label","Action","styleClass","p-mr-2"],["label","Comedy","styleClass","p-mr-2"],["label","Mystery","styleClass","p-mr-2"],["label","Thriller",3,"removable"],["label","Apple","icon","pi pi-apple","styleClass","p-mr-2"],["label","Facebook","icon","pi pi-facebook","styleClass","p-mr-2"],["label","Google","icon","pi pi-google","styleClass","p-mr-2"],["label","Microsoft","icon","pi pi-microsoft",3,"removable"],["label","Amy Elsner","image","assets/showcase/images/demo/avatar/amyelsner.png","styleClass","p-mr-2"],["label","Asiya Javayant","image","assets/showcase/images/demo/avatar/asiyajavayant.png","styleClass","p-mr-2"],["label","Onyama Limba","image","assets/showcase/images/demo/avatar/onyamalimba.png","styleClass","p-mr-2"],["label","Xuxue Feng","image","assets/showcase/images/demo/avatar/xuxuefeng.png",3,"removable"],["label","Action","styleClass","p-mr-2 custom-chip"],["label","Comedy","styleClass","p-mr-2 custom-chip"],["label","Onyama Limba","image","assets/showcase/images/demo/avatar/onyamalimba.png","styleClass","p-mr-2 custom-chip"],["label","Xuxue Feng","image","assets/showcase/images/demo/avatar/xuxuefeng.png","styleClass","custom-chip",3,"removable"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chip","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-chip-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["lang","css"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-chip-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3,"Chip"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Chip represents entities using icons, labels and images."),e.qZA(),e.qZA(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3),e.TgZ(8,"div",4),e.TgZ(9,"h5"),e._uU(10,"Basic"),e.qZA(),e.TgZ(11,"div",5),e._UZ(12,"p-chip",6),e._UZ(13,"p-chip",7),e._UZ(14,"p-chip",8),e._UZ(15,"p-chip",9),e.qZA(),e.TgZ(16,"h5"),e._uU(17,"Icon"),e.qZA(),e.TgZ(18,"div",5),e._UZ(19,"p-chip",10),e._UZ(20,"p-chip",11),e._UZ(21,"p-chip",12),e._UZ(22,"p-chip",13),e.qZA(),e.TgZ(23,"h5"),e._uU(24,"Image"),e.qZA(),e.TgZ(25,"div",5),e._UZ(26,"p-chip",14),e._UZ(27,"p-chip",15),e._UZ(28,"p-chip",16),e._UZ(29,"p-chip",17),e.qZA(),e.TgZ(30,"h5"),e._uU(31,"Styling"),e.qZA(),e.TgZ(32,"div",5),e._UZ(33,"p-chip",18),e._UZ(34,"p-chip",19),e._UZ(35,"p-chip",20),e._UZ(36,"p-chip",21),e.qZA(),e.qZA(),e.qZA(),e.TgZ(37,"div",22),e.TgZ(38,"p-tabView"),e.TgZ(39,"p-tabPanel",23),e.TgZ(40,"h5"),e._uU(41,"Import"),e.qZA(),e.TgZ(42,"app-code",24),e.IAx(),e._uU(43,"\nimport { ChipModule } from 'primeng/chip';\n"),e.fQ9(),e.qZA(),e.TgZ(44,"h5"),e._uU(45,"Getting Started"),e.qZA(),e.TgZ(46,"p"),e._uU(47,"Chip can display labels, icons and images."),e.qZA(),e.TgZ(48,"app-code",25),e.IAx(),e._uU(49,'\n<p-chip label="Text Only"></p-chip>\n<p-chip label="Text with icon" icon="pi pi-check"></p-chip>\n<p-chip label="Text with image" image="user.png"></p-chip>\n'),e.fQ9(),e.qZA(),e.TgZ(50,"h5"),e._uU(51,"Removable"),e.qZA(),e.TgZ(52,"p"),e._uU(53,"Setting "),e.TgZ(54,"i"),e._uU(55,"removable"),e.qZA(),e._uU(56," property displays an icon to close the chip, the optional "),e.TgZ(57,"i"),e._uU(58,"onRemove"),e.qZA(),e._uU(59," event is available to get notified when a chip is hidden."),e.qZA(),e.TgZ(60,"app-code",25),e.IAx(),e._uU(61,'\n<p-chip label="Text" [removable]="true"></p-chip>\n'),e.fQ9(),e.qZA(),e.TgZ(62,"h5"),e._uU(63,"Templating"),e.qZA(),e.TgZ(64,"p"),e._uU(65,"Content can easily be customized with the dynamic content instead of using the built-in modes."),e.qZA(),e.TgZ(66,"app-code",25),e.IAx(),e._uU(67,"\n<p-chip>\n    Content\n</p-chip>\n"),e.fQ9(),e.qZA(),e.TgZ(68,"h5"),e._uU(69,"Properties"),e.qZA(),e.TgZ(70,"div",26),e.TgZ(71,"table",27),e.TgZ(72,"thead"),e.TgZ(73,"tr"),e.TgZ(74,"th"),e._uU(75,"Name"),e.qZA(),e.TgZ(76,"th"),e._uU(77,"Type"),e.qZA(),e.TgZ(78,"th"),e._uU(79,"Default"),e.qZA(),e.TgZ(80,"th"),e._uU(81,"Description"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(82,"tbody"),e.TgZ(83,"tr"),e.TgZ(84,"td"),e._uU(85,"label"),e.qZA(),e.TgZ(86,"td"),e._uU(87,"string"),e.qZA(),e.TgZ(88,"td"),e._uU(89,"null"),e.qZA(),e.TgZ(90,"td"),e._uU(91,"Defines the text to display."),e.qZA(),e.qZA(),e.TgZ(92,"tr"),e.TgZ(93,"td"),e._uU(94,"icon"),e.qZA(),e.TgZ(95,"td"),e._uU(96,"string"),e.qZA(),e.TgZ(97,"td"),e._uU(98,"null"),e.qZA(),e.TgZ(99,"td"),e._uU(100,"Defines the icon to display."),e.qZA(),e.qZA(),e.TgZ(101,"tr"),e.TgZ(102,"td"),e._uU(103,"image"),e.qZA(),e.TgZ(104,"td"),e._uU(105,"string"),e.qZA(),e.TgZ(106,"td"),e._uU(107,"null"),e.qZA(),e.TgZ(108,"td"),e._uU(109,"Defines the image to display."),e.qZA(),e.qZA(),e.TgZ(110,"tr"),e.TgZ(111,"td"),e._uU(112,"removable"),e.qZA(),e.TgZ(113,"td"),e._uU(114,"boolean"),e.qZA(),e.TgZ(115,"td"),e._uU(116,"false"),e.qZA(),e.TgZ(117,"td"),e._uU(118,"Whether to display a remove icon."),e.qZA(),e.qZA(),e.TgZ(119,"tr"),e.TgZ(120,"td"),e._uU(121,"style"),e.qZA(),e.TgZ(122,"td"),e._uU(123,"object"),e.qZA(),e.TgZ(124,"td"),e._uU(125,"null"),e.qZA(),e.TgZ(126,"td"),e._uU(127,"Inline style of the component."),e.qZA(),e.qZA(),e.TgZ(128,"tr"),e.TgZ(129,"td"),e._uU(130,"styleClass"),e.qZA(),e.TgZ(131,"td"),e._uU(132,"string"),e.qZA(),e.TgZ(133,"td"),e._uU(134,"null"),e.qZA(),e.TgZ(135,"td"),e._uU(136,"Style class of the component."),e.qZA(),e.qZA(),e.TgZ(137,"tr"),e.TgZ(138,"td"),e._uU(139,"removeIcon"),e.qZA(),e.TgZ(140,"td"),e._uU(141,"string"),e.qZA(),e.TgZ(142,"td"),e._uU(143,"pi pi-times-circle"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"Icon of the remove element."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(146,"h5"),e._uU(147,"Events"),e.qZA(),e.TgZ(148,"div",26),e.TgZ(149,"table",27),e.TgZ(150,"thead"),e.TgZ(151,"tr"),e.TgZ(152,"th"),e._uU(153,"Name"),e.qZA(),e.TgZ(154,"th"),e._uU(155,"Parameters"),e.qZA(),e.TgZ(156,"th"),e._uU(157,"Description"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(158,"tbody"),e.TgZ(159,"tr"),e.TgZ(160,"td"),e._uU(161,"onRemove"),e.qZA(),e.TgZ(162,"td"),e._uU(163,"event: Browser event"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"Callback to invoke when a chip is removed."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(166,"h5"),e._uU(167,"Styling"),e.qZA(),e.TgZ(168,"p"),e._uU(169,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(170,"a",28),e._uU(171,"theming"),e.qZA(),e._uU(172," page."),e.qZA(),e.TgZ(173,"div",26),e.TgZ(174,"table",27),e.TgZ(175,"thead"),e.TgZ(176,"tr"),e.TgZ(177,"th"),e._uU(178,"Name"),e.qZA(),e.TgZ(179,"th"),e._uU(180,"Element"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(181,"tbody"),e.TgZ(182,"tr"),e.TgZ(183,"td"),e._uU(184,"p-chip"),e.qZA(),e.TgZ(185,"td"),e._uU(186,"Container element."),e.qZA(),e.qZA(),e.TgZ(187,"tr"),e.TgZ(188,"td"),e._uU(189,"p-chip-image"),e.qZA(),e.TgZ(190,"td"),e._uU(191,"Container element in image mode."),e.qZA(),e.qZA(),e.TgZ(192,"tr"),e.TgZ(193,"td"),e._uU(194,"p-chip-text"),e.qZA(),e.TgZ(195,"td"),e._uU(196,"Text of the chip."),e.qZA(),e.qZA(),e.TgZ(197,"tr"),e.TgZ(198,"td"),e._uU(199,"pi-chip-remove-icon"),e.qZA(),e.TgZ(200,"td"),e._uU(201,"Remove icon."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(202,"h5"),e._uU(203,"Dependencies"),e.qZA(),e.TgZ(204,"p"),e._uU(205,"None."),e.qZA(),e.qZA(),e.TgZ(206,"p-tabPanel",29),e.TgZ(207,"a",30),e.TgZ(208,"span"),e._uU(209,"View on GitHub"),e.qZA(),e.qZA(),e.TgZ(210,"a",31),e.TgZ(211,"span"),e._uU(212,"Edit in StackBlitz"),e.qZA(),e.qZA(),e.TgZ(213,"app-code",25),e.IAx(),e._uU(214,'\n<h5>Basic</h5>\n<div class="p-d-flex p-ai-center">\n    <p-chip label="Action" styleClass="p-mr-2"></p-chip>\n    <p-chip label="Comedy" styleClass="p-mr-2"></p-chip>\n    <p-chip label="Mystery" styleClass="p-mr-2"></p-chip>\n    <p-chip label="Thriller" [removable]="true"></p-chip>\n</div>\n\n<h5>Icon</h5>\n<div class="p-d-flex p-ai-center">\n    <p-chip label="Apple" icon="pi pi-apple" styleClass="p-mr-2"></p-chip>\n    <p-chip label="Facebook" icon="pi pi-facebook" styleClass="p-mr-2"></p-chip>\n    <p-chip label="Google" icon="pi pi-google" styleClass="p-mr-2"></p-chip>\n    <p-chip label="Microsoft" icon="pi pi-microsoft" [removable]="true"></p-chip>\n</div>\n\n<h5>Image</h5>\n<div class="p-d-flex p-ai-center">\n    <p-chip label="Amy Elsner" image="assets/showcase/images/demo/avatar/amyelsner.png" styleClass="p-mr-2"></p-chip>\n    <p-chip label="Asiya Javayant" image="assets/showcase/images/demo/avatar/asiyajavayant.png" styleClass="p-mr-2"></p-chip>\n    <p-chip label="Onyama Limba" image="assets/showcase/images/demo/avatar/onyamalimba.png" styleClass="p-mr-2"></p-chip>\n    <p-chip label="Xuxue Feng" image="assets/showcase/images/demo/avatar/xuxuefeng.png" [removable]="true"></p-chip>\n</div>\n\n<h5>Styling</h5>\n<div class="p-d-flex p-ai-center">\n    <p-chip label="Action" styleClass="p-mr-2 custom-chip"></p-chip>\n    <p-chip label="Comedy" styleClass="p-mr-2 custom-chip"></p-chip>\n    <p-chip label="Onyama Limba" image="assets/showcase/images/demo/avatar/onyamalimba.png" styleClass="p-mr-2 custom-chip"></p-chip>\n    <p-chip label="Xuxue Feng" image="assets/showcase/images/demo/avatar/xuxuefeng.png" [removable]="true" styleClass="custom-chip"></p-chip>\n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(215,"app-code",32),e.IAx(),e._uU(216,"\n:host ::ng-deep .p-chip.custom-chip {\n    background: var(--primary-color);\n    color: var(--primary-color-text);\n}\n"),e.fQ9(),e.qZA(),e.qZA(),e.TgZ(217,"p-tabPanel",33),e.YNc(218,U,1,0,"ng-template",34),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(15),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0),e.xp6(134),e.Q6J("routerLink",e.DdM(5,x)))},directives:[Z.P,y,A.xf,A.x4,v.h,s.yS,q.jx],styles:["[_nghost-%COMP%]     .p-chip.custom-chip{background:var(--primary-color);color:var(--primary-color-text)}"]}),a})(),I=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[s.Bz.forChild([{path:"",component:w}])],s.Bz]}),a})();var P=l(5472),k=l(2239),M=l(2340);let D=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[t.ez,I,P.hJ,k.Q,M.LU,b,Z.L,v.a]]}),a})()}}]);
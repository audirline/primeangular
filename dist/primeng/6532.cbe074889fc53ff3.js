"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[6532],{7290:(A,s,a)=>{a.d(s,{h:()=>g,a:()=>m});var p=a(6019),n=a(3668);const e=["code"],c=["*"];let g=(()=>{class r{constructor(o){this.el=o,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return r.\u0275fac=function(o){return new(o||r)(n.Y36(n.SBq))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-code"]],viewQuery:function(o,Z){if(1&o&&n.Gf(e,5),2&o){let l;n.iGM(l=n.CRH())&&(Z.codeViewChild=l.first)}},inputs:{lang:"lang"},ngContentSelectors:c,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(o,Z){1&o&&(n.F$t(),n.TgZ(0,"pre",0),n.TgZ(1,"code",null,1),n.Hsn(3),n._uU(4,"\n"),n.qZA(),n.qZA()),2&o&&n.Q6J("ngClass","language-"+Z.lang)},directives:[p.mk],encapsulation:2}),r})(),m=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[p.ez]]}),r})()},6532:(A,s,a)=>{a.r(s),a.d(s,{CardDemoModule:()=>D});var p=a(6019),n=a(1120),e=a(3668),c=a(2060),g=a(8394),m=a(3362),r=a(3622),i=a(7290),o=a(1919);function Z(t,d){1&t&&e._UZ(0,"img",20)}const l=function(){return{"margin-left":".5em"}};function T(t,d){1&t&&(e._UZ(0,"p-button",21),e._UZ(1,"p-button",22)),2&t&&(e.xp6(1),e.Akn(e.DdM(2,l)))}function q(t,d){1&t&&e._UZ(0,"iframe",23)}const h=function(){return{width:"25rem","margin-bottom":"2em"}},U=function(){return{width:"360px"}},f=function(){return["/theming"]};let _=(()=>{class t{}return t.\u0275fac=function(u){return new(u||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:196,vars:8,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","card","stackblitz","card-demo"],[1,"content-section","implementation"],["header","Simple Card"],["header","Advanced Card","subheader","Card Subheader","styleClass","p-card-shadow"],["pTemplate","header"],["pTemplate","footer"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/card","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-card-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["alt","Card","src","assets/showcase/images/usercard.png"],["label","Save","icon","pi pi-check"],["label","Cancel","icon","pi pi-times","styleClass","p-button-secondary"],["src","https://stackblitz.com/edit/primeng-card-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(u,w){1&u&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3,"Card"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Card is a flexible container component."),e.qZA(),e.qZA(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3),e.TgZ(8,"p-card",4),e.TgZ(9,"p"),e._uU(10,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"),e.qZA(),e.qZA(),e.TgZ(11,"p-card",5),e.YNc(12,Z,1,0,"ng-template",6),e.TgZ(13,"p"),e._uU(14,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"),e.qZA(),e.YNc(15,T,2,3,"ng-template",7),e.qZA(),e.qZA(),e.TgZ(16,"div",8),e.TgZ(17,"p-tabView"),e.TgZ(18,"p-tabPanel",9),e.TgZ(19,"h5"),e._uU(20,"Import"),e.qZA(),e.TgZ(21,"app-code",10),e.IAx(),e._uU(22,"\nimport {CardModule} from 'primeng/card';\n"),e.fQ9(),e.qZA(),e.TgZ(23,"h5"),e._uU(24,"Getting Started"),e.qZA(),e.TgZ(25,"p"),e._uU(26,"Card is defined with p-card element."),e.qZA(),e.TgZ(27,"app-code",11),e.IAx(),e._uU(28,"\n<p-card>\n    Content\n</p-card>\n"),e.fQ9(),e.qZA(),e.TgZ(29,"h5"),e._uU(30,"Header"),e.qZA(),e.TgZ(31,"p"),e._uU(32,"Header text of the card is provided using the "),e.TgZ(33,"i"),e._uU(34,"header"),e.qZA(),e._uU(35," property, optionally "),e.TgZ(36,"i"),e._uU(37,"subheader"),e.qZA(),e._uU(38," property is available for additional information about the card."),e.qZA(),e.TgZ(39,"app-code",11),e.IAx(),e._uU(40,'\n<p-card header="header">\n    Content\n</p-card>\n'),e.fQ9(),e.qZA(),e.TgZ(41,"h5"),e._uU(42,"Header and Footer Content"),e.qZA(),e.TgZ(43,"p"),e._uU(44,"Header and Footers sections can be customized using "),e.TgZ(45,"i"),e._uU(46,"header"),e.qZA(),e._uU(47," and "),e.TgZ(48,"i"),e._uU(49,"footer"),e.qZA(),e._uU(50," templates."),e.qZA(),e.TgZ(51,"app-code",11),e.IAx(),e._uU(52,'\n<p-card>\n    <ng-template pTemplate="header">\n        Header content here\n    </ng-template>\n    Body Content\n    <ng-template pTemplate="footer">\n        Footer content here\n    </ng-template>\n</p-card>\n'),e.fQ9(),e.qZA(),e.TgZ(53,"h5"),e._uU(54,"Properties"),e.qZA(),e.TgZ(55,"div",12),e.TgZ(56,"table",13),e.TgZ(57,"thead"),e.TgZ(58,"tr"),e.TgZ(59,"th"),e._uU(60,"Name"),e.qZA(),e.TgZ(61,"th"),e._uU(62,"Type"),e.qZA(),e.TgZ(63,"th"),e._uU(64,"Default"),e.qZA(),e.TgZ(65,"th"),e._uU(66,"Description"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(67,"tbody"),e.TgZ(68,"tr"),e.TgZ(69,"td"),e._uU(70,"header"),e.qZA(),e.TgZ(71,"td"),e._uU(72,"string"),e.qZA(),e.TgZ(73,"td"),e._uU(74,"null"),e.qZA(),e.TgZ(75,"td"),e._uU(76,"Title of the card."),e.qZA(),e.qZA(),e.TgZ(77,"tr"),e.TgZ(78,"td"),e._uU(79,"subheader"),e.qZA(),e.TgZ(80,"td"),e._uU(81,"string"),e.qZA(),e.TgZ(82,"td"),e._uU(83,"null"),e.qZA(),e.TgZ(84,"td"),e._uU(85,"Secondary title of the card."),e.qZA(),e.qZA(),e.TgZ(86,"tr"),e.TgZ(87,"td"),e._uU(88,"style"),e.qZA(),e.TgZ(89,"td"),e._uU(90,"string"),e.qZA(),e.TgZ(91,"td"),e._uU(92,"null"),e.qZA(),e.TgZ(93,"td"),e._uU(94,"Inline style of the component."),e.qZA(),e.qZA(),e.TgZ(95,"tr"),e.TgZ(96,"td"),e._uU(97,"styleClass"),e.qZA(),e.TgZ(98,"td"),e._uU(99,"string"),e.qZA(),e.TgZ(100,"td"),e._uU(101,"null"),e.qZA(),e.TgZ(102,"td"),e._uU(103,"Style class of the component."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(104,"h5"),e._uU(105,"Templates"),e.qZA(),e.TgZ(106,"div",12),e.TgZ(107,"table",13),e.TgZ(108,"thead"),e.TgZ(109,"tr"),e.TgZ(110,"th"),e._uU(111,"Name"),e.qZA(),e.TgZ(112,"th"),e._uU(113,"Parameters"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(114,"tbody"),e.TgZ(115,"tr"),e.TgZ(116,"td"),e._uU(117,"header"),e.qZA(),e.TgZ(118,"td"),e._uU(119,"-"),e.qZA(),e.qZA(),e.TgZ(120,"tr"),e.TgZ(121,"td"),e._uU(122,"title"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"-"),e.qZA(),e.qZA(),e.TgZ(125,"tr"),e.TgZ(126,"td"),e._uU(127,"subtitle"),e.qZA(),e.TgZ(128,"td"),e._uU(129,"-"),e.qZA(),e.qZA(),e.TgZ(130,"tr"),e.TgZ(131,"td"),e._uU(132,"content"),e.qZA(),e.TgZ(133,"td"),e._uU(134,"-"),e.qZA(),e.qZA(),e.TgZ(135,"tr"),e.TgZ(136,"td"),e._uU(137,"footer"),e.qZA(),e.TgZ(138,"td"),e._uU(139,"-"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(140,"h5"),e._uU(141,"Styling"),e.qZA(),e.TgZ(142,"p"),e._uU(143,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(144,"a",14),e._uU(145,"theming page"),e.qZA(),e._uU(146,"."),e.qZA(),e.TgZ(147,"div",12),e.TgZ(148,"table",13),e.TgZ(149,"thead"),e.TgZ(150,"tr"),e.TgZ(151,"th"),e._uU(152,"Name"),e.qZA(),e.TgZ(153,"th"),e._uU(154,"Element"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(155,"tbody"),e.TgZ(156,"tr"),e.TgZ(157,"td"),e._uU(158,"p-card"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"Container element."),e.qZA(),e.qZA(),e.TgZ(161,"tr"),e.TgZ(162,"td"),e._uU(163,"p-card-header"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"Title element."),e.qZA(),e.qZA(),e.TgZ(166,"tr"),e.TgZ(167,"td"),e._uU(168,"p-card-subheader"),e.qZA(),e.TgZ(169,"td"),e._uU(170,"Subtitle element."),e.qZA(),e.qZA(),e.TgZ(171,"tr"),e.TgZ(172,"td"),e._uU(173,"p-card-content"),e.qZA(),e.TgZ(174,"td"),e._uU(175,"Content of the card."),e.qZA(),e.qZA(),e.TgZ(176,"tr"),e.TgZ(177,"td"),e._uU(178,"p-card-footer"),e.qZA(),e.TgZ(179,"td"),e._uU(180,"Footer of the card."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(181,"h5"),e._uU(182,"Dependencies"),e.qZA(),e.TgZ(183,"p"),e._uU(184,"None."),e.qZA(),e.qZA(),e.TgZ(185,"p-tabPanel",15),e.TgZ(186,"a",16),e.TgZ(187,"span"),e._uU(188,"View on GitHub"),e.qZA(),e.qZA(),e.TgZ(189,"a",17),e.TgZ(190,"span"),e._uU(191,"Edit in StackBlitz"),e.qZA(),e.qZA(),e.TgZ(192,"app-code",11),e.IAx(),e._uU(193,'\n<p-card header="Simple Card" [style]="{\'width\': \'25rem\', \'margin-bottom\': \'2em\'}">\n    <ng-template pTemplate="header">\n        <img alt="Card" src="assets/showcase/images/usercard.png">\n    </ng-template>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt\n        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>\n</p-card>\n\n<p-card header="Advanced Card" subheader="Card Subheader" [style]="{width: \'360px\'}" styleClass="p-card-shadow">\n    <ng-template pTemplate="header">\n        <img alt="Card" src="assets/showcase/images/usercard.png">\n    </ng-template>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt\n        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>\n    <ng-template pTemplate="footer">\n        <p-button label="Save" icon="pi pi-check"></p-button>\n        <p-button label="Cancel" icon="pi pi-times" styleClass="p-button-secondary" [style]="{\'margin-left\': \'.5em\'}"></p-button>\n    </ng-template>\n</p-card>\n'),e.fQ9(),e.qZA(),e.qZA(),e.TgZ(194,"p-tabPanel",18),e.YNc(195,q,1,0,"ng-template",19),e.qZA(),e.qZA(),e.qZA()),2&u&&(e.xp6(8),e.Akn(e.DdM(5,h)),e.xp6(3),e.Akn(e.DdM(6,U)),e.xp6(133),e.Q6J("routerLink",e.DdM(7,f)))},directives:[c.P,g.Z,m.jx,r.xf,r.x4,i.h,n.yS,o.zx],styles:["[_nghost-%COMP%]     p{line-height:1.5;margin:0}"]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(u){return new(u||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[n.Bz.forChild([{path:"",component:_}])],n.Bz]}),t})();var b=a(9978),v=a(2340),y=a(5472);let D=(()=>{class t{}return t.\u0275fac=function(u){return new(u||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.ez,C,b.d,y.hJ,v.LU,i.a,c.L]]}),t})()}}]);
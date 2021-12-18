"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[5151],{7290:(m,r,Z)=>{Z.d(r,{h:()=>T,a:()=>h});var A=Z(6019),n=Z(3668);const s=["code"],e=["*"];let T=(()=>{class i{constructor(o){this.el=o,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return i.\u0275fac=function(o){return new(o||i)(n.Y36(n.SBq))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-code"]],viewQuery:function(o,p){if(1&o&&n.Gf(s,5),2&o){let c;n.iGM(c=n.CRH())&&(p.codeViewChild=c.first)}},inputs:{lang:"lang"},ngContentSelectors:e,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(o,p){1&o&&(n.F$t(),n.TgZ(0,"pre",0),n.TgZ(1,"code",null,1),n.Hsn(3),n._uU(4,"\n"),n.qZA(),n.qZA()),2&o&&n.Q6J("ngClass","language-"+p.lang)},directives:[A.mk],encapsulation:2}),i})(),h=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[A.ez]]}),i})()},5151:(m,r,Z)=>{Z.r(r),Z.d(r,{ChipsDemoModule:()=>y});var A=Z(6019),n=Z(7537),s=Z(1120),e=Z(3668),T=Z(2060),h=Z(8226),i=Z(3362),g=Z(3622),o=Z(7290);function p(t,l){1&t&&(e._uU(0),e._UZ(1,"span",20)),2&t&&e.hij(" ",l.$implicit," - (active) ")}function c(t,l){1&t&&e._UZ(0,"iframe",21)}const U=function(){return["/theming"]};let _=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:327,vars:5,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","chips","stackblitz","chips-demo"],[1,"content-section","implementation","p-fluid"],[1,"card"],[3,"ngModel","ngModelChange"],["separator",",",3,"ngModel","ngModelChange"],["pTemplate","item"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chips","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-chips-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],[1,"pi","pi-user","p-ml-2"],["src","https://stackblitz.com/edit/primeng-chips-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(a,u){1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3,"Chips"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Chips is used to enter multiple values on an input field."),e.qZA(),e.qZA(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3),e.TgZ(8,"div",4),e.TgZ(9,"h5"),e._uU(10,"Basic"),e.qZA(),e.TgZ(11,"p-chips",5),e.NdJ("ngModelChange",function(d){return u.values1=d}),e.qZA(),e.TgZ(12,"h5"),e._uU(13,"Comma Separator"),e.qZA(),e.TgZ(14,"p-chips",6),e.NdJ("ngModelChange",function(d){return u.values2=d}),e.qZA(),e.TgZ(15,"h5"),e._uU(16,"Template"),e.qZA(),e.TgZ(17,"p-chips",5),e.NdJ("ngModelChange",function(d){return u.values3=d}),e.YNc(18,p,2,1,"ng-template",7),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div",8),e.TgZ(20,"p-tabView"),e.TgZ(21,"p-tabPanel",9),e.TgZ(22,"h5"),e._uU(23,"Import"),e.qZA(),e.TgZ(24,"app-code",10),e.IAx(),e._uU(25,"\nimport {ChipsModule} from 'primeng/chips';\n"),e.fQ9(),e.qZA(),e.TgZ(26,"h5"),e._uU(27,"Getting Started"),e.qZA(),e.TgZ(28,"p"),e._uU(29,"Chips requires an array as its model."),e.qZA(),e.TgZ(30,"app-code",11),e.IAx(),e._uU(31,'\n<p-chips [(ngModel)]="values"></p-chips>\n'),e.fQ9(),e.qZA(),e.TgZ(32,"app-code",10),e.IAx(),e._uU(33,"\nexport class MyModel {\n\n    values: string[];\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(34,"h5"),e._uU(35,"Model Driven Forms"),e.qZA(),e.TgZ(36,"p"),e._uU(37,"Chips can be used in a model driven form as well."),e.qZA(),e.TgZ(38,"app-code",11),e.IAx(),e._uU(39,'\n<p-chips formControlName="cities"></p-chips>\n'),e.fQ9(),e.qZA(),e.TgZ(40,"h5"),e._uU(41,"Custom Content"),e.qZA(),e.TgZ(42,"p"),e._uU(43,"A chip is customized using a "),e.TgZ(44,"i"),e._uU(45,"ng-template"),e.qZA(),e._uU(46," element where the value is passed as the implicit variable."),e.qZA(),e.TgZ(47,"app-code",11),e.IAx(),e._uU(48,'\n<p-chips [(ngModel)]="values">\n    <ng-template let-item pTemplate="item">\n        {{item}} - (active) <i class="pi pi-user"></i>\n    </ng-template>\n</p-chips>\n'),e.fQ9(),e.qZA(),e.TgZ(49,"h5"),e._uU(50,"Properties"),e.qZA(),e.TgZ(51,"div",12),e.TgZ(52,"table",13),e.TgZ(53,"thead"),e.TgZ(54,"tr"),e.TgZ(55,"th"),e._uU(56,"Name"),e.qZA(),e.TgZ(57,"th"),e._uU(58,"Type"),e.qZA(),e.TgZ(59,"th"),e._uU(60,"Default"),e.qZA(),e.TgZ(61,"th"),e._uU(62,"Description"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(63,"tbody"),e.TgZ(64,"tr"),e.TgZ(65,"td"),e._uU(66,"field"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"string"),e.qZA(),e.TgZ(69,"td"),e._uU(70,"null"),e.qZA(),e.TgZ(71,"td"),e._uU(72,"Name of the property to display on a chip."),e.qZA(),e.qZA(),e.TgZ(73,"tr"),e.TgZ(74,"td"),e._uU(75,"max"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"number"),e.qZA(),e.TgZ(78,"td"),e._uU(79,"null"),e.qZA(),e.TgZ(80,"td"),e._uU(81,"Maximum number of entries allowed."),e.qZA(),e.qZA(),e.TgZ(82,"tr"),e.TgZ(83,"td"),e._uU(84,"disabled"),e.qZA(),e.TgZ(85,"td"),e._uU(86,"boolean"),e.qZA(),e.TgZ(87,"td"),e._uU(88,"false"),e.qZA(),e.TgZ(89,"td"),e._uU(90,"When present, it specifies that the element should be disabled."),e.qZA(),e.qZA(),e.TgZ(91,"tr"),e.TgZ(92,"td"),e._uU(93,"style"),e.qZA(),e.TgZ(94,"td"),e._uU(95,"string"),e.qZA(),e.TgZ(96,"td"),e._uU(97,"null"),e.qZA(),e.TgZ(98,"td"),e._uU(99,"Inline style of the element."),e.qZA(),e.qZA(),e.TgZ(100,"tr"),e.TgZ(101,"td"),e._uU(102,"styleClass"),e.qZA(),e.TgZ(103,"td"),e._uU(104,"string"),e.qZA(),e.TgZ(105,"td"),e._uU(106,"null"),e.qZA(),e.TgZ(107,"td"),e._uU(108,"Style class of the element."),e.qZA(),e.qZA(),e.TgZ(109,"tr"),e.TgZ(110,"td"),e._uU(111,"placeholder"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"string"),e.qZA(),e.TgZ(114,"td"),e._uU(115,"null"),e.qZA(),e.TgZ(116,"td"),e._uU(117,"Advisory information to display on input."),e.qZA(),e.qZA(),e.TgZ(118,"tr"),e.TgZ(119,"td"),e._uU(120,"tabindex"),e.qZA(),e.TgZ(121,"td"),e._uU(122,"number"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"null"),e.qZA(),e.TgZ(125,"td"),e._uU(126,"Index of the element in tabbing order."),e.qZA(),e.qZA(),e.TgZ(127,"tr"),e.TgZ(128,"td"),e._uU(129,"inputId"),e.qZA(),e.TgZ(130,"td"),e._uU(131,"string"),e.qZA(),e.TgZ(132,"td"),e._uU(133,"null"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"Identifier of the focus input to match a label defined for the component."),e.qZA(),e.qZA(),e.TgZ(136,"tr"),e.TgZ(137,"td"),e._uU(138,"ariaLabelledBy"),e.qZA(),e.TgZ(139,"td"),e._uU(140,"string"),e.qZA(),e.TgZ(141,"td"),e._uU(142,"null"),e.qZA(),e.TgZ(143,"td"),e._uU(144,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),e.qZA(),e.qZA(),e.TgZ(145,"tr"),e.TgZ(146,"td"),e._uU(147,"allowDuplicate"),e.qZA(),e.TgZ(148,"td"),e._uU(149,"boolean"),e.qZA(),e.TgZ(150,"td"),e._uU(151,"true"),e.qZA(),e.TgZ(152,"td"),e._uU(153,"Whether to allow duplicate values or not."),e.qZA(),e.qZA(),e.TgZ(154,"tr"),e.TgZ(155,"td"),e._uU(156,"inputStyle"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"string"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"null"),e.qZA(),e.TgZ(161,"td"),e._uU(162,"Inline style of the input field."),e.qZA(),e.qZA(),e.TgZ(163,"tr"),e.TgZ(164,"td"),e._uU(165,"inputStyleClass"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"string"),e.qZA(),e.TgZ(168,"td"),e._uU(169,"null"),e.qZA(),e.TgZ(170,"td"),e._uU(171,"Style class of the input field."),e.qZA(),e.qZA(),e.TgZ(172,"tr"),e.TgZ(173,"td"),e._uU(174,"addOnTab"),e.qZA(),e.TgZ(175,"td"),e._uU(176,"boolean"),e.qZA(),e.TgZ(177,"td"),e._uU(178,"false"),e.qZA(),e.TgZ(179,"td"),e._uU(180,"Whether to add an item on tab key press."),e.qZA(),e.qZA(),e.TgZ(181,"tr"),e.TgZ(182,"td"),e._uU(183,"addOnBlur"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"boolean"),e.qZA(),e.TgZ(186,"td"),e._uU(187,"false"),e.qZA(),e.TgZ(188,"td"),e._uU(189,"Whether to add an item when the input loses focus."),e.qZA(),e.qZA(),e.TgZ(190,"tr"),e.TgZ(191,"td"),e._uU(192,"separator"),e.qZA(),e.TgZ(193,"td"),e._uU(194,"string"),e.qZA(),e.TgZ(195,"td"),e._uU(196,"null"),e.qZA(),e.TgZ(197,"td"),e._uU(198,'Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ","'),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(199,"h5"),e._uU(200,"Events"),e.qZA(),e.TgZ(201,"div",12),e.TgZ(202,"table",13),e.TgZ(203,"thead"),e.TgZ(204,"tr"),e.TgZ(205,"th"),e._uU(206,"Name"),e.qZA(),e.TgZ(207,"th"),e._uU(208,"Parameters"),e.qZA(),e.TgZ(209,"th"),e._uU(210,"Description"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(211,"tbody"),e.TgZ(212,"tr"),e.TgZ(213,"td"),e._uU(214,"onAdd"),e.qZA(),e.TgZ(215,"td"),e._uU(216,"originalEvent: Browser event "),e._UZ(217,"br"),e._uU(218," value: Added item value "),e.qZA(),e.TgZ(219,"td"),e._uU(220,"Callback to invoke when a value is added."),e.qZA(),e.qZA(),e.TgZ(221,"tr"),e.TgZ(222,"td"),e._uU(223,"onRemove"),e.qZA(),e.TgZ(224,"td"),e._uU(225,"originalEvent: Browser event "),e._UZ(226,"br"),e._uU(227," value: Added item value "),e.qZA(),e.TgZ(228,"td"),e._uU(229,"Callback to invoke when a value is removed."),e.qZA(),e.qZA(),e.TgZ(230,"tr"),e.TgZ(231,"td"),e._uU(232,"onChipClick"),e.qZA(),e.TgZ(233,"td"),e._uU(234,"originalEvent: Browser event "),e._UZ(235,"br"),e._uU(236," value: Clicked item value "),e.qZA(),e.TgZ(237,"td"),e._uU(238,"Callback to invoke when a chip is clicked."),e.qZA(),e.qZA(),e.TgZ(239,"tr"),e.TgZ(240,"td"),e._uU(241,"onFocus"),e.qZA(),e.TgZ(242,"td"),e._uU(243,"originalEvent: Browser event"),e.qZA(),e.TgZ(244,"td"),e._uU(245,"Callback to invoke when a input is focused."),e.qZA(),e.qZA(),e.TgZ(246,"tr"),e.TgZ(247,"td"),e._uU(248,"onBlur"),e.qZA(),e.TgZ(249,"td"),e._uU(250,"originalEvent: Browser event"),e.qZA(),e.TgZ(251,"td"),e._uU(252,"Callback to invoke when a input loses focus."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(253,"h5"),e._uU(254,"Templates"),e.qZA(),e.TgZ(255,"div",12),e.TgZ(256,"table",13),e.TgZ(257,"thead"),e.TgZ(258,"tr"),e.TgZ(259,"th"),e._uU(260,"Name"),e.qZA(),e.TgZ(261,"th"),e._uU(262,"Parameters"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(263,"tbody"),e.TgZ(264,"tr"),e.TgZ(265,"td"),e._uU(266,"chip"),e.qZA(),e.TgZ(267,"td"),e._uU(268,"$implicit: value"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(269,"h5"),e._uU(270,"Styling"),e.qZA(),e.TgZ(271,"p"),e._uU(272,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(273,"a",14),e._uU(274,"theming page"),e.qZA(),e._uU(275,"."),e.qZA(),e.TgZ(276,"div",12),e.TgZ(277,"table",13),e.TgZ(278,"thead"),e.TgZ(279,"tr"),e.TgZ(280,"th"),e._uU(281,"Name"),e.qZA(),e.TgZ(282,"th"),e._uU(283,"Element"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(284,"tbody"),e.TgZ(285,"tr"),e.TgZ(286,"td"),e._uU(287,"p-chips"),e.qZA(),e.TgZ(288,"td"),e._uU(289,"Container element."),e.qZA(),e.qZA(),e.TgZ(290,"tr"),e.TgZ(291,"td"),e._uU(292,"p-chips-token"),e.qZA(),e.TgZ(293,"td"),e._uU(294,"Chip element container."),e.qZA(),e.qZA(),e.TgZ(295,"tr"),e.TgZ(296,"td"),e._uU(297,"p-chips-token-icon"),e.qZA(),e.TgZ(298,"td"),e._uU(299,"Icon of a chip."),e.qZA(),e.qZA(),e.TgZ(300,"tr"),e.TgZ(301,"td"),e._uU(302,"p-chips-token-label"),e.qZA(),e.TgZ(303,"td"),e._uU(304,"Label of a chip."),e.qZA(),e.qZA(),e.TgZ(305,"tr"),e.TgZ(306,"td"),e._uU(307,"p-chips-input-token"),e.qZA(),e.TgZ(308,"td"),e._uU(309,"Container of input element."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(310,"h5"),e._uU(311,"Dependencies"),e.qZA(),e.TgZ(312,"p"),e._uU(313,"None."),e.qZA(),e.qZA(),e.TgZ(314,"p-tabPanel",15),e.TgZ(315,"a",16),e.TgZ(316,"span"),e._uU(317,"View on GitHub"),e.qZA(),e.qZA(),e.TgZ(318,"a",17),e.TgZ(319,"span"),e._uU(320,"Edit in StackBlitz"),e.qZA(),e.qZA(),e.TgZ(321,"app-code",11),e.IAx(),e._uU(322,'\n<h5>Basic</h5>\n<p-chips [(ngModel)]="values1" ></p-chips>\n\n<h5>Comma Separator</h5>\n<p-chips [(ngModel)]="values2" separator=","></p-chips>\n\n<h5>ng-template</h5>\n<p-chips [(ngModel)]="values3">\n    <ng-template let-item pTemplate="item">\n        {{item}} - (active) <i class="pi pi-user p-ml-2"></i>\n    </ng-template>\n</p-chips>\n'),e.fQ9(),e.qZA(),e.TgZ(323,"app-code",10),e.IAx(),e._uU(324,"\nexport class ChipsDemo {\n\n    values1: string[];\n    \n    values2: string[];\n\n    values3: string[];\n}\n"),e.fQ9(),e.qZA(),e.qZA(),e.TgZ(325,"p-tabPanel",18),e.YNc(326,c,1,0,"ng-template",19),e.qZA(),e.qZA(),e.qZA()),2&a&&(e.xp6(11),e.Q6J("ngModel",u.values1),e.xp6(3),e.Q6J("ngModel",u.values2),e.xp6(3),e.Q6J("ngModel",u.values3),e.xp6(256),e.Q6J("routerLink",e.DdM(4,U)))},directives:[T.P,h.cL,n.JJ,n.On,i.jx,g.xf,g.x4,o.h,s.yS],encapsulation:2}),t})(),v=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild([{path:"",component:_}])],s.Bz]}),t})();var f=Z(6232),C=Z(5472),b=Z(2340);let y=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[A.ez,n.u5,v,f.Gg,C.hJ,b.LU,T.L,o.a]]}),t})()}}]);
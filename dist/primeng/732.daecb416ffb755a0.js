"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[732],{732:(v,h,a)=>{a.d(h,{o6:()=>e.o6});var e=a(587)},587:(v,h,a)=>{a.d(h,{mP:()=>f,o6:()=>Z});var e=a(3668),c=a(6019),g=a(5989),p=a(3392),r=a(9814),T=a(7537),d=a(3475),y=a(5230),u=a(2966),_=a(7550),x=a(1498);const E=["container"],S=["focusInput"];function b(i,o){1&i&&e.GkF(0)}const C=function(i,o){return{$implicit:i,placeholder:o}};function O(i,o){if(1&i&&(e.ynx(0),e.YNc(1,b,1,0,"ng-container",12),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",t.valueTemplate)("ngTemplateOutletContext",e.WLB(2,C,t.value,t.placeholder))}}function w(i,o){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.label||"empty"," ")}}function k(i,o){if(1&i&&(e.TgZ(0,"div",16),e.TgZ(1,"span",17),e._uU(2),e.qZA(),e.qZA()),2&i){const t=o.$implicit;e.xp6(2),e.Oqu(t.label)}}function M(i,o){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const t=e.oxw(3);e.xp6(1),e.Oqu(t.placeholder||"empty")}}function N(i,o){if(1&i&&(e.YNc(0,k,3,1,"div",14),e.YNc(1,M,2,1,"ng-container",15)),2&i){const t=e.oxw(2);e.Q6J("ngForOf",t.value),e.xp6(1),e.Q6J("ngIf",t.emptyValue)}}function L(i,o){if(1&i&&(e.YNc(0,w,2,1,"ng-container",7),e.YNc(1,N,2,2,"ng-template",null,13,e.W1O)),2&i){const t=e.MAs(2),n=e.oxw();e.Q6J("ngIf","comma"===n.display)("ngIfElse",t)}}function A(i,o){1&i&&e.GkF(0)}function I(i,o){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.emptyMessageText," ")}}function D(i,o){1&i&&e.GkF(0)}function B(i,o){if(1&i&&(e.TgZ(0,"div",23),e.YNc(1,I,2,1,"ng-container",7),e.YNc(2,D,1,0,"ng-container",24),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.emptyTemplate)("ngIfElse",t.empty),e.xp6(1),e.Q6J("ngTemplateOutlet",t.emptyTemplate)}}function P(i,o){1&i&&e.GkF(0)}const U=function(i,o){return{showTransitionParams:i,hideTransitionParams:o}},H=function(i){return{value:"visible",params:i}},m=function(i,o){return{$implicit:i,options:o}},Q=function(i){return{"max-height":i}};function R(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",18,19),e.NdJ("click",function(l){return e.CHM(t),e.oxw().onOverlayClick(l)})("@overlayAnimation.start",function(l){return e.CHM(t),e.oxw().onOverlayAnimationStart(l)})("@overlayAnimation.done",function(l){return e.CHM(t),e.oxw().onOverlayAnimationDone(l)}),e.YNc(2,A,1,0,"ng-container",12),e.TgZ(3,"div",20),e.TgZ(4,"p-tree",21),e.NdJ("selectionChange",function(l){return e.CHM(t),e.oxw().onSelectionChange(l)})("onNodeExpand",function(l){return e.CHM(t),e.oxw().nodeExpand(l)})("onNodeCollapse",function(l){return e.CHM(t),e.oxw().nodeCollapse(l)})("onNodeSelect",function(l){return e.CHM(t),e.oxw().onSelect(l)})("onNodeUnselect",function(l){return e.CHM(t),e.oxw().onUnselect(l)}),e.qZA(),e.YNc(5,B,3,3,"div",22),e.qZA(),e.YNc(6,P,1,0,"ng-container",12),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("@overlayAnimation",e.VKq(16,H,e.WLB(13,U,t.showTransitionOptions,t.hideTransitionOptions))),e.xp6(2),e.Q6J("ngTemplateOutlet",t.headerTemplate)("ngTemplateOutletContext",e.WLB(18,m,t.value,t.options)),e.xp6(1),e.Q6J("ngStyle",e.VKq(21,Q,t.scrollHeight)),e.xp6(1),e.Q6J("value",t.options)("propagateSelectionDown",t.propagateSelectionDown)("propagateSelectionUp",t.propagateSelectionUp)("selectionMode",t.selectionMode)("selection",t.value)("metaKeySelection",t.metaKeySelection),e.xp6(1),e.Q6J("ngIf",t.emptyOptions),e.xp6(1),e.Q6J("ngTemplateOutlet",t.footerTemplate)("ngTemplateOutletContext",e.WLB(23,m,t.value,t.options))}}const V={provide:T.JU,useExisting:(0,e.Gpc)(()=>f),multi:!0};let f=(()=>{class i{constructor(t,n,l,s){this.config=t,this.cd=n,this.el=l,this.overlayService=s,this.type="button",this.scrollHeight="400px",this.metaKeySelection=!0,this.display="comma",this.selectionMode="single",this.propagateSelectionDown=!0,this.propagateSelectionUp=!0,this.showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions=".1s linear",this.onNodeExpand=new e.vpe,this.onNodeCollapse=new e.vpe,this.onShow=new e.vpe,this.onHide=new e.vpe,this.onNodeUnselect=new e.vpe,this.onNodeSelect=new e.vpe,this.expandedNodes=[],this.onModelChange=()=>{},this.onModelTouched=()=>{}}get options(){return this._options}set options(t){this._options=t,this.updateTreeState()}ngOnInit(){this.updateTreeState()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){default:this.valueTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"empty":this.emptyTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}onOverlayAnimationStart(t){"visible"===t.toState&&(this.overlayEl=t.element,this.onOverlayEnter())}onOverlayAnimationDone(t){"void"===t.toState&&this.onOverlayLeave()}onSelectionChange(t){this.value=t,this.onModelChange(this.value),this.cd.markForCheck()}onClick(t){!this.disabled&&(!this.overlayEl||!this.overlayEl.contains(t.target))&&!d.p.hasClass(t.target,"p-treeselect-close")&&(this.overlayVisible?this.hide():this.show(),this.focusInput.nativeElement.focus())}onKeyDown(t){switch(t.which){case 40:if(!this.overlayVisible&&t.altKey)this.show(),t.preventDefault();else if(this.overlayVisible&&this.overlayEl){let n=d.p.getFocusableElements(this.overlayEl);n&&n.length>0&&n[0].focus(),t.preventDefault()}break;case 32:this.overlayVisible||(this.show(),t.preventDefault());break;case 13:case 27:this.overlayVisible&&(this.hide(),t.preventDefault());break;case 9:this.hide()}}show(){this.overlayVisible=!0}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}updateTreeState(){if(this.value){let t="single"===this.selectionMode?[this.value]:[...this.value];this.resetExpandedNodes(),t&&this.options&&this.updateTreeBranchState(null,null,t)}}updateTreeBranchState(t,n,l){if(t){if(this.isSelected(t)&&(this.expandPath(n),l.splice(l.indexOf(t),1)),l.length>0&&t.children)for(let s of t.children)n.push(t),this.updateTreeBranchState(s,n,l)}else for(let s of this.options)this.updateTreeBranchState(s,[],l)}expandPath(t){for(let n of t)n.expanded=!0;this.expandedNodes=[...t]}nodeExpand(t){this.onNodeExpand.emit(t),this.expandedNodes.push(t.node)}nodeCollapse(t){this.onNodeCollapse.emit(t),this.expandedNodes.splice(this.expandedNodes.indexOf(t.node),1)}resetExpandedNodes(){for(let t of this.expandedNodes)t.expanded=!1;this.expandedNodes=[]}findSelectedNodes(t,n,l){if(t){if(this.isSelected(t)&&(l.push(t),delete n[t.key]),Object.keys(n).length&&t.children)for(let s of t.children)this.findSelectedNodes(s,n,l)}else for(let s of this.options)this.findSelectedNodes(s,n,l)}isSelected(t){return-1!=this.findIndexInSelection(t)}findIndexInSelection(t){let n=-1;if(this.value)if("single"===this.selectionMode)n=this.value.key&&this.value.key===t.key||this.value==t?0:-1;else for(let l=0;l<this.value.length;l++){let s=this.value[l];if(s.key&&s.key===t.key||s==t){n=l;break}}return n}onSelect(t){this.onNodeSelect.emit(t),"single"===this.selectionMode&&this.hide()}onUnselect(t){this.onNodeUnselect.emit(t)}onOverlayEnter(){_.P9.set("overlay",this.overlayEl,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.onShow.emit()}onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),_.P9.clear(this.overlayEl),this.overlayEl=null,this.onHide.emit()}onFocus(){this.focused=!0}onBlur(){this.focused=!1}writeValue(t){this.value=t,this.updateTreeState(),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.overlayEl):document.getElementById(this.appendTo).appendChild(this.overlayEl))}restoreAppend(){this.overlayEl&&this.appendTo&&("body"===this.appendTo?document.body.removeChild(this.overlayEl):document.getElementById(this.appendTo).removeChild(this.overlayEl))}alignOverlay(){this.appendTo?(d.p.absolutePosition(this.overlayEl,this.containerEl.nativeElement),this.overlayEl.style.minWidth=d.p.getOuterWidth(this.containerEl.nativeElement)+"px"):d.p.relativePosition(this.overlayEl,this.containerEl.nativeElement)}bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=t=>{this.overlayVisible&&this.overlayEl&&!this.containerEl.nativeElement.contains(t.target)&&!this.overlayEl.contains(t.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))}unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new y.V(this.containerEl.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&this.hide()},window.addEventListener("resize",this.resizeListener))}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}ngOnDestroy(){this.restoreAppend(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlayEl&&(_.P9.clear(this.overlayEl),this.overlayEl=null)}containerClass(){return{"p-treeselect p-component p-inputwrapper":!0,"p-treeselect-chip":"chip"===this.display,"p-disabled":this.disabled,"p-focus":this.focused}}labelClass(){return{"p-treeselect-label":!0,"p-placeholder":this.label===this.placeholder,"p-treeselect-label-empty":!this.placeholder&&this.emptyValue}}get emptyMessageText(){return this.emptyMessage||this.config.getTranslation(p.ws.EMPTY_MESSAGE)}get emptyValue(){return!this.value||0===Object.keys(this.value).length}get emptyOptions(){return!this.options||0===this.options.length}get label(){let t=this.value||[];return t.length?t.map(n=>n.label).join(", "):"single"===this.selectionMode&&this.value?t.label:this.placeholder}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.b4),e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(p.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-treeSelect"]],contentQueries:function(t,n,l){if(1&t&&e.Suo(l,p.jx,4),2&t){let s;e.iGM(s=e.CRH())&&(n.templates=s)}},viewQuery:function(t,n){if(1&t&&(e.Gf(E,5),e.Gf(S,5)),2&t){let l;e.iGM(l=e.CRH())&&(n.containerEl=l.first),e.iGM(l=e.CRH())&&(n.focusInput=l.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:4,hostBindings:function(t,n){2&t&&e.ekj("p-inputwrapper-filled",!n.emptyValue)("p-inputwrapper-focus",n.focused||n.overlayVisible)},inputs:{type:"type",inputId:"inputId",scrollHeight:"scrollHeight",disabled:"disabled",metaKeySelection:"metaKeySelection",display:"display",selectionMode:"selectionMode",tabindex:"tabindex",ariaLabelledBy:"ariaLabelledBy",placeholder:"placeholder",panelClass:"panelClass",emptyMessage:"emptyMessage",appendTo:"appendTo",propagateSelectionDown:"propagateSelectionDown",propagateSelectionUp:"propagateSelectionUp",options:"options",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onNodeExpand:"onNodeExpand",onNodeCollapse:"onNodeCollapse",onShow:"onShow",onHide:"onHide",onNodeUnselect:"onNodeUnselect",onNodeSelect:"onNodeSelect"},features:[e._Bn([V])],decls:13,vars:10,consts:[[3,"ngClass","click"],["container",""],[1,"p-hidden-accessible"],["type","text","role","listbox","readonly","","aria-haspopup","true",3,"disabled","focus","blur","keydown"],["focusInput",""],[1,"p-treeselect-label-container"],[3,"ngClass"],[4,"ngIf","ngIfElse"],["defaultValueTemplate",""],[1,"p-treeselect-trigger"],[1,"p-treeselect-trigger-icon","pi","pi-chevron-down"],["class","p-treeselect-panel p-component",3,"click",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["chipsValueTemplate",""],["class","p-treeselect-token",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"p-treeselect-token"],[1,"p-treeselect-token-label"],[1,"p-treeselect-panel","p-component",3,"click"],["overlayRef",""],[1,"p-treeselect-items-wrapper",3,"ngStyle"],[3,"value","propagateSelectionDown","propagateSelectionUp","selectionMode","selection","metaKeySelection","selectionChange","onNodeExpand","onNodeCollapse","onNodeSelect","onNodeUnselect"],["class","p-treeselect-empty-message",4,"ngIf"],[1,"p-treeselect-empty-message"],[4,"ngTemplateOutlet"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0,1),e.NdJ("click",function(s){return n.onClick(s)}),e.TgZ(2,"div",2),e.TgZ(3,"input",3,4),e.NdJ("focus",function(){return n.onFocus()})("blur",function(){return n.onBlur()})("keydown",function(s){return n.onKeyDown(s)}),e.qZA(),e.qZA(),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.YNc(7,O,2,5,"ng-container",7),e.YNc(8,L,3,2,"ng-template",null,8,e.W1O),e.qZA(),e.qZA(),e.TgZ(10,"div",9),e._UZ(11,"span",10),e.qZA(),e.YNc(12,R,7,26,"div",11),e.qZA()),2&t){const l=e.MAs(9);e.Q6J("ngClass",n.containerClass()),e.xp6(3),e.Q6J("disabled",n.disabled),e.uIk("id",n.inputId)("tabindex",n.tabindex)("aria-expanded",n.overlayVisible)("aria-labelledby",n.ariaLabelledBy),e.xp6(3),e.Q6J("ngClass",n.labelClass()),e.xp6(1),e.Q6J("ngIf",n.valueTemplate)("ngIfElse",l),e.xp6(5),e.Q6J("ngIf",n.overlayVisible)}},directives:[c.mk,c.O5,c.tP,c.sg,c.PC,x.mp],styles:[".p-treeselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-treeselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-treeselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer}.p-treeselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-treeselect-label-empty{overflow:hidden;visibility:hidden}.p-treeselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-treeselect .p-treeselect-panel{min-width:100%}.p-treeselect-panel{position:absolute;top:0;left:0}.p-treeselect-items-wrapper{overflow:auto}.p-fluid .p-treeselect{display:flex}\n"],encapsulation:2,data:{animation:[(0,r.X$)("overlayAnimation",[(0,r.eR)(":enter",[(0,r.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,r.jt)("{{showTransitionParams}}")]),(0,r.eR)(":leave",[(0,r.jt)("{{hideTransitionParams}}",(0,r.oB)({opacity:0}))])])]},changeDetection:0}),i})(),Z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[c.ez,g.T,p.m8,u.xc],p.m8,u.xc]}),i})()}}]);
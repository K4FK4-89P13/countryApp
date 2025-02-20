"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[199],{5199:(ut,y,a)=>{a.r(y),a.d(y,{CountriesModule:()=>ct});var c=a(6895),p=a(7649),t=a(8256),Z=a(262),v=a(9646),q=a(727);class b extends q.w0{constructor(e,i){super()}schedule(e,i=0){return this}}const d={setInterval(s,e,...i){const{delegate:n}=d;return n?.setInterval?n.setInterval(s,e,...i):setInterval(s,e,...i)},clearInterval(s){const{delegate:e}=d;return(e?.clearInterval||clearInterval)(s)},delegate:void 0};var w=a(8737);const A={now:()=>(A.delegate||Date).now(),delegate:void 0};class h{constructor(e,i=h.now){this.schedulerActionCtor=e,this.now=i}schedule(e,i=0,n){return new this.schedulerActionCtor(this,e).schedule(n,i)}}h.now=A.now;const T=new class O extends h{constructor(e,i=h.now){super(e,i),this.actions=[],this._active=!1}flush(e){const{actions:i}=this;if(this._active)return void i.push(e);let n;this._active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=i.shift());if(this._active=!1,n){for(;e=i.shift();)e.unsubscribe();throw n}}}(class I extends b{constructor(e,i){super(e,i),this.scheduler=e,this.work=i,this.pending=!1}schedule(e,i=0){var n;if(this.closed)return this;this.state=e;const r=this.id,o=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(o,r,i)),this.pending=!0,this.delay=i,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(o,this.id,i),this}requestAsyncId(e,i,n=0){return d.setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,i,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return i;null!=i&&d.clearInterval(i)}execute(e,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,i);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,i){let r,n=!1;try{this.work(e)}catch(o){n=!0,r=o||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:e,scheduler:i}=this,{actions:n}=i;this.work=this.state=this.scheduler=null,this.pending=!1,(0,w.P)(n,this),null!=e&&(this.id=this.recycleAsyncId(i,e,null)),this.delay=null,super.unsubscribe()}}}),B=T;var J=a(7272),x=a(5698),F=a(4482),P=a(5403),L=a(5032),E=a(9718),V=a(5577);function U(s,e){return e?i=>(0,J.z)(e.pipe((0,x.q)(1),function N(){return(0,F.e)((s,e)=>{s.subscribe((0,P.x)(e,L.Z))})}()),i.pipe(U(s))):(0,V.z)((i,n)=>s(i,n).pipe((0,x.q)(1),(0,E.h)(i)))}var Y=a(9751),Q=a(3532);var z=a(4004),M=a(529);let g=(()=>{const e=class{constructor(n){this.http=n,this.apiUrl="https://restcountries.com/v3.1"}getCountriesRequest(n){return this.http.get(n).pipe((0,Z.K)(()=>(0,v.of)([])),function $(s,e=T){const i=function R(s=0,e,i=B){let n=-1;return null!=e&&((0,Q.K)(e)?i=e:n=e),new Y.y(r=>{let o=function S(s){return s instanceof Date&&!isNaN(s)}(s)?+s-i.now():s;o<0&&(o=0);let l=0;return i.schedule(function(){r.closed||(r.next(l++),0<=n?this.schedule(void 0,n):r.complete())},o)})}(s,e);return U(()=>i)}(1e3))}searchCountryByAlphaCode(n){return this.http.get(`${this.apiUrl}/alpha/${n}`).pipe((0,z.U)(r=>r.length>0?r[0]:null),(0,Z.K)(()=>(0,v.of)(null)))}searchCapital(n){return this.getCountriesRequest(`${this.apiUrl}/capital/${n}`)}searchCountry(n){return this.getCountriesRequest(`${this.apiUrl}/name/${n}`)}searchRegion(n){return this.getCountriesRequest(`${this.apiUrl}/region/${n}`)}};let s=e;return e.\u0275fac=function(r){return new(r||e)(t.LFG(M.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),s})(),C=(()=>{const e=class{constructor(){this.placeholder="",this.onValue=new t.vpe}emitValue(n){this.onValue.emit(n)}};let s=e;return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder"},outputs:{onValue:"onValue"},decls:2,vars:1,consts:[["type","text",1,"form-control",3,"placeholder","keyup.enter"],["txtInput",""]],template:function(r,o){if(1&r){const l=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup.enter",function(){t.CHM(l);const lt=t.MAs(1);return t.KtG(o.emitValue(lt.value))}),t.qZA()}2&r&&t.Q6J("placeholder",o.placeholder)},encapsulation:2}),s})(),f=(()=>{const e=class{};let s=e;return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["shared-loading-spinner"]],decls:9,vars:0,consts:[[1,"spinner-container"],["width","30","height","30","viewBox","0 0 38 38","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd"],["transform","translate(1 1)","stroke-width","2"],["stroke-opacity",".5","cx","18","cy","18","r","18"],["d","M36 18c0-9.94-8.06-18-18-18"],["attributeName","transform","type","rotate","from","0 18 18","to","360 18 18","dur","1s","repeatCount","indefinite"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2,"Buscando"),t.qZA(),t.O4$(),t.TgZ(3,"svg",1)(4,"g",2)(5,"g",3),t._UZ(6,"circle",4),t.TgZ(7,"path",5),t._UZ(8,"animateTransform",6),t.qZA()()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px}span[_ngcontent-%COMP%]{margin-right:5px}"]}),s})();function X(s,e){1&s&&(t.TgZ(0,"div",2),t._uU(1," No hay pa\xedses que mostrar\n"),t.qZA())}const _=function(s){return["/countries/by",s]};function D(s,e){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",5),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"number"),t.qZA(),t.TgZ(12,"td")(13,"a",6),t._uU(14,"Ver m\xe1s"),t.qZA()()()),2&s){const i=e.$implicit,n=e.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Q6J("src",i.flags.svg,t.LSH)("alt",i.flags.alt),t.xp6(2),t.Oqu(i.name.common),t.xp6(2),t.Oqu(i.capital),t.xp6(2),t.Oqu(t.lcZ(11,7,i.population)),t.xp6(3),t.Q6J("routerLink",t.VKq(9,_,i.cca3))}}function j(s,e){if(1&s&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Bandera"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Nombre"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Capital"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Poblaci\xf3n"),t.qZA(),t._UZ(13,"th"),t.qZA()(),t.TgZ(14,"tbody"),t.YNc(15,D,15,11,"tr",4),t.qZA()()),2&s){const i=t.oxw();t.xp6(15),t.Q6J("ngForOf",i.countries)}}let m=(()=>{const e=class{constructor(){this.countries=[]}};let s=e;return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(r,o){if(1&r&&(t.YNc(0,X,2,0,"div",0),t.YNc(1,j,16,1,"ng-template",null,1,t.W1O)),2&r){const l=t.MAs(2);t.Q6J("ngIf",0===o.countries.length)("ngIfElse",l)}},dependencies:[c.sg,c.O5,p.rH,c.JJ],styles:["img[_ngcontent-%COMP%]{width:25px}"]}),s})();function K(s,e){1&s&&t._UZ(0,"shared-loading-spinner")}let H=(()=>{const e=class{constructor(n){this.countriesService=n,this.countries=[],this.isLoading=!1}searchByCapital(n){this.isLoading=!0,console.log({term:n}),this.countriesService.searchCapital(n).subscribe(r=>{this.countries=r,this.isLoading=!1})}};let s=e;return e.\u0275fac=function(r){return new(r||e)(t.Y36(g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["countries-by-capital-page"]],decls:11,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","por capital",3,"onValue"],[4,"ngIf"],[3,"countries"]],template:function(r,o){1&r&&(t.TgZ(0,"h2"),t._uU(1,"Por Capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(u){return o.searchByCapital(u)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr"),t.YNc(9,K,1,0,"shared-loading-spinner",3),t._UZ(10,"countries-table",4),t.qZA()()),2&r&&(t.xp6(9),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("countries",o.countries))},dependencies:[c.O5,C,f,m],encapsulation:2}),s})();function W(s,e){1&s&&t._UZ(0,"shared-loading-spinner")}let G=(()=>{const e=class{constructor(n){this.countriesService=n,this.isLoading=!1,this.countries=[]}searchByCountry(n){this.isLoading=!0,this.countriesService.searchCountry(n).subscribe(r=>{this.countries=r,this.isLoading=!1})}};let s=e;return e.\u0275fac=function(r){return new(r||e)(t.Y36(g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-country-page"]],decls:11,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","por pa\xeds",3,"onValue"],[4,"ngIf"],[3,"countries"]],template:function(r,o){1&r&&(t.TgZ(0,"h2"),t._uU(1,"Por Pa\xeds"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(u){return o.searchByCountry(u)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr"),t.YNc(9,W,1,0,"shared-loading-spinner",3),t._UZ(10,"countries-table",4),t.qZA()()),2&r&&(t.xp6(9),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("countries",o.countries))},dependencies:[c.O5,C,f,m],encapsulation:2}),s})();function k(s,e){if(1&s&&(t.TgZ(0,"option",7),t._uU(1),t.qZA()),2&s){const i=e.$implicit;t.Q6J("value",i),t.xp6(1),t.hij("",i," ")}}function tt(s,e){1&s&&t._UZ(0,"shared-loading-spinner")}let et=(()=>{const e=class{constructor(n){this.countriesService=n,this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoading=!1,this.countries=[]}searchByRegion(n){this.isLoading=!0,this.countriesService.searchRegion(n.target.value).subscribe(o=>{this.countries=o,this.isLoading=!1})}};let s=e;return e.\u0275fac=function(r){return new(r||e)(t.Y36(g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-region-page"]],decls:14,vars:3,consts:[[1,"row"],[1,"col"],[1,"form-control",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"countries"],[3,"value"]],template:function(r,o){1&r&&(t.TgZ(0,"h2"),t._uU(1,"Por Regi\xf3n"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"select",2),t.NdJ("change",function(u){return o.searchByRegion(u)}),t.TgZ(6,"option",3),t._uU(7,"Seleccione una region"),t.qZA(),t.YNc(8,k,2,2,"option",4),t.qZA()()(),t.TgZ(9,"div",0)(10,"div",1),t._UZ(11,"hr"),t.YNc(12,tt,1,0,"shared-loading-spinner",5),t._UZ(13,"countries-table",6),t.qZA()()),2&r&&(t.xp6(8),t.Q6J("ngForOf",o.regions),t.xp6(4),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("countries",o.countries))},dependencies:[c.sg,c.O5,f,m],encapsulation:2}),s})();var nt=a(3900);function st(s,e){1&s&&(t.TgZ(0,"div",2),t._uU(1," Espere por favor "),t.qZA())}function it(s,e){if(1&s&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),t._uU(4,"Pa\xeds: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()()()(),t.TgZ(7,"div",3)(8,"div",5)(9,"h3"),t._uU(10,"Bandera"),t.qZA(),t._UZ(11,"img",6),t.qZA(),t.TgZ(12,"div",7)(13,"h3"),t._uU(14,"Informaci\xf3n"),t.qZA(),t.TgZ(15,"ul",8)(16,"li",9)(17,"strong"),t._uU(18,"Poblaci\xf3n: "),t.qZA(),t._uU(19),t.ALo(20,"number"),t.qZA(),t.TgZ(21,"li",9)(22,"strong"),t._uU(23,"C\xf3digo: "),t.qZA(),t._uU(24),t.qZA()()()(),t.TgZ(25,"div",10)(26,"div",7)(27,"h3"),t._uU(28,"Traducciones"),t.qZA(),t.TgZ(29,"div",11)(30,"span",12),t._uU(31),t.qZA(),t.TgZ(32,"span",12),t._uU(33),t.qZA(),t.TgZ(34,"span",12),t._uU(35),t.qZA(),t.TgZ(36,"span",12),t._uU(37),t.qZA(),t.TgZ(38,"span",12),t._uU(39),t.qZA(),t.TgZ(40,"span",12),t._uU(41),t.qZA(),t.TgZ(42,"span",12),t._uU(43),t.qZA(),t.TgZ(44,"span",12),t._uU(45),t.qZA()()()()()),2&s){const i=t.oxw();t.xp6(6),t.Oqu(i.country.name.common),t.xp6(5),t.Q6J("src",i.country.flags.svg,t.LSH)("alt",i.country.name.common),t.xp6(8),t.hij(" ",t.lcZ(20,13,i.country.population)," "),t.xp6(5),t.hij(" ",i.country.cca3," "),t.xp6(7),t.Oqu(i.country.translations.ara.common),t.xp6(2),t.Oqu(i.country.translations.bre.common),t.xp6(2),t.Oqu(i.country.translations.ces.common),t.xp6(2),t.Oqu(i.country.translations.cym.common),t.xp6(2),t.Oqu(i.country.translations.deu.common),t.xp6(2),t.Oqu(i.country.translations.est.common),t.xp6(2),t.Oqu(i.country.translations.fin.common),t.xp6(2),t.Oqu(i.country.translations.ita.common)}}const rt=[{path:"by-capital",component:H},{path:"by-country",component:G},{path:"by-region",component:et},{path:"by/:id",component:(()=>{const e=class{constructor(n,r,o){this.activatedRoute=n,this.router=r,this.countriesService=o}ngOnInit(){this.activatedRoute.params.pipe((0,nt.w)(({id:n})=>this.countriesService.searchCountryByAlphaCode(n))).subscribe(n=>n?(console.log(n),this.country=n):this.router.navigateByUrl(""))}};let s=e;return e.\u0275fac=function(r){return new(r||e)(t.Y36(p.gz),t.Y36(p.F0),t.Y36(g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(r,o){if(1&r&&(t.YNc(0,st,2,0,"ng-template",null,0,t.W1O),t.YNc(2,it,46,15,"div",1)),2&r){const l=t.MAs(1);t.xp6(2),t.Q6J("ngIf",o.country)("ngIfElse",l)}},dependencies:[c.O5,c.JJ],encapsulation:2}),s})()},{path:"**",redirectTo:"by-capital"}];let ot=(()=>{const e=class{};let s=e;return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(rt),p.Bz]}),s})();var at=a(4466);let ct=(()=>{const e=class{};let s=e;return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,ot,at.m]}),s})()}}]);
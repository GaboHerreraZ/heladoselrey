(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{nmNk:function(o,e,t){"use strict";t.r(e),t.d(e,"ContactoModule",function(){return v});var n=t("ofXK"),r=t("tyNb"),a=t("3Pt+"),i=t("fXoL"),c=t("kmnG"),b=t("d3UM"),m=t("FKr1"),s=t("qFsG"),l=t("bTqV");const d=["form"];function u(o,e){1&o&&(i.Pb(0,"mat-error"),i.mc(1,"Por favor ingrese el asunto"),i.Ob())}function f(o,e){1&o&&(i.Pb(0,"mat-error"),i.mc(1,"Por favor ingrese un nombre"),i.Ob())}function p(o,e){1&o&&(i.Pb(0,"mat-error"),i.mc(1,"Por favor ingrese un n\xfamero de tel\xe9fono"),i.Ob())}function g(o,e){1&o&&(i.Pb(0,"mat-error"),i.mc(1,"Dejanos un mensaje"),i.Ob())}const P=[{path:"",component:(()=>{class o{constructor(o){this.fb=o}get nombre(){return this.formContacto.get("nombre")}get telefono(){return this.formContacto.get("telefono")}get mensaje(){return this.formContacto.get("mensaje")}get asunto(){return this.formContacto.get("asunto")}ngOnInit(){this.formContacto=this.createFormContacto(),console.log(this.formContacto.value)}enviarContactor(){this.formContacto.invalid||(console.log(this.formContacto.value),this.form.resetForm())}createFormContacto(){return this.fb.group({asunto:["",a.l.required],nombre:["",a.l.required],telefono:["",a.l.required],email:[""],mensaje:["",a.l.required]})}}return o.\u0275fac=function(e){return new(e||o)(i.Kb(a.b))},o.\u0275cmp=i.Eb({type:o,selectors:[["app-contacto"]],viewQuery:function(o,e){if(1&o&&i.qc(d,!0),2&o){let o;i.dc(o=i.Xb())&&(e.form=o.first)}},decls:82,vars:5,consts:[[1,"contacto-imagen-heladeria-el-rey"],[1,"encabezado-contacto"],[1,"row","center-xs","middle-xs"],[1,"col-xs-8"],[1,"box"],[1,"descripcion-contacto-helados-el-rey"],[1,"formulario-contacto-helados-el-rey"],[1,"container"],[1,"row"],[1,"col-md-6"],[1,"formulario-contacto"],[1,"titulo-contacto"],[1,"descripcion-busqueda-helados"],[1,"direccion-helados-el-rey"],[1,"ubicacion-direccion"],[1,"header-direccion"],["src","./assets/img/whatsapp.png","alt",""],[3,"formGroup","submit"],["form","ngForm"],["formControlName","asunto","placeholder","Asunto"],["value","Cotizaci\xf3n"],["value","Punto de venta"],["value","Distribuidor"],[4,"ngIf"],["formControlName","nombre","matInput","","maxlength","10","placeholder","Nombre"],["input",""],["formControlName","telefono","matInput","","type","number","placeholder","Tel\xe9fono"],["formControlName","email","matInput","","maxlength","10","placeholder","Email"],["formControlName","mensaje","matInput","","placeholder","Mensaje"],["mat-stroked-button","","type","submit","title","Enviar",1,"button-style"],[1,"ubicacion-maps-helados-el-rey"],["src",i.pc("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5317926063294!2d-73.84073468584822!3d7.06416641860298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4293558053620b%3A0x8beb0a283f6f4da9!2sCl.%2054%20%2336e-95%2C%20Barrancabermeja%2C%20Santander%2C%20Colombia!5e0!3m2!1ses-419!2ses!4v1609781443726!5m2!1ses-419!2ses"),"width","600","height","450","frameborder","0","allowfullscreen","","aria-hidden","false","tabindex","0",2,"border","0"]],template:function(o,e){1&o&&(i.Lb(0,"div",0),i.Pb(1,"section",1),i.Pb(2,"div",2),i.Pb(3,"div",3),i.Pb(4,"div",4),i.Pb(5,"p",5),i.mc(6,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(7,"section",6),i.Pb(8,"div",7),i.Pb(9,"div",8),i.Pb(10,"div",9),i.Pb(11,"div",4),i.Pb(12,"section",10),i.Pb(13,"h4",11),i.mc(14," \xbfNos est\xe1s buscando? "),i.Ob(),i.Pb(15,"p",12),i.mc(16," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been "),i.Ob(),i.Pb(17,"address",13),i.Pb(18,"p",14),i.Pb(19,"span"),i.mc(20,"Estamos"),i.Ob(),i.mc(21," ubicados en:"),i.Ob(),i.Pb(22,"div",15),i.Pb(23,"p"),i.Pb(24,"strong"),i.mc(25,"Direcci\xf3n:"),i.Ob(),i.mc(26," Calle 57 #36 e 95 - Barrio santander"),i.Ob(),i.Pb(27,"p"),i.Pb(28,"strong"),i.mc(29,"Telefonos:"),i.Ob(),i.mc(30,"602395785 - 311 521 3140 "),i.Pb(31,"span"),i.Lb(32,"img",16),i.Ob(),i.Ob(),i.Pb(33,"p"),i.Pb(34,"strong"),i.mc(35,"Email:"),i.Ob(),i.mc(36,"heladoselrey@gmail.com"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(37,"div",9),i.Pb(38,"div",4),i.Pb(39,"section",10),i.Pb(40,"h4",11),i.mc(41," Solicita m\xe1s informaci\xf3n: "),i.Ob(),i.Pb(42,"form",17,18),i.Wb("submit",function(){return e.enviarContactor()}),i.Pb(44,"mat-form-field"),i.Pb(45,"mat-label"),i.mc(46,"Asunto"),i.Ob(),i.Pb(47,"mat-select",19),i.Pb(48,"mat-option",20),i.mc(49,"Cotizaci\xf3n"),i.Ob(),i.Pb(50,"mat-option",21),i.mc(51,"Punto de venta"),i.Ob(),i.Pb(52,"mat-option",22),i.mc(53,"Distribuidor"),i.Ob(),i.Ob(),i.lc(54,u,2,0,"mat-error",23),i.Ob(),i.Pb(55,"mat-form-field"),i.Pb(56,"mat-label"),i.mc(57,"Nombre"),i.Ob(),i.Lb(58,"input",24,25),i.lc(60,f,2,0,"mat-error",23),i.Ob(),i.Pb(61,"mat-form-field"),i.Pb(62,"mat-label"),i.mc(63,"Telefono"),i.Ob(),i.Lb(64,"input",26,25),i.lc(66,p,2,0,"mat-error",23),i.Ob(),i.Pb(67,"mat-form-field"),i.Pb(68,"mat-label"),i.mc(69,"Email"),i.Ob(),i.Lb(70,"input",27,25),i.Ob(),i.Pb(72,"mat-form-field"),i.Pb(73,"mat-label"),i.mc(74,"Mensaje"),i.Ob(),i.Lb(75,"textarea",28,25),i.lc(77,g,2,0,"mat-error",23),i.Ob(),i.Pb(78,"button",29),i.mc(79," Enviar "),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(80,"section",30),i.Lb(81,"iframe",31),i.Ob(),i.Ob(),i.Ob()),2&o&&(i.zb(42),i.bc("formGroup",e.formContacto),i.zb(12),i.bc("ngIf",e.asunto.hasError("required")),i.zb(6),i.bc("ngIf",e.nombre.hasError("required")),i.zb(6),i.bc("ngIf",e.telefono.hasError("required")),i.zb(11),i.bc("ngIf",e.mensaje.hasError("required")))},directives:[a.m,a.h,a.d,c.c,c.f,b.a,a.g,a.c,m.e,n.i,a.a,s.a,a.e,a.j,l.a,c.b],styles:[".contacto-imagen-heladeria-el-rey[_ngcontent-%COMP%]{background-image:url(contacto-helados-el-rey.b89bd5c09faf7b632aab.jpg);background-size:100% 100vh;background-attachment:fixed;background-repeat:no-repeat;z-index:-1;width:100%;height:100vh;position:absolute;top:0}.encabezado-contacto[_ngcontent-%COMP%]{display:flex;position:block;height:70vh;width:auto;margin:auto;padding:auto}.descripcion-contacto-helados-el-rey[_ngcontent-%COMP%]{width:100%;margin-top:auto;font-size:25px;font-family:Amita,cursive;color:#821110;text-align:center}.titulo-contacto[_ngcontent-%COMP%]{font-family:Amita,cursive;color:#821110;font-size:32px}.formulario-contacto-helados-el-rey[_ngcontent-%COMP%]{background-color:#fff;padding:20px 0}.formulario-contacto[_ngcontent-%COMP%]{margin:50px 30px}.descripcion-busqueda-helados[_ngcontent-%COMP%]{font-family:Amita,cursive;color:#821110;font-size:20px;text-align:justify}.container[_ngcontent-%COMP%]{margin:auto;width:90%;color:#821110}.direccion-helados-el-rey[_ngcontent-%COMP%]{margin-bottom:0}.ubicacion-direccion[_ngcontent-%COMP%]{margin:10px 0 0;font-size:18px}.header-direccion[_ngcontent-%COMP%]{margin-top:20px;font-size:18px}p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Amita,cursive;font-size:18px;color:#caa600}.ubicacion-maps-helados-el-rey[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%}"]}),o})()}];let h=(()=>{class o{}return o.\u0275mod=i.Ib({type:o}),o.\u0275inj=i.Hb({factory:function(e){return new(e||o)},imports:[[r.g.forChild(P)],r.g]}),o})();var O=t("YLTu"),C=t("4q/4");let v=(()=>{class o{}return o.\u0275mod=i.Ib({type:o}),o.\u0275inj=i.Hb({factory:function(e){return new(e||o)},imports:[[n.b,C.a,h,O.a]]}),o})()}}]);
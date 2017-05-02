webpackJsonp([0],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_form__ = __webpack_require__(260);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFormModule", function() { return MyFormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyFormModule = (function () {
    function MyFormModule() {
    }
    return MyFormModule;
}());
MyFormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_form__["a" /* MyFormPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_form__["a" /* MyFormPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__my_form__["a" /* MyFormPage */]
        ]
    })
], MyFormModule);

//# sourceMappingURL=my-form.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFormPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyFormPage = (function () {
    function MyFormPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.myForm = this.createMyForm();
    }
    MyFormPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    MyFormPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            dateBirth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            passwordRetry: this.formBuilder.group({
                password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
                passwordConfirmation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]
            }),
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
        });
    };
    return MyFormPage;
}());
MyFormPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-form',template:/*ion-inline-start:"/Users/nicolas/develop/projects/ion-book/demos/demo101/src/pages/my-form/my-form.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Formulario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="myForm" (ngSubmit)="saveData()">\n    <ion-list>\n      <ion-item>\n        <ion-icon name="person" item-left></ion-icon>\n        <ion-label stacked>Nombres:</ion-label>\n        <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="person" item-left></ion-icon>\n        <ion-label stacked>Apellidos:</ion-label>\n        <ion-input formControlName="lastName" type="text" placeholder="Apellidos"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="mail" item-left></ion-icon>\n        <ion-label stacked>Correo electronico:</ion-label>\n        <ion-input formControlName="email" type="email" placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="calendar" item-left></ion-icon>\n        <ion-label stacked>Fecha de nacimiento:</ion-label>\n        <ion-datetime formControlName="dateBirth" displayFormat="MM-DD-YYYY" placeholder="MM-DD-YYY"></ion-datetime>\n      </ion-item>\n      <div formGroupName="passwordRetry">\n        <ion-item>\n          <ion-icon name="eye" item-left></ion-icon>\n          <ion-label stacked>Contraseña:</ion-label>\n          <ion-input formControlName="password" type="password" placeholder="Contraseña"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="eye" item-left></ion-icon>\n          <ion-label stacked>Confirmar contraseña:</ion-label>\n          <ion-input formControlName="passwordConfirmation" type="password" placeholder="Confirmar contraseña"></ion-input>\n        </ion-item>\n      </div>\n      <ion-row radio-group formControlName="gender">\n        <ion-item>\n          <ion-icon name="woman" item-left></ion-icon>\n          <ion-label>Mujer</ion-label>\n          <ion-radio value="2"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="man" item-left></ion-icon>\n          <ion-label>Hombre</ion-label>\n          <ion-radio value="1"></ion-radio>\n        </ion-item>\n      </ion-row>\n    </ion-list>\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!myForm.valid">Guardar</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/nicolas/develop/projects/ion-book/demos/demo101/src/pages/my-form/my-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]])
], MyFormPage);

//# sourceMappingURL=my-form.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_1 = require("./customer");
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", customer_1.Customer)
    ], CustomerComponent.prototype, "customer", void 0);
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'customer-detail',
            template: "<div *ngIf=\"selectedCustomer\">\n    <h2>{{selectedCustomer.PlistaProduct}} details!</h2>\n     <div><label>a: </label>{{selectedCustomer.a}}</div>\n       <div>\n        <label>PlistaProduct: </label>\n        <input [(ngModel)]=\"selectedCustomer.PlistaProduct\" placeholder=\"PlistaProduct\"/>\n     </div>\n </div>"
        })
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map
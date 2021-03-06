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
const core_1 = require('@angular/core');
let OsbComponentTest = class OsbComponentTest {
    constructor() {
        this.title = '';
        this.message = '';
        this.title = 'OSB Component Test';
        this.message = 'Loaded';
        console.log(this);
    }
};
OsbComponentTest = __decorate([
    core_1.Component({
        selector: 'osb-component-test',
        templateUrl: 'node_modules/osb-component-test/lib/OsbComponentTest.html',
        styleUrls: ['node_modules/osb-component-test/lib/OsbComponentTest.css']
    }), 
    __metadata('design:paramtypes', [])
], OsbComponentTest);
exports.OsbComponentTest = OsbComponentTest;
//# sourceMappingURL=OsbComponentTest.js.map
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
exports.TopicSetSchema = exports.TopicSet = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TopicSet = class TopicSet {
};
exports.TopicSet = TopicSet;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TopicSet.prototype, "topic", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TopicSet.prototype, "topicTranslation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TopicSet.prototype, "sentence", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TopicSet.prototype, "sentenceTranslation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Schema.Types.ObjectId], default: [] }),
    __metadata("design:type", Array)
], TopicSet.prototype, "words", void 0);
exports.TopicSet = TopicSet = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], TopicSet);
exports.TopicSetSchema = mongoose_1.SchemaFactory.createForClass(TopicSet);
//# sourceMappingURL=topic-set.model.js.map
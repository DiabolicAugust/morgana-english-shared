"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedDayWordModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const day_word_model_js_1 = require("./models/day-word.model.js");
exports.SharedDayWordModel = mongoose_1.MongooseModule.forFeature([
    { name: "DayWord", schema: day_word_model_js_1.DayWordSchema },
]);
//# sourceMappingURL=index.js.map
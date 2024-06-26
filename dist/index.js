"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedTopicSetModel = exports.SharedFactModel = exports.SharedSentenceModel = exports.SharedDayWordModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const day_word_model_js_1 = require("./models/day-word.model.js");
const sentence_model_js_1 = require("./models/sentence.model.js");
const fact_model_js_1 = require("./models/fact.model.js");
const word_model_js_1 = require("./models/word.model.js");
const topic_set_model_js_1 = require("./models/topic-set.model.js");
exports.SharedDayWordModel = mongoose_1.MongooseModule.forFeature([
    {
        name: "DayWord",
        schema: day_word_model_js_1.DayWordSchema,
    },
]);
exports.SharedSentenceModel = mongoose_1.MongooseModule.forFeature([
    {
        name: "Sentence",
        schema: sentence_model_js_1.SentenceSchema,
    },
]);
exports.SharedFactModel = mongoose_1.MongooseModule.forFeature([
    {
        name: "Fact",
        schema: fact_model_js_1.FactSchema,
    },
]);
exports.SharedTopicSetModel = mongoose_1.MongooseModule.forFeature([
    {
        name: word_model_js_1.Word.name,
        schema: word_model_js_1.WordSchema,
    },
    {
        name: topic_set_model_js_1.TopicSet.name,
        schema: topic_set_model_js_1.TopicSetSchema,
    },
]);
//# sourceMappingURL=index.js.map
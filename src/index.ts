// src/models/index.ts
import { MongooseModule } from "@nestjs/mongoose";
import { DayWordSchema } from "./models/day-word.model.js";
import { SentenceSchema } from "./models/sentence.model.js";
import { FactSchema } from "./models/fact.model.js";
import { Word, WordSchema } from "./models/word.model.js";
import { TopicSet, TopicSetSchema } from "./models/topic-set.model.js";

export const SharedDayWordModel = MongooseModule.forFeature([
  {
    name: "DayWord",
    schema: DayWordSchema,
  },
]);

export const SharedSentenceModel = MongooseModule.forFeature([
  {
    name: "Sentence",
    schema: SentenceSchema,
  },
]);

export const SharedFactModel = MongooseModule.forFeature([
  {
    name: "Fact",
    schema: FactSchema,
  },
]);

export const SharedTopicSetModel = MongooseModule.forFeature([
  {
    name: Word.name,
    schema: WordSchema,
  },
  {
    name: TopicSet.name,
    schema: TopicSetSchema,
  },
]);

// src/models/index.ts
import { MongooseModule } from "@nestjs/mongoose";
import { DayWordSchema } from "./models/day-word.model.js";
import { SentenceSchema } from "./models/sentence.model.js";

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

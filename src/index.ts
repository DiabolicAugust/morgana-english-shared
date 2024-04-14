// src/models/index.ts
import { MongooseModule } from "@nestjs/mongoose";
import { DayWordSchema } from "./models/day-word.model.js";

export const SharedDayWordModel = MongooseModule.forFeature([
  { name: "DayWord", schema: DayWordSchema },
]);

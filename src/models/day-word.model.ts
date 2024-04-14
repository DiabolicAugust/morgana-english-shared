import { Param } from "@nestjs/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DayWordDocument = HydratedDocument<DayWord>;

@Schema({ timestamps: true })
export class DayWord {
  wordOfDay: string;

  translation: string;

  history: string;

  fact: string;

  @Prop({ default: false })
  used: boolean;

  id: string;
  createdAt: string;
  updatedAt: string;
}

export const DayWordSchema = SchemaFactory.createForClass(DayWord);

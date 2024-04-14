import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DayWordDocument = HydratedDocument<DayWord>;

@Schema({ timestamps: true })
export class DayWord {
  @Prop()
  wordOfDay: string;

  @Prop()
  translation: string;

  @Prop()
  history: string;

  @Prop()
  fact: string;

  @Prop({ default: false })
  used: boolean;

  id: string;
  createdAt: string;
  updatedAt: string;
}

export const DayWordSchema = SchemaFactory.createForClass(DayWord);

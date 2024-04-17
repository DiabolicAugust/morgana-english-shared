import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";

export type WordDocument = HydratedDocument<Word>;

@Schema()
export class Word {
  @Prop({ required: true })
  word: string;

  @Prop({ required: true })
  translation: string;
}

export const WordSchema = SchemaFactory.createForClass(Word);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SentenceDocument = HydratedDocument<Sentence>;

interface Options {
  a: string;
  b: string;
  c: string;
}

@Schema({ timestamps: true })
export class Sentence {
  @Prop({ required: true, unique: true })
  sentence: string;

  @Prop({ required: true })
  answer: string;

  @Prop({ required: true, type: Map, of: String })
  options: Options;

  @Prop({ default: false })
  used: boolean;

  @Prop({ required: true })
  explanation: string;

  id: string;
  createdAt: string;
  updatedAt: string;
}

export const SentenceSchema = SchemaFactory.createForClass(Sentence);

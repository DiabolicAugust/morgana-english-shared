import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SentenceDocument = HydratedDocument<Sentence>;

interface Options {
  a: string;
  b: string;
  c: string;
}

export class Sentence {
  @Prop({ required: true })
  sentence: string;

  @Prop({ required: true })
  answer: string;

  @Prop({ required: true })
  options: Options;

  @Prop({ default: false })
  used: boolean;

  id: string;
  createdAt: string;
  updatedAt: string;
}

export const SentenceSchema = SchemaFactory.createForClass(Sentence);

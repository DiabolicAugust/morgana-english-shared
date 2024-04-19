import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Word, WordSchema } from "./word.model.js";
import { HydratedDocument } from "mongoose";

export type TopicSetDocument = HydratedDocument<TopicSet>;

@Schema({ timestamps: true })
export class TopicSet {
  @Prop({ required: true })
  topic: string;

  @Prop({ required: true })
  topicTranslation: string;

  @Prop({ required: true })
  sentence: string;

  @Prop({ required: true })
  sentenceTranslation: string;

  @Prop({ type: [WordSchema], default: [] })
  words: Word[];
}

export const TopicSetSchema = SchemaFactory.createForClass(TopicSet);

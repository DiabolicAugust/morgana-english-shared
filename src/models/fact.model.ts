import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type FactDocument = HydratedDocument<Fact>;

@Schema({ timestamps: true })
export class Fact {
  @Prop({ required: true, unique: true })
  fact: string;

  @Prop({ required: true })
  translation: string;

  @Prop({ default: false })
  used: boolean;

  id: string;
  createdAt: string;
  updatedAt: string;
}

export const FactSchema = SchemaFactory.createForClass(Fact);

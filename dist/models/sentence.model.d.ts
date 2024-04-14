/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from "mongoose";
export type SentenceDocument = HydratedDocument<Sentence>;
interface Options {
    a: string;
    b: string;
    c: string;
}
export declare class Sentence {
    sentence: string;
    answer: string;
    options: Options;
    used: boolean;
    id: string;
    createdAt: string;
    updatedAt: string;
}
export declare const SentenceSchema: import("mongoose").Schema<Sentence, import("mongoose").Model<Sentence, any, any, any, import("mongoose").Document<unknown, any, Sentence> & Sentence & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Sentence, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Sentence>> & import("mongoose").FlatRecord<Sentence> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export {};

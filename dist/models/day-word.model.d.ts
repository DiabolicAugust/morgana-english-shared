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
export type DayWordDocument = HydratedDocument<DayWord>;
export declare class DayWord {
    wordOfDay: string;
    translation: string;
    history: string;
    fact: string;
    used: boolean;
    id: string;
    createdAt: string;
    updatedAt: string;
}
export declare const DayWordSchema: import("mongoose").Schema<DayWord, import("mongoose").Model<DayWord, any, any, any, import("mongoose").Document<unknown, any, DayWord> & DayWord & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DayWord, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DayWord>> & import("mongoose").FlatRecord<DayWord> & {
    _id: import("mongoose").Types.ObjectId;
}>;

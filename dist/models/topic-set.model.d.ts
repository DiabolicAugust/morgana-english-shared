/// <reference types="mongoose/types/aggregate.js" />
/// <reference types="mongoose/types/callback.js" />
/// <reference types="mongoose/types/collection.js" />
/// <reference types="mongoose/types/connection.js" />
/// <reference types="mongoose/types/cursor.js" />
/// <reference types="mongoose/types/document.js" />
/// <reference types="mongoose/types/error.js" />
/// <reference types="mongoose/types/expressions.js" />
/// <reference types="mongoose/types/helpers.js" />
/// <reference types="mongoose/types/middlewares.js" />
/// <reference types="mongoose/types/indexes.js" />
/// <reference types="mongoose/types/models.js" />
/// <reference types="mongoose/types/mongooseoptions.js" />
/// <reference types="mongoose/types/pipelinestage.js" />
/// <reference types="mongoose/types/populate.js" />
/// <reference types="mongoose/types/query.js" />
/// <reference types="mongoose/types/schemaoptions.js" />
/// <reference types="mongoose/types/schematypes.js" />
/// <reference types="mongoose/types/session.js" />
/// <reference types="mongoose/types/types.js" />
/// <reference types="mongoose/types/utility.js" />
/// <reference types="mongoose/types/validation.js" />
/// <reference types="mongoose/types/virtuals.js" />
/// <reference types="mongoose/types/inferschematype.js" />
import { Word } from "./word.model.js";
import { HydratedDocument, Schema as MSchema } from "mongoose";
export type TopicSetDocument = HydratedDocument<TopicSet>;
export declare class TopicSet {
    topic: string;
    topicTranslation: string;
    sentence: string;
    sentenceTranslation: string;
    words: Word[];
}
export declare const TopicSetSchema: MSchema<TopicSet, import("mongoose").Model<TopicSet, any, any, any, import("mongoose").Document<unknown, any, TopicSet> & TopicSet & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TopicSet, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TopicSet>> & import("mongoose").FlatRecord<TopicSet> & {
    _id: import("mongoose").Types.ObjectId;
}>;

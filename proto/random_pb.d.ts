// package: helloworld
// file: proto/random.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HelloRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRequest;
    static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
    export type AsObject = {
        name: string,
    }
}

export class HelloReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloReply.AsObject;
    static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloReply;
    static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
    export type AsObject = {
        message: string,
    }
}

export class userRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): userRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): userRequest.AsObject;
    static toObject(includeInstance: boolean, msg: userRequest): userRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: userRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): userRequest;
    static deserializeBinaryFromReader(message: userRequest, reader: jspb.BinaryReader): userRequest;
}

export namespace userRequest {
    export type AsObject = {
        id: number,
    }
}

export class userReply extends jspb.Message { 
    getName(): string;
    setName(value: string): userReply;
    getEmail(): string;
    setEmail(value: string): userReply;
    getPhone(): string;
    setPhone(value: string): userReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): userReply.AsObject;
    static toObject(includeInstance: boolean, msg: userReply): userReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: userReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): userReply;
    static deserializeBinaryFromReader(message: userReply, reader: jspb.BinaryReader): userReply;
}

export namespace userReply {
    export type AsObject = {
        name: string,
        email: string,
        phone: string,
    }
}

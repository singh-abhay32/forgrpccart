// package: helloworld
// file: proto/random.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_random_pb from "../proto/random_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    getuser: IGreeterService_IGetuser;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<proto_random_pb.HelloRequest, proto_random_pb.HelloReply> {
    path: "/helloworld.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_random_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<proto_random_pb.HelloRequest>;
    responseSerialize: grpc.serialize<proto_random_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<proto_random_pb.HelloReply>;
}
interface IGreeterService_IGetuser extends grpc.MethodDefinition<proto_random_pb.userRequest, proto_random_pb.userReply> {
    path: "/helloworld.Greeter/Getuser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_random_pb.userRequest>;
    requestDeserialize: grpc.deserialize<proto_random_pb.userRequest>;
    responseSerialize: grpc.serialize<proto_random_pb.userReply>;
    responseDeserialize: grpc.deserialize<proto_random_pb.userReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<proto_random_pb.HelloRequest, proto_random_pb.HelloReply>;
    getuser: grpc.handleUnaryCall<proto_random_pb.userRequest, proto_random_pb.userReply>;
}

export interface IGreeterClient {
    sayHello(request: proto_random_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_random_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_random_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    getuser(request: proto_random_pb.userRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
    getuser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
    getuser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: proto_random_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_random_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_random_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public getuser(request: proto_random_pb.userRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
    public getuser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
    public getuser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
}

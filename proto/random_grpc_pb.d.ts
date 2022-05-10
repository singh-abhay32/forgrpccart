// package: helloworld
// file: proto/random.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_random_pb from "../proto/random_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    getuser: IGreeterService_IGetuser;
    deleteUser: IGreeterService_IdeleteUser;
    updateUser: IGreeterService_IupdateUser;
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
interface IGreeterService_IdeleteUser extends grpc.MethodDefinition<proto_random_pb.userRequest, proto_random_pb.deluserReply> {
    path: "/helloworld.Greeter/deleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_random_pb.userRequest>;
    requestDeserialize: grpc.deserialize<proto_random_pb.userRequest>;
    responseSerialize: grpc.serialize<proto_random_pb.deluserReply>;
    responseDeserialize: grpc.deserialize<proto_random_pb.deluserReply>;
}
interface IGreeterService_IupdateUser extends grpc.MethodDefinition<proto_random_pb.updtaeuserRequest, proto_random_pb.updateuserReply> {
    path: "/helloworld.Greeter/updateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_random_pb.updtaeuserRequest>;
    requestDeserialize: grpc.deserialize<proto_random_pb.updtaeuserRequest>;
    responseSerialize: grpc.serialize<proto_random_pb.updateuserReply>;
    responseDeserialize: grpc.deserialize<proto_random_pb.updateuserReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<proto_random_pb.HelloRequest, proto_random_pb.HelloReply>;
    getuser: grpc.handleUnaryCall<proto_random_pb.userRequest, proto_random_pb.userReply>;
    deleteUser: grpc.handleUnaryCall<proto_random_pb.userRequest, proto_random_pb.deluserReply>;
    updateUser: grpc.handleUnaryCall<proto_random_pb.updtaeuserRequest, proto_random_pb.updateuserReply>;
}

export interface IGreeterClient {
    sayHello(request: proto_random_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_random_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_random_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    getuser(request: proto_random_pb.userRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
    getuser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
    getuser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
    deleteUser(request: proto_random_pb.userRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.deluserReply) => void): grpc.ClientUnaryCall;
    deleteUser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.deluserReply) => void): grpc.ClientUnaryCall;
    deleteUser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.deluserReply) => void): grpc.ClientUnaryCall;
    updateUser(request: proto_random_pb.updtaeuserRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.updateuserReply) => void): grpc.ClientUnaryCall;
    updateUser(request: proto_random_pb.updtaeuserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.updateuserReply) => void): grpc.ClientUnaryCall;
    updateUser(request: proto_random_pb.updtaeuserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.updateuserReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: proto_random_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_random_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_random_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public getuser(request: proto_random_pb.userRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
    public getuser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
    public getuser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.userReply) => void): grpc.ClientUnaryCall;
    public deleteUser(request: proto_random_pb.userRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.deluserReply) => void): grpc.ClientUnaryCall;
    public deleteUser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.deluserReply) => void): grpc.ClientUnaryCall;
    public deleteUser(request: proto_random_pb.userRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.deluserReply) => void): grpc.ClientUnaryCall;
    public updateUser(request: proto_random_pb.updtaeuserRequest, callback: (error: grpc.ServiceError | null, response: proto_random_pb.updateuserReply) => void): grpc.ClientUnaryCall;
    public updateUser(request: proto_random_pb.updtaeuserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_random_pb.updateuserReply) => void): grpc.ClientUnaryCall;
    public updateUser(request: proto_random_pb.updtaeuserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_random_pb.updateuserReply) => void): grpc.ClientUnaryCall;
}

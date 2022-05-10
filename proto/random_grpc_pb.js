// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_random_pb = require('../proto/random_pb.js');

function serialize_helloworld_HelloReply(arg) {
  if (!(arg instanceof proto_random_pb.HelloReply)) {
    throw new Error('Expected argument of type helloworld.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloReply(buffer_arg) {
  return proto_random_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_HelloRequest(arg) {
  if (!(arg instanceof proto_random_pb.HelloRequest)) {
    throw new Error('Expected argument of type helloworld.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloRequest(buffer_arg) {
  return proto_random_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_deluserReply(arg) {
  if (!(arg instanceof proto_random_pb.deluserReply)) {
    throw new Error('Expected argument of type helloworld.deluserReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_deluserReply(buffer_arg) {
  return proto_random_pb.deluserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_updateuserReply(arg) {
  if (!(arg instanceof proto_random_pb.updateuserReply)) {
    throw new Error('Expected argument of type helloworld.updateuserReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_updateuserReply(buffer_arg) {
  return proto_random_pb.updateuserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_updtaeuserRequest(arg) {
  if (!(arg instanceof proto_random_pb.updtaeuserRequest)) {
    throw new Error('Expected argument of type helloworld.updtaeuserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_updtaeuserRequest(buffer_arg) {
  return proto_random_pb.updtaeuserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_userReply(arg) {
  if (!(arg instanceof proto_random_pb.userReply)) {
    throw new Error('Expected argument of type helloworld.userReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_userReply(buffer_arg) {
  return proto_random_pb.userReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_userRequest(arg) {
  if (!(arg instanceof proto_random_pb.userRequest)) {
    throw new Error('Expected argument of type helloworld.userRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_userRequest(buffer_arg) {
  return proto_random_pb.userRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/helloworld.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: proto_random_pb.HelloRequest,
    responseType: proto_random_pb.HelloReply,
    requestSerialize: serialize_helloworld_HelloRequest,
    requestDeserialize: deserialize_helloworld_HelloRequest,
    responseSerialize: serialize_helloworld_HelloReply,
    responseDeserialize: deserialize_helloworld_HelloReply,
  },
  getuser: {
    path: '/helloworld.Greeter/Getuser',
    requestStream: false,
    responseStream: false,
    requestType: proto_random_pb.userRequest,
    responseType: proto_random_pb.userReply,
    requestSerialize: serialize_helloworld_userRequest,
    requestDeserialize: deserialize_helloworld_userRequest,
    responseSerialize: serialize_helloworld_userReply,
    responseDeserialize: deserialize_helloworld_userReply,
  },
  deleteUser: {
    path: '/helloworld.Greeter/deleteUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_random_pb.userRequest,
    responseType: proto_random_pb.deluserReply,
    requestSerialize: serialize_helloworld_userRequest,
    requestDeserialize: deserialize_helloworld_userRequest,
    responseSerialize: serialize_helloworld_deluserReply,
    responseDeserialize: deserialize_helloworld_deluserReply,
  },
  updateUser: {
    path: '/helloworld.Greeter/updateUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_random_pb.updtaeuserRequest,
    responseType: proto_random_pb.updateuserReply,
    requestSerialize: serialize_helloworld_updtaeuserRequest,
    requestDeserialize: deserialize_helloworld_updtaeuserRequest,
    responseSerialize: serialize_helloworld_updateuserReply,
    responseDeserialize: deserialize_helloworld_updateuserReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);

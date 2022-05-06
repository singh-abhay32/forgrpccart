import * as grpc from "@grpc/grpc-js";

import { HelloRequest, HelloReply } from "./random_pb";
import { GreeterService } from "./random_grpc_pb";
import * as getusers from "../grpc.handlers/grpc.server"

const sayHello=getusers.sayHello;
const getuser=getusers.getuser;
var server = new grpc.Server();
server.addService(GreeterService, { sayHello,getuser });

export default function main() {
  server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log("Server running at http://127.0.0.1:50051");

      server.start();
    }
  );
}


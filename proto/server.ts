import * as grpc from "@grpc/grpc-js";

import { GreeterService } from "./random_grpc_pb";
import * as getusers from "../grpc.handlers/grpc.server"

const sayHello=getusers.sayHello;
const getuser=getusers.getuser;
const deleteUser=getusers.deleteUser;
const updateUser=getusers.updateUser;
var server = new grpc.Server();
server.addService(GreeterService, { sayHello,getuser,deleteUser,updateUser});

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


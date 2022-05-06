import * as grpc from "@grpc/grpc-js";
import { GreeterClient } from "./random_grpc_pb";
import { HelloRequest } from "../proto/random_pb";


const client = new GreeterClient(
  "localhost:50051",
  grpc.credentials.createInsecure()
);
// const request = new HelloRequest();
// request.setName("world");

//  client.sayHello(request, (error: any, response: any) => {
//     if(!error) {
//       console.info("Greeting:", response.getMessage());
//     } else {
//       console.error("Error:", error.message); 
//     }
//   });

  export default client;
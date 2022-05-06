import { sayHello } from "./grpc.client";

async function run() {
  const user = await sayHello("world");
  console.log(user.toString());
}

run();

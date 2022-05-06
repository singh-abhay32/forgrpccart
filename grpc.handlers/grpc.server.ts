import { requestCallback } from "@grpc/grpc-js";
import { HelloReply, HelloRequest, userReply, userRequest } from "../proto/random_pb";
import { datalog } from "../src/task-manager/db";
import * as grpc from "@grpc/grpc-js";
import { callbackify } from "util";

export async function getuser(call: grpc.ServerUnaryCall<userRequest, userReply>,
    callback: grpc.sendUnaryData<userReply>): Promise<void> {
    const id = call.request.getId();
    console.log(id);

    let query = `SELECT * FROM user WHERE id = ${(id)}`;

    const response = datalog.query(query, (err, res) => {
        const reply = new userReply();
        const abc = JSON.stringify(res[0])
        let a = JSON.parse(abc);
        reply.setName(a.Name)
        reply.setEmail(a.Email)
        reply.setPhone(a.Phone)
        callback(null, reply)
    })
}
export function sayHello(
    call: grpc.ServerUnaryCall<HelloRequest, HelloReply>,
    callback: grpc.sendUnaryData<HelloReply>
): void {
    const reply = new HelloReply();
    reply.setMessage(`Hello ${call.request.getName()}`);
    callback(null, reply);
}
export function id(id: any) {
    throw new Error("Function not implemented.");
}


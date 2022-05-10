import { requestCallback } from "@grpc/grpc-js";
import { deluserReply, HelloReply, HelloRequest, updateuserReply, updtaeuserRequest, userReply, userRequest } from "../proto/random_pb";
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
export async function updateUser(call: grpc.ServerUnaryCall<updtaeuserRequest, updateuserReply>,
    callback: grpc.sendUnaryData<updateuserReply>): Promise<void> {
    console.log("abbhay");
    const id = call.request.getId();
    const Name = call.request.getName();
    const Email = call.request.getEmail();
    const Phone = call.request.getPhone();

    let query1 = `UPDATE user SET Name ="dfhcuieh",Email="fcyeyuec",Phone="gdfuyegyerc" WHERE id = ${(id)}`;
    const responsee = datalog.query(query1, (err, ress) => { 
        console.log(err);
        
    })
    let query = `SELECT * FROM user WHERE id = ${(id)}`;
    const response = datalog.query(query, (err, res) => {
        const reply = new updateuserReply();
        const abc = JSON.stringify(res[0])
        let a = JSON.parse(abc);
        reply.setName(a.Name)
        reply.setEmail(a.Email)
        reply.setPhone(a.Phone)
        callback(null, reply)
    })
};
export async function deleteUser(call: grpc.ServerUnaryCall<userRequest, deluserReply>,
    callback: grpc.sendUnaryData<deluserReply>): Promise<void> {
    const id = call.request.getId();
    console.log(id);
    let query = `DELETE FROM user WHERE id = ${(id)}`
    const response = datalog.query(query, (err, res) => {
        const reply = new deluserReply();
        const message = "Deleted successfully"
        reply.setMsg(message)
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


}

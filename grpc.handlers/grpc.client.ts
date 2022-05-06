import client from "../proto/client";
import { Request, Response, NextFunction, query } from 'express';
import { HelloReply, HelloRequest, userRequest } from "../proto/random_pb";


export function sayHello(name: string) {
  return new Promise<HelloReply>((resolve, reject) => {
    const request = new HelloRequest();
    request.setName(name);

    client.sayHello(request, (error: any, response: any) => {
      if (error) reject(error);
      else resolve(response);
    });
  });
}
export async function getUser (req: Request, res: Response){
  const { id } = req.body;
  const request = new userRequest();
  request.setId(id);

  client.getuser(request, (error, user) => {
    if (error) throw error;
    else {
      console.log(user);

    }
  })
}


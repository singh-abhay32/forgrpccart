import { Request, Response, NextFunction, query } from 'express';
import client from '../../proto/client';
import { HelloRequest, updtaeuserRequest, userRequest } from '../../proto/random_pb';
import { datalog } from '../task-manager/db';

interface Post {
    userName: Number;
    id: Number;
    title: String;
    body: String;
}
const getUser = async (req: Request, res: Response) => {
    //     let query = `SELECT * FROM users WHERE id = ${(datalog.escape(req.params.id))}`;

    //     datalog.query(query, (err, rows) => {
    //         if (err) throw err;
    //         console.log(rows);
    //         res.send({ rows })
    //     })
    // };
    const { id } = req.body;
    const request = new userRequest();
    request.setId(id);
    client.getuser(request, (error: any, user: any) => {
        if (error) throw error;
        else {
            console.log(user);
        }
        res.json(user.toObject());
    });
};
const getAllUsers = async (req: Request, res: Response) => {
    const { id } = req.body;
    const request = new userRequest();
    request.setId(id);
    client.getuser(request, (error: any, user: any) => {
        if (error) throw error;
        else {
            console.log(user);
        }
        res.json(user.toObject());
    });
};
const updateUser = async (req: Request, res: Response) => {
    // let query =
    //     `UPDATE users SET name = ${datalog.escape(req.body.name)}${datalog.escape(req.body.Email)}${datalog.escape(req.body.phone)} WHERE id = ${(datalog.escape(req.params.id))}`;
    // datalog.query(query, [req.body.name, req.params.id], (err, rows) => {
    //     if (err) throw err;
    //     console.log(rows);
    //     res.send({ message: "updated successfully" })
    // });
    
    const {id,Name,Email,Phone} = req.body;
    
    const request = new updtaeuserRequest();
    console.log(req.body);
    request.setId(id);
    request.setName(Name);
    request.setEmail(Email);
    request.setPhone(Phone);

    client.updateUser(request,(error:any,user:any)=>{
        if(error)throw error;
        else{
            console.log(user);
            
        }
        res.json(user.toObject());
    });
};
const deleteUser = async (req: Request, res: Response) => {
  const {id} = req.body;
  const request = new userRequest();
  request.setId(id)
  client.deleteUser(request,(error:any,user:any)=>{
      if(error)throw error;
      else{
          console.log(user);
      }
      res.json(user.toObject());
  });
};
const addUser = async (req: Request, res: Response) => {
    const { name, email, phone } = req.body;
    let query = `INSERT INTO user (name, email, phone) VALUES(${"'" + name + "','" + email + "','" + phone + "'"})`

    // console.log(query)
    datalog.query(query, (err: any, rows) => {
        if (err) throw err;
        res.send({ Data: "Added successfully" })
    });
};
const SayHello = async (req: Request, res: Response) => {
    // console.log("sayhello");
    const { name } = req.body;
    const request = new HelloRequest();
    request.setName(name);
    client.sayHello(request, (error: any, user: any) => {
        if (error) throw error;
        else {
            console.log(user);
        }
        res.json(user.toObject());
    });
};

export default { getAllUsers, getUser, addUser, updateUser, deleteUser, SayHello };



function Email(Email: any) {
    throw new Error('Function not implemented.');
}

function phone(phone: any) {
    throw new Error('Function not implemented.');
}


import { ObjectId } from 'types';

export interface NewUserI {
  _id: ObjectId;
  userName: string;
  email: string;
  password: string;
}

export interface UserI {
  _id: ObjectId;
  userName: string;
  email: string;
  password: string;
}

export interface AuthI {
  email: string;
  password: String;
}

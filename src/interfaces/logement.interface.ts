import { ObjectId } from 'types';

export interface LogementI {
  _id: ObjectId;
  title: string;
  cover: string;
  pictures: [string];
  location: string;
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: number;
  equipment: [string];
  tags: [string];
}

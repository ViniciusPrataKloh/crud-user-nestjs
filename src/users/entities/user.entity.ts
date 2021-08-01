// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from "uuid";

export type UserDocument = User & Document;

@Entity("users")
export class User {

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  name: number;

  @Column()
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

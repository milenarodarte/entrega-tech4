import { Client } from "pg";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column()
  phone: string;

  @Column()
  registrationDate: Date;

  @ManyToOne(() => Client)
  client: Client;
}

export default Contact;

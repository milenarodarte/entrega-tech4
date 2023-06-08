import "reflect-metadata";
import { ClientApp } from "./clients.entities";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("text", { nullable: false })
  fullName: string;

  @Column("text", { nullable: false })
  phone: string;

  @CreateDateColumn()
  registrationDate: Date;

  @ManyToOne(() => ClientApp)
  client: ClientApp;
}

export { Contact };

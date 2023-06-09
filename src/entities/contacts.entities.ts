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
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false })
  fullName: string;

  @Column("text", { nullable: false })
  phone: string;

  @Column("text", { nullable: false })
  email: string;

  @CreateDateColumn()
  registrationDate: Date;

  @ManyToOne(() => ClientApp, { cascade: true })
  client: ClientApp;
}

export { Contact };

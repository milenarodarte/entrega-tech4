import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { Contact } from "./contacts.entities";

@Entity("clients")
class ClientApp {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", { nullable: false })
  fullName: string;

  @Column("text", { nullable: false })
  phone: string;

  @CreateDateColumn()
  registrationDate: Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];
}
export { ClientApp };

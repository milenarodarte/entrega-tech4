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

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];
}
export { ClientApp };

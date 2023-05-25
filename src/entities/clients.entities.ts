import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Contact from "./contacts.entites";
@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column()
  phone: string;

  @Column()
  registrationDate: Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contact: Contact[];
}
export default Client;

import "reflect-metadata";
import { ClientApp } from "./clients.entities";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("text", { nullable: false })
  fullName!: string;

  @Column("text", { nullable: false })
  phone!: string;

  @Column("date", { nullable: false })
  registrationDate!: Date;

  @ManyToOne(() => ClientApp)
  client!: ClientApp;
}

export { Contact };

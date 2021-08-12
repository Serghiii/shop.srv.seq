import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Role } from "src/role/role.model";
import { User } from "./user.model";

@Table({ tableName: 'user_role', createdAt: false, updatedAt: false })
export class UserRole extends Model<UserRole> {

   @Column({ type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @ForeignKey(() => User)
   @Column({ type: DataType.BIGINT })
   userid: number;

   @ForeignKey(() => Role)
   @Column({ type: DataType.BIGINT })
   roleid: number;

}
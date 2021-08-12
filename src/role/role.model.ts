import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { UserRole } from "src/user/user-role.model";
import { User } from "src/user/user.model";

interface RoleCreationAttrs {
   name: string;
   description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {

   @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.STRING(20), unique: true, allowNull: false })
   name: string;

   @Column({ type: DataType.STRING })
   description: string;

   @BelongsToMany(() => User, () => UserRole)
   user: User[];

}
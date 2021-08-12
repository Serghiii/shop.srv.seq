import { Table, Model, Column, DataType, BelongsToMany, HasOne } from "sequelize-typescript";
import { Activation } from "src/activation/activation.model";
import { Ban } from "src/ban/ban.model";
import { Basket } from "src/basket/basket.model";
import { Profile } from "src/profile/profile.model";
import { Role } from "src/role/role.model";
import { UserRole } from "./user-role.model";

interface UserCreationAttrs {
   phone: string;
   email: string;
   password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {

   @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true, allowNull: false })
   id: number;

   @Column({ type: DataType.STRING(13), unique: true, allowNull: false })
   phone: string;

   @Column({ type: DataType.STRING(50), unique: true, allowNull: false })
   email: string;

   @Column({ type: DataType.STRING, allowNull: false })
   password: string;

   @Column({ type: DataType.BOOLEAN })
   active: boolean;

   @BelongsToMany(() => Role, () => UserRole)
   role: Role[];

   @HasOne(() => Activation)
   activation: Activation;

   @HasOne(() => Ban)
   ban: Ban;

   @HasOne(() => Profile)
   profile: Profile;

   @HasOne(() => Basket)
   basket: Basket;

}
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/user/user.model";

interface ProfileCreationAttrs {
   name: string;
   typeid: number;
}

@Table({ tableName: 'profiles', createdAt: false, updatedAt: false })
export class Profile extends Model<Profile, ProfileCreationAttrs> {

   @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.STRING, allowNull: false })
   name: string;

   @Column({ type: DataType.BOOLEAN })
   gender: boolean;

   @Column({ type: DataType.STRING })
   avatar: string;

   @ForeignKey(() => User)
   @Column({ type: DataType.BIGINT })
   userid: number;

}
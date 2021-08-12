import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/user/user.model";

interface BanCreationAttrs {
   reason: string;
   userid: number;
}

@Table({ tableName: 'bans' })
export class Ban extends Model<Ban, BanCreationAttrs> {

   @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.STRING })
   reason: string;

   @ForeignKey(() => User)
   @Column({ type: DataType.BIGINT })
   userid: number;

}
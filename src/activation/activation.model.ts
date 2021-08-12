
import { UUIDV4 } from "sequelize";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/user/user.model";

interface ActivationCreationAttrs {
   userid: number;
}

@Table({ tableName: 'activations', updatedAt: false })
export class Activation extends Model<Activation, ActivationCreationAttrs> {

   @Column({ type: DataType.UUID, defaultValue: UUIDV4, primaryKey: true })
   uuid: string;

   @ForeignKey(() => User)
   @Column({ type: DataType.BIGINT })
   userid: number;

}
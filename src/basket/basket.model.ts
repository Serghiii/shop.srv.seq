import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Device } from "src/device/device.model";
import { User } from "src/user/user.model";

interface BasketCreationAttrs {
   count: string;
   userid: number;
   deviceid: number;
}

@Table({ tableName: 'baskets' })
export class Basket extends Model<Basket, BasketCreationAttrs> {

   @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true, allowNull: false })
   id: number;

   @Column({ type: DataType.INTEGER })
   count: number;

   @ForeignKey(() => User)
   @Column({ type: DataType.BIGINT })
   userid: number;

   @ForeignKey(() => Device)
   @Column({ type: DataType.BIGINT })
   deviceid: number;

}
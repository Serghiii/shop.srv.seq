import { Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Basket } from "src/basket/basket.model";
import { Brand } from "src/brand/brand.model";
import { Category } from "src/category/category.model";
import { Type } from "src/type/type.model";

interface DeviceCreationAttrs {
   code: number;
   name: string;
   count: number;
   price: number;
   priceold: number;
   img: string;
   // categoryid: number;
   // brandid: number;
   // typeid: number;
}

@Table({ tableName: 'devices' })
export class Device extends Model<Device, DeviceCreationAttrs> {

   @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.BIGINT, unique: true, allowNull: false })
   code: number;

   @Column({ type: DataType.STRING, allowNull: false })
   name: string;

   @Column({ type: DataType.INTEGER, allowNull: false })
   count: number;

   @Column({ type: DataType.INTEGER, allowNull: false })
   price: number;

   @Column({ type: DataType.INTEGER })
   priceold: number;

   @Column({ type: DataType.STRING })
   img: string;

   @ForeignKey(() => Category)
   @Column({ type: DataType.BIGINT })
   categoryid: number;

   @ForeignKey(() => Brand)
   @Column({ type: DataType.BIGINT })
   brandid: number;

   @ForeignKey(() => Type)
   @Column({ type: DataType.BIGINT })
   typeid: number;

   @HasOne(() => Basket)
   basket: Basket;

}
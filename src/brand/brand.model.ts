import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Device } from "src/device/device.model";

interface BrandCreationAttrs {
   name: string;
}

@Table({ tableName: 'brands', createdAt: false, updatedAt: false })
export class Brand extends Model<Brand, BrandCreationAttrs> {

   @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true, allowNull: false })
   id: number;

   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   name: string;

   @HasMany(() => Device)
   deviceid: number;

}
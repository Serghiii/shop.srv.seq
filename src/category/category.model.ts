import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Device } from "src/device/device.model";

interface CategoryCreationAttrs {
   name: string;
}

@Table({ tableName: 'categories', createdAt: false, updatedAt: false })
export class Category extends Model<Category, CategoryCreationAttrs> {

   @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   name: string;

   @HasMany(() => Device)
   deviceid: number;

}
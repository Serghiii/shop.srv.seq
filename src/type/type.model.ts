import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Device } from "src/device/device.model";
import { Prop } from "src/prop/prop.model";

interface TypeCreationAttrs {
   name: string;
}

@Table({ tableName: 'types', createdAt: false, updatedAt: false })
export class Type extends Model<Type, TypeCreationAttrs> {

   @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   name: string;

   @HasMany(() => Device)
   deviceid: number;

   @HasMany(() => Prop)
   propid: number;

}
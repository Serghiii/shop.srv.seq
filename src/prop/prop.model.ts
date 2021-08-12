import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Type } from "src/type/type.model";

interface PropCreationAttrs {
   name: string;
   typeid: number;
}

@Table({ tableName: 'props', createdAt: false, updatedAt: false })
export class Prop extends Model<Prop, PropCreationAttrs> {

   @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.STRING, allowNull: false })
   name: string;

   @Column({ type: DataType.STRING, allowNull: false })
   value: string;

   @ForeignKey(() => Type)
   @Column({ type: DataType.BIGINT })
   typeid: number;

}
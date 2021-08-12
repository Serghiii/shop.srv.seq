import { Module } from "@nestjs/common";
import { FileService } from "./filesservice";

@Module({
   providers: [FileService],
   exports: [FileService],
})
export class FileModule { };
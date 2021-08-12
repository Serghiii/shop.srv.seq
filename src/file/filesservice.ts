import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from 'path';
import * as fs from 'fs';
import { UUIDV4 } from "sequelize/types";

@Injectable()
export class FileService {

   async createFile(file): Promise<string> {
      try {
         const fileName = UUIDV4 + '.jpg';
         const filePath = path.resolve(__dirname, '..', 'static');
         if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true });
         }
         fs.writeFileSync(path.join(filePath, fileName), file.buffer);
         return fileName;
      }
      catch (e) {
         throw new HttpException('Помилка при запису файла', HttpStatus.INTERNAL_SERVER_ERROR)
      }
   }

   async remoiveFile(fileName: string) {
      try {
         fs.unlinkSync(fileName);
      }
      catch (e) {
         throw new HttpException('Помилка при видаленні файла', HttpStatus.INTERNAL_SERVER_ERROR)
      }
   }

}
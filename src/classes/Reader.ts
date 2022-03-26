import * as XLSX from 'xlsx';
import { AerScript } from './AerScript';

export class Reader {
  readFile(file:File) {
      let sheetData
      const fileReader = new FileReader();
      const script = new AerScript()
      
      fileReader.readAsBinaryString(file);
  
      sheetData = fileReader.onload = (ev) => { 
        const data = ev.target?.result
        const workbook:XLSX.WorkBook = XLSX.read(data, { type: 'binary' });
        sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])

        sheetData && script.liferayForm(sheetData)
      };
  }
}

export default Reader

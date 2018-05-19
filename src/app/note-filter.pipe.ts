import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteFilter'
})
export class NoteFilterPipe implements PipeTransform {

  transform(notes: Array<any>, option?: any): any {
    if (!notes) {
      return [];
    }
    return notes.filter(noteobj => {
      let check = true;
      if (option) {
        for (const index in option) {
          if (noteobj[index] !== option[index]) {
            check = false;
            break;
          }
        }
        return check;
      }
      return check;
    });
  }

}

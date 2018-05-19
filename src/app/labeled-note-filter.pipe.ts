import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelnote'
})
export class LabeledNoteFilterPipe implements PipeTransform {

  transform(noteArray: Array<any>, labelId: number): any {

    if (!noteArray) {
      return [];
    }
    return noteArray.filter((noteObj) => {
      if (noteObj.labels.length === 0) {
        return false;
      }
      return noteObj.labels.some((labeloObj) => {
        return labeloObj.labelId === labelId;
      });
    });
  }
}

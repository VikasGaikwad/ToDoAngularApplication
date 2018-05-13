import { CollaboratorResponse } from './collaboratorResponse';

export class NoteResponse {
noteId: number;
title: string;
description: string;
trash: boolean;
archive: boolean;
pin: boolean;
reminder: Date;
color: string;
checked: boolean;
labels: Array<LabelObject>;
image: any[];
imageString: string;
 collaborators: CollaboratorResponse[];
 collaboratorName: string;
}
export class LabelObject {
    labelId: number;
    labelName: string;
}
export class CollaboratorObject {
    cId: number;
    sharedId: string;
    noteId: number;
}

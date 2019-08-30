import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  public imgListUrl: string;
  private basePath = '/uploads';
  public imgListUrlChanged = new Subject;
  public imgs$ = this.imgListUrlChanged.asObservable();
  constructor() { }

  public pushFileToStorage(fileUpload: any, progress: { percentage: number }) {
        const storageRef = firebase.storage().ref();
        const date = Date.now();
        const field = date + fileUpload.name;
        const uploadTask = storageRef.child(`${this.basePath}/${field}`).put(fileUpload);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            const snap = snapshot as firebase.storage.UploadTaskSnapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
          },
          () => {},
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.imgListUrl = downloadURL;
              this.imgListUrlChanged.next(this.imgListUrl);
            });
          }
        );
  }
}

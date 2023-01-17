import { Component } from '@angular/core';
import { collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-user-header',
  templateUrl: './dialog-edit-user-header.component.html',
  styleUrls: ['./dialog-edit-user-header.component.scss']
})
export class DialogEditUserHeaderComponent {
  loading: boolean = false;
  user;
  coll;

  constructor(
    public dialogRef: MatDialogRef<DialogEditUserHeaderComponent>,
    private firestore: Firestore){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  async save(){
    //this.user.birthDate = this.birthDate ? this.birthDate.getTime() : undefined;
    console.log('user is', this.user)

    this.loading = true;

    this.coll = collection(this.firestore, 'users');

    let docRef = doc(this.coll, this.user.id)

    await updateDoc(docRef, this.user.toJSON()).then(() =>{
      this.loading = false;
    })

    this.dialogRef.close();
    //CRUD = create = addDoc, read = docData/collectionData, update = setDoc/updateDoc, delete = deleteDoc
  }
}

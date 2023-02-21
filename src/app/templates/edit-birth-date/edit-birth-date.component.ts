import { Component } from '@angular/core';
import { collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-birth-date',
  templateUrl: './edit-birth-date.component.html',
  styleUrls: ['./edit-birth-date.component.scss']
})
export class EditBirthDateComponent {
  loading: boolean = false;
  user;
  birthDate!: Date;
  coll;

  constructor(
    public dialogRef: MatDialogRef<EditBirthDateComponent>,
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

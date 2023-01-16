import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  loading: boolean = false;

  user = new User();
  birthDate!: Date;
  coll: any;


  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore,){

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  async saveUser(){
    this.user.birthDate = this.birthDate ? this.birthDate.getTime() : undefined;
    console.log('user is', this.user)

    this.loading = true;

    this.coll = collection(this.firestore, 'users');

    await addDoc(this.coll, this.user.toJSON()).then(() =>{
      console.log('New user added');

      this.loading = false;
    })

    this.dialogRef.close();


    //CRUD = create = addDoc, read = docData/collectionData, update = setDoc/updateDoc, delete = deleteDoc
  }


}

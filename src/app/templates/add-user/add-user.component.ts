import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  loading: boolean = false;

  user = new User();
  birthDate!: Date;
  coll: any;

  //for the profile img
  @ViewChild('fileInput') fileInput!: any;
  imgBase64;
  //end

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
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
    //.catch()
    //interface name

    //export let interface:any
    //import {interface} from ''
    // um variablen weiterzugeben #

    //geht aber auch mit einem service

    this.dialogRef.close();
    //CRUD = create = addDoc, read = docData/collectionData, update = setDoc/updateDoc, delete = deleteDoc
  }


  onFileSelected() {

  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  async saveImg() {
    let file = this.fileInput.nativeElement.files[0];
    try{
        this.imgBase64 = await this.toBase64(file);
        this.user.img = this.imgBase64;
        console.log(this.imgBase64);
    } catch(error) {
        console.log("error: " + error);
    }
  }
}

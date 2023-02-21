import { Component } from '@angular/core';
import { collection, doc, docData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditBirthDateComponent } from '../dialog-edit-birth-date/dialog-edit-birth-date.component';
import { DialogEditUserHeaderComponent } from '../dialog-edit-user-header/dialog-edit-user-header.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  id;
  coll;
  public userData: User = new User();

  bDay;
  bMonth;
  bYear;

  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
    public dialog: MatDialog){
    this.route.params.subscribe((param: any) => {
      this.id = param.id;

      this.coll = collection(firestore, 'users');

      let docRef = doc(this.coll, this.id)

      let userDocData = docData(docRef, {idField: 'id'});

      userDocData.subscribe((user: any) => {
        this.userData = new User(user);
        this.setBirthDate();
        // this.userData.firstName = user.firstName;
        // this.userData.lastName = user.lastName;
        // this.userData.mail = user.mail;
        // this.userData.birthDate = user.birthDate;
        // this.userData.street = user.street;
        // this.userData.zipCode = user.zipCode;
        // this.userData.city = user.city;
        //console.log('bday',new Date(this.userData.birthDate));
      });

    })
  }

  setBirthDate(){
    let birthDate = new Date(this.userData.birthDate);
    this.bDay = birthDate.getDate();
    this.bMonth = birthDate.getMonth() + 1;
    this.bYear = birthDate.getFullYear();
  }

  openEditUserHeaderDialog(){
    let dialog = this.dialog.open(DialogEditUserHeaderComponent);
    dialog.componentInstance.user = new User(this.userData.toJSON());
  }

  openEditAddressDialog(){
    let dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.userData.toJSON());
  }

  openEditBirthDateDialog(){
    let dialog = this.dialog.open(DialogEditBirthDateComponent);
    dialog.componentInstance.user = new User(this.userData.toJSON());
  }
}

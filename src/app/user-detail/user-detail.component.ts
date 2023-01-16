import { Component } from '@angular/core';
import { collection, doc, docData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  id;
  coll;
  public userData: User = new User;

  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore){
    this.route.params.subscribe((param: any) => {
      this.id = param.id;

      this.coll = collection(firestore, 'users');

      let docRef = doc(this.coll, this.id)

      let userDocData = docData(docRef, {idField: 'id'});

      userDocData.subscribe((user: any) => {
        this.userData.firstName = user.firstName;
        this.userData.lastName = user.lastName;
        this.userData.mail = user.mail;
        this.userData.birthDate = user.birthDate;
        this.userData.street = user.street;
        this.userData.zipCode = user.zipCode;
        this.userData.city = user.city;
      });
    })
  }
}

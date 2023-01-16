import {  Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { addDoc, collection, collectionData, doc, docData, Firestore, getDoc, getDocs } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);

  userColl;
  public allUsers = [];

  constructor(
    public dialog: MatDialog,
    private firestore: Firestore,){
      this.userColl = collection(firestore, 'users');

      this.showUsers();
    }

    openDialog(): void {
      this.dialog.open(DialogAddUserComponent);
    }

    showUsers(){
      let usersCollData = collectionData(this.userColl, {idField: 'id'});

      usersCollData.subscribe((user:any) =>{
        this.allUsers = [];

        this.sortUser(user).forEach(u => {
          this.allUsers.push(u)
        });
        console.log(this.allUsers);
      })
    }

    sortUser(user){
      let userSort = user.sort(function(a, b){
        if(a.firstName < b.firstName) { return -1; }
        if(a.firstName > b.firstName) { return 1; }
        return 0;
      })
    return userSort;
    }
}

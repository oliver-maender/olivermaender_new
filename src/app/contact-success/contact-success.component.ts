import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-success',
  standalone: false,

  templateUrl: './contact-success.component.html',
  styleUrl: './contact-success.component.scss'
})
export class ContactSuccessComponent {

  constructor(public dialogRef: MatDialogRef<ContactSuccessComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}

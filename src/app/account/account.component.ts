import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  @ViewChild('deleteAccountModal') deleteAccountModal: TemplateRef<any> | undefined;

  constructor(private modalService: NgbModal) {}

  openDeleteAccountModal() {
    this.modalService.open(this.deleteAccountModal);
  }

}

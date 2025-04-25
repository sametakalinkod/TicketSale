import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroupDto } from '../common/models/FormGroupDto';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {

  formGroup?: FormGroupDto;
  constructor(private route: Router, private _route: ActivatedRoute) { }

  async ngOnInit() {

    const currentParams = { ...this._route.snapshot.queryParams }
    if (Object.keys(currentParams).length > 0) {
      await this.setFormGroup(currentParams);
    }
    delete currentParams['checkin'];
    delete currentParams['checkout'];
    delete currentParams['adult'];
    delete currentParams['child'];
    delete currentParams['childages'];
    this.route.navigate(['/app'], {
      relativeTo: this._route,
      queryParams: currentParams
    })
  }

  setFormGroup(currentParams: any) {

    this.formGroup = new FormGroupDto();
    var checkinDate = currentParams['checkin'];
    var checkoutDate = currentParams['checkout'];
    var adult = currentParams['adult'];
    var child = currentParams['child'];
    var childAges = currentParams['childages'];
    if (checkinDate !== undefined && checkinDate !== null) {
      this.formGroup.checkin = checkinDate;
    }
    if (checkoutDate !== undefined && checkoutDate !== null) {
      this.formGroup.checkout = checkoutDate;
    }
    if (adult !== undefined && adult !== null) {
      this.formGroup.adult = adult;
    }
    if (child !== undefined && child !== null) {
      this.formGroup.child = child;
    }
    if (childAges !== undefined && childAges !== null) {
      this.formGroup.childages = childAges;
    }

    sessionStorage.setItem("formGroup", JSON.stringify(this.formGroup));
  }
}

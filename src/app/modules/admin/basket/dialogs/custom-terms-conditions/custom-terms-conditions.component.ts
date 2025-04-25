import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErpECollectionReviewDto } from '../../../common/models/ErpECollectionReviewDto';
import { TermsandConditionsDto } from '../../../common/models/TermsandConditionsDto';

@Component({
  selector: 'app-custom-terms-conditions',
  templateUrl: './custom-terms-conditions.component.html',
  styleUrls: ['./custom-terms-conditions.component.css']
})
export class CustomTermsConditionsComponent implements OnInit {
  termHtmlList: TermsandConditionsDto[] = [];
  innerHtml?: string;
  language?: string;
  constructor(
    private _dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
    public data: any) {
     
     
    this.termHtmlList = data.data;
    this.language = data.language;

    const findDate = this.termHtmlList.find(x => x.type === data.type && x.language === this.language);
    if (findDate) {
      this.innerHtml = findDate.htmlValue;
    } else {
      const findLanguage = this.termHtmlList.find(x => x.language === this.language);
      if (findLanguage) {
        this.innerHtml = findLanguage.htmlValue;
      } else {
        this.innerHtml = this.termHtmlList[0].htmlValue;
      }
    }
  }

  ngOnInit() {
  }

  closeDialog(): void {
    this._dialogRef.close({ status: null });
  }
}

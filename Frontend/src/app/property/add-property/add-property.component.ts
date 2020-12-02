import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from 'src/app/model/iproperty';
//import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addProppertyForm?:  NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  
  propertyTypes: Array<string> = ['Individual','Pareado','Adosado','Apartamento','Duplex'];
  furnishTypes: Array<string> = ['Amueblado','Semi','Vacío'];
  entryTypes: Array<string> = ['Norte','Sur','Este','Oeste'];

  propertyView: IProperty = {
    Id: 0,
    SellRent: 0,
    Name: '',
    Description: '',
    PType: '',
    FType: '',
    BHK: 0,
    Price: 0,
    BuiltArea: 0,
    CarpetArea: 0,
    Image: '',
    Address: '',
    Address2: '',
    Address3: '',
    City: '',
    FloorNo: 0,
    TotalFloor: 0,
    AOP: 0,
    Bathrooms: 0,
    MainEntrance: '',
    Gated: '',
    Security: 0,
    Mantinance: 0,
    RTM: 0,
    PostedOn: 0
  };

  constructor(private router: Router) { }

  ngOnInit() { }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit()
  {
    console.log("Perfecto, submit lanzado");
    console.log(this.addProppertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}

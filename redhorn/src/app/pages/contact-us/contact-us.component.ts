import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private CS: CommonService, private FB: FormBuilder, private ContactService: ContactService) { }

  ContactUs : FormGroup ;
  submitted = false ; 
  success = false ;

  options = {
    HeaderBG : '',
    HColor: 'dark',
    HStyle: 'transparent'
  }
  submit(data){
    this.submitted = true ; 
    if(this.ContactUs.invalid){
      return ; 
    }
    // send request 
    this.ContactService.ContactUs(data).subscribe(res => { 
        this.afterSubmit(res);
    });
  }
  afterSubmit(res){
    if(res.status == "success"){
        this.success = true ; 
    } 
  }
  ngOnInit(): void {
    this.CS.page_options(this.options);
    this.ContactUs = this.FB.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      message : ['', Validators.required],
    });
  }

}

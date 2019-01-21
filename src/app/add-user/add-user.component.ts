import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormArray} from "@angular/forms";
import {UserService} from "../service/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import {User} from "../model/user.model";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService,private toastr: ToastrService) { }

  addForm: FormGroup;
  //addressForm:FormGroup;

  testData:any;
  addressData:FormGroup;
  addresses:any[]=[];
  address:any;

  userObject:User; 

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      bankingCustomerNo: [],
      customerNo: ['', Validators.required],
      oneClickId: ['', Validators.required],
      kycStatus:[],
      panNumber:[],
      isOTPCustomer:[],
      aadharNo:[],
      passportId:[],
      drivingLicence:[],
      votersId:[],
      jobCard:[],
      name: ['', Validators.required],
      mid_name:[],
      surname:[],
      fatherName:[],
      motherMaidenName:[],
      gender:[],
      nationality:[],
      issuedBy:[],
      passportNo:[],
      passportIssuedBy:[],
      dateOfIssue:[],
      dateOfExpiry:[],
      controlPeriod:[],
      emergencyContactName:[],
      resCountryCode:[],
      birthCountry:[],
      birthCity:[],
      birthPlace:[],
      email:[],
      commonLang:[],
      sendEmail:[],
      mobileNo:[],
      home:[],
      work:[],
      workplace:[],
      occupation:[],
      title:[],
      allocationDate:[],
      emerPhoneCode:[],
      emerPhoneNo:[],
      emerPhoneExt:[],
      mainBranchField:[],
      guaranteeFlag:[],
      assuranceType:[],
      nationaId:[],
      customerGroup:[],
      motherName:[],
      smsOTPNo:[],
      custodianNationalId:[],
      parentName:[],
      parentId:[],
      parentDesc:[],
      channelCode:[],
      picturePath:[],
      custodian:[],
      // addresses:this.formBuilder.array([]),
      addressData:this.formBuilder.group({

        addressIdx:[],
        addressType:[],
        address1:[],
        address2:[],
        address3:[],
        city:[],
        cityCode:[],
        town:[],
        townCode:[],
        country:[],
        zipCode:[],
        stateCode:[],
        state:[]

      })

    });

    

  }

  onSubmit() {
    this.userObject=new User(this.addForm.value);
    this.userObject.addresses=this.addresses;
    console.log(JSON.stringify(this.userObject));
    this.userService.createUser(this.addForm.value)
      .subscribe( data => {
        alert("Data from post"+JSON.stringify(data));

        if(data["Result"]=='OK'){
            this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-success alert-with-icon",
           positionClass: 'toast-top-center' 
         });
        }else {
          this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-warning alert-with-icon",
           positionClass: 'toast-top-center'
         });
        }
        console.log(data);
      });
  }

  addAddress(){


      
      console.log("1");
      this.address = this.addForm.controls['addressData'].value;

      console.log(this.addForm.controls['addressData'].value);
      this.addresses.push(this.address);
      this.addForm.reset();
      console.log(this.address);
      console.log(this.addresses);
  }

  // get addressForm(){
  //   return this.addForm.get('addresses') as FormArray
  // }

  getTestData(){
    this.userService.getTestData().subscribe(data=>{
      this.testData=data;
      alert("Data from get call" + JSON.stringify(this.testData));
      console.log(JSON.stringify(data));
    });
  }

  editAddress(addressIndex:any){
      this.addForm.controls['addressData'].patchValue({
        address1:this.addresses[addressIndex].address1
      });
      this.addresses.splice(addressIndex,1);


  }

}

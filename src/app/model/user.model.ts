import {Customer} from "./customer.model";

export class User {
    
    customer: Customer;
    
	public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

/**
*kemblekaran
*This (User) class should not be structure like this it should have Customer object as a composition only
*because all the information of customer should be inside customerObject not User.From this design we get the JSON object
*of customer that we can simply pass to our REST API.
**/
//	bankingCustomerNo: string;
//      customerNo: string;
//      oneClickId: string;
//      kycStatus:string;
//      panNumber:string;
//      isOTPCustomer:string;
//      aadharNo:string;
//      passportId:string;
//      drivingLicence:string;
//      votersId:string;
//      jobCard:string;
//      name: string;
//      mid_name:string;
//      surname:string;
//      fatherName:string;
//      motherMaidenName:string;
//      gender:string;
//      nationality:string;
//      issuedBy:string;
//      passportNo:string;
//      passportIssuedBy:string;
//      dateOfIssue:string;
//      dateOfExpiry:string;
//      controlPeriod:string;
//      emergencyContactName:string;
//      resCountryCode:string;
//      birthCountry:string;
//      birthCity:string;
//      birthPlace:string;
//      email:string;
//      commonLang:string;
//      sendEmail:string;
//      mobileNo:string;
//      home:string;
//      work:string;
//      workplace:string;
//      occupation:string;
//      title:string;
//      allocationDate:string;
//      emerPhoneCode:string;
//      emerPhoneNo:string;
//      emerPhoneExt:string;
//      mainBranchField:string;
//      guaranteeFlag:string;
//      assuranceType:string;
//      nationaId:string;
//      customerGroup:string;
//      motherName:string;
//      smsOTPNo:string;
//      custodianNationalId:string;
//      parentName:string;
//      parentId:string;
//      parentDesc:string;
//      channelCode:string;
//      picturePath:string;
//      custodian:string;
//      addresses:Address[];
}

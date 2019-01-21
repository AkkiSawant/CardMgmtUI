import {Address} from "./address.model";

export class User {

	public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

	bankingCustomerNo: string;
      customerNo: string;
      oneClickId: string;
      kycStatus:string;
      panNumber:string;
      isOTPCustomer:string;
      aadharNo:string;
      passportId:string;
      drivingLicence:string;
      votersId:string;
      jobCard:string;
      name: string;
      mid_name:string;
      surname:string;
      fatherName:string;
      motherMaidenName:string;
      gender:string;
      nationality:string;
      issuedBy:string;
      passportNo:string;
      passportIssuedBy:string;
      dateOfIssue:string;
      dateOfExpiry:string;
      controlPeriod:string;
      emergencyContactName:string;
      resCountryCode:string;
      birthCountry:string;
      birthCity:string;
      birthPlace:string;
      email:string;
      commonLang:string;
      sendEmail:string;
      mobileNo:string;
      home:string;
      work:string;
      workplace:string;
      occupation:string;
      title:string;
      allocationDate:string;
      emerPhoneCode:string;
      emerPhoneNo:string;
      emerPhoneExt:string;
      mainBranchField:string;
      guaranteeFlag:string;
      assuranceType:string;
      nationaId:string;
      customerGroup:string;
      motherName:string;
      smsOTPNo:string;
      custodianNationalId:string;
      parentName:string;
      parentId:string;
      parentDesc:string;
      channelCode:string;
      picturePath:string;
      custodian:string;
      addresses:Address[];
}

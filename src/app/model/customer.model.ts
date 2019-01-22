import {Address} from "./address.model";

/**
*kemblekaran
*Customer object which holds all the basic details about the customer.This object will have a has-a relationship with
*User. (IS-A Relationship with User)
**/
export class Customer{
    public constructor(init?: Partial<Customer>) {
        Object.assign(this, init)
    }
    
      customerNo: string
    
      bankingCustomerNo: string
     
      oneClickId: string
     
      name: string
     
      midName: string
     
      surname: string
     
      birthDate: string
     
      fatherName: string
    
      motherMaidenName: string

      nationality: string
     
      issuedBy: string
     
      passportNo: string
     
      passportIssuedBy: string
     
      passportDateOfIssue: string
     
      passportDateOfExpire: string
     
      passportControlPeriod: string
     
      emergencyContactPersonNameSurname: string
     
      residenceCountryCode: string
     
      birthCountry: string
     
      birthCity: string
     
      birthPlace: string
     
      email: string
     
      customerType: string
     
      gender: string
     
      communicationLanguage: string
     
      sendSMS: string
     
      sendEMail: string
     
      mobileNo: string
     
      phoneHome: string
     
      phoneWork: string
    
      phoneWorkExtension: string
    
      workPlace: string
    
      occupation: string
    
      title: string
    
      allocationDate: string
    
      emergencyPhoneFieldCode: string
    
      emergencyPhone: string
     
      emergencyPhoneExt: string
     
      mainBranchField: string
     
      guaranteeFlag: string
     
      assuranceType: string
     
      nationalId: string
     
      customerGroup: string
     
      custodianNationalId: string
     
      smsotpNo: string
     
      motherName: string
     
      parentName: string
     
      parentNationalId: string
     
      parentDescription: string
     
      channelCode: string
     
      pictureFilePath: string
     
      adressList: string

      custodian: string

      freeText1: string

      freeText2: string

      freeText3: string

      freeText4: string

      freeText5: string

      freeText6: string
     
      freeText7: string
     
      freeText8: string
     
      freeText9: string
     
      freeText10: string
     
      freeText11: string
     
      freeText12: string
     
      freeText13: string
     
      freeText14: string
     
      freeText15: string
     
      freeText16: string
     
      freeText17: string
     
      freeText18: string
     
      freeText19: string
     
      freeText20: string
     
      freeText21: string
     
      freeText22: string
     
      freeText23: string
     
      freeText24: string
     
      freeText25: string
     
      kycStatus: string
     
      panNumber: string
     
      isOtpCustomer: string
     
      aadharNo: string
     
      passportId: string
     
      drivingLicense: string
     
      votersId: string
     
      jobCard: string
}
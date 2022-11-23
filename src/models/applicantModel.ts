
// export type ApplicantModel = {
//     name: string,
//     gender: '',
//     citizenship: '',
//     maritalStatus: '',
//     education: '',
//     position: '',
//     income: null,
//     religion: '',
//     passportNumber: '',
//     passportAuthority: '',
//     dateIssue: null,
//     dateExpiry: null,
//     dateBirth: null,
//     homeAddress: '',
//     city: '',
//     postCode: null,
//     country: '',
//     arrivalDate: null,
//     departureDate: null,
//     flightTo: '',
//     flightOut: '',
//     departure: '',
//     lived: '',
//     livedCountryApplicant: [
//         {livedCountry: '', livedFrom: null, livedTo: null, livedCity: '', livedAddress: ''}
//
//     ]
// }

export type ApplicantsDataType = {
    additionFiles: []
    anotherPassportOrNameFiles: []
    birthDate: string
    citizenship: string
    earlyVisaFiles: []
    education: string
    familyStatus: string
    fliesFrom: string
    flightInDate: string
    flightInNumber: string
    flightOutDate: string
    flightOutNumber: string
    fullName: string
    hasAnotherPassport: string
    hasAnotherPassportData: string[]
    hasConvicted: string
    hasConvictedData: string
    hasDeported: string
    hasDeportedData: string
    hasLivedInNonResidenceCountry: string
    hasLivedInNonResidenceCountryData: { country: string, date: string }[]
    hasVisaBefore: string
    hasVisaBeforeData: string[]
    hasVisaReject: string
    hasVisaRejectData: string[]
    importantDataToCheck: {}
    inTicketsFiles: string[]
    mainApplicantIs: string
    male: string
    outTicketsFiles: string[]
    passportCopyFiles: string[]
    passportCountry: string
    passportData: string
    passportExpire: string
    passportIssuedBy: string
    passportNumber: string
    photoFiles: string[]
    position: string
    rejectFiles: []
    religion: string
    residenceAddress: string
    residenceCity: string
    residenceCountry: string
    residenceIndex: string
    yearIncome: string
}

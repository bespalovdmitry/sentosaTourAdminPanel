
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

export type ApplicantDataType = {
    //Technical type
    [index: string]: any

    fullName: string
    male: string
    citizenship: string
    familyStatus: string
    mainApplicantIs: string
    religion: string
    yearIncome: string
    education: string
    position: string

    passportCopyFiles: Array<string>
    passportCountry: string
    passportIssuedBy: string
    passportNumber: string
    passportData: string
    passportExpire: string
    birthDate: string

    residenceCountry: string
    residenceCity: string
    residenceAddress: string
    residenceIndex: string

    fliesFrom: string
    flightInNumber: string
    flightInDate: string
    flightOutNumber: string
    flightOutDate: string

    hasVisaBefore: string
    hasVisaBeforeData: Array<string>
    hasLivedInNonResidenceCountry: string
    hasLivedInNonResidenceCountryData: Array<{ country: string, date: string, address: string }>
    hasDeported: string
    hasDeportedData: string
    hasConvicted: string
    hasConvictedData: string
    hasVisaReject: string
    hasVisaRejectData: Array<string>
    hasAnotherPassport: string
    hasAnotherPassportData: Array<string>

    photoFiles: Array<string>
    inTicketsFiles: Array<string>
    outTicketsFiles: Array<string>
    additionFiles: Array<string>
    bookingHotel: Array<string>
    hotelsData: Array<{ hotelName: string, arrivalDate: string, departureDate: string, hotelAddress: string, bookingHotel: Array<string> }>
}

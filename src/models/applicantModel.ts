import {Dayjs} from "dayjs";

export const applicantModel = {
    name: '',
    gender: '',
    citizenship: '',
    maritalStatus: '',
    education: '',
    position: '',
    income: null,
    religion: '',
    passportNumber: '',
    passportAuthority: '',
    dateIssue: null,
    dateExpiry: null,
    dateBirth: null,
    homeAddress: '',
    city: '',
    postCode: null,
    country: '',
    arrivalDate: null,
    departureDate: null,
    flightTo: '',
    flightOut: '',
    departure: '',
    lived: '',
    livedCountryApplicant: [
        {livedCountry: '', livedFrom: null, livedTo: null, livedCity: '', livedAddress: ''}

    ]
}
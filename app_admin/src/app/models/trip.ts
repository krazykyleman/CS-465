export interface Trip {

    _id: string, // internal MongoDB primary key
    code: string, // unique trip code
    name: string, // trip name
    length: string, // trip length
    start: Date, // trip start date
    resort: string, // trip resort
    perPerson: string, // trip cost per person
    image: string, // trip image
    description: string // trip description

}
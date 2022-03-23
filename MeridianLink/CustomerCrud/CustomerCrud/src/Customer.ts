export class Customer{
    customerId!:string;
    customerName!: string;
    dob!:string;
    gender!:string;
    address!:string;
    city!:string;
    country!:string;
    pincode!:number;

    constructor(customerId:string,customerName:string,dob:string,gender:string,address:string,city:string,country:string,pincode:number){
        this.customerId = customerId;
        this.customerName = customerName;
        this.dob = dob;
        this.gender =gender;
        this.address=address;
        this.city=city;
        this.country=country;
        this.pincode=pincode;

    }


}
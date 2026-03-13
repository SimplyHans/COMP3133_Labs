import Employee from "./Employee";

export default class FullTimeEmployee extends Employee {
    designation:string
    salary: number

    constructor(eid: number, fnm: string, lnm: string, city: string,
        designation:string, salary: number   
    ) {
        super(eid, fnm, lnm, city)
        this.designation = designation
        this.salary = salary
    }

    display(): void {
        console.log(this)
    }
}
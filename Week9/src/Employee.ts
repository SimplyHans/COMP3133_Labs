class Employee {
    //public private readonly
    eid: number
    fnm: string
    lnm: string
    city: string

    // constructor(public eid: number, public fnm: string, public lnm: string, public city: string) {
        
    // }
    constructor(eid: number, fnm: string, lnm: string, city: string) {
        this.eid = eid
        this.fnm = fnm
        this.lnm = lnm
        this.city = city
    }

    display() {
        console.log(this)
    }
}

export default Employee
export class Reservation {
    constructor(
        public first_name:string, 
        public last_name:string, 
        public middle_name:string, 
        public email:string, 
        public phone: string, 
        public card_number:string, 
        public expiration_date:string, 
        public security_code:string, 
        public flight_id:string) {}
}

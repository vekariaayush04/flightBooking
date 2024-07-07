
export interface RegisterUserRequestBody {
    email: string;
    username: string;
    password: string;
    mobileNumber: string;
    dob:string;
  }
  
  export interface LoginUserRequestBody {
    email: string;
    password: string;
  }


 export  interface FlightData {
    flightNumber: string;
    flightName: string;
    price: number;
    arrival: string;
    arrivalTime: string; 
    departure: string;
    departureTime: string; 
    time: string; 
    distance: number;
    availableSeats: number;
  }
  
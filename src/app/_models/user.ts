export class User {
    token?: string;
    id: number;
    user_username: string;
    // user_first_name: string;
    // user_last_name: string;
    email: string;
    password: string;
    // user_address: string;
    // user_postal: string;
    // user_phone_no: number;
    // user_city: string;
    user_roles: string;
}

// The user model is a small class that defines the properties of a user. 
// The token property is used to hold the JWT token that is returned from the api on successful authentication.
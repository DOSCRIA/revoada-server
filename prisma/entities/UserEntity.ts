export interface UserEntity {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  document: string;
  country: string;
  region: string;
  city: string;
  neighborhood: string;
  address: string;
  addressZipCode: string;
  addressHome?: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  // userToken?: UsersTokens
  // usersTicket:  UsersTickets[]
  // usersCompany: UsersCompanies[]
  // userLogin: UsersLogins[]

}
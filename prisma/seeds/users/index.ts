import { UserEntity } from "../../entities/UserEntity";

export const Users: UserEntity[] = [
  {
    name: 'Gustavo',
    lastName: 'Egidio Rigoni',
    email: 'gustrigoni@gmai.com',
    password: '$2a$12$TTHsdCriWwD4bPiubUuFQetcnKPgFkv6PF2gIUGgljHEa1u9ckgcC', // 123456
    phoneNumber: '+5548988424114',
    document: '07754476924',
    country: 'BR',
    region: 'SC',
    city: 'Tubarao',
    neighborhood: 'Oficinas',
    address: 'R. Altamiro Guimaraes',
    addressZipCode: '88702102',
    addressHome: '1825',
    createdAt: new Date()
  }
];
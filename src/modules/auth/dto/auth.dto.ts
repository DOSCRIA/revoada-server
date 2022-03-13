import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class AuthDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.name'
  })
  @IsString({
    message: 'auth.errors.dto.types'
  })
  name: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.lastName'
  })
  @IsString({
    message: 'auth.errors.dto.types'
  })
  lastName: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.email'
  })
  @IsEmail({
    message: 'auth.errors.dto.isEmail'
  })
  email: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.password'
  })
  @IsString({
    message: 'auth.errors.dto.types'
  })
  password: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.phoneNumber'
  })
  @IsString({
    message: 'auth.errors.dto.types'
  })
  phoneNumber: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.document'
  })
  @IsString({
    message: 'auth.errors.dto.types'
  })
  document: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.country'
  })
  @IsString({
    message: 'auth.errors.dto.types'
  })
  country: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.region'
  })
  @IsString({
    message: 'auth.errors.dto.types'
  })
  region: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.city'
  })
  @IsString({
    message: 'auth.errors.dto.types'
  })
  city: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.neighborhood'
  })
  @IsString({
    message: 'auth.errors.dto.types'
  })
  neighborhood: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.address'
  })
  @IsString({
    message: 'auth.errors.dto.types'
  })
  address: string;

  @IsNotEmpty({
    message: 'auth.errors.dto.addressZipCode'
  })
  @IsString({
    message: 'auth.errors.dto.types'
  })
  addressZipCode: string;

  @IsOptional()
  @IsString({
    message: 'auth.errors.dto.types'
  })
  addressHome?: string;
}
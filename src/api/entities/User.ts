import { v4 } from "uuid";

export class User {

  public readonly id: string;

  public name: string;
  public lastName: string;
  public email: string;
  public password: string;
  public phoneNumber: string;

  constructor (props: Omit<User, 'id'>, id?: string) {

    /**
     * add to props object to THIS variable, example: props.name > this.name
     */
    Object.assign(this, props);

    /**
     * add id to universal for a future db update
     */
    if (!id) {
      this.id = v4();
    }

  }

}
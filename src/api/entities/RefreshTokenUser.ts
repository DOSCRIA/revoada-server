import { v4 } from "uuid";

export class RefreshTokenUser {

  public readonly id: string;

  public userId: string;
  public expiresIn: number;

  constructor (props: Omit<RefreshTokenUser, 'id'>, id?: string) {

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
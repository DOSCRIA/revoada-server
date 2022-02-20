import { Server } from "socket.io";
import { Helpers } from "./helpers";

export class WebSockets {

  private server: any;
  private helpers = new Helpers();

  constructor(props) {

    /**
     * Add the props object to this variable, example: props.name > this.name
     */
    this.server = props.server;

  }

  /**
   * Start the web sockets server
   */
  start() {

    /**
     * Make the server connection
     */
    const io = new Server(this.server, {
      cors: {
        origin: process.env.HTTP_CORS_ORIGIN,
      }
    });

    /**
     * When user connects
     */
    io.on('connection', (socket) => {

      console.log('a user connected', socket.id);

      // const a = this.helpers.users.get('a');

      // this.helpers.users.set('a', {
      //   sockets:  [socket.id]
      // });

      // console.log(a);
      // console.log(this.helpers.users)
      // io.to(socket.id).emit("test", 'testandooo'); <--- send to a specific user
    });

  }

}
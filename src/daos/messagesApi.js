import { ApiClass } from "../contenedores/clase.js";

import { createMessagesMock } from "../utils/mocks.js";

export class messagesApi extends ApiClass {
  constructor() {
    super();
  }

  createMessages(cant) {
    let messages = [];
    for (let i = 0; i < cant; i++) {
      const message = createMessagesMock();
      const messageSaved = this.create(message);
      messages.push(messageSaved);
    }
    return messages;
  }
}


export default messagesApi



  
    

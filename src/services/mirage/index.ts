import { createServer, Factory, Model } from "miragejs";
import faker from 'faker'

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    // modals é qusai dados quero armazenar dentro do bd
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    // fectories são formas de conseguir gerar dados com as informações em dados em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },

        email() {
          return faker.internet.email().toLowerCase()
        },

        createdAt() {
          return faker.date.recent(10)
        },
      })
    },

    //criar dados ficticios 
    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      // /api/users
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}

import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    // Nos permites criar um usuário e cadastrar o endreço juntos
    serializers: {
      application: ActiveModelSerializer,
    },

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
          return faker.internet.email().toLowerCase();
        },

        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    //criar dados ficticios
    seeds(server) {
      server.createList("user", 200);
    },

    routes() {
      // /api/users
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", function (schema, request) {
        const { page = 1, per_pege = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_pege);
        const pageEnd = pageStart + Number(per_pege);

        const users = this.serialize(schema.all("user"))
          .users.sort((a, b) => a.createdAt - b.createdAt)
          .slice(pageStart, pageEnd);

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.get("/users/:id");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}

import fastify from "fastify";
import { request } from "http";

const server = fastify({ logger: true });

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Ferrari", base: "Maranello, Italy" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 3, name: "Charles Leclerc", team: "Ferrari" },
];

server.get("/teams", async(request, response) => {
  response.type("application/json").code(200)

  return { teams };
});

server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200)
    return { drivers };
});

interface DriverParams {
  id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const driver = drivers.find( d=> d.id === id);
  if (!driver) {
    response.type("application/json").code(404);
  } else {
    response.type("application/json").code(200);
    return { driver };
  }
});

server.listen({port: 3333}, () => {
  console.log("Server init");
});

// Aula finalizada, iniciando aula 'Criando meus endpoints'
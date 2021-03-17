import server from "../../src/server";
import request from "supertest";

// close the server after each test
afterEach((done) => {
  server.close();
  done();
});

describe("Health Check", () => {
  // positive test: assuming the endpoint is correctly defined
  it("should pong", async () => {
    // given
    const endpoint = "/api/v1/ping";

    //when
    const response = await request(server).get(endpoint);

    // then
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.data).toEqual("pong");
  });

  // negative test: assuming the endpoint is invalid
  it("should return http status code 404 if the route is invalid or does not exist", async () => {
    // given
    const endpoint = "/api/v1/pings";

    //when
    const response = await request(server).get(endpoint);

    // then
    expect(response.status).toEqual(404);
  });
});

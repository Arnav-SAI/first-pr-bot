import nock from "nock";

import myProbotApp from "../index.js";
import { Probot, ProbotOctokit } from "probot";

const issueCreatedBody = { body: "Thanks for opening this issue!" };
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { describe, beforeEach, afterEach, test } from "node:test";
import assert from "node:assert";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const privateKey = fs.readFileSync(
  path.join(__dirname, "fixtures/mock-cert.pem"),
  "utf-8",
);

const payload = JSON.parse(
  fs.readFileSync(path.join(__dirname, "fixtures/issues.opened.json"), "utf-8"),
);

describe("My Probot app", () => {
  let probot;

  beforeEach(() => {
    nock.disableNetConnect();
    probot = new Probot({
      appId: 123,
      privateKey,
 
      Octokit: ProbotOctokit.defaults({
        retry: { enabled: false },
        throttle: { enabled: false },
      }),
    });

    probot.load(myProbotApp);
  });

  test("creates a comment when an issue is opened", async () => {
    const mock = nock("https://api.github.com")

      .post("/app/installations/2/access_tokens")
      .reply(200, {
        token: "test",
        permissions: {
          issues: "write",
        },
      })


      .post("/repos/hiimbex/testing-things/issues/1/comments", (body) => {
        assert.deepEqual(body, issueCreatedBody);
        return true;
      })
      .reply(200);


    await probot.receive({ name: "issues", payload });

    assert.deepStrictEqual(mock.pendingMocks(), []);
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});



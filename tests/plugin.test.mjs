import assert from "node:assert/strict";
import test from "node:test";
import { CURSOR_MARKER, visibleWidth } from "@earendil-works/pi-tui";
import { createFixture } from "./fixture.mjs";
import { registration as jumpRegistration } from "../extensions/pi-me-jump-mode/index.ts";

test("jump mode is registered on the coordinated prompt and returns to normal", context => {
  const fixture = createFixture(context, { registrations: [jumpRegistration] });
  const prompt = fixture.createPrompt();
  prompt.setText("alpha beta alpha");
  prompt.handleInput("\x1b");
  prompt.handleInput("s");
  assert.equal(prompt.getMode(), "jump");
  prompt.handleInput("a");
  assert.ok(prompt.render(72).every(line => visibleWidth(line) <= 72));
  prompt.handleInput("\x1b");
  assert.equal(prompt.getMode(), "normal");
  assert.equal(fixture.modes.at(-1).mode, "normal");
});


test("plugin registers with the shared vipi-editor runtime API", async () => {
  const { default: registerPlugin, registration } = await import("../extensions/pi-me-jump-mode/index.ts");
  const { VIPI_EDITOR_REGISTER } = await import("vipi-editor/api");
  const events = [];
  registerPlugin({ events: { emit: (channel, data) => events.push({ channel, data }), on: () => () => {} } });
  assert.equal(events[0].channel, VIPI_EDITOR_REGISTER);
  assert.equal(events[0].data, registration);
  assert.equal(registration.extensionId, "pi-me-jump-mode");
});

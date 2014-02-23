function assertNonNull(object, name) {
  assert(object !== null, name + " is null. Initialize it!");
}

function assert(condition, message) {
  message = message || "Assertion failed!";
  if (!condition) {
    alert(message);
    throw message;
  }
}

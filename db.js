const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amanda",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

module.exports = messages;

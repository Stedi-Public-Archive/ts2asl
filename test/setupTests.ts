global.console = {
  ...global.console,
  error: jest.fn(),
  warn: jest.fn(),
  // log: jest.fn(),
  info: jest.fn(),
  debug: console.debug,
};

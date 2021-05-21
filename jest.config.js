const path = require("path");
const rootDir = path.join(__dirname);
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],  //Se requiere para importar la libreria de jest para angular
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|ngx-socket-io|ngx-auto-unsubscribe)",
  ],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
  collectCoverage: true,
  coverageDirectory: path.join(`${rootDir}`, '/coverage/'), //  Ruta donde quedará los reportes
  coverageReporters: ["html", "json", "lcov", "text", "clover"], // Tipos de reportes que se generan
  reporters: [
    "default"
  ],// Dependencias que usaremos para los reportes
}

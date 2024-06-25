import { transports, format } from "winston";

export function options(scenarioName: string) {
  return {
    transports: [
      new transports.File({
        filename: `test-results/logs/${scenarioName}/log.log`,
        level: "info",
        format: format.combine(
          format.align(),
          format.printf((info) => `${info.level}: ${info.message}`)
        ),
      }),
    ],
  };
}

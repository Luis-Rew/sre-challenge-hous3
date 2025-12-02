import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-grpc";
import { PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";

// Exportadores OTLP -> Collector
const traceExporter = new OTLPTraceExporter();
const metricExporter = new OTLPMetricExporter();

const sdk = new NodeSDK({
  traceExporter,
  metricReader: new PeriodicExportingMetricReader({
    exporter: metricExporter,
    exportIntervalMillis: 5000,
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

// Inicializa o SDK sem Promises
try {
  sdk.start();
  console.log("[OTel] SDK inicializado");
} catch (err) {
  console.error("[OTel] Erro ao iniciar SDK", err);
}

// Finalização simples no SIGTERM
process.on("SIGTERM", () => {
  try {
    sdk.shutdown();
    console.log("[OTel] SDK finalizado");
  } catch (err) {
    console.error("[OTel] Erro ao finalizar SDK", err);
  } finally {
    process.exit(0);
  }
});

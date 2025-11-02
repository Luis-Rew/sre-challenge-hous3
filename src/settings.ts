type AppConfig = {
  port: number;
  artificialLatencyMs: number;
};

const DEFAULT_LATENCY_MS = 150;

export function loadConfig(): AppConfig {
  const port = Number(process.env.PORT ?? 3000);

  if (Number.isNaN(port)) {
    throw new Error('PORT deve ser um número inteiro válido');
  }

  const artificialLatencyMs = Number(process.env.ARTIFICIAL_LATENCY_MS ?? DEFAULT_LATENCY_MS);

  return {
    port,
    artificialLatencyMs: Number.isNaN(artificialLatencyMs) ? DEFAULT_LATENCY_MS : artificialLatencyMs,
  };
}


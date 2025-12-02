**README – SRE Challenge**



**Visão Geral**

Este projeto consiste em uma API Node.js com foco em observabilidade, criada como parte de um desafio de SRE.

A solução implementa métricas customizadas, métricas automáticas, tracing distribuído, logging estruturado e um stack completo com Prometheus, Grafana, Jaeger e OpenTelemetry Collector.



**Arquitetura da Solução**

A API envia métricas e traces para o OpenTelemetry Collector.

O Collector exporta métricas para o Prometheus e traces para o Jaeger.

O Grafana utiliza o Prometheus como datasource para visualização.



**Tecnologias Utilizadas**

Node.js e Express para a API.

Pino para logging estruturado.

OpenTelemetry SDK para instrumentação.

Prometheus para coleta de métricas.

Jaeger para tracing distribuído.

Grafana para dashboards.

Docker Compose para orquestrar todos os serviços.



**Estrutura do Projeto**

A estrutura principal contém os arquivos server, tracing, utils e settings dentro da pasta src, além dos arquivos de configuração docker-compose, configuração do OpenTelemetry Collector, arquivo de configuração do Prometheus e este README.



**Endpoints Disponíveis**

Endpoint de healthcheck: GET /healthz

Endpoint para listar pedidos com latência simulada: GET /api/v1/orders

Endpoint para buscar pagamento por ID: GET /api/v1/payments/:id

Endpoint para criar pagamento: POST /api/v1/payments com JSON contendo orderId e amount.



Métricas Customizadas

O projeto expõe as seguintes métricas:

• payments\_created\_total: total de pagamentos criados com sucesso

• payments\_conflict\_total: total de pagamentos rejeitados por duplicidade

• payments\_invalid\_payload\_total: total de requisições recebidas com payload inválido

Essas métricas ficam disponíveis no endpoint interno do Prometheus exposto pelo OpenTelemetry Collector.



**Tracing Distribuído**

A API está instrumentada com OpenTelemetry para gerar spans automaticamente para:

• Requisições HTTP

• Rotas Express

• Funções com latência simulada

Os traces podem ser visualizados na interface do Jaeger acessando http://localhost:16686

.

O serviço exibido é identificado como "payments-service".



**Grafana**

O Grafana está disponível em http://localhost:3001

.

Após o login padrão, é necessário configurar o Prometheus como datasource utilizando a URL interna: http://prometheus:9090

.

Um dashboard pode ser importado utilizando o ID 19030 como referência.



**Executando o Stack de Observabilidade**

Para iniciar todos os serviços de observabilidade, utilizar o comando docker-compose up -d.

Os serviços iniciam em containers separados: Prometheus, Grafana, Jaeger e OpenTelemetry Collector.



**Executando a API Manualmente**

No Windows PowerShell, definir as variáveis de ambiente OTEL\_SERVICE\_NAME e OTEL\_RESOURCE\_ATTRIBUTES e então executar o servidor utilizando npx tsx src/server.ts.

No Linux ou macOS, o processo é equivalente utilizando export para definir as variáveis de ambiente.



**Logging Estruturado**

A aplicação utiliza a biblioteca Pino para registrar logs em formato JSON.

Os logs apresentam informações estruturadas, como detalhes do pagamento processado, incluindo ID, orderId e amount.



**Checklist de Observabilidade**

O projeto implementa todos os pilares essenciais de observabilidade:

• Métricas automáticas

• Métricas customizadas

• Tracing distribuído

• Logging estruturado

• Dashboard no Grafana

• Coleta de dados via Prometheus

• Visualização de spans no Jaeger

• OpenTelemetry Collector configurado e operacional



**Conclusão**

Esta solução demonstra uma implementação completa dos conceitos fundamentais de observabilidade seguindo boas práticas de SRE. A arquitetura permite acompanhar métricas, analisar performance, monitorar o comportamento da API e rastrear requisições de ponta a ponta, utilizando ferramentas amplamente adotadas por equipes de engenharia de confiabilidade.


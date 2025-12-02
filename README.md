**SRE Challenge – Hous3**

**Implementação completa de observabilidade utilizando OpenTelemetry, Prometheus, Grafana e Jaeger para instrumentar uma aplicação Node.js com métricas, logs estruturados e traces distribuídos.**



**Introdução**

**Este repositório contém a solução desenvolvida para o desafio de SRE. O objetivo principal foi aplicar práticas modernas de observabilidade na aplicação, utilizando o padrão OpenTelemetry como base para coleta de dados e integrando Prometheus, Grafana e Jaeger para visualização.**



**A aplicação expõe endpoints REST simulando uma API de pagamentos. Toda a geração de métricas, logs e traces é realizada automaticamente por instrumentação configurada no Node SDK do OpenTelemetry.**



**Arquitetura da Solução**

**A solução foi estruturada em quatro componentes principais:**



**Aplicação Node.js**

**Responsável por expor os endpoints de pagamentos e emitir métricas e traces através do OpenTelemetry SDK. Inclui instrumentação automática de HTTP, métricas customizadas e logs estruturados.**



**OpenTelemetry Collector**

**Atuação como o ponto central de recebimento e exportação dos dados.**

**Recebe OTLP via gRPC e HTTP, processa e encaminha para os serviços de destino, como:**



**• Prometheus (métricas)**

**• Jaeger (traces)**



**Prometheus**

**Coleta as métricas expostas pelo Collector e disponibiliza para consulta.**

**Essa instância é utilizada como fonte de dados principal no Grafana.**



**Grafana**

**Utilizado para visualização das métricas de negócio e de infraestrutura.**

**Foi configurado um dashboard contendo:**



**• Quantidade de pagamentos criados**

**• Quantidade de payloads inválidos**

**• Quantidade de conflitos de ordem**

**• Latência das requisições HTTP**

**• Uso da aplicação durante o teste**



**Fluxo de Dados**

**• A aplicação registra métricas e traces via OpenTelemetry**

**• O NodeSDK envia tudo para o Collector**

**• O Collector exporta métricas para Prometheus e traces para Jaeger**

**• O Grafana consome Prometheus para montar os dashboards**

**• O Jaeger permite navegar pelos traces de cada requisição**



**Instrumentações Adicionais**

**Além da instrumentação automática, foram adicionadas métricas customizadas relacionadas ao domínio de pagamentos:**



**• Métrica para pagamentos criados**

**• Métrica para payload inválido**

**• Métrica para pagamentos duplicados**

**• Latência simulada para chamadas**

**• Logs estruturados para cada criação de pagamento**



**Endereços Padrões Utilizados**

**Jaeger UI em localhost:16686**

**Grafana em localhost:3001**

**Prometheus em localhost:9090**

**Collector OTLP em localhost:4317 e localhost:4318**



**Execução do Projeto**



**Inicie os serviços do ambiente**

**O ambiente de observabilidade é iniciado com Docker Compose.**



**Execute a aplicação**

**A aplicação roda localmente e envia os dados automaticamente ao Collector.**



**Teste os endpoints**

**Requisições à API geram automaticamente métricas e traces.**



**Visualize no Grafana e Jaeger**

**O Grafana apresenta todas as métricas de negócio.**

**O Jaeger mostra o fluxo completo de cada chamada, incluindo latência e propagação.**



**Estrutura Geral do Projeto**

**• src/server.ts**

**• src/utils.ts**

**• src/settings.ts**

**• src/tracing.ts**

**• otel-collector-config.yaml**

**• docker-compose.yml**

**• prometheus.yml**

**• README.md (este arquivo)**



**Objetivo Atendido**

**A proposta do desafio foi implementada integralmente:**



**• Instalação e configuração do OpenTelemetry NodeSDK**

**• Instrumentação automática**

**• Configuração do Collector**

**• Exportação de métricas e traces**

**• Dashboard funcional no Grafana**

**• Traces acessíveis no Jaeger**

**• Métricas customizadas de domínio**

**• Logs estruturados**

**• Testes de endpoints para geração de eventos observáveis**



**Considerações Finais**

**A solução foi construída seguindo as melhores práticas de observabilidade e SRE, garantindo que métricas, logs e traces sejam coletados e exportados de forma padronizada. O projeto demonstra conhecimento prático em OpenTelemetry e na composição de pipelines de observabilidade modernos.**


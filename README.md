Serviços 

Serviços nada mais são do que classes comuns com objetivos bem definidos que visam atender a alguma necessidade especifica da aplicação.

Promises

Promise como o próprio nome sugere são premosas. Na prática uma promise é um objeto usado para processamento assíncrono, esse objeto ele representa um valor que pode estar disponível agora, no futuro ou nunca.

Processamento síncrono e assíncrono

Processamento síncrono: Aguarda a finalização do processo para seguir para o próximo


Processamento assíncrono: Não aguarda a finalização do processo seguindo para o próximo

.then => Adiciona um callback que trata rejeição
.catch => Adiciona os métodos de tratamentos da realização e rejeição da promise

==========================================================================================
Introdução a APIS

APIS REST
Json-server => instalação do pacote (npm install -g json-server)
json-server --watch banco_de_dados.json

Erro com o rxjs executar esse comando 
npm install --save rxjs-compat 

===========================================================================================

Snapshot - tira uma "foto" da rota permitindo acessar seus parâmetros

============================================================================================

Subscribe - Fica "escutando" alterações na rota. Quando uma alteração é "escutada" podemos reagir a mudança (reactive programming). 

==============================================================================================

O Manifesto Reativo (Programação Reativa)

Lógica de pesquisa de ofertas Subject switchMap

Subject => Funciona como um proxy atuando tanto como observável quanto observador

Na condição de observador: Capaz de receber parâmetros e implementar operadores para produção de uma stream de eventos de Observables.

Operador debounceTime() 

====================================================================================================
Pipes são mecanismo de transformação de dados utilizados nos templates para produzir uma representação customizada da informação a ser exibida.

===================================================================================================
Ajustando a formatação de moedas para o padrão Brasileiro

Instalação de um pacote de internacionalização (Intl.JS)
Instalação do pacote => npm intall --save intl

Configurar o pacote em polyfills.ts
import 'intl'
import 'intl/locale-data/jsonp/pt-Br';

===================================================================================================

foi feito um substituição do tether para popper.js

=====================================================================================================




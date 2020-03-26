# Abstract Factory

## Scopo

Fornire un'interfaccia per la creazione di famiglie di oggetti correlati o dipendenti, senza specificare quali siano le classi concrete

## Applicabilitá

-   Un sistema deve essere indipendente dalle modalitá di creazione, composizione e rappresentazione dei suoi oggetti
-   Un sistema deve poter essere configurato scegliendo una tra diverse famiglie di oggetti
-   Esistono famiglie di oggetti correlati, progettati per essere utilizzati insieme, quindi occorre garantire che questo vincolo sia rispettato

## Partecipanti

-   `AbstractFactory`: interfaccia per la creazione di oggetti astratti
-   `ConcreteFactory`: implementa l'interfaccia `AbstractFactory` per la creazione di una famiglia di oggetti
-   `AbstractProduct`: interfaccia per la definizione di un oggetto astratto
-   `ConcreteProduct`: implementa l'interfaccia `AbstractProduct`
-   `Client`: utilizza le interfacce per creare gli oggetti concreti che gli sono necessari

## Conseguenze

-   Separa le classi concrete dal client, che conosce solo le interfacce
-   Consente di cambiare in maniera semplice la famiglia di oggetti che deve essere creata
-   Favorisce la coerenza nell'utilizzo di oggetti della stessa famiglia
-   E' difficile aggiungere il supporto alla creazione di nuove tipologie di oggetti: occorre estendere l'interfaccia `AbstractFactory` e aggiornare tutte le `ConcreteFactory` che la implementano

## Implementazione

-   La `ConcreteFactory` puó essere instanziata come `Singleton`
-   le `ConcreteFactory` puó essere implementata tramite `MethodFactory` (definendo una `ConcreteFactory` per ogni famiglia, anche se molti simili tra loro); oppure attraverso `Prototype`

|            | Tipo A | Tipo B |
| ---------- | ------ | ------ |
| Famiglia 1 |        |        |
| Famiglia 2 |        |        |

-   `AbstractFactory` ha un metodo per ciascun tipo di oggetto da creare ed esiste una `ConcreteFactory` per ogni famiglia
-   Una possibile alternativa ad avere un metodo per ogni tipologia di oggetto é quella di avere un unico metodo `create` parametrizzato con un valore che rappresenti la tipologia di oggetto che deve essere creata; il limite di questa soluzione é che tutti gli oggetti devono derivare dalla stessa superclasse ed il client non é in grado di identificare la tipologia di oggetto creata senza controllo e cast espliciti
-   `AbstractFactory` puó essere una classe astratta che implementa alcuni metodi di base oppure definisce l'algoritmo generico di creazione degli oggetti

## Esempio

Per creare un regno sono necessari 3 elementi: `Re`, `Castello`, `Esercito`; esistono 2 regni `Elfi` e `Orchi`.

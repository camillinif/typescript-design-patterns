# Builder

## Scopo

Separare la costruzione di un oggetto complesso dalla sua rappresentazione, in modo che lo stesso processo di creazione possa essere utilizzato per creare rappresentazioni differenti

## Applicabilitá

-   l'algoritmo di creazione di un oggetto deve essere separato e indipendente dalle parti che compongono l'oggetto e dal modo in cui queste sono in relazione
-   il processo di costruzione deve consentire la costruzione di rappresentazioni differenti

## Partecipanti

-   **`Builder`**: specifica l'interfaccia astratta per la creazione delle parti dell'oggetto
-   **`ConcreteBuilder`**:
    -   implemente l'interfaccia `Builder`
    -   definisce e tiene traccia delle rappresentazioni dell'oggetto creato
    -   fornisce un'interfaccia per ottenere l'oggetto creato al termine del processo di creazione
-   **`Director`**:
    -   costruisce l'oggetto utilizzando l'interfaccia `Builder`
    -   definisce il processo di costruzione dell'oggetto
-   **`Product`**:
    -   rappresenta l'oggetto complesso da costruire
    -   comprende le classi che lo compongono e le interfacce per permettere il loro assemblamento

## Collaborazioni

-   `Client` crea il `Director` passandogli il `Builder` concreto da utilizzare
-   `Director` utilizza l'interfaccia di `Builder` per dirigere la creazione dell'oggetto
-   `Builder` riceve le richieste da `Director` e aggiunge le parti a `Product`
-   `Client` recupera da `Builder` l'oggetto creato

## Conseguenze

-   consente di variare la rappresentazione interna di un prodotto: é sufficiente aggiungere un nuovo builder
-   isola la costruzione (`Director`) dalla rappresentazione `Builder`
-   consente un miglior controllo del processo di costruzione; il prodotto finale é ottenuto dopo una serie di richieste dal `Director` al `Builder`

## Implementazioni

-   `Builder` é una classe astratta che definisce tutti i metodi necessari per la creazione di un oggetto complesso; questi metodi sono concreti e vuoti; verranno reimplementati dalle classi concrete per i soli componenti che vorrá creare
-   `Builder` deve essere generica abbastanza da permettere la creazione di diverse rappresentazioni
-   definizione del modello per la costruzione e per il processo di assemblaggio: solitamente i risultati di una singola richiesta vengono messi in coda alla parte di `Product` giá costruita
-   in alcuni casi puó essere necessario che alcune parti create siano necessarie per la creazione di parti future; in questo caso `Builder` deve restituire al `Director` le parti create
-   essendoci una relazione 1:1 tra `Builder` e rappresentazione, il `Builder` puó essere fortemente accoppiato con le classi concrete dell'oggetto complesso e delle sue parti

## Esempio

Istat fornisce un file CSV contenente una riga per ciascun `Comune` italiano; ciascuna riga contiene sia la `Regione` che la `Provincia`; attraverso l'utilizzo di `Builder` e a partire da una stessa riga si vogliono ottenere i 3 oggetti `Comune`, `Provincia` e `Regione` che sono definiti all'interno della riga

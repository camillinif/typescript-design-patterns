# Factory Method

Definisce un'interfaccia per la creazione di un oggetto, lasciando alle sottoclassi la decisione sulla classe che deve essere instanziata; il factory method consente di deferire l'instanziazione di una classe alle sottoclassi

Questo pattern viene utilizzato per l'implementazione del pattern [`Abstract Factory`](../abstract-factory/README.md)

## Applicabilitá

- Una classe non é un grado di sapere in anticipo le classi degli ogetti che deve create

## Partecipanti

- `Prodotto`: definisce l'interfaccia degli oggetti creati dal `method factory`
- `ConcreteProduct`: implemente l'interfaccia `Product`
- `Creator`: dichiara il `method factory` che restituisce un oggetto di tipo `Product`
- `Concrete Creator`: sovrascrive il `method factory` in modo da restituire una specifica istanza di `ConcreteProduct`

## Conseguenze

- utilizzare un `method factory` per la creazione di oggetti in una classe, fornisce sempre una flassibilitá maggiore rispetto alla creazione diretta di un oggetto
- connette gerarchie di classi parallele localizzando la conoscenza di quali classi devono essere usate insieme

## Implementazione

- `Creator` puó essere un'interfaccia e le sottoclassi sono costrette ad implementare il `factory method`
- `Creator` fornisce un'implementazione di base lasciando la decisione di reimplementare il metodo; la regola é quella di spostare la creazione in una operazione separata in modo che le sottoclassi possano ridefinire le modalitá di creazione
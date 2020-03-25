# Composite

## Obiettivi

- Comporre oggetti in strutture ad albero
- Astrarre il concetto di oggetto composo o foglia per il client

## Partecipanti

### Component

- E' la classe astratta dalla quale derivano tutte le classi componenti della gerarchia
- Implementa i comportamenti comuni
- Dichiara un'interfaccia per la gestione dei figli
- Dichiara un'interfaccia per l'accesso al padre (opzionale)

### Leaf

- Rappresenta gli oggetti foglia che non possono avere figli
- Definisce il comportamento degli oggetti primitivi

### Composite

- Definisce il comportamento di oggetti composti
- Implementa le interfacce relative alla gestione dei figli
- Memorizza i componenti figli

### Client

- Manipola gli oggetti della gerarchia utilizzando l'interfaccia `Component`

(Schema UML da disegnare)

## Conseguenze

- Semplifica il client: tutti gli oggetti della gerarchia appartengono alla stessa interfaccia
- Semplifica l'aggiunta di nuove classi alla gerarchia
- Non é possibile limitare i tipi che possono entrare a far parte della gerarchia senza controlli espliciti

## Implementazione

- **Collegamento verso il padre**
    - Mantenere un riferimento esplicito al padre puó aiutare l'attraversamento della gerarchia verso l'alto
    - Il punto piú adatto dove inserire questo riferimento é nella classe `Composite`
    - Occorre mantenere l'invariante secondo cui tutti i figli di un oggetto composto devono avere come riferimento lo stesso oggetto e tale oggetto deve avere come figli tutti gli oggetti che lot referenziano come padre
- **Massimizzazione dell'interfaccia `Component`**
    - Questa interfaccia dovrebbe definire il maggior numero di metodi comuni tra gli oggetti della gerarchia
    - Solitamente viene fornita un'implementazione di base che poi viene sovrascritta
    - Metodi che hanno senso solo in determinate classi, possono fornire un'implementazione genereca che deve essere poi sovrascritta; ad esempio il metodo di restituzione della lista figli puó avere un'implementazione di base che restituisce una lista nuova; tale metodo dovrá essere poi implementato dalle classi `Composite`
- **Gestione dei figli**
    - Si possono adottare 2 approcci differenti che favoriscono piú trasparenza a discapito della sicurezza e viceversa
        - Sicurezza
            - I metodi vengono dichiarati solo nella classe `Composite`
            - Abbiamo meno trasparenza perché gli oggetti della gerarchia hanno interfacce diversa ed il client deve tenerne conto
        - Trasparenza
            - I metodi vengono dichiarati nell'interfaccia `Component`
            - Potrebbe essere aggiunto un figlio in una classe foglia
            - Per impedire codice sporco si puó inserire un'eccezione o comunque un fallimento all'interno dell'implementazione di base
- **Collezione dei figli**
    - Non dichiarare la lista dei figli come variabile di istanza nella classe base
    - Nelle classi foglie si avrebbe un inutile spreco di memoria
    - Dichiarare la variabile nella classe `Composite`  

## Esempio

Gli enti territoriali sono organizzati nella gerarchia `regione`/`provincia`/`comune`; ogni `comune` ha la propria `popolazione`; attraverso il pattern `composite` riusciamo anche ad ottenere la `popolazione` per ogni `provincia` e `regione`
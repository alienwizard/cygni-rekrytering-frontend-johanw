# Hemuppgift - frontend

## Uppgift: Skapa ett bildgalleri med bilder hämtade från flickr

Uppgiften går ut på att koda en webbapplikation som hämtar data ifrån flickrs publika API och visar upp resultatet på en webbsida. Det kan till exempel vara bilder på en seriefigur. Har du idétorka, välj Batman.

Vi kommer titta på din kods läsbarhet såväl som struktur. Koncis, självkommenterande och tydlig kod är ett plus. Det är fritt fram att lägga till och använda de libraries du tycker är nödvändiga. Försök dock hålla det relativt enkelt gällande preprocessorer och byggscript. Fokusera på slutresultatet. Appens övriga "features" lämnar vi öppet - men några förslag följer nedan.

När du är klar, zippa och skicka över till oss senast 3 dagar efter du fått uppgiften.

### Krav

Siten ska...

* vara responsiv från mobil upp till 2048px
* vara av widgetkaraktär, dvs
  * fylla hela bredden av sin container
  * vara oberoende av övrigt content utanför containern
  * inte påverka andra delar av sidan den ligger på
* ge användaren feedback vid långsam laddning eller om api:et inte svarar
* fungera i senaste versionerna av Chrome och Firefox samt Internet Explorer 9 och uppåt

### Förslag på övriga features (frivilligt)

* Persistence/caching: spara API-data till en store och läs ifrån den vid upprepade requests
* Automatiserat byggsteg med lintning, konkatenering och minifiering
* Skriv ett automatiserat test för en bit av din lösning
* Implementera tillgänglighetsregler för din lösning (textalternativ, ARIA, tangentbordsnavigering, etc.)

### Flickrs API

* https://www.flickr.com/services/api/

### Kodstart

 katalogen `app` finns ett enkelt skal som du kan utgå ifrån. Du kan starta en HTTP-server och serva hela katalogen på `localhost:8080` tillsammans med en livereload-instans genom att i din terminal köra (kräver [node.js](https://nodejs.org/en/)):


```
npm start
```

Lycka till! 👍


##Johans Anteckningar!

Jag har gjort om en del och gått min egen väg kan man säga när det kommer till appen.
Den är byggd med Angular och redux som ett state based pattern. Alla states, reducers och actions finns definerade i images.state,js

kör install för att installera alla dependecies

```
npm install
```

och sedan start för att starta webpacks devserver som man sedan kommer åt på http://localhost:8080/

```
npm start
```



# Streak Landingpage

Statische Produktseite für [Streak](https://streak.kevinchromik.de/) im gemeinsamen Design mit kevinchromik.de: lokale Outfit-Schrift, schwarz-weiße Oberflächen, Glasnavigation und farbige Originalbilder der App. Ohne Build-Schritt oder externe Laufzeit-Abhängigkeiten.

## Lokal ansehen

```sh
python3 -m http.server 8081 --bind 127.0.0.1
```

Anschließend <http://127.0.0.1:8081/> öffnen.

## Dateien

- `index.html`: Inhalte, App-Store-Links und Metadaten.
- `styles.css`: Design, responsive Layouts und reduzierte Bewegung.
- `site.js`: mobiles Menü, Jahreszahl und dezente Einblendeffekte.
- `assets/`: vorhandene App-Vorschauen, App-Icon, deutscher App-Store-Badge und lokale Schrift einschließlich OFL-Lizenz.

Die Screenshots werden im Layout ausschnittsweise gezeigt; die Originaldateien bleiben unverändert. Inhalte und Links funktionieren auch ohne JavaScript. Alle Schriften, Bilder und Skripte laden lokal. Die Website verwendet keine Cookies, Browser-Speicher, Besucheranalyse oder externen Einbettungen. Externe Dienste werden erst über einen Link geöffnet.

## Pflege und Veröffentlichung

Ein Push startet den vorhandenen GitHub-Actions-Workflow für IONOS Deploy Now. Als Deployment-Ordner ist das Projektverzeichnis konfiguriert; die lokalen Styles, Skripte und Schriftdateien werden dadurch mit ausgeliefert. Die URL bleibt `https://streak.kevinchromik.de/`. App-Store-Links verwenden weiterhin die App-ID `6740726726` und lassen die Store-Region offen.

Produktangaben zu Widgets, Statistiken und lokaler Datenspeicherung entsprechen der [App-Store-Beschreibung](https://apps.apple.com/de/app/gewohnheiten-tracker-ziele/id6740726726), geprüft am 14.09.2026. Preise stehen ausschließlich im App Store. Impressum und Datenschutzerklärung verlinken weiterhin auf kevinchromik.de; Kontakt: `hi@kevinchromik.de`.

# Verwende das offizielle Node 21 Image als Basis
FROM node:21

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere die package.json und package-lock.json (falls vorhanden)
COPY app/package*.json ./

# Installiere alle Node.js Abhängigkeiten
# Ein separater Schritt für das Kopieren der package.json und das Installieren der Abhängigkeiten
# ermöglicht eine bessere Nutzung des Docker-Cache Layers
RUN npm install

# Kopiere alle Dateien des Projekts in das Arbeitsverzeichnis im Container
COPY app/ ./

# Setze den Port, auf dem der Container hören soll
EXPOSE 3000

# Definiere den Befehl zum Ausführen der Anwendung
CMD ["node", "app.js"]
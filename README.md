# Beispielprojekt zum Vortrag "Aktuelle Trends der Programmierung"

Dieses Projekt ist ein anschauliches Beispiel, das Fabian Stefer in seinem Vortrag "Aktuelle Trends der Programmierung" präsentiert hat.

## Wichtige Docker-Befehle

### Container-Management
- `docker ps`: Zeigt alle laufenden Docker-Container an.
- `docker stop <ID>`: Fährt einen Container ordnungsgemäß herunter.
- `docker kill <ID>`: Beendet einen Container ohne Ankündigung.
- `docker rm <ID>`: Löscht einen Container.
- `docker exec -it <ID> sh`: Öffnet eine Shell innerhalb des Containers.

### Container-Erstellung
- `docker build -t <IMAGE_NAME> .`: Erstellt ein Docker-Image anhand der Dockerfile im aktuellen Verzeichnis.

### Netzwerk-Erstellung
- `docker network create <NETWORK_NAME>`: Erstellt ein neues Docker-Netzwerk mit dem angegebenen Namen.

### Container-Start
- `docker run --name <CONTAINER_NAME> --network=<NETWORK_NAME> -e <VARIABLE1_NAME>=<VARIABLE1_VALUE> -e <VARIABLE2_NAME>=<VARIABLE2_VALUE> -p <SRC_PORT>:<DEST_PORT> -d <IMAGE_NAME>`: Startet einen Container mit den angegebenen Parametern.

### Docker Compose
- `docker-compose up`: Startet alle Dienste in der `docker-compose`-Datei im aktuellen Verzeichnis.
- `docker-compose up <SERVICE-NAME>`: Startet nur den angegebenen Dienst aus der `docker-compose`-Datei.

### Aufgabenstellung

Wir haben bereits einen Datenbank-Container per Docker-CLI mit dem Befehl:

```bash
docker run --name example-mysql --network=app-network -e MYSQL_ROOT_PASSWORD=mysql-pw -e MYSQL_DATABASE=node_example -p 3306:3306 -d mysql:latest
```
und den Service per docker-compose-Datei gestartet. Versuchen Sie nun, die Datenbank per docker-compose-Datei und den Service per CLI zu starten.

Tipp: Mit `build: .` können Sie in der docker-compose-Datei eine Dockerfile im aktuellen Verzeichnis angeben.

Zusatz: Die Datei [init.sql](db%2Finit.sql) enthält ein Skript, dass beim Starten des Containers Testeinträge in die 
Datenbank schreibt. Binden sie diese über die docker-compose Datei in den Container ein.

# Kubernetes
## Minikube-Befehle

- `minikube start`: Startet Minikube.
- `minikube dashboard`: Öffnet das Minikube-Dashboard im Standardbrowser.
- `eval $(minikube docker-env)`: Stellt die Docker-Umgebung auf Minikube um.

## Image erstellen

- `docker build -t example-docker-service:latest .`: Erstellt das Image `example-docker-service`.

## Kubernetes-Ressourcen erstellen

```bash
kubectl apply -f k8s/mysql-deployment.yaml
kubectl apply -f k8s/mysql-service.yaml
kubectl apply -f k8s/app-deployment.yaml
kubectl apply -f k8s/app-service.yaml
```




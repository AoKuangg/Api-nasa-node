# Readme del Proyecto

Este proyecto obtiene datos sobre asteroides de la API de NASA NeoWs y muestra la información en un servidor web. Utiliza Node.js y el paquete `node-fetch` para realizar solicitudes HTTP y obtener los datos de los asteroides.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener lo siguiente:

- Node.js instalado en tu sistema
- Una clave de API de la API de NASA NeoWs. Puedes obtener una clave registrándote en el sitio web de [NASA Open APIs](https://api.nasa.gov/).

## Instalación

1. Clona el repositorio del proyecto:

   ```bash
   git clone <URL-del-repositorio>
   ```

2. Navega hasta el directorio del proyecto:

   ```bash
   cd <directorio-del-proyecto>
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Crea un archivo `.env` en el directorio raíz del proyecto y agrega tu clave de API:

   ```plaintext
   MY_CONFIG={"port": 3000, "hostname": "localhost"}
   NASA_API_KEY=<tu-clave-de-api>
   ```

## Uso

Para iniciar el servidor y obtener los datos de los asteroides, ejecuta el siguiente comando:

```bash
npm start
```

El servidor se iniciará y escuchará en el puerto y el hostname especificados (por ejemplo, `http://localhost:3000`).

Una vez que el servidor esté en funcionamiento, abre un navegador web y accede a `http://localhost:3000/asteroids`. El servidor obtendrá los datos de los asteroides de la API de NASA NeoWs para el rango de fechas especificado y mostrará la siguiente información para cada asteroide:

- Nombre
- Diámetro
- Fecha de mayor aproximación
- Velocidad relativa
- Distancia a la Tierra

## Personalización

Si deseas cambiar la configuración del servidor, puedes modificar los valores en el archivo `.env`:

- `port`: El número de puerto en el que el servidor escuchará.
- `hostname`: El nombre de host o la dirección IP del servidor.


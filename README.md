<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# ejecutar en desarrollo

1. clonar el repositorio
2. Ejecutar 
```
npm  install
```
3. Tener Nest CLI instlado 

```
npm i -g @nestjs/cli
```
4. Levantar la base de datos 

5. Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```
docker compose up -d

6. Llenar las variables de entorno definidas en el env:
```
npm start:dev
```

````
8. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed

```


## stack usado
 * MongoDB
 * Nest
# Usa una imagen ligera de Node.js
FROM node:lts-alpine

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Compila TypeScript a JavaScript
RUN npm run build

# Expón el puerto definido en el .env
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "dist/main.js"]

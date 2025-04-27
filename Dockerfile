# Gunakan Node.js image resmi
FROM node:18

# Buat direktori kerja
WORKDIR /usr/src/app

# Copy file
COPY package*.json ./
COPY server.js ./

# Install dependencies
RUN npm install

# Expose port 8080
EXPOSE 8080

# Command untuk menjalankan app
CMD ["npm", "start"]
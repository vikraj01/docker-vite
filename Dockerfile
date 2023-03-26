FROM node:15.12.0 as builder 
WORKDIR '/app'
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build 

# Multistep process
FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# docker build .
# docker run -p 8080:80 <id>


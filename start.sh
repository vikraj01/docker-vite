docker build -f Dockerfile.dev -t myviteapp .
# docker run -p 3000:3000 vite


docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app myviteapp

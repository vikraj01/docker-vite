docker build -f Dockerfile.dev -t vite .
docker run -p 3000:3000 vite
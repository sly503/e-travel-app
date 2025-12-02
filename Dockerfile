# Multi-stage build for React + Vite + Nginx

# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install bun and dependencies
RUN npm install -g bun@1.2.22 && bun install

# Copy source code
COPY . .

# Build the app (VITE_API_URL can be set at build time)
ARG VITE_API_URL=http://localhost:8081
ENV VITE_API_URL=${VITE_API_URL}
RUN bun run build

# Stage 2: Production with Nginx
FROM nginx:1.27-alpine

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

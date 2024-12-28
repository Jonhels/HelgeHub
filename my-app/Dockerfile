# Stage 1: Build the React app
FROM node:lts-alpine AS build

# Set environment variables to disable npm update and fund notifications
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app with Caddy
FROM caddy:latest

# Set the working directory
WORKDIR /app

# Copy the Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Copy the build output from the previous stage
COPY --from=build /app/dist /app/dist

# Start the Caddy server
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]

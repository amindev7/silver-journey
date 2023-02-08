# Use an official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies in the container
RUN yarn

# Copy the rest of the application files to the container
COPY . .

# Build the Nest.js application in the container
RUN yarn build

# Use an official NGINX image as the base image
FROM nginx:alpine

# Copy the built application files from the previous step to the NGINX container
COPY --from=0 /app/dist /usr/share/nginx/html

# Copy the NGINX configuration to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 in the container
EXPOSE 80

# Start NGINX in the container
CMD ["nginx", "-g", "daemon off;"]

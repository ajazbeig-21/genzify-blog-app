# Use an official Node.js runtime as a parent image
FROM node:10.16.0 as build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular application
RUN npm run build --prod

# Use an official Nginx runtime as the parent image
FROM nginx:alpine as production-stage

# Copy the build output from the build-stage
COPY --from=build-stage /app/dist/angular-integration /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]

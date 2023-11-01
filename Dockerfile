# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Install the Ionic CLI globally
RUN npm install -g ionic

# Copy the rest of the application code to the working directory
COPY . .

# Build the Ionic app
RUN ionic build

# Expose the port that the app will run on
EXPOSE 8000

# Start the Ionic app
CMD ["ionic", "serve", "--host=0.0.0.0", "--disable-host-check"]

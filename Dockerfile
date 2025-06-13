# ngambil image node versi terbaru
FROM node:latest

# Set the working directory in the container
WORKDIR /app

RUN chown -R app /app 

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the app will run on
EXPOSE 8881

# Start the application
CMD ["npm", "start"]
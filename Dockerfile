ARG NODE_VERSION=20.12.2

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package*.json ./
# Run the application as a non-root user.

RUN npm install 

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5173

# Run the application.
CMD ["npm", "run", "dev"]

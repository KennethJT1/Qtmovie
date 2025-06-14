# Use a lightweight Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies (including devDependencies)
RUN npm install -g yarn && yarn install --frozen-lockfile

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN yarn build

# Expose the port (if needed)
EXPOSE 3000

# Define the command to run the app
CMD ["node", "dist/main.js"]
# # Use official Node image
# FROM node:18-alpine

# # Set working directory
# WORKDIR /app

# # Copy package files
# COPY package.json yarn.lock ./

# # Install dependencies
# RUN yarn install --frozen-lockfile

# # Copy Prisma schema
# COPY prisma prisma

# # Copy tsconfig.json
# COPY tsconfig.json ./

# # Copy source code
# COPY src src

# # Generate Prisma client
# RUN npx prisma generate

# # Build the app
# RUN yarn build

# # Expose port and start app
# EXPOSE 3000
# CMD ["yarn", "start:prod"]
# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy Prisma schema
COPY prisma prisma

# Copy tsconfig.json
COPY tsconfig.json ./

# Copy source code
COPY src src

# Generate Prisma client
RUN npx prisma generate

# Build the app and verify output
RUN yarn build && ls -la dist/
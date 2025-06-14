# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Use existing yarn to install dependencies
RUN yarn install --frozen-lockfile

# Generate Prisma client
RUN npx prisma generate

# Build the app
RUN yarn build

# Expose port and start app
EXPOSE 3000
CMD ["yarn", "start:prod"]
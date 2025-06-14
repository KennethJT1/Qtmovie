FROM node:22-alpine

WORKDIR /app

# Install dependencies first for better caching
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Copy the rest of the files
COPY . .

# Generate Prisma client and build the app
RUN npx prisma generate && yarn build

# Install dev dependencies only if needed
RUN if [ "$NODE_ENV" = "development" ]; then yarn install; fi

EXPOSE 3000

# Use node directly instead of yarn for better signal handling
CMD ["node", "dist/main.js"]
### Running the Application

- Start the database:
  docker-compose up -d
- Run migrations and seed:
  npx prisma migrate dev --name init
  npx prisma db seed
- Start the application:
  yarn start:dev
- docker build -t qr-movie-generator .
  docker run -p 3000:3000 qr-movie-generator

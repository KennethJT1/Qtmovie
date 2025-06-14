-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "rated" TEXT,
    "released" TEXT,
    "runtime" TEXT NOT NULL,
    "genres" TEXT[],
    "director" TEXT NOT NULL,
    "writer" TEXT,
    "actors" TEXT,
    "plot" TEXT,
    "language" TEXT,
    "country" TEXT,
    "awards" TEXT,
    "posterUrl" TEXT,
    "metascore" TEXT,
    "imdbRating" TEXT,
    "imdbVotes" TEXT,
    "imdbID" TEXT,
    "type" TEXT,
    "response" TEXT,
    "images" TEXT[],

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_imdbID_key" ON "Movie"("imdbID");

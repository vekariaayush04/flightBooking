-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flight" (
    "flightId" SERIAL NOT NULL,
    "flightNumber" TEXT NOT NULL,
    "flightName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "arrival" TEXT NOT NULL,
    "arrivalTime" TIMESTAMP(3) NOT NULL,
    "departure" TEXT NOT NULL,
    "departureTime" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "distance" INTEGER NOT NULL,
    "availableSeats" INTEGER NOT NULL DEFAULT 100,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("flightId")
);

-- CreateTable
CREATE TABLE "Traveller" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Traveller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "zipcode" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'India',
    "travellerId" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobileNumber_key" ON "User"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Flight_flightNumber_key" ON "Flight"("flightNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Traveller_mobileNumber_key" ON "Traveller"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Address_travellerId_key" ON "Address"("travellerId");

-- AddForeignKey
ALTER TABLE "Traveller" ADD CONSTRAINT "Traveller_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_travellerId_fkey" FOREIGN KEY ("travellerId") REFERENCES "Traveller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

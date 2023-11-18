-- CreateEnum
CREATE TYPE "Languages" AS ENUM ('en', 'he');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "langPref" "Languages" NOT NULL DEFAULT 'en';

/*
  Warnings:

  - The primary key for the `Bullet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Enemy` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Bullet" DROP CONSTRAINT "Bullet_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Bullet_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Bullet_id_seq";

-- AlterTable
ALTER TABLE "Enemy" DROP CONSTRAINT "Enemy_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Enemy_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Enemy_id_seq";

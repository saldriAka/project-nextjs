-- AlterTable
ALTER TABLE "Roles" ALTER COLUMN "role_desc" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "name" TEXT;

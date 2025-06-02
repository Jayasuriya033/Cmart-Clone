-- CreateTable
CREATE TABLE `Domain` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `universalFlag` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Domain_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

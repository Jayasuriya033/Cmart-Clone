-- CreateTable
CREATE TABLE `Publication` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pub_code` VARCHAR(191) NOT NULL,
    `pub_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Publication_pub_code_key`(`pub_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Campaign` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cam_code` VARCHAR(191) NOT NULL,
    `cam_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Campaign_cam_code_key`(`cam_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

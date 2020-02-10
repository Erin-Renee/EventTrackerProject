-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Event
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Event` ;

-- -----------------------------------------------------
-- Schema Event
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Event` DEFAULT CHARACTER SET utf8 ;
USE `Event` ;

-- -----------------------------------------------------
-- Table `marathons`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `marathons` ;

CREATE TABLE IF NOT EXISTS `marathons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(600) NULL,
  `location` VARCHAR(45) NULL,
  `rating` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `marathons`
-- -----------------------------------------------------
START TRANSACTION;
USE `Event`;
INSERT INTO `marathons` (`id`, `name`, `description`, `location`, `rating`) VALUES (1, 'Park Marathon', '26.6 Marathon', 'Denver', '7');

COMMIT;


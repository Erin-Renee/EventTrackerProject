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
-- Table `book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `book` ;

CREATE TABLE IF NOT EXISTS `book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` TEXT NULL,
  `author` VARCHAR(45) NULL,
  `published` DATE NULL,
  `rating` INT NULL,
  `date_read` DATE NULL,
  PRIMARY KEY (`id`, `title`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `book`
-- -----------------------------------------------------
START TRANSACTION;
USE `Event`;
INSERT INTO `book` (`id`, `title`, `description`, `author`, `published`, `rating`, `date_read`) VALUES (1, 'Catch-22', 'Fifty years after its original publication, Catch-22 remains a cornerstone of American literature and one of the funniest—and most celebrated—books of all time. In recent years it has been named to “best novels” lists by Time, Newsweek, the Modern Library, and the London Observer.\n\nSet in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.', 'Joseph Heller', '2011-04-05', 7, '2020-10-02');
INSERT INTO `book` (`id`, `title`, `description`, `author`, `published`, `rating`, `date_read`) VALUES (2, 'I Am Legennd', 'legend', 'Richard Matheson', '2006-11-02', 5, '2020-01-15');

COMMIT;


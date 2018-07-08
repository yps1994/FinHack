# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.38)
# Database: PropCoin
# Generation Time: 2018-07-07 01:07:18 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table ExchangeRate
# ------------------------------------------------------------

CREATE TABLE `ExchangeRate` (
  `coinId` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'unique id for different coin',
  `CoinName` text COMMENT 'name of the coin',
  `exchangeRate` int(11) DEFAULT NULL COMMENT 'exchange rate of the coin',
  PRIMARY KEY (`coinId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table TransactionRecord
# ------------------------------------------------------------

CREATE TABLE `TransactionRecord` (
  `transactionId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) unsigned NOT NULL COMMENT 'Refer to user property',
  `buyORsell` text COMMENT 'buy or sell the coin',
  `timestamp` timestamp NULL DEFAULT NULL COMMENT 'time of trade',
  `orderAmount` float DEFAULT NULL COMMENT 'the number of coin user want to trade',
  `offerRate` int(11) DEFAULT NULL COMMENT 'rate of coin',
  `transactionAmount` float DEFAULT NULL COMMENT 'amount of coin puchased',
  `filledAmount` float DEFAULT NULL COMMENT 'amount of coin purchased (HKD)',
  `orderStatus` text COMMENT 'status of the order (Open/finished)',
  PRIMARY KEY (`transactionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table UserProperty
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UserProperty`;

CREATE TABLE `UserProperty` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'unique id',
  `email` text COMMENT 'registered email',
  `name` text COMMENT 'user real name',
  `password` text COMMENT 'user password',
  `idNumber` text COMMENT 'id card number',
  `balance` float DEFAULT NULL COMMENT 'user bank balance (HKD)',
  `accountNumber` int(16) DEFAULT NULL COMMENT 'user bank account number',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Wallet
# ------------------------------------------------------------

CREATE TABLE `Wallet` (
  `walletId` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'unique wallet id',
  `userId` int(11) unsigned NOT NULL COMMENT 'user id refered to user property table',
  `privateKey` text COMMENT 'private key of wallet',
  `coinAmount` float DEFAULT NULL COMMENT 'the amount of coin user own',
  `gasCoinAmount` float DEFAULT NULL COMMENT 'the amount of gas coin user own',
  `price` float DEFAULT NULL COMMENT 'price of this kind of coin',
  `walletType` int(11) DEFAULT NULL COMMENT 'exchange / saving wallet',
  PRIMARY KEY (`walletId`),
  KEY `id` (`userId`),
  CONSTRAINT `id` FOREIGN KEY (`userId`) REFERENCES `UserProperty` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

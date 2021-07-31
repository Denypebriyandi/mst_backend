-- MySQL dump 10.13  Distrib 5.7.32, for Linux (x86_64)
--
-- Host: localhost    Database: mst
-- ------------------------------------------------------
-- Server version	5.7.32-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_verification` tinyint(1) DEFAULT '0',
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE` (`username`),
  KEY `INDEX` (`username`,`is_verification`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'denypebriyandi','$2a$10$gnU02PnlfS1Pu59Bt.iw6ORZgzCWymXabCq5n0thY/RazeQi0158W',0,'2021-08-01 00:23:08','2021-08-01 03:31:15'),(2,'denypebriyandi2','$2a$10$XpTPKl52DJeCJc9h8VefOum2.cvTR2AVedh4DuE0c0yeXG7kvWX3q',0,'2021-08-01 01:07:43',NULL),(3,'denypebriyandi3','$2a$10$11BPkuTtr2fIUjC11HxlGOLTE6.03dUZqeyps.Q2R9./LPtTeCWV.',0,'2021-08-01 01:08:15',NULL),(4,'denypebriyandi4','$2a$10$KQmfQHikG1WjJeRjJJmDi.O9qh0SPuUvP60AeRuXyCPw1Bu4Zkz/m',0,'2021-08-01 01:09:17',NULL),(5,'denypebriyandi21','$2a$10$/ffT.8NC4u/3fSiG4SR9iuHwB0FhkSP7O67XeahSzzKd/W.HX62O6',0,'2021-08-01 01:09:31',NULL),(6,'denypebriyandi5','$2a$10$/f9j4uT2xosbC1nrQTxDxeP3waCCDtNf2hB3ZOORivDOnDMIYbg1y',0,'2021-08-01 01:09:55',NULL),(7,'denypebriyandi6','$2a$10$FlVi31Jl30ZoQe/geXnI0.RAOnVfWocI9BA1KfN4f3qGxbvH8wHY6',0,'2021-08-01 01:10:23',NULL),(8,'denypebriyandi7','$2a$10$hXbszUFyxSQobeCuBOuHiu2bX7lQtgbOghR3ItmlhNG0mLGJEV6ta',0,'2021-08-01 01:10:48',NULL),(9,'denypebriyandi8','$2a$10$CFO/C315ysMVmYIpEH/TFuiWwWjFDJgiuSwN/FO2dsH4nYR5GCsAy',0,'2021-08-01 01:11:18',NULL),(10,'denypebriyandi9','$2a$10$BmesjsSUxmbASip2C1HnW.5C6Gc.LxJFT4F9LnLNg.pBy/pGRP6RW',0,'2021-08-01 01:11:47',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-01  4:12:23

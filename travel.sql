-- MySQL dump 10.13  Distrib 5.7.11, for osx10.9 (x86_64)
--
-- Host: localhost    Database: travel
-- ------------------------------------------------------
-- Server version	5.7.11

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
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `dest_id` varchar(30) DEFAULT NULL,
  `blog` varchar(200) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (1,NULL,'Pour-over artisan tote bag shoreditch. Thundercats tousled pinterest, heirloom neutra hella blog mumblecore disrupt health goth. IPhone PBR&B selvage, sustainable cronut tofu pitchfork seita','custom',NULL),(2,NULL,'Pour-over artisan tote bag shoreditch. Thundercats tousled pinterest, heirloom neutra hella blog mumblecore disrupt health goth. IPhone PBR&B selvage, sustainable cronut tofu pitchfork seita','custom',NULL),(3,NULL,'Pour-over artisan tote bag shoreditch. Thundercats tousled pinterest, heirloom neutra hella blog mumblecore disrupt health goth. IPhone PBR&B selvage, sustainable cronut tofu pitchfork seita','custom',NULL),(4,NULL,'Pour-over artisan tote bag shoreditch. Thundercats tousled pinterest, heirloom neutra hella blog mumblecore disrupt health goth. IPhone PBR&B selvage, sustainable cronut tofu pitchfork seita','custom',NULL),(5,NULL,'Pour-over artisan tote bag shoreditch. Thundercats tousled pinterest, heirloom neutra hella blog mumblecore disrupt health goth. IPhone PBR&B selvage, sustainable cronut tofu pitchfork seita','custom',NULL),(6,NULL,'Master cleanse skateboard banjo, humblebrag mixtape venmo listicle swag offal roof party chillwave lomo yr fanny pack. Vegan etsy ugh ennui','custom','2017-03-03'),(7,NULL,'Master cleanse skateboard banjo, humblebrag mixtape venmo listicle swag offal roof party chillwave lomo yr fanny pack. Vegan etsy ugh ennui','custom','2016-05-05'),(8,NULL,'Pinterest jean shorts celiac master cleanse, vegan typewriter franzen. Chicharrones tacos franzen waistcoat fingerstache','custom','2016-01-01'),(9,NULL,'Pop-up flexitarian pour-over ramps freegan. Migas photo booth skateboard selvage, tote bag taxidermy tacos everyday carry asymmetrical shabby chic','custom','2016-10-10'),(10,NULL,'Asymmetrical narwhal crucifix, post-ironic YOLO before they sold out slow-carb gochujang meh hammock lo-fi vice farm-to-table tofu bushwick.','custom','2016-10-04'),(11,NULL,'terer','custom',NULL),(12,NULL,'blogging on the couch','custom',NULL),(13,NULL,'IPhone helvetica selfies neutra ethical, heirloom fanny pack tofu hammock portland fingerstache migas crucifix. Polaroid kinfolk butcher neutra','custom',NULL),(14,NULL,'Photo booth tofu bicycle rights ennui DIY chambray kickstarter health goth, kombucha lomo gentrify knausgaard.','custom',NULL),(15,NULL,'fjdlsfjlkdjfkldjfl eowrieoi kdlgjkfjg nbbflkireer','custom',NULL),(16,NULL,'dfsdfdsfasdfdsds','custom',NULL),(17,NULL,'things more things lots of thing and even more','custom',NULL),(18,NULL,'dsfgergkr;gklfdk;lg','custom',NULL),(19,NULL,'dsfdsf','custom','2016-08-04'),(20,NULL,'WHY STUFF WHEN THINGS WHO YOU','custom',NULL),(21,NULL,'fldsjfjdslkfldsjflds','custom',NULL),(22,NULL,'dlfjdslkfjdslk','custom',NULL),(23,NULL,'abcde abcde abcde','custom','2016-08-04');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dest`
--

DROP TABLE IF EXISTS `dest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dest` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `loc` varchar(200) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `activity1` varchar(200) DEFAULT NULL,
  `activity2` varchar(200) DEFAULT NULL,
  `activity3` varchar(200) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dest`
--

LOCK TABLES `dest` WRITE;
/*!40000 ALTER TABLE `dest` DISABLE KEYS */;
INSERT INTO `dest` VALUES (1,'Aruba','Someplace, Island','http://www.arubatourism.com/images/beach_chikees.jpg','2016-07-07','hiking','dancing','snorkeling','custom'),(2,'Africa','Capetown, South Africa','http://images.nationalgeographic.com/wpf/media-live/photos/000/017/cache/capetown-view_1797_600x450.jpg','2020-01-01','food tour','museums','city walk','custom'),(3,'Morocco','Casablanca, Morocco','http://images.nationalgeographic.com/wpf/media-live/photos/000/017/cache/capetown-view_1797_600x450.jpg','2017-02-02','fishing expedition','art tour','market visit','custom'),(21,'dfd','ewre','http://www.adrmediaenterprises.com/TRAVEL.jpg',NULL,'fdf','fdsfds','dsfdsf','custom'),(22,'HEY','HEY','http://www.adrmediaenterprises.com/TRAVEL.jpg',NULL,'THINGS','THINGS','STUFF','custom'),(23,'lalallala','lalla','http://www.adrmediaenterprises.com/TRAVEL.jpg',NULL,'fkldsfjdsjk','dlsfjdsl','flkdsfl','custom'),(24,'dfsdfds;k','dsfkd;kf','http://www.adrmediaenterprises.com/TRAVEL.jpg',NULL,'fldsfjdslk','jfldsfjl','fjldsfj','custom'),(25,'a','a','http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/beach-wallpaper-9.jpg',NULL,'a','a','a','custom');
/*!40000 ALTER TABLE `dest` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-19 14:36:17

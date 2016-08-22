-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2016 at 07:22 AM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hex`
--

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE IF NOT EXISTS `careers` (
  `id` int(11) NOT NULL,
  `job_id` bigint(20) NOT NULL,
  `position` varchar(250) NOT NULL,
  `state` varchar(250) NOT NULL,
  `fname` varchar(250) NOT NULL,
  `lname` varchar(250) NOT NULL,
  `city` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `contact` bigint(20) NOT NULL,
  `dob` date NOT NULL,
  `overall_exp` varchar(250) NOT NULL,
  `relevant_exp` varchar(250) NOT NULL,
  `current_ctc` varchar(250) NOT NULL,
  `expected_ctc` varchar(250) NOT NULL,
  `notice_period` int(11) NOT NULL,
  `resume` varchar(250) NOT NULL,
  `create_date` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `careers`
--

INSERT INTO `careers` (`id`, `job_id`, `position`, `state`, `fname`, `lname`, `city`, `email`, `contact`, `dob`, `overall_exp`, `relevant_exp`, `current_ctc`, `expected_ctc`, `notice_period`, `resume`, `create_date`) VALUES
(1, 64467852, 'Software Engineer', 'Mumbai', 'Murali', 'M', 'Vellore', 'murali.m@redbeaninc.com', 8148746086, '2013-05-04', '04', '05', '3-4', '5-6', 3, '', '2016-08-04 15:56:17');

-- --------------------------------------------------------

--
-- Table structure for table `form_details1`
--

CREATE TABLE IF NOT EXISTS `form_details1` (
  `id` int(11) NOT NULL,
  `firstname` varchar(25) NOT NULL,
  `lastname` varchar(25) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contactnumber` int(10) NOT NULL,
  `organisation` varchar(11) NOT NULL,
  `message` text NOT NULL,
  `other` varchar(250) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `contact` (`contact`);

--
-- Indexes for table `form_details1`
--
ALTER TABLE `form_details1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `form_details1`
--
ALTER TABLE `form_details1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

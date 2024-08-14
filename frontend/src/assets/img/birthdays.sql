-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2024 at 02:27 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nbl_birthday`
--

-- --------------------------------------------------------

--
-- Table structure for table `birthdays`
--

CREATE TABLE `birthdays` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `isAttending` varchar(255) DEFAULT NULL,
  `food` varchar(255) DEFAULT NULL,
  `drink` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `birthdays`
--

INSERT INTO `birthdays` (`id`, `userName`, `isAttending`, `food`, `drink`, `createdAt`, `updatedAt`) VALUES
(55, 'test', 'no', NULL, NULL, '2024-08-14 02:55:45', '2024-08-14 02:55:45'),
(56, 'test', 'yes', 'Chicken Rice Bowl yakiniku', 'Ice Black Tea', '2024-08-14 02:55:57', '2024-08-14 02:55:57'),
(57, 'nabila', 'yes', 'Chicken Rice Bowl yakiniku', 'Ice Lemon Tea', '2024-08-14 04:11:24', '2024-08-14 04:11:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `birthdays`
--
ALTER TABLE `birthdays`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `birthdays`
--
ALTER TABLE `birthdays`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

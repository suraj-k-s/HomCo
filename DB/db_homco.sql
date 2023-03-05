-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2022 at 05:27 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_homco`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(100) NOT NULL,
  `admin_email` varchar(100) NOT NULL,
  `admin_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`) VALUES
(1, 'Admin', 'admin@gmail.com', 'admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_complaint`
--

CREATE TABLE `tbl_complaint` (
  `complaint_id` int(11) NOT NULL,
  `complaint_content` varchar(500) NOT NULL,
  `complaint_title` varchar(100) NOT NULL,
  `complainttype_id` int(11) NOT NULL,
  `complaint_date` varchar(100) NOT NULL,
  `complaint_status` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_complainttype`
--

CREATE TABLE `tbl_complainttype` (
  `complainttype_id` int(11) NOT NULL,
  `complainttype_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

CREATE TABLE `tbl_district` (
  `district_id` int(11) NOT NULL,
  `district_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`) VALUES
(1, 'Idukki'),
(2, 'Kottayam'),
(3, 'Ernakulam'),
(4, 'Kollam');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_place`
--

CREATE TABLE `tbl_place` (
  `place_name` varchar(100) NOT NULL,
  `district_id` int(11) NOT NULL,
  `place_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_place`
--

INSERT INTO `tbl_place` (`place_name`, `district_id`, `place_id`) VALUES
('Thodupuzha', 1, 1),
('Muavttupuzha', 3, 2),
('Vazhakulam', 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pworks`
--

CREATE TABLE `tbl_pworks` (
  `pworks_id` int(11) NOT NULL,
  `pworks_title` varchar(100) NOT NULL,
  `pworks_details` varchar(100) NOT NULL,
  `pworks_photo` varchar(100) NOT NULL,
  `worker_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_request`
--

CREATE TABLE `tbl_request` (
  `request_id` int(11) NOT NULL,
  `request_details` varchar(100) NOT NULL,
  `request_date` varchar(100) NOT NULL,
  `request_for_date` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `worker_id` int(11) NOT NULL,
  `request_status` varchar(100) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_request`
--

INSERT INTO `tbl_request` (`request_id`, `request_details`, `request_date`, `request_for_date`, `user_id`, `worker_id`, `request_status`) VALUES
(8, 'sDZCVxdscvx', '2022-07-26', '2022-07-21', 1, 2, '1'),
(9, 'lkjgyudtr', '2022-07-26', '2022-07-22', 1, 2, '1');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_review`
--

CREATE TABLE `tbl_review` (
  `review_id` int(11) NOT NULL,
  `review_count` varchar(100) NOT NULL,
  `review_content` varchar(100) NOT NULL,
  `review_name` varchar(100) NOT NULL,
  `review_date` varchar(100) NOT NULL,
  `worker_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_contact` int(11) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_address` varchar(100) NOT NULL,
  `user_photo` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `place_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_contact`, `user_email`, `user_address`, `user_photo`, `user_password`, `place_id`) VALUES
(1, 'user1', 1234555667, 'user1@gmail.com', 'qwerteyeuur', 'photo 4.jpg', 'user1', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_worker`
--

CREATE TABLE `tbl_worker` (
  `worker_id` int(11) NOT NULL,
  `worker_name` varchar(100) NOT NULL,
  `worker_contact` int(11) NOT NULL,
  `worker_email` varchar(100) NOT NULL,
  `worker_address` varchar(100) NOT NULL,
  `worker_photo` varchar(100) NOT NULL DEFAULT '0',
  `worker_password` varchar(100) NOT NULL,
  `worker_vstatus` varchar(100) NOT NULL DEFAULT '0',
  `place_id` int(11) NOT NULL,
  `workertype_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_worker`
--

INSERT INTO `tbl_worker` (`worker_id`, `worker_name`, `worker_contact`, `worker_email`, `worker_address`, `worker_photo`, `worker_password`, `worker_vstatus`, `place_id`, `workertype_id`) VALUES
(2, 'joe', 123456789, 'joe@gmail.com', 'joe villla', 'photo1.png', 'joejoe', '1', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_workertype`
--

CREATE TABLE `tbl_workertype` (
  `wokertype_id` int(11) NOT NULL,
  `workertype_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_workertype`
--

INSERT INTO `tbl_workertype` (`wokertype_id`, `workertype_name`) VALUES
(1, 'electrical works'),
(2, 'plumbing'),
(3, 'carpentry'),
(4, 'computer repairs'),
(5, 'cleaning');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  ADD PRIMARY KEY (`complaint_id`);

--
-- Indexes for table `tbl_complainttype`
--
ALTER TABLE `tbl_complainttype`
  ADD PRIMARY KEY (`complainttype_id`);

--
-- Indexes for table `tbl_district`
--
ALTER TABLE `tbl_district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `tbl_place`
--
ALTER TABLE `tbl_place`
  ADD PRIMARY KEY (`place_id`);

--
-- Indexes for table `tbl_pworks`
--
ALTER TABLE `tbl_pworks`
  ADD PRIMARY KEY (`pworks_id`);

--
-- Indexes for table `tbl_request`
--
ALTER TABLE `tbl_request`
  ADD PRIMARY KEY (`request_id`);

--
-- Indexes for table `tbl_review`
--
ALTER TABLE `tbl_review`
  ADD PRIMARY KEY (`review_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `tbl_worker`
--
ALTER TABLE `tbl_worker`
  ADD PRIMARY KEY (`worker_id`);

--
-- Indexes for table `tbl_workertype`
--
ALTER TABLE `tbl_workertype`
  ADD PRIMARY KEY (`wokertype_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  MODIFY `complaint_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_complainttype`
--
ALTER TABLE `tbl_complainttype`
  MODIFY `complainttype_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_district`
--
ALTER TABLE `tbl_district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_place`
--
ALTER TABLE `tbl_place`
  MODIFY `place_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_pworks`
--
ALTER TABLE `tbl_pworks`
  MODIFY `pworks_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_request`
--
ALTER TABLE `tbl_request`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_review`
--
ALTER TABLE `tbl_review`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_worker`
--
ALTER TABLE `tbl_worker`
  MODIFY `worker_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_workertype`
--
ALTER TABLE `tbl_workertype`
  MODIFY `wokertype_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

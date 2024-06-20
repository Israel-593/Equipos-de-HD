-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-05-2023 a las 22:28:42
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `registro_maquinas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_maquinas`
--

CREATE TABLE `maquinas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `numero_maquina` int NOT NULL,
  `numero_serie` varchar(255) NOT NULL,
  `tipo_maquina` varchar(255) NOT NULL,
  `novedades` text,
  `estado` varchar(255) NOT NULL,
  `observaciones` text,
  `repuestos` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

--
-- Volcado de datos para la tabla `registro_maquinas`
--

INSERT INTO `estudiantes` (`id_estudiante`, `nombre_alumno`, `email_alumno`, `curso_alumno`, `created_at`) VALUES
(30, 'Luis11323232', '11232311@gmail.com', 'NodeJS', '2023-05-26');

INSERT INTO `maquinas` (`fecha`, `numero_maquina`, `numero_serie`, `tipo_maquina`, `novedades`, `estado`, `observaciones`, 
`repuestos`) VALUES ('2024-06-07', 1, 'PRUEBA', 'PRUEBA', 'Sin novedades', 'Operativa', 'Revisar', 
'revisar');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estudiantes`
--
ALTER TABLE `maquinas`
  ADD PRIMARY KEY (`id_maquina`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estudiantes`
--
ALTER TABLE `maquinas`
  MODIFY `id_maquina` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

<?php
header("Access-Control-Allow-Origin: *");
header('Pragma:no-cache');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: 0');

// 存有图片链接的文件 image.txt
$lines = file('image.txt');

// 随机选择一行并去除换行符
$imageUrl = trim($lines[array_rand($lines)]);

// 进行重定向
header("Location: $imageUrl");
?>
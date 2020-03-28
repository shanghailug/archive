<?php
if (empty($_GET["file"])) die("Security violation");

$yourfile = "http://www.geekbone.org/docs/"; // Path if any
$yourfile .= $_GET["file"];
$lockdir = 1;

function loadfile($file, $lockdir = 1)
{
    $phpv = phpversion();
    if ($lockdir && preg_match("/\.\.(\\\|\/)/", $file)) {
        die("Security violation");
    } 
    if ($phpv >= "4.3.0") {
        if ($out = @file_get_contents($file)) {
            return $out;
        } else {
            die("File $file not found!");
        } 
    } else {
        if ($f = @file($file)) {
            $out = implode("", $f);
            return $out;
        } else {
            die("File $file not found!");
        } 
    } 
} 

$data = loadfile($yourfile, $lockdir);

if ($_GET["type"] == "txt") {
    header("Content-type: text/plain");
    echo $data;
} else {
    echo "<html>\n<head>\n<title>$yourfile</title>\n</head>\n";
    echo "<body style=\"white-space: nowrap; font-size: 14px;\">\n<pre>\n";
    echo htmlspecialchars($data, ENT_QUOTES);
    echo "\n</pre>\n<p><a href=\"${_SERVER['REQUEST_URI']}&type=txt\">Text Version</a></p>";
    echo "\n</body>\n</html>";
} 

?>
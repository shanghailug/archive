<?php
if (empty($_GET["file"])) die("Security violation");

$yourfile = "./"; // Path if any
$yourfile .= $_GET["file"];

function loadfile($file)
{
    $phpv = phpversion();
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

$data = loadfile($yourfile);

if ($_GET["type"] == "txt") {
    header("Content-type: text/plain");
    echo $data;
} else {
    echo "<html>\n<head>\n<title>$yourfile</title>\n</head>\n";
    echo "<body style=\"white-space: nowrap; font-size: 14px;\">\n";
    $trans_tbl = get_html_translation_table(HTML_SPECIALCHARS, ENT_QUOTES);
    $trans_tbl[" "] = "&nbsp;";
    echo nl2br(strtr($data, $trans_tbl));
    echo "\n</body>\n</html>";
} 

?>
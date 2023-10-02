<?php
function solution($n) {
    $str = strval($n);
    $index = (int)ceil(strlen($str)/2);
    $left = 0;
    $right = 0;
    for($i = 0; $i < $index; $i++){
        $left += intval($str[$i]);
        $right += intval($str[$index + $i]);
    }
    
    if($left == $right) {
        return true;
    } else { return false;}
}
?>

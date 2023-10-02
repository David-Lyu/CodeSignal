<?php
function solution($a) {
    $index = 0;
    $temp = 0;
    for($i = 0; $i < count($a) -1; $i++) {
        if($a[$i] == -1) {
            continue;
        }
        
        $index = $i;
        
        for($j = $i + 1; $j < count($a); $j++) {
            if($a[$j] == -1) {
                continue;
            }
            if($a[$j] < $a[$index]) {
                $temp = $a[$index];
                $a[$index] = $a[$j];
                $a[$j] = $temp;
            }
        }
    }
    return $a;
}
?>

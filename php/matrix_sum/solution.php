<?php
function solution($matrix) {
    //need to flip the for loop
    $solution = 0;
    for($j = 0; $j < count($matrix[0]); $j++){
        for($i = 0; $i< count($matrix); $i++) {
            if($matrix[$i][$j] == 0){
                break;
            } else {
                $solution += $matrix[$i][$j];
            }
        }
    }
    return $solution;
}
?>

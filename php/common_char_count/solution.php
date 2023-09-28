<?php
function solution($s1, $s2) {
    $a = [];
    $b = [];
    $res = 0;
    for ($i=0;$i<max(strlen($s1), strlen($s2)); $i++) {
       if (isset($s1[$i])) $a[] =$s1[$i];
       if (isset($s2[$i])) $b[] =$s2[$i];
    }
    foreach ($a as $c) {
        $k = array_search($c, $b);
        if ($k !== false) {
            $res++;
            unset($b[$k]);
        }
    }

    print_r($res);
    return $res;
}
?>

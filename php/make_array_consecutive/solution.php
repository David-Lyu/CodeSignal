function solution(array $statues) {
    sort($statues);
    $temp = 0;
    $num_statue = 0;
    
    foreach($statues as $i => $statue) {
        if($i == 0) {
            $temp = $statue;
            continue;
        }
        $num_statue += $statue - $temp - 1;
        $temp = $statue;
    }
    return $num_statue;
}


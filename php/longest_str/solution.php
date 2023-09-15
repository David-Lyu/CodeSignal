function solution($inputArray) {
    $largest_num = 0;
    $arr = [];

    foreach($inputArray as $input) {
        $len = strlen($input);
        if($len < $largest_num) {
            continue;
        } else if($len > $largest_num) {
            $largest_num = $len;
            $arr = [];
        }
        array_push($arr,$input);

    }
    return $arr;
}

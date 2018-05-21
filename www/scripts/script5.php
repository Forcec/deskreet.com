<?php
findMatrix();
/**
 * Функция, которая находит матрицу достижимости по алгоритму Флойда-Уоршела
 * @param null
 */
function findMatrix(){
    $matrix = $_POST['matrix'];
    $matrix = findErrors($matrix);
    output($matrix);
    $n = count($matrix);
    foreach ($matrix as $key=>$matrix1){
        foreach ($matrix1 as $key1=>$matrix2){
            if($matrix[$key][$key1] == 0){
                $matrix[$key][$key1] = 100;
            }
        }
    }
    for($k = 0; $k < $n; $k++){
        for($i = 0; $i < $n; $i++){
            for($j = 0; $j < $n; $j++){
                $secmin = $matrix[$i][$k] + $matrix[$k][$j];
                $matrix[$i][$j] = min($matrix[$i][$j], $secmin);
            }
        }
    }
    foreach ($matrix as $key=>$matrix1){
        foreach ($matrix1 as $key1=>$matrix2){
            if($matrix[$key][$key1] == 100){
                $matrix[$key][$key1] = 0;
            }elseif($matrix[$key][$key1] > 1){
                $matrix[$key][$key1] = 1;
            }
        }
    }
    output($matrix);
}
/**
 * Функция, производящая валидацию
 * @param mass - массив
 * @return array
 */
function findErrors($mass){
    $mass = explode("\r\n", $mass);
    foreach ($mass as $key=>$matrix1){
        $mass[$key] = explode(" ", $matrix1);
    }
    $n = 0;
    foreach($mass as $key=>$mas){
        foreach($mas as $key1=>$mas1){
            if($mas1 == ""){
                unset($mass[$key][$key1]);
            }else if($mas1 == " "){
                unset($mass[$key][$key1]);
            }
        }
        if(count($mass[$key]) == 0){
            unset($mass[$key]);
            continue;
        }
    }
    foreach($mass as $key=>$mas){
        $n++;
    }
    foreach($mass as $key=>$mas){
        $m = 0;
        foreach($mas as $key1=>$mas1){
            $m++;
        }
        if($n != $m){
            echo "Введите квадратную матрицу!";
            exit();
        }
    }
    foreach ($mass as $key=>$matrix1){
        foreach ($matrix1 as $key1=>$matrix2){
            $mass[$key][$key1] = (int)$mass[$key][$key1];
            if($mass[$key][$key1] > 1) {
                $mass[$key][$key1] = 1;
            }elseif($mass[$key][$key1] < 0) {
                echo "Вес ребра меньше нуля!";
                exit();
            }
        }
    }
    $mass = array_values($mass);
    foreach ($mass as $key=>$matrix1){
        $mass[$key] = array_values($matrix1);
    }
    $k = 0;
    foreach ($mass as $mas){
        foreach ($mas as $mas1){
            if (!is_int($mas1)) {
                echo "Введены недопустимые символы!";
                $k++;
                exit();
            }
        }
    }
    if($k == 0){
        return $mass;
    }
}
/**
 * Функция, выводящая массив через пробелы и \n
 * @param array
 * @return array
 */
function output($matrix){
    foreach ($matrix as $matrix1){
        foreach ($matrix1 as $matrix2){
            echo $matrix2." ";
        }
        echo "<br>";
    }
    echo "<br>";
}
?>
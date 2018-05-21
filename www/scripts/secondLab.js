/**@author Хусаинов Адель, студент ИВТАПбд-11
 * @param id1 Ид первого поля, с которого мы будем считывать данные
 * @param id2 Ид второго поля, с которого мы будем считывать данные
 * <p> Функция считывает текст о обоих полей, а после распарсивает ее на одномерный массив, где разделитель - ';'
 * <p> Если функция не прошла валидацию, то она ничего не возвращает
 */
function getData() {
    text = document.getElementById("text").value;
    var index = 0;
    index = text.indexOf("");
    while(index != -1) {
        text = text.replace(" ", "");
        index = text.indexOf(" ");
    }
    var temp_massive = [];
    var massive =[[]];
    temp_massive = text.split("\n");
    for(var i = 0; i < temp_massive.length; ++i) {
        massive[i] = temp_massive[i].split('');
    }
    return massive;
}
/**
 * <p>Функция пересечения
 * @param array - массив, который проверяется на ошибки
 * @return error - количество ошибок
 */
function findError(array) {
    var error = 0, length = array[0].length;
    for(var i = 0; i< array.length; ++i) {
        if(array[i].length != length) {
            error++;
            break;
        }
        if(array[i].length != array.length) {
            error++;
            break;
        } /* not working
        for(var j = 0; j < array[i].length; ++j) {
            if (array[i][j] != 0 || array[i][j] != 1) {
                error++;
                break;
            }
        } */
    }
    return error;
}
 /**
 * <p>Функция проверки симметрии
 * @param array - массив, который проверяется на ошибки
 * @return проверку, является ли массив симметричным
 * если элементы зеркально равны относительно главной диагонали, то матрица симметрична
 */

function checkSymmetry(array) {
     if (findError(getData()) != 0) {
         document.getElementById("result").innerText = "Ошибка ввода!";
         return;
     }
     var symmetry = 1;
     for (var i = 0; i < array.length; ++i) {
         for (var j = 0; j < array[i].length; ++j) {
             if (array[i][j] != array[j][i] && i != j) {
                 symmetry = 0;
             }
         }
     }
    if (symmetry == 1) {
        document.getElementById("result").innerHTML = "Отношение симметрично";
    }
    else {
        document.getElementById("result").innerHTML = "Отношение не симметрично";
    }
    return symmetry;
}
/**
 * <p>Функция проверки кососимметрии
 * @param array - массив, который проверяется на ошибки
 * @return проверку, является ли массив кососимметричным
 * Отношение кососимметрично, когда оно не симметрично
 *
 */
function checkBackSymmetry(array) {
    if(findError( getData() ) != 0) {
        document.getElementById("result").innerText = "Ошибка ввода!";
        return;
    }
    if (checkSymmetry( getData() ) == 1) {
        document.getElementById("result").innerHTML = "Отношение не кососимметрично";
    }
    else {
        document.getElementById("result").innerHTML = "Отношение кососимметрично";
    }
}
/**
 * <p>Функция проверки рефлексивности
 * @param array - массив, который проверяется на ошибки
 * @return проверку, является ли массив симметричным
    Функция рефлексивна, если на главной диагонали стоят только единицы
 */
function checkReflex(array) {
    if(findError( getData() ) != 0) {
        document.getElementById("result").innerText = "Ошибка!";
        return;
    }
    var reflex = 1;
    for(var i = 0; i < array.length; ++i) {
        for(var j = 0; j < array[i].length; ++j) {
            if (array[i][j] != 1 && i == j)
                reflex = 0;
            }
        }

    if (reflex == 0) {
        document.getElementById("result").innerHTML = "Отношение не рефлексивно";
    }
    else {
        document.getElementById("result").innerHTML = "Отношение рефлексивно";
    }
}
/**
 * <p>Функция проверки симметрии
 * @param array - массив, который проверяется на ошибки
 * @return проверку, является ли массив симметричным
    Функция транзитивна, /*Отношение называется транзитивным, если для любых трех элементов множества A,B,C
 выполняется отношение aRb и bRс влечет выполнение aRc*/
function checkTransition(mass) {
        var transit = 1;
        var massive = mass, p = 0;
        for (var i = 0; i < mass.length; i++) {
            for(var j=0;j < mass[i].length;j++) {
                massive[i][j] = 0;
                for(var p = 0; p < mass.length; p++) {
                    massive[i][j]=mass[i][p] * mass[p][j];
                }
            }
        }
        for (var i = 0; i < mass.length; i++) {
            for (var j = 0; j < mass[i].length; j++) {
                if ((massive[j][i] != mass[i][j])&&(massive[i][j] == 1)) {
                    transit = 0;
                }
            }
        }
        if(transit) {
            document.getElementById('result').innerHTML = "Отношение транзитивно";
        } else {
            document.getElementById('result').innerHTML = "Отношение не транзитивно";
        }
    }
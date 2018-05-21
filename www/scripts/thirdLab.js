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
    }
    return error;
}
 /**
 * <p>Функция проверки симметрии
 * @param array - массив, который проверяется на ошибки
 * @return проверку, является ли массив симметричным
 * если элементы зеркально равны относительно главной диагонали, то матрица симметрична
 */

function checkFunction(array) {
    if(findError( getData() ) != 0) {
        document.getElementById("result").innerText = "Ошибка ввода!";
        return;
    }
    var func = 1;
    for(var i = 0; i < array.length; ++i) {
        var counter = 0;
        for(var j = 0; j < array[i].length; ++j) {
            if(array[i][j] == 1) {
                counter++;
            }
        }
        if(counter != 1) {
            func = 0;
            break;
        }
    }
    if (func == 0) {
        document.getElementById("result").innerHTML = "Не функция";
    }
    else {
        document.getElementById("result").innerHTML = "Функция";
    }
}
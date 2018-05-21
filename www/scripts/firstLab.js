/**@author Хусаинов Адель, студент ИВТАПбд-11
 * @param id1 Ид первого поля, с которого мы будем считывать данные
 * @param id2 Ид второго поля, с которого мы будем считывать данные
 * <p> Функция считывает текст о обоих полей, а после распарсивает ее на одномерный массив, где разделитель - ';'
 * <p> Если функция не прошла валидацию, то она ничего не возвращает
*/
 function initialize(id1,id2) {
    var error = 0;
    first = document.getElementById(id1).value;
    second = document.getElementById(id2).value;
    firstmassive = first.split(';');
    secondmassive = second.split(';');
    resultmassive = [];
    if(check(secondmassive,firstmassive)) {
        return;
    }
}

/**
 * <p>Функция пересечения
 * @param id1 Ид первого поля, с которого мы будем считывать данные
 * @param id2 Ид второго поля, с которого мы будем считывать данные
 * @return Возвращает обратно массив, полученный из введенных двух массивов, который является конкатенацией без повторения элементов двух множеств
 */
function cross(id1,id2) {
    initialize(id1, id2);
    resultmassive = resultmassive.concat(secondmassive);
    if(check(firstmassive, secondmassive)) {
        return;
    }
    for(var i = 0; i < firstmassive.length; ++i) {
            var verify = 1;
        for(var j = 0; j < secondmassive.length; ++j) {
            if(secondmassive[j] == firstmassive[i]) {
                verify = 0;
            }

        }
        if(verify) {
            resultmassive.push(firstmassive[i]);
        }
    }
    document.getElementById('result').innerHTML = resultmassive;
    return resultmassive;
}

/**
 * <p>Функция объединения
 * @param Null
 * @value verify переменная, проверяющая, есть ли конкретный элемент в двух множествах одновременно
 * @return Возвращает обратно массив, полученный из первых двух массивов, который отсеивает все элементы, которые не входят в оба множества
 */
function unite() {
    initialize('text','text2');
    resultmassive =  [];
    if(check(firstmassive, secondmassive)) {
        return;
    }
    for(var i = 0; i < firstmassive.length; ++i) {
        var verify = 0;
        for(var j = 0; j < secondmassive.length; ++j) {
            if(secondmassive[j] == firstmassive[i]) {
                verify = 1;
            }
        }
        if(verify) {
            resultmassive.push(firstmassive[i]);
        }
    }
    document.getElementById('result').innerHTML = resultmassive;
    return resultmassive;
}
/**
 * <p>Функция симметрической разности
 * @param Null
 * @return Возвращает обратно массив, полученный из первых двух массивов, который отсеивает все элементы, которые входят в оба множества
 */
function symmDiff() {
    resultmassive = cross('text', 'text2');
    if(check(firstmassive, secondmassive)) {
        return;
    }
    for(var i = 0;i < firstmassive.length; ++i) {
        for (var j = 0; j < secondmassive.length; ++j) {
            if (firstmassive[i] == secondmassive[j]) {
                resultmassive.splice(find(resultmassive, firstmassive[i]), 1);
            }
        }
    }
    document.getElementById('result').innerHTML = resultmassive;
    return resultmassive;
}
/**
 * <p>Функция  дополнения
 * @param id1 Ид первого поля, с которого мы будем считывать данные
 * @param id2 Ид второго поля, с которого мы будем считывать данные
 * @return Возвращает обратно массив, являющийся одним из массивов, за вычетом всех совпадающим с другим множеством элементов
 */
function plus(id1,id2) {
    initialize(id1,id2);
    resultmassive = firstmassive;
    for(var i = 0; i < resultmassive.length; ++i) {
        for(var j = 0; j < secondmassive.length; ++j) {
            if(resultmassive[i] == secondmassive[j]) {
                resultmassive.splice(i, 1);
                i--;
            }
        }
    }
    document.getElementById('result').innerHTML = resultmassive;
    return resultmassive;
}
/**
 * <p>Функция нахождения элемента в массиве
 * @param array Массив, в котором мы будем искать элемент
 * @param value  само значение элемента
 * @return Возвращает значение, если элемент в массиве найдем, и -1 в противном случае
 */
function find(array, value) {
    if (array.indexOf) {
        return array.indexOf(value);
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }

    return -1;
}
/**
 * <p>Функция проверки на валидацию
 * @param mass1, mass2 Массивы, в которых мы будем производить валидацию
 * @return Возвращает обратно количество ошибок, найденных при валидации
 */
function check(mass1, mass2) {
    var error = 0;
    if(mass1[0] == '' || mass2[0] == '') {
        alert(("Один из массивов пустой! Пожалуйста, заполните оба множества!"));
        return 1;
    }
    for(var i = 0;i< mass1.length; ++i) {
        for(var j = 0; j < mass1.length; ++j) {
            if(i==j) {
                continue;
            }
            if(mass1[i] == mass1[j]) {
                mass1.splice(i,1);
            }
        }
    }
    for(var i = 0;i< mass2.length; ++i) {
        for(var j = 0; j < mass2.length; ++j) {
            if(i==j) {
                continue;
            }
            if(mass2[i] == mass2[j]) {
                mass2.splice(i,1);
            }
        }
    }
    for(var i = 0; i < mass1.length && i < mass2.length; ++i)
    {

        if (mass1[i].length > 4 && mass1.length != 0) {
            alert("Введено больше 4 символов в " + (i+1) + " элементе первого множества, ошибка!");
            error++;
        }
        if (mass2[i].length > 4 && mass2.length != 0) {
            alert("Введено больше 4 символов в " + (i+1) + " элементе второго множества, ошибка!");
            error++;
        }
        if (mass1[i].length < 4 && mass1.length != 0) {
            alert("Введено меньше 4 символов в " + (i+1) + " элементе первого множества, ошибка!");
            error++;
        }
        if (mass2[i].length < 4 && mass2.length != 0) {
            alert("Введено меньше 4 символов в " + (i + 1) + " элементе второго множества, ошибка!");
            error++;
        }
        if(mass1[i][0] % 2 == 1) {
            alert("Введено нечетное число в " + (i+1) + " элементе первого множества, ошибка!");
            error++;
        }
        if(isNaN(mass1[i][0])) {
            alert("Введено не число в " + (i+1) + " элементе первого множества, ошибка!");
            error++;
        }
        if(isNaN(mass2[i][0])) {
            alert("Введено не число в " + (i+1) + " элементе второго множества, ошибка!");
            error++;
        }
        if(mass2[i][0] % 2 == 1) {
            alert("Введено нечетное число в " + (i+1) + " элементе второго множества, ошибка!");
            error++;
        }

        if(mass1[i][1] % 2 == 0) {
            alert("Введено четное число в " + (i+1) + " элементе первого множества, ошибка!");
            error++;
        }
        if(isNaN(mass1[i][1])) {
            alert("Введено не число в " + (i+1) + " элементе первого множества, ошибка!");
            error++;
        }
        if(isNaN(mass2[i][1])) {
            alert("Введено не число в " + (i+1) + " элементе второго множества, ошибка!");
            error++;
        }
        if(mass2[i][1] % 2 == 0) {
            alert("Введено четное число в " + (i+1) + " элементе второго множества, ошибка!");
            error++;
        }
        if(!((mass1[i][2]>='A' && mass1[i][2] <= 'Z') || (mass1[i][2]>='a' && mass1[i][2] <= 'z') ||
                (mass1[i][2]>= 'а' && mass1[i][2] <='я') || (mass1[i][2]>= 'А' && mass1[i][2] <= 'Я'))) {
            alert("Введена не буква в " + (i+1) + " элементе второго множества, ошибка!");
            error++;
        }
        if(!((mass2[i][2]>='A' && mass2[i][2] <= 'Z') || (mass2[i][2]>='a' && mass2[i][2] <= 'z') ||
            (mass2[i][2]>= 'а' && mass2[i][2] <='я') || (mass2[i][2]>= 'А' && mass2[i][2] <= 'Я'))) {
            alert("Введена не буква в " + (i+1) + " элементе второго множества, ошибка!");
            error++;
        }

        if(!((mass1[i][3]>='A' && mass1[i][3] <= 'Z') || (mass1[i][3]>='a' && mass1[i][3] <= 'z') ||
                (mass1[i][3]>= 'а' && mass1[i][3] <='я') || (mass1[i][3]>= 'А' && mass1[i][3] <= 'Я'))) {
            alert("Введена не буква в " + (i+1) + " элементе второго множества, ошибка!");
            error++;
        }
        if(!((mass2[i][3]>='A' && mass2[i][3] <= 'Z') || (mass2[i][3]>='a' && mass2[i][3] <= 'z') ||
                (mass2[i][3]>= 'а' && mass2[i][3] <='я') || (mass2[i][3]>= 'А' && mass2[i][3] <= 'Я'))) {
            alert("Введена не буква в " + (i+1) + " элементе второго множества, ошибка!");
            error++;
        }
    }
    return error;
}



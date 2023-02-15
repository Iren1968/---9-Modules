- В первую очередь проверяем - установлен ли _Node.js_ и **npm**
- Инициализируем проект, набрав в Терминале _npm init_, должен получиться файл _package.json_
- Последовательно заполняем поля в файле _package.json_
- Поле _name_ - не используем имена содержащие js, node. Пишем название маленькими буквами
- Поле _autor, contributors_ - можно в одну строку указать «имя» и дополнительно «url» и «email»
- Поле _main_ - заполнится автоматически, если _main_ не определен, по умолчанию используется index.js
- Поле _*repository*_ - либо создаем на GitHub новый репозиторий, либо автоматом заполнится, если делаем проект в существующем репозитории
- Поле scripts - указываем _"test": "jest --coverage"_
- После заполнения всех полей запускаем при помощи **npm run build**
- Создаем файл для скрипта, типа .js
- Добавляем тестируемую функцию
- Создаем тестовый файл для проверки, должен называться _.test.js_ или _.spec.js_
- Тестируемую функцию нужно экспортировать из исходного файла. Делаем это с помощью _module.exports_, после чего ммпортируем в тесты _const sum = require("./sum");_
- Описываем тестируемую функцию с помощью _describe_ и строим конструкцию () => { (пример _describe('Тестирование функции calculateBonus', () => {_)
- далее задаем метод _it/test —_ (пример: _it('Расчет бонусов и суммы', () => {_)
- Далее заводим проверку с помощью _expect_ и _matchers_ (пример: _expect(calculateBonus(25, 25)).toBe(50);_ или _expect(calculateBonus(10, 25)).toEqual(50);_)
- Также можно делать сравнение _больше_ _меньше_ (пример: _ expect(calculateBonus(20, 40)).toBeGreaterThan(40);_ или _expect(calculateBonus(30, 25)).toBeLessThan(55);_), предварительно задав метод (_it('Проверка рассчета на значение больше и меньше', () => {_)
- После написания всех проверок, запускаем тест при помощи _npm run test_
- Получившиеся логи наблюдаем в **Терминале**

# Задание

С помощью React-компонентов заверстать интерфейс инвентаря для видеоигры. Инвентарь представляет собой сетку из клеток фиксированного размера (например 12х8). Предметы могут быть разных типов (зелья, снаряжение, оружие), разной редкости (обычные, редкие, эпические) и иметь разные размеры: 1х1, 1х2, 2х1, 3х1, 2х2. Тип и редкость предмета должны отображаться на нём цветом или иконкой. Загрузка инвентаря должна происходить из json-файла. Подготовьте несколько разных json-файлов для демонстрации разных компоновок инвентаря, а также проверку на валидность json-файла чтобы через файл нельзя было описать невозможное распложение элеметов (например, 10 элементов размером 2х2 в одной строке при общей длине инвентаря в 10 клеток).

# Описание результата:

1-3 инвентари с правильными данными и аранжировкой предметов в инвентаре. Последующие 4-10 вариантов демонстрируют валидацию при неправильно введенных данных.
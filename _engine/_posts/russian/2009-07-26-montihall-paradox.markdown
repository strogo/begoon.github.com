---
layout: post
title: "Парадокс Монти-Холла"
language: russian
date: 2009-07-26 00:00
comments: true
blogspot: http://easy-coding.blogspot.com/2009/07/blog-post_26.html
categories:
- russian
---
Есть такая интересная задача - парадокс Монти-Холла.

Суть ее в следующем. Представьте, вы играете в следующую игру: перед вами три ящика, и в одном из них приз. Два остальных пустые. Вам надо угадать ящик с призом. Вы делаете первую попытку и наугад выбираете один ящик из трех, но ящик пока не открывают. Вместо этого ведущий игры берет и открывает один из двух оставшихся ящиков, и тот оказывается пустым. После этого ведущий вам предлагает возможность изменить первоначальный выбор в свете новой информации о пустом ящике.

Естественно, ведущий точно заранее знает где приз и заведомо открывает пустой ящик. Итак, вы изначально выбрали ящик, но потом ведущий открыл один из оставшихся и выяснилось, что он пустой. Перед вами выбор: оставить свой изначальный выбор неизменным или изменить его, выбрав третий ящик (тот, что остался после вашего первого выбора и после открытия ведущим пустого ящика). При какой стратегии вероятность выигрыша выше?

Самое прямолинейное решение, приходящее в голову: смена ящика ничего особенно не даст. Вы выбрали один ящик из трех - вероятность выиграть 1/3. После открытия одного ящика ведущим их осталось два, поэтому вероятность угадать где приз 50/50. Выбор вы уже сделали, и он и так является одним из текущих вариантов. Выходит, что нет особого смысла менять выбор.

Но эта задачка тем и интересна, что при столь тривиальной постановке ее правильное решение не совсем очевидно, хотя с точки зрения теории вероятности тут все прозрачно - [теорему Байеса][Теорема Байеса] еще никто не отменял.

[Теорема Байеса]: http://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D0%BE%D1%80%D0%B5%D0%BC%D0%B0_%D0%91%D0%B0%D0%B9%D0%B5%D1%81%D0%B0

Правильный ответ - **да**, надо менять выбор, так как в этом случае вероятность угадать повышается с `1/3` до `2/3` (и даже не `1/2`).

В Википедии приведено [исчерпывающее объяснение][Парадокс Монти Холла].

[Парадокс Монти Холла]: http://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D1%80%D0%B0%D0%B4%D0%BE%D0%BA%D1%81_%D0%9C%D0%BE%D0%BD%D1%82%D0%B8_%D0%A5%D0%BE%D0%BB%D0%BB%D0%B0

Ну а чтобы уж окончательно развеять все сомнения, пришлось провести эксперимент.

`montihall.cpp`:

{% codeblock lang:cpp %}
#include <iostream>
#include <set>
#include <cstdlib>
#include <cassert>
#include <ctime>

int all_doors[] = { 1, 2, 3 };

bool no_change_strategy() {
  // doors - это множество доступных дверей (1, 2, 3) для выбора игроком.
  std::set<int> doors(all_doors, all_doors + 3);

  // Выбираем истинную дверь (от 1 до 3).
  int real_door = (std::rand() % 3) + 1;

  // Выбираем первый и окончательный выбор игрока (от 1 до 3).
  int primary_choice_door = (std::rand() % 3) + 1;

  return real_door == primary_choice_door;
}

bool change_strategy() {
  // doors - это множество доступных дверей (1, 2, 3) для выбора двери,
  // открываемой ведущим после первого выбора игрока.
  std::set<int> doors(all_doors, all_doors + 3);

  // Выбираем истинную дверь (от 1 до 3).
  int real_door = (std::rand() % 3) + 1;

  // Выбираем первый выбор игрока (от 1 до 3)
  int primary_choice_door = (std::rand() % 3) + 1;

  // Исключаем из множества дверей истинную дверь и выбор игрока.
  doors.erase(real_door);
  doors.erase(primary_choice_door);
  // На всякий пожарный проверим целостность данных.
  assert(doors.size() == 1 || doors.size() == 2);

  // Из оставшихся элементов (их может быть 1 или 2 штуки) выбираем дверь,
  // которую откроет ведущий. reveal_door равно либо 1, либо 2.
  int reveal_door = (std::rand() % doors.size()) + 1;

  // i указывает на первый элемент в множестве (всего в нем 1 или 2 элемента).
  std::set<int>::const_iterator i = doors.begin();
  // Сдвигаем итератор на элемент, номер которого равен reveal_door.
  // Можно было бы написать "if (reveal_door == 2) ++i;", но цикл как-то
  // универсальнее.
  while (--reveal_door) ++i;
  reveal_door = *i;

  // 'doors2' - это множество доступных дверей (1, 2, 3) для игрока,
  // меняющего свой первоначальный выбор.
  std::set<int> doors2(all_doors, all_doors + 3);

  // Исключаем из множества дверей первый выбор игрока и
  // и дверь, открытую ведущим.
  doors2.erase(primary_choice_door);
  doors2.erase(reveal_door);
  // На всякий пожарный проверим целостность данных.
  assert(doors2.size() == 1);

  // В множестве оставшихся дверей будет только одна дверь, так как истинная 
  // дверь точно не равна двери, открытой ведущим, во второй выбор игрока
  // точно отличается от первоначального. Поэтому просто берем из этого 
  // множества первый элемент.
  int second_choice = *doors2.begin();

  return real_door == second_choice;
}

int main() {
  std::srand(std::time(0));
  int guess_on_change = 0;
  int guess_on_not_change = 0;
  int N = 100000;
  for (int i = 0; i < N; ++i) {
    if (change_strategy())
      guess_on_change = guess_on_change + 1;
    if (no_change_strategy())
      guess_on_not_change = guess_on_not_change + 1;
  }
  std::cout << "Вероятность выиграть при смене изначального выбора: "
    << guess_on_change * 1.0 / N << std::endl;
  std::cout << "Вероятность выиграть не меняя изначального выбора: "
    << guess_on_not_change * 1.0 / N << std::endl;
  return 0;
}
{% endcodeblock %}

Компилируем и запускаем:

    cl /EHsc /D_NDEBUG montihall.cpp && montihall

Результат подтверждает теорию:

    Вероятность выиграть при смене изначального выбора: 0.67005
    Вероятность выиграть не меняя изначального выбора: 0.33347

Лично я провел замечательные несколько часов, вспоминая всю эту тему условных вероятностей. А вы?

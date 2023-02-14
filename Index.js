const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b; //в текущий момент переменным bonus и sum не имеют присвоеного значения

  sum > 50 ? (bonus = 50) : (bonus = sum); //переменной sum присвоено значение 40

  return bonus; //возвращается значение переменной bonus, в данном случае бонус равен сумме a и b
};
calculateBonus(25, 15);

const calculateBonus = require('./Index');
describe('Тестирование функции calculateBonus', () => {
  it('Расчет бонусов и суммы', () => {
    expect(calculateBonus(25, 25)).toBe(50);
    expect(calculateBonus(10, 25)).toEqual(50);
  });
  it('Проверка рассчета на значение больше и меньше', () => {
    expect(calculateBonus(20, 40)).toBeGreaterThan(40);
    expect(calculateBonus(30, 25)).toBeLessThan(55);
  });
});

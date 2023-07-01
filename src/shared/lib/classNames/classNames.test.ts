import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('test', () => {
    expect(classNames('someclass')).toBe('someclass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered clicked';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        clicked: true,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass class1 class2 hovered clicked';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        scrollable: false,
        clicked: true,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });
  test('with mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        clicked: undefined,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });
});

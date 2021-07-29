import { Test } from "../src/test";

describe('설명을 위한 샘플 테스트 입니다', () => {
  let test: Test;

  describe('Test 개체를 테스트 합니다', () => {
    describe('모든 값이 잘 입력되어야 합니다', () => {
      describe('정상적인 값을 넣습니다', () => {
        beforeEach(() => {
          test = new Test('테스트', true);
        });

        it('"test1" 의 값은 "테스트" 입니다', () => {
          expect(test['test1']).toBe('테스트');
        });

        it('"test2" 의 값은 "true"', () => {
          expect(test['test2']).toBeTruthy;
        });
      });
    });
  });
});

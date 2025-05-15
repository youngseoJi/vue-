//테스트 유틸 라이브러리
import { shallowMount } from '@vue/test-utils';
// 컴포넌트 로딩
import SignupForm from './SignupForm.vue';

// describe('테스트할 컴포넌트 명', () => {
//   test('테스트 할 동작 및 기능', () => {});
//   // 내용정의
// });

describe('SignupForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메세지 출력하기', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });

    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });
  test('ID, PASSWORD, NICKNAME 입력되지 않으면 회원가입 버튼 비활성화 처리하기', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: '',
          password: '',
          nickname: '',
        };
      },
    });

    const btn = wrapper.find('.btn');
    expect(btn.element.disabled).toBeTruthy();
  });
  // test('ID가 이메일 형식이 아니면 경고 메세지 출력하기', () => {});
});

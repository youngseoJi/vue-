import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

// describe : 연관된 테스트 케이스를 그룹화하는 API - 일반 적으로 컴포넌트 단위 그룹화
describe('LoginForm.vue', () => {
  //test : 단일 테스트 케이스를 검증하는 API
  test('ID가 이메일 형식이 아니면 경고 메세지 출력하기 ', () => {
    // new Vue() : Vue 인스턴스를 생성하는 API/ mount() : 생성한 인스턴스를 DOM에 마운트

    // wrapper : shallowMount()로 생성한 Vue 인스턴스
    // wrapper.find() : 인스턴스에서 특정 DOM을 찾는 API
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });

    // expect(결과) : 결과값을 검증하는 API
    // toBe(기대값) : 결과값과 기대값을 비교(===)

    // expect(instance.username).toBe('');
    // expect(wrapper.vm.username).toBe('');

    const warningText = wrapper.find('.warning');
    console.log('warningText', warningText.element);
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PASSWORD가 입력되지 않으면 로그인 버튼 비활성화', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const btn = wrapper.find('.btn');
    expect(btn.element.disabled).toBeTruthy();
  });
});

import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

// describe : 연관된 테스트 케이스를 그룹화하는 API
// 일반 적으로 컴포넌트 단위 그룹화
describe('LoginForm.vue', () => {
  //test : 단일 테스트 케이스를 검증하는 API
  test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
    // new Vue() : Vue 인스턴스를 생성하는 API/ mount() : 생성한 인스턴스를 DOM에 마운트

    // const instance = new Vue(LoginForm).$mount();
    const wrapper = shallowMount(LoginForm);

    // expect(결과) : 결과값을 검증하는 API
    // toBe(기대값) : 결과값과 기대값을 비교(===)

    // expect(instance.username).toBe('');
    expect(wrapper.vm.username).toBe('');
  });
});

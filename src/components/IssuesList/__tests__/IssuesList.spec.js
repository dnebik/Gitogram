import IssuesList from '@/components/IssuesList';
import { shallowMount } from '@vue/test-utils';

describe('IssuesList', () => {
  const list = [
    {
      id: 1,
      user: { login: 'test1' },
      title: 'text1',
    },
    {
      id: 2,
      user: { login: 'test2' },
      title: 'text2',
    },
  ];

  const wrapper = shallowMount(IssuesList, {
    props: { list },
  });

  it('all items showed', async () => {
    const itemsList = wrapper.findAll('.issues-list__issue');
    expect(itemsList.length).toBe(list.length);
    expect(itemsList[0].find('.issues-list__issue__username').text()).toBe(list[0].user.login);
    expect(itemsList[0].find('.issues-list__issue__text').text()).toBe(list[0].title);
    expect(itemsList[1].find('.issues-list__issue__username').text()).toBe(list[1].user.login);
    expect(itemsList[1].find('.issues-list__issue__text').text()).toBe(list[1].title);
  });

  it('unfolds', async () => {
    await wrapper.setData({ isShown: false });
    const text = await wrapper.find('.issues-list__text');
    expect(text.text()).toBe(wrapper.vm.text.viewed);
    await wrapper.find('.issues-list__toggle-button').trigger('click');
    expect(text.text()).toBe(wrapper.vm.text.hidden);
    expect(wrapper.vm.isShown).toBe(true);
  });
});

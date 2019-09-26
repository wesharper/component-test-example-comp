import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("displays the correct data in the header", () => {
    const wrapper = shallowMount(Counter);
    const header = wrapper.find("h1");
    expect(header.text()).toBe("0");
  });

  describe("increment button is clicked", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallowMount(Counter);
      const button = wrapper.find("#increment-button");
      button.trigger("click");
    });

    it("updates the component's data", () => {
      expect(wrapper.vm.count).toBe(1);
    });

    it("updates the header text", () => {
      const header = wrapper.find("h1");
      expect(header.text()).toBe("1");
    });
  });
  describe("reset button", () => {});
});

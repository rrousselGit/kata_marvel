import HelloWorld from "@/components/Page.vue";
import { shallowMount } from "@vue/test-utils";

describe("Page.vue", () => {
  it("renders", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      slots: { default: "fake" },
    });
    expect(wrapper.element.className).toBe("view");
    expect(wrapper.text()).toMatch("fake");
  });
});

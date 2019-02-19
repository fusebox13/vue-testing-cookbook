import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import Vue from 'vue';
import ElButtonExample from "@/components/element/ElButtonExample.vue";
import ElementUI, {ElButton} from "element-ui";

Vue.use(ElementUI);
describe("ElButtonExample", () => {
  let subject;

  async function mountComponent() {
    subject = mount(ElButtonExample, {});
    await Vue.nextTick();
  }

  context("Button Actions", () => {
    let button, badge;
    beforeEach(async () => {
      await mountComponent();
      button = subject.find("[data-qa=button]");
      badge = subject.find(".el-badge__content");
    });

    after(() => {
      //Cleanup
      button, badge = null;
    });

    it("should not increment if not clicked", async () => {
      expect(badge.text()).to.equal('0');
    });

    it("should increment if clicked via trigger", async () => {
      button.trigger('click');
      expect(badge.text()).to.equal('1');
    });

    it("should increment if clicked via emit", async () => {
      button.vm.$emit('click');
      expect(badge.text()).to.equal('1');
    });


  });
});

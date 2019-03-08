import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VuExample from "@/components/vuex/VuExample.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("VuExample", () => {
  let state = {
    example: "Example State"
  };
  let store;

  async function mountComponent() {
    store = new Vuex.Store({
      modules: {
        Example: {
          namespaced: true,
          state
        }
      }
    });

    let subject = shallowMount(VuExample, {
      store,
      localVue
    });
    await localVue.nextTick();
    return subject;
  }

  context("When mounted", () => {
    let subject;
    beforeEach(async () => {
      subject = await mountComponent();
    });

    it("should read state from Vuex", () => {
      expect(subject.find("[data-qa=state]").text()).to.equal(state.example);
    });
  });
});

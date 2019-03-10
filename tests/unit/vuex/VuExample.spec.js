import { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VuExample from "@/components/vuex/VuExample.vue";
import sinon from "sinon";
import { actions, mutations } from "@/modules/vuex/Example";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("VuExample", () => {
  let state = {
    example: "Example State",
    randomDogUrl: ""

  };
  let store;

  let stubDogService = {
    getRandomDog: sinon.stub()
  };

  async function mountComponent() {
    store = new Vuex.Store({
      modules: {
        Example: {
          namespaced: true,
          state,
          mutations,
          actions
        }
      }
    });

    let subject = shallowMount(VuExample, {
      provide: {
        DogService: stubDogService
      },
      store,
      localVue
    });
    await localVue.nextTick();
    return subject;
  }

  context("When mounted with a successful service call", () => {
    let subject;
    beforeEach(async () => {
      stubDogService.getRandomDog.resolves({
        json: () => {
          return { url: "http://www.google.com" };
        },
        status: 200
      });
      subject = await mountComponent();
    });

    it("should read state from Vuex", () => {
      expect(subject.find("[data-qa=state]").text()).to.equal(state.example);
    });

    it("should display the dog url provided by the DogService", () => {
      expect(subject.find("[data-qa=dog-url]").text()).to.equal( "http://www.google.com");
    });
  });

  context("When mounted with and unsuccessful service call", () => {
    let subject;

    beforeEach(async () => {
      stubDogService.getRandomDog.rejects({
        status: 500
      });
      subject = await mountComponent();
    });

    it("should display the dog url provided by the DogService", () => {
      expect(subject.find("[data-qa=dog-url]").text()).to.equal( "Not Found");
    });
  });
});

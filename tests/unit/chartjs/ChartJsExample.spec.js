import chai from "chai";
import { mount } from "@vue/test-utils";
import Vue from "vue";
import ChartJsExample from "@/components/chartjs/ChartJsExample";
import sinon from "sinon";
import sinonChai from "sinon-chai";
let expect = chai.expect;
chai.use(sinonChai);

describe("ChartJsExample", () => {
  let subject;

  let Chart = sinon.stub();

  async function mountComponent(){
    let subject = mount(ChartJsExample, {
      provide: {
        Chart
      }
    });
    await Vue.nextTick();
    return subject;
  }

  beforeEach(async () => {
    subject = await mountComponent();
  }) 

  it('should render a chart when mounted', () => {
    expect(Chart).to.have.been.called;
  });

});

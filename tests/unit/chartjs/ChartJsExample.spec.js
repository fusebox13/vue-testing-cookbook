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
  let sandbox = sinon.createSandbox();

  let Chart = sandbox.stub();
  Chart.prototype.destroy = sandbox.stub();

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
  });

  afterEach(() => {
    sandbox.reset();
  })

  it('should render a chart when mounted', () => {
    expect(Chart).to.have.been.called;
    expect(Chart.prototype.destroy).to.have.been.called;
  });

});

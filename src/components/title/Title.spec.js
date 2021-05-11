import Title from "./Title";
import { mount } from "enzyme";

describe("Title behaviour", () => {
  it("should contain an 'h1' tag", () => {
    const text = "This is a title";
    const wrapper = mount(<Title text={text} />);
    expect(wrapper.find("h1")).toBeTruthy();
  });
  it("should display the text from the text prop", () => {
    const text = "This is a title";
    const wrapper = mount(<Title text={text} />);
    expect(wrapper.find("h1").text()).toEqual(text);
  });
  it("should not render when the text prop is null", () => {
    const text = null;
    const wrapper = mount(<Title text={text} />);
    expect(wrapper.find("h1").length).toEqual(0);
  });
});

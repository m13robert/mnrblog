import { mount } from "enzyme";
import Paragraph from "./Paragraph";

describe("Paragraph behaviour", () => {
  it("should render with p tag", () => {
    const text = "some text";
    const wrapper = mount(<Paragraph text={text} />);
    expect(wrapper.find("p").length).toEqual(1);
  });
  it("should not render when text prop is falsy", () => {
    const text = null;
    const wrapper = mount(<Paragraph text={text} />);
    expect(wrapper.find("p").length).toBeFalsy();
  });
  it("should render with the text prop", () => {
    const text = "Some text";
    const wrapper = mount(<Paragraph text={text} />);
    expect(wrapper.find("p").text()).toEqual(text);
  });
});

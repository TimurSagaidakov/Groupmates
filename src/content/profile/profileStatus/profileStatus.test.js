import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusContainer from "./profileStatusContainer";

describe("ProfileStatus component", () => {
  test("Статус юзера должен быть в БД", () => {
    const component = create(<ProfileStatusContainer userStatus='it-kamasutra'/>);
    const instance = component.getInstance();
    expect(instance.state.userStatus).toBe("it-kamasutra");
  });
  test("После создания спана, он должен отображаться", () => {
    const component = create(<ProfileStatusContainer />);
    const instance = component.getInstance();
    let span = instance.findByType('span');
    expect(span.length).toBe("1");
  });
});
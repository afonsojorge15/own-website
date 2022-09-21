import React, { ReactElement } from "react";
import { render, fireEvent, screen, getByText } from "./test-utils";
import NavBar from "../../components/NavBar";

import CustomLink, { CustomLinkData } from "../../components/CustomLink";
import { LaunchRounded } from "@mui/icons-material";
import userEvent from "@testing-library/user-event";

let expectedProps: CustomLinkData = {
  title: "Walk4Money",
  reference: "https://walk4money.app",
  icon: LaunchRounded,
};

const renderComponent = (props = {}) => {
  return {
    ...render(<CustomLink {...expectedProps} {...props} />),
    props: {
      ...expectedProps,
      ...props,
    },
  };
};

test("shows correct title", () => {
  renderComponent();
  expect(screen.getByText(expectedProps.title)).toBeInTheDocument();
});

describe("fires callback on link click", () => {
  test("Checks if href is correct and an attribute of link", () => {
    renderComponent();
    const linkButton = screen.getByRole("link", {
      name: expectedProps.title,
    });
    fireEvent.click(linkButton);

    //    userEvent.click(screen.getByRole("link", { name: expectedProps.title }));
    expect(linkButton).toHaveAttribute("href", expectedProps.reference);
  });
});

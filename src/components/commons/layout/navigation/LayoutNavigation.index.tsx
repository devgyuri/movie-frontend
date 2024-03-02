import { Fragment } from "react";
import {
  HomeLogo,
  MenuItem,
  MenuWrapper,
  SelectedMenuItem,
  Wrapper,
} from "./LayoutNavigation.styles";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { ILayoutNavegationProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS = [
  { name: "box office", page: "/boxOffice" },
  { name: "category", page: "/category" },
  { name: "my page", page: "/myPage" },
];

export default function LayoutNavigation(
  props: ILayoutNavegationProps,
): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Wrapper>
      <HomeLogo>M.Box</HomeLogo>
      <MenuWrapper>
        {NAVIGATION_MENUS.map((el, idx) =>
          idx === props.menuIndex ? (
            <Fragment key={el.page}>
              <SelectedMenuItem onClick={onClickMoveToPage(el.page)}>
                {el.name}
              </SelectedMenuItem>
            </Fragment>
          ) : (
            <Fragment key={el.page}>
              <MenuItem onClick={onClickMoveToPage(el.page)}>
                {el.name}
              </MenuItem>
            </Fragment>
          ),
        )}
      </MenuWrapper>
    </Wrapper>
  );
}

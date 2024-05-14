// ----------------------------------------------------------------------

interface IHeader {
  H_MOBILE: number;
  H_DESKTOP: number;
  H_DESKTOP_OFFSET: number;
}

interface INav {
  WIDTH: number;
}

export const HEADER: IHeader = {
  H_MOBILE: 64,
  H_DESKTOP: 80,
  H_DESKTOP_OFFSET: 80 - 16,
};

export const NAV: INav = {
  WIDTH: 280,
};
